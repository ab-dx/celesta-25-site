
import styles from './team.module.css'
import "@fortawesome/fontawesome-free/css/all.min.css";

import localFont from "next/font/local";

const airstrike = localFont({
  src: "../../../public/fonts/airstrike.ttf",
});

const poppins = localFont({
    src: "../../../public/fonts/Poppins-SemiBold.ttf"
})
const events = [
  {src : "/images/aayush.jpg" , alt:"1", names: "AAYUSH SHETH"},
  {src : "/images/sreyas.jpg",alt:"2", names: "SREYAS KOTHA"},
  {src : "/images/Atharva.jpg", alt:"3", names: "ATHARVA PRADEEP PAWAR",linkedin:"https://www.linkedin.com/in/atharva-pawar-a58b272b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",insta:"https://www.instagram.com/atharv.a_525?igsh=bzBwdzEwajVoeG12"},
]
const cnd = [
  {src : "/images/jyoti.jpg" , alt:"1",names:"",insta:"https://www.instagram.com/jyoti.s.207/",linkedin:"https://www.linkedin.com/in/jyoti-shikha2007/"},
  {src : "/images/rishit.jpg",alt:"2",names:"",insta:"",linkedin:""},
  {src : "/images/tanuj.jpg", alt:"3",names:"TANUJ",linkedin:"https://www.linkedin.com/in/pitta-tanuj-753188280",insta:"https://www.instagram.com/tanuj_l8/"},
  {src : "/images/saurabh.jpg", alt:"4",names:"SAURABH SANKHLA",insta:"https://www.instagram.com/saurabhsankhla169/",linkedin:"http://linkedin.com/in/saurabhsankhla2005"},
  {src : "/images/lohitaksha.jpg", alt:"5",names:"",insta:"",linkedin:""}
];
const spons = [
 {src : "/images/Sanit.jpg" , alt:"1", names: "SANIT SINHA"},
  {src : "/images/Yatharth.jpg",alt:"2", names: "YATHARTH GUPTA"},
  {src : "/images/Shaurya.jpg", alt:"3", names: "SHAURYA",linkedin:"https://www.linkedin.com/shauryakmaurya/",insta:"https://www.instagram.com/_shaurya_km/"},
  {src : "/images/Bhumi.jpg", alt:"4", names:"BHUMI GARG"},
]
const rsp = [
  {src : "/images/ajay.jpg" , alt:"1", names: "AJAY KUMAR"},
  {src : "/images/raqeeb.jpg",alt:"2", names: "RAQEEB ANSARI",linkedin:"https://www.linkedin.com/in/raqeeb-ansari-330a86298/",insta:"https://www.instagram.com/raqeeb_ansari_58/"},
  {src : "/images/om.jpg", alt:"3", names: "OM RONTE",insta:"https://www.instagram.com/omronte1/",linkedin:"https://www.linkedin.com/in/om-ronte/"},
  {src : "/images/dhivyesh.jpg", alt:"4", names:"DHIVYESH R"},
];
const gle = [
  {src : "/images/debasish.jpg" , alt:"1", names: "DEBASISH VADDI",linkedin:"https://www.linkedin.com/in/devasish-vaddi-022452289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",insta:"https://www.instagram.com/devasish_vaddi?igsh=Znhkd2F2YXhlZGNw"},
  {src : "/images/ashish.webp",alt:"2", names: "ASHISH YADAV"},
  {src : "/images/aditya.jpg", alt:"3", names: "ADITYA SATPUTE",linkedin:"https://www.linkedin.com/in/aditya-satpute-b46831291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",insta:"https://www.instagram.com/aditya_satpute42?igsh=MTQwY3l1Z2tuOGg5Yw=="},
]

const workshop = [
  {src : "/images/abhijat.jpg" , alt:"1", names: "ABHIJAT JHA",linkedin:"",insta:""},
  {src : "/images/nishant.jpg",alt:"2", names: "NISHANT",linkedin:"",insta:""},
]

