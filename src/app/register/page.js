"use client";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import LoadingPage from "@/components/loading-page";
import axios from "axios";
import styles from './Register.module.css'
import { Eye, EyeOff } from "lucide-react";
import toast from "react-hot-toast";
import { getAuth, } from "firebase/auth";
import { motion } from "framer-motion";


export default function Register() {
  const { authUser, loading, signInWithGoogle, signUpWithEmail, signOutUser } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: {
      day: "",
      month: "",
      year: ""
    }
  });

  const [isDisabled, setDisabled] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    async function check() {
      if (authUser) {
        const token = await authUser.getIdToken(true)
        try {
          const response = await axios.post('/api/register', {}, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
          if (response.data.success) {
            if (response.data.role == 'user')
              router.replace("/store");
            if (response.data.role == 'admin')
              router.replace("/admin");
          }
          return true
        } catch (e) {
          console.error(e)
          return false
        }
      }
    }
    check()
  }, [authUser, router]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("All fields are required!");
      setDisabled(false);
      return;
    }

    // Validate password
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      setDisabled(false);
      return;
    }

    const dobString = `${formData.dob.year}-${formData.dob.month}-${formData.dob.day}`;

    try {
      console.log("formdata", formData);

      
      const auth = getAuth();
      const userCredential = await signUpWithEmail(
        formData.email,
        formData.password
      );

      
      const token = await userCredential.user.getIdToken();

      
      const response = await axios.post(
        "/api/register",
        {
          name: formData.name,
          email: formData.email,
          dob: dobString, 
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      
      if (response.data.success) {
        toast.success("Registered successfully!");
        router.push("/login");
      } else {
        toast.error(response.data.message || "Registration failed");
      }

    } catch (err) {
      console.error(err);
      toast.error("Registration failed");
    } finally {
      setDisabled(false);
    }
  };



  if (loading) return <>loading</>;

  return (
    <>
      <div className={` bg-muted    p-6 md:p-10 ${styles.background} text-white`}>
        {/* <h1 className="race font-bold text-5xl text-grad">Register</h1> */}
        {/* <button onClick={() => signInWithGoogle()}>Sign in with Google</button> */}


        <div className="mt-18 flex flex-col items-center justify-center w-full p-1">
          <motion.div
            initial={{ opacity: 0, x: -140 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full w-full p-2">
            <h1 className=" font-bold text-7xl text-grad p-2 race">Register</h1>
          </motion.div>
          <form
            onSubmit={handleSubmit}
            // initial={{ opacity: 0, y: 40 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
            className=" h-full w-full flex flex-col items-center gap-16 justify-center px-10">
            <div className="flex items-end gap-16">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8">

                {/* name  */}
                <div className="flex flex-col gap-2 text-xl">
                  <label htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="p-2 border-2 rounded-lg text-white focus:outline-none focus:ring-0  focus:border-teal-600"
                    required
                  />
                </div>

                {/* email  */}
                <div className="flex flex-col gap-2 text-xl">
                  <label htmlFor="name">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="p-2 border-2 rounded-lg text-white focus:outline-none focus:ring-0 focus:border-teal-600"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2 text-xl w-full">
                  <label htmlFor="password">Password</label>

                  <div className="relative w-full">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      placeholder="Enter Your password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="p-2 pr-10 border-2 rounded-lg text-white w-full focus:outline-none focus:ring-0  focus:border-teal-600"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>


              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8 ">
                {/* DOB split into 3 inputs */}
                <div className="flex flex-col gap-2 text-xl">
                  <label htmlFor="dob">Date of Birth</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      name="day"
                      placeholder="DD"
                      maxLength={2}
                      value={formData.dob.day}
                      onChange={(e) => setFormData({
                        ...formData,
                        dob: { ...formData.dob, day: e.target.value }
                      })}
                      required
                      className="w-24 p-2 border-2 rounded-lg text-white bg-transparent focus:outline-none focus:ring-0  focus:border-teal-600"
                    />
                    <input
                      type="text"
                      name="month"
                      placeholder="MM"
                      maxLength={2}
                      value={formData.dob.month}
                      onChange={(e) => setFormData({
                        ...formData,
                        dob: { ...formData.dob, month: e.target.value }
                      })}
                      required
                      className="w-24 p-2 border-2 rounded-lg text-white bg-transparent focus:outline-none focus:ring-0  focus:border-teal-600"
                    />
                    <input
                      type="text"
                      name="year"
                      placeholder="YYYY"
                      maxLength={4}
                      value={formData.dob.year}
                      onChange={(e) => setFormData({
                        ...formData,
                        dob: { ...formData.dob, year: e.target.value }
                      })}
                      required
                      className="w-24 p-2 border-2 rounded-lg text-white bg-transparent focus:outline-none focus:ring-0  focus:border-teal-600"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-xl w-full">
                  <label htmlFor="confirmPassword">Confirm Password</label>

                  <div className="relative w-full">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({ ...formData, confirmPassword: e.target.value })
                      }
                      required
                      className=" focus:border-teal-600 p-2 pr-10 border-2 rounded-lg text-white w-full text-xl bg-transparent focus:outline-none focus:ring-0 "
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>


              </motion.div>
            </div>

            {/* Register button  */}
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${styles["btn"]} ${isDisabled ? "opacity-50" : ""}`}
              type="submit"
              disabled={isDisabled}
            >
              {isDisabled ? "Registering..." : "Register"}
            </motion.button>


          </form>
        </div>
      </div>
    </>
  );
}
