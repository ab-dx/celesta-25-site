import WorkshopCard from './workshop-card'
import styles from './Workshops.module.css'
import data from './workshops.json'

export default function Workshop() {
  const workshops = data["workshops"]
  return <>
    <div className={`bg-muted flex flex-col min-h-svh gap-8 items-left justify-center p-2 md:p-10 ${styles.background} text-white`}>
      <h1 className="race font-bold text-5xl text-grad mt-[15vh]">workshops</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8">
        {workshops.map((workshop, idx) => <WorkshopCard key={idx} name={workshop.name} img_src={workshop.img_src} register_link={workshop.register_link} />)}
      </div>
    </div>
  </>
}
