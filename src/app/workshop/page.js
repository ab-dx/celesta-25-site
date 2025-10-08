import WorkshopCard from './workshop-card'
import styles from './Workshops.module.css'
import data from './workshops.json'

export default function Workshop() {
  const workshops = data["workshops"]
  return (
    <div className={`bg-muted flex flex-col min-h-svh gap-8 justify-center p-4 md:p-10 ${styles.background} text-white w-full overflow-x-hidden`}>
      <h1 className="race font-bold text-5xl text-grad mt-[15vh] text-center md:text-left">Workshops</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
        {workshops.map((workshop, idx) => (
          <WorkshopCard 
            key={idx} 
            name={workshop.name} 
            img_src={workshop.img_src} 
            register_link={workshop.register_link} 
          />
        ))}
      </div>
    </div>
  )
}
