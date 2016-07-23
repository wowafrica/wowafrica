import React      from 'react';
import classnames from 'classnames';
import styles     from './index.css';

let ActivityCard = ({id, image, title, date, time, area, location, brief, onCardClick}) => (
  <a className={`card ${styles.card}`}
     href={`/activities/${id}`}
     onClick={onCardClick}>
    <div className={styles.cardImg}
         style={{backgroundImage: `url(${image})`}}/>
    <div className="content">
      <div className="header">
        {title}
      </div>
      <div className={styles.meta}>
        <i className="yellow marker icon"/>
        {area} {location}
      </div>
      <div className={styles.meta}>
        <i className="yellow wait icon"/>
        {date} {time}
      </div>
      <div className={styles.description}>
        {brief}
      </div>
    </div>
  </a>
);

let ActivityGrid = ({items}) => (
  <div className="ui container">
    <div className={styles.gridTitle}>
      活動訊息
    </div>
    <div className={styles.newOldBox}>
      <div className={styles.newOldTitle}>
        即將舉辦
      </div>
    </div>
    <div className="ui centered cards">
      {items.map((item) => (
        <ActivityCard
          id={item.id}
          title={item.title}
          image={item.image}
          date={item.date}
          time={item.time}
          area={item.area}
          location={item.location}
          brief={item.brief}
          ticketLink={item.ticketLink}
        />
      ))}
    </div>
  </div>
);

export default ActivityGrid;
