import navigation from './navigation';
import render from './render';
import css from './css/style.css';

const urlList = new Map();

urlList.set('1', 'bbc-news');
urlList.set('2', 'cnn');
urlList.set('3', 'rt');

export const currentUrl = {name: urlList.get('1')};

document.querySelector("ul").innerHTML = navigation(urlList);
render();

const getNews = e => {
  const val = e.target.getAttribute('value');
  currentUrl.name = val ? urlList.get(val) : urlList.get('1');
  render();
};

const nav = document.getElementsByClassName("navigation");
for (var i = 0;i<nav.length;i++) {
  nav[i].addEventListener('click', event => getNews(event));
}
