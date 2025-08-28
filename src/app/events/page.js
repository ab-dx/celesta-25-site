import EventCard from './event-card'
import styles from './Events.module.css'
import data from './events.json'

export default function Store() {
  const events = data["events"]
  return <>
    <div className={`bg-muted flex flex-col min-h-svh gap-8 items-left justify-center p-2 md:p-10 ${styles.background} text-white`}>
      <h1 className="race font-bold text-5xl text-grad mt-[15vh]">Events</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-8">
        {events.map((event, idx) => <EventCard key={idx} name={event.name} img_src={event.img_src} register_link={event.register_link} />)}
      </div>
    </div>
  </>
}
