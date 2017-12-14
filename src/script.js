import navigation from './navigation';
import createStore from './store';
import reducer from './reducer';
import loger, { logerInit } from './loger';
import { UPDATE_LINK } from './const';
import css from './css/style.css';

const urlList = new Map();

urlList.set('1', 'bbc-news');
urlList.set('2', 'cnn');
urlList.set('3', 'rt');

export const store = createStore(reducer);

let myStore = null;
if (myStore === null) {
  myStore = store;
  logerInit(store);
}
store.subscribe(loger);

store.dispatch({
  type: UPDATE_LINK,
  link: urlList.get('1'),
});

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
