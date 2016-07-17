import React      from 'react';
import classnames from 'classnames';
import styles     from './index.css';

let ActivityCard = ({id, image, title, date, time, location, address, host, ticketLink, onCardClick}) => (
  <a className="card"
     href={`/activities/${id}`}
     onClick={onCardClick}>
    <div className={styles.CardImg}
         style={{backgroundImage: `url(${image})`}}/>
    <div className="content">
      <div className="header">
        {title}
      </div>
      <div className="meta">
        {date}
      </div>
    </div>
  </a>
);

let ActivityGrid = ({items}) => (
  <div className="ui container">
    <div className={styles.activityListTitle}>
      活動列表
    </div>
    <div className="ui centered cards">
      {items.map((item) => (
        <ActivityCard
          id={item.id}
          title={item.title}/>
      ))}
    </div>
  </div>    
);

export default ActivityGrid;
