
import React      from 'react';
import classnames from 'classnames';
import d3         from 'd3';

import styles from './index.css';

function path(scale, rotate) {
  let width = 600;
  let height = 600;

  let projection = d3.geo.equirectangular()
    .scale(scale)
    .translate([width / 2, height / 2])
    .rotate(rotate);

  return d3.geo.path()
    .projection(projection);
}

const CONFIG_SCALE = {
  'origin': path(380, [-20, 0]),
  'CentralAfrica': path(1000, [-20, -5]),
  'EastAfrica': path(800, [-40, 0]),
  'NorthAfrica': path(600, [-13, -20]),
  'SouthernAfrica': path(1000, [-28, 20]),
  'WestAfrica': path(780, [4, -5])
};

const AreaMap = ({
  nations, type, focuseNation, onAreaMouseEnter, onAreaMouseLeave, onNationClick
}) => {

  let path = CONFIG_SCALE[type];

  return (
    <svg className={styles.mapAfrica} viewBox="0 0 550 600">
    {
      nations.map((d) => {
        return (
          <path className={classnames(styles.land, {[styles.focuse]: focuseNation === d.properties.ISO_A3})}
                d={path(d)}
                data-nation={d.properties.ISO_A3}
                onMouseEnter={onAreaMouseEnter}
                onMouseLeave={onAreaMouseLeave}
                onClick={onNationClick}>
          </path>
        );
      })
    }
    </svg>
  );
};

export default AreaMap;
