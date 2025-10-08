import EventCard from './event-card';
import styles from './Events.module.css';
import data from './events.json';

export default function Store() {
  const events = data["events"];

  return (
    <div className={`bg-muted flex flex-col min-h-screen gap-8 items-start justify-center w-full overflow-x-hidden px-4 sm:px-6 md:px-10 ${styles.background} text-white`}>
      <h1 className="race font-bold text-4xl sm:text-5xl md:text-5xl text-grad mt-[15vh] text-left w-full">Events</h1>

      <div className="flex flex-wrap justify-center items-center gap-8 w-full">
        {events.map((event, idx) => (
          <EventCard
            key={idx}
            name={event.name}
            img_src={event.img_src}
            register_link={event.register_link}
          />
        ))}
      </div>
    </div>
  );
}
