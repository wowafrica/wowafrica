import React           from 'react';
import ReactDOMServer  from 'react-dom/server';
import fs              from 'fs';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import {fetchActivities, showActivity} from '../src/actions/ActivityAction';
import wowReducer       from '../src/reducers/index';
import Provider         from '../src/utility/Provider';
import ViewActivityPage from '../src/pages/ViewActivityPage';
import devTemplate      from './dev/html.template';
import prodTemplate     from './prod/html.template';

let genTemplate = devTemplate;

if (process.env.NODE_ENV === 'production') {
  genTemplate = prodTemplate;
}

const generatePage = (store, activity) => new Promise((resolve, reject) => {
  let {id, title, image, brief} = activity;
  store.dispatch(showActivity(id));

  let html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <ViewActivityPage pageUrl={'/activities/'+id}/>
    </Provider>
  );

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
      reject(error);
    }
    console.log(`activity ${id} done`);
    resolve(id);
  });
});

export default function() {

  fs.stat('./_public/activities', (err, stats) => {
    if (err || !stats.isDirectory()) {
      fs.mkdirSync('./_public/activities');
    }
  });

  const store = createStore(
    wowReducer,
    applyMiddleware(
      thunkMiddleware
  ));

  store.dispatch(
    fetchActivities()
  )
  .then(() => {
    let {items, oldItems} = store.getState().activities;

    Promise.all([
      ...items.map(activity => generatePage(store, activity)),
      ...oldItems.map(activity => generatePage(store, activity))
    ]).then(
      ids => console.log(`activities all done: ${ids}`),
      error => console.log(`Some error occur ${error}`)
    );
  });
};
