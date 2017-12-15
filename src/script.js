import navigation from './navigation';
import createStore from './store';
import reducer from './reducer';
import loger, { logerInit } from './loger';
import render, { renderInit } from './render';
import { UPDATE_LINK } from './const';
import css from './css/style.css';

const urlList = new Map();

urlList.set('1', 'bbc-news');
urlList.set('2', 'cnn');
urlList.set('3', 'rt');

document.querySelector("ul").innerHTML = navigation(urlList);

const getNews = e => {
  const val = e.target.getAttribute('value');
  store.dispatch({
    type: UPDATE_LINK,
    link: urlList.get(val),
  });
};

const nav = document.getElementsByClassName("navigation");
for (var i = 0;i<nav.length;i++) {
  nav[i].addEventListener('click', event => getNews(event));
}

const store = createStore(reducer);

let myStore = null;
if (myStore === null) {
  myStore = store;
  logerInit(store);
  renderInit(store);
}
store.subscribe(loger);
store.subscribe(render);

store.dispatch({
  type: UPDATE_LINK,
  link: urlList.get('1'),
});
