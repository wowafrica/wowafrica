
import React from 'react';

import styles from './index.css';

let TitleSection = ({
  image, title
}) => {
  let largeImage = image ? image.replace(/_540.jpg/g, '_1280.jpg') : image;
  return (
    <div className={styles.titleImage}
         style={{backgroundImage: `url(${largeImage})`}}>
      <div className={styles.inner}>
        <div className={styles.innerTitle}>
          {title}
        </div>
      </div>
    </div>
  )
}

export default TitleSection;
