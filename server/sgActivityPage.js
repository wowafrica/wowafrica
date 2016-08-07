import ReactDOMServer  from 'react-dom/server';
import fs              from 'fs';
import Tumblr          from 'tumblr.js';
import {TumblrActivityConfig} from '../src/configures/TumblrConfig';
import Provider        from '../src/utility/Provider';
import wowReducer      from '../src/reducers/index';
import {createStore, applyMiddleware} from 'redux';
import {fetchActivities, showActivity} from '../src/actions/ActivityAction';
import thunkMiddleware from 'redux-thunk';
import ViewActivityPage from '../src/pages/ViewActivityPage';
import devTemplate     from './dev/html.template';
import prodTemplate    from './prod/html.template';

let genTemplate = devTemplate;

if (process.env.NODE_ENV === 'production') {
  genTemplate = prodTemplate;
}

export default function() {
  let activities = [];
  let oldActivities = [];

  const client = Tumblr.createClient({
    consumer_key: TumblrActivityConfig.consumerKey // eslint-disable-line
  });

  const store = createStore(
    wowReducer,
    applyMiddleware(
      thunkMiddleware
  ));

  const generatePage = (activity) => {
    console.log('activity '+ activity.id);
    let {id, title, image, brief} = activity;
    console.log('1111');
    store.dispatch(showActivity(id));
    console.log('2222');
    let html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <ViewActivityPage pageUrl={'/activities/'+id}/>
      </Provider>
    );
    console.log('html');
    console.log(html);
    let template = genTemplate({
      title: `${title} - wowAfrica阿非卡 - 華人圈最全方位的非洲資訊平台`,
      ogTitle: title,
      description: brief,
      image: image,
      url: `https://wowafrica.tw/activities/${id}`,
      keywords: '',
      html: html
    });
    fs.writeFile(`./_public/activities/${id}.html`, template, 'utf8', (error) => {
      if (error) {
        throw error;
      }
      console.log(`activity ${id} done`);
    });
  };

  const generatePages = (activities, offset) => {
    activities.slice(offset).forEach((activity) => {
      generatePage(activity);
    });
  };

  const checkGetActivities = () => {
    let {items, oldItems} = store.getState().activities;
    let generatedNum = activities.length;
    let generatedOldNum = oldActivities.length;

    if (items.length > activities.length || oldItems.length > oldActivities.length) {
      activities = items;
      oldActivities = oldItems;
      generatePages(activities, generatedNum);
      generatePages(oldActivities, generatedOldNum);
    }
  };
/*
  const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
    checkGetActivities();
  });
*/
  store.dispatch(fetchActivities())
  .then(() => {
    checkGetActivities();
  });

};
