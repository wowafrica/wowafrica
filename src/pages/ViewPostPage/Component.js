
import React        from 'react';
import classnames   from 'classnames';
import IndexMenu    from '../../components/IndexMenu';
import CategoryMenu from '../../components/CategoryMenu';
import Footer       from '../../components/Footer';
import ShareButton  from '../../components/ShareButton';
import ReadMoreBlk  from '../../components/ReadMoreBlock';
import TitleSection from '../../components/TitleSection';

import {
  Segment, Image
} from 'react-semantify';

import styles from './index.css';

let ViewPostPage = ({
  post: {body, title, tags, image, date},
  author: {name, description, photoUrl},
  pageUrl,
  loader,
  onPostClick
}) => (
  <div>
    <div className="fixed-top-menu">
      <IndexMenu />
      <CategoryMenu />
    </div>
    <TitleSection image={image} title={title}/>
    <div className="ui stackable four column grid">
      <div className="one wide column"></div>
      <div className="ten wide column">
        <Segment className={classnames('very padded basic', styles.containerPost, styles.antiVeryPadded)}>
          <div className={classnames('ui inverted dimmer', {active: loader})}>
            <div className="ui text loader">Loading</div>
          </div>
          <div><em style={{color: 'rgba(0, 0, 0, 0.3)'}}>{date.substring(0, 10).replace(/-/g, '.')}</em></div>
          <br/>
          <div dangerouslySetInnerHTML={{__html: body}}></div>
          <br/>
          <div className="ui brown tag labels">
            {tags.map(tag =>
              <a key={tag}
                 className="ui tag label"
                 href={`/view_post_list/tag/${tag}`}
                 onClick={onPostClick}>
                {tag}
              </a>
            )}
          </div>
          <br/>
          <ShareButton pageUrl={pageUrl}/>
          <div style={{height: '10px'}}/>
          <ReadMoreBlk postId={pageUrl.substr(pageUrl.lastIndexOf('/')+1)}/>
        </Segment>
      </div>
      <div className="one wide column"></div>
      <div className={classnames('four wide column', styles.sectionPostAuthor)} style={{backgroundColor: '#305775'}}>
        <Segment className={classnames('center aligned basic', styles.containerPostAuthor)} style={{height: '100%', position: 'absolute'}}>
          <a href={'/view_post_list/author/'+name} onClick={onPostClick}>
            <Image className="small centered circular" src={photoUrl}/>
            <div>{name}</div>
          </a>
          <div style={{padding: '0 1rem', textAlign: 'left'}}>{description}</div>
        </Segment>
      </div>
    </div>
    <div id="footer-divider"/>
    <Footer/>
    <div id="page-bottom"/>
  </div>
);

export default ViewPostPage;