const hospitality = [
  {src : "/images/kumari.jpeg" , alt:"1", names: "KUMARI NISHA",insta:"https://www.instagram.com/nairanisha02?igsh=bnJtb2ptajh3YnV0",linkedin:"https://www.linkedin.com/in/kumari-nisha-3209b02a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
  {src : "/images/vidhan.jpg",alt:"2", names: "VIDHAN BANSAL",insta:"https://www.instagram.com/vidhanbansal66/",linkedin:"https://www.linkedin.com/in/vidhan-bansal-9bb784290/"},
  {src : "/images/sparsh.jpeg", alt:"3", names: "SPARSH CHOUDHARY",insta:"",linkedin:"www.linkedin.com/in/ sparsh-choudhary-7604aa28a",insta:"https://www.instagram.com/sparsh.5_?igsh=MWc1bnp6b2k5cWFwbQ%3D%3D&utm_source=qr"}
]

const mpr = [
  {src : "/images/Avnitha.jpeg" , alt:"1", names: "AVNITHA",linkedin:"",insta:""},
  {src : "/images/singh.webp",alt:"2", names: "MAGANJOT SINGH",linkedin:"https://www.linkedin.com/in/maganjot-singh-aa80a5214",insta:"https://www.instagram.com/fw.magan?igsh=MXRwYnp1bnd4c2FpeA=="},
  {src : "/images/shaswat.jpg" , alt:"3", names: "SHASWAT SUMAN",linkedin:"https://www.linkedin.com/in/shaswat-suman-7041a82a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",insta:"https://www.instagram.com/suman.shaswat?igsh=MXM3aXkweGs1cm4zZw%3D%3D&utm_source=qr"},
  {src : "/images/deepesh.jpg",alt:"4", names: "DEEPESH KUMAR",linkedin:"",insta:""},
  {src : "/images/taksh.jpg",alt:"5", names: "TAKSH BHAWAN",linkedin:"",insta:""},
]

const flagship = [
  {src : "/images/nakshatra.jpg" , alt:"1", names: "NAKSHATRA KANCHAN",linkedin:"https://www.linkedin.com/in/nakshatra-kanchan",insta:"https://www.instagram.com/nakssshhhhh_?igsh=NTc4MTIwNjQ2YQ=="},
  {src : "/images/nishant.jpg",alt:"2", names: "SRIKANT SAHOO",linkedin:"",insta:""},
  {src : "/images/vyas.jpg" , alt:"3", names: "JAYINAKSHA VYAS",linkedin:"https://www.linkedin.com/in/jayinaksha-vyas-974051283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",insta:""},
  {src : "/images/ashutosh.jpg",alt:"4", names: "ASHUTOSH KANOJIA",linkedin:"",insta:""},
  {src : "/images/viraj.jpg",alt:"5", names: "VIRAJ KULKARNI",linkedin:"https://www.linkedin.com/in/viraj-kulkarni-097869312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",insta:"https://www.instagram.com/virajk._?igsh=OXQwbWQwNTh3eXhh&utm_source=qr"},
  {src : "/images/tushar.jpg",alt:"6", names: "TUSHAR SHRIVASTAV",linkedin:"https://www.linkedin.com/in/tushar-shrivastav-7333b9298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",insta:"https://www.instagram.com/kanha_shrivastav05?igsh=Z2M0dzhuaGI1dWFz"},
]
export default function TeamPage() {
  return (
    <main className="pt-15 pb-1">
      {/* Section 1: Main Team */}
      <section className={styles.backgroundSection}>
        <div className={styles.contentContainer}>
            <div className = {`${airstrike.className}`}>
                <h1 className={`${styles.metallicShine} text-[75px] font-bold text-left pl-20 pt-10 tracking-[10px]>TEAM</h1`}>TEAM</h1>     
            </div>
          <h1 className={`mt-4 ${poppins.className} text-center text-[40px]`}>FEST COORDINATORS</h1>

          <div className="grid grid-cols-2 gap-10 mt-10 max-w-4xl mx-auto px-6 place-items-center">
           <div className = {`${styles.imageHover}`}>
                <img
                src="/images/debasish.jpg"
                alt="Sponsor 1"
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>Abhitesh Shukla</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
            <div className = {`${styles.imageHover}`}>
                <img
                src="/images/debasish.jpg"
                alt="Sponsor 1"
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>Abhitesh Shukla</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          </div>
          <h1 className={`mt-18 ${poppins.className} text-center text-[40px]`}>COORDINATORS</h1>
        </div>
      </section>

      {/* Section 2: Sponsors */}
      <section className={styles.backgroundSection}>
        <div className={styles.contentContainer}>
          
          <div><h1 className='flex pl-10  text-[20px]'>WEB DEV</h1></div>
          
          
          <div className="grid grid-cols-2 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
            <div className = {`${styles.imageHover}`}>
                <img
                src="/images/Diptanshu.jpg"
                alt="Sponsor 1"
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>Abhitesh Shukla</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
            
            <div className = {`${styles.imageHover}`}>
                <img
                src="/images/debasish.jpg"
                alt="Sponsor 1"
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>Abhitesh Shukla</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          </div>

          <div><h1 className='flex pl-10  text-[20px]'>EVENTS</h1>
        <div className="grid grid-cols-3 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {events.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>
          
          
        </div>
      </section>

      {/* Section 3: Additional Team Members */}
      <section className={styles.backgroundSection}>
        <div className={styles.contentContainer}>
          <div><h1 className='flex pl-10  text-[20px]'>SPONS</h1>
        <div className="grid grid-cols-4 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {spons.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>
          
        </div>
        <div className={styles.contentContainer}>
          
          <div><h1 className='flex pl-10  text-[20px]'>MPR</h1></div>
          
          
          <div className="grid grid-cols-5 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
            {mpr.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>

                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
          </div>
        </div>
      </section>
      <section className={styles.backgroundSection}>
        {/* cnd team */}

        {/*RSP team */}
        <div><h1 className='flex pl-10  text-[20px]'>RSP</h1>
        <div className="grid grid-cols-4 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {rsp.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>

        {/* FLAGSHIP */}

        <div><h1 className='flex pl-10  text-[20px]'>flagship</h1>
        <div className="grid grid-cols-4 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {flagship.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>
      </section>

      <section className={styles.backgroundSection}>
      {/*GLE team */}
        <div><h1 className='flex pl-10  text-[20px]'>GLE</h1>
        <div className="grid grid-cols-3 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {gle.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>

        <div><h1 className='flex pl-10  text-[20px]'>WORKSHOP</h1>
        <div className="grid grid-cols-2 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {workshop.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>
                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>
      </section>
      <section className={styles.backgroundSection}>
        <div><h1 className='flex pl-10  text-[20px]'>HOSPITALITY</h1>
        <div className="grid grid-cols-3 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {hospitality.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>

                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>

                <div><h1 className='flex pl-10  text-[20px]'>CND</h1>
        <div className="grid grid-cols-5 gap-2 mt-[25px] max-w-6xl mx-auto px-6 place-items-center">
        {cnd.map((img,i) => {
          return(
            <div className = {`${styles.imageHover} relative group`} key = {img.alt}>
                <img
                src={img.src}
                alt={img.alt}
                className={`w-40 h-48 object-cover rounded-lg shadow-lg  ${styles.card}`}
                />
                <div className="absolute inset-0 z-10 flex items-center justify-center gap-3
                    bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={img.insta || "#"}
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-pink-500 hover:text-white transition"
                  >
                    <i className="fa-brands fa-instagram text-xl" />
                  </a>
                  <a
                    href={img.linkedin || "#"}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/80 rounded-full p-2 hover:bg-blue-600 hover:text-white transition"
                  >
                    <i className="fa-brands fa-linkedin-in text-xl" />
                  </a>
                </div>

                <div className={styles.cardStack}>
                  <p className={`${styles.cardname} `}>{img.names}</p>
                  <p className={`${styles.cardname2} border-b-[1px] `} ></p>
                </div> 
            </div>
          )
        })}
        </div>
        </div>
      </section>

    </main>
    
  );
}
