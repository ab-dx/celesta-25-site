"use client";
import { useAuth } from "@/context/AuthUserContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
//import LoadingPage from "@/components/loading-page";
import axios from "axios";
import styles from './Register.module.css'

export default function LogIn() {
  const { authUser, loading, signInWithGoogle, signInWithEmail, signOutUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
    async function check() {
      if (authUser) {

        const token = await authUser.getIdToken(true)
        try {
          const response = await axios.post('/api/login', {}, {
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

  if (loading) return <>loading</>;

  return (
    <>
      <div className={`bg-muted flex min-h-svh gap-8 items-center justify-center p-6 md:p-10 ${styles.background} text-white`}>
        <h1 className="race font-bold text-5xl text-grad">Log in</h1>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
      </div>
    </>
  );
}
