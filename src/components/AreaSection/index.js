
import React from 'react';

import styles from './index.css';

import {
  Accordion, Icon, List, Image
} from 'react-semantify';

const Area = ({area, onAreaMouseEnter, onAreaMouseLeave, onNationClick}) => (
  <div className="content">
    <List className="animated small link">
    {
      Object.keys(area).map((key) => {
        let {country, flag} = area[key];
        if (country) {
          flag = flag === '' ? 'Kenya_flag.png': flag;
          return (
            <div className="item" data-nation={key}
              key={key}
              onMouseEnter={onAreaMouseEnter}
              onMouseLeave={onAreaMouseLeave}>
              <Image className="avatar" src={`/images/nations/${flag}`} />
              <div className="content">
                <a className="header" data-nation={key} onClick={onNationClick}>
                  {country}
                </a>
              </div>
            </div>
          );
        }
      })
    }
    </List>
  </div>
);

const AreaSection = ({
  area, onAreaMouseEnter, onAreaMouseLeave, onNationClick, onAreaClick
}) => (
  <Accordion className={styles.contentArea} init={true}>
    <div className="title" onClick={() => onAreaClick('CentralAfrica')}>
      <Icon className="dropdown"/>中非
    </div>
    <Area area={area.CentralAfrica}
          onAreaMouseEnter={onAreaMouseEnter}
          onAreaMouseLeave={onAreaMouseLeave}
          onNationClick={onNationClick}/>
    <div className="title" onClick={() => onAreaClick('EastAfrica')}>
      <Icon className="dropdown"/>東非
    </div>
    <Area area={area.EastAfrica}
          onAreaMouseEnter={onAreaMouseEnter}
          onAreaMouseLeave={onAreaMouseLeave}
          onNationClick={onNationClick}/>
    <div className="title" onClick={() => onAreaClick('NorthAfrica')}>
      <Icon className="dropdown"/>北非
    </div>
    <Area area={area.NorthAfrica}
          onAreaMouseEnter={onAreaMouseEnter}
          onAreaMouseLeave={onAreaMouseLeave}
          onNationClick={onNationClick}/>
    <div className="title" onClick={() => onAreaClick('SouthernAfrica')}>
      <Icon className="dropdown"/>南非
    </div>
    <Area area={area.SouthernAfrica}
          onAreaMouseEnter={onAreaMouseEnter}
          onAreaMouseLeave={onAreaMouseLeave}
          onNationClick={onNationClick}/>
    <div className="title" onClick={() => onAreaClick('WestAfrica')}>
      <Icon className="dropdown"/>西非
    </div>
    <Area area={area.WestAfrica}
          onAreaMouseEnter={onAreaMouseEnter}
          onAreaMouseLeave={onAreaMouseLeave}
          onNationClick={onNationClick}/>
  </Accordion>
);

export default AreaSection;
