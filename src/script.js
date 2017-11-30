const urlList = new Map();

urlList.set('1', 'bbc-news');
urlList.set('2', 'cnn');
urlList.set('3', 'rt');

const currentUrl = {name: urlList.get('1')};

const url = name => 'https://newsapi.org/v2/top-headlines?' +
          `sources=${name}&` +
          'apiKey=a17853ebbbad40ecadb0b6ca47fe356d';

const markup = articles => ( `
  ${articles.map(article => (
    `<article>
    <header>
    <h1><a href=${article.url} title=${article.title}>${article.title}</a></h1>
    <img src=${article.urlToImage} alt=${article.title} />
    <p>Published: <time>${new Date(article.publishedAt).toLocaleTimeString()}</time></p>
    </header>
    <p>${article.description}</p>
    </article>`)
  ).join(' ')}`
);

const render = () => {
  const reqUrl = url(currentUrl.name);

  return (
    fetch(reqUrl)
    .then( response => response.json() )
    .then(
      ({ articles }) => {
        document.querySelector("div").innerHTML = markup(articles);
      }
    )
    .catch(
       error => document.querySelector("div").innerHTML = `Some happens! ${error.message}`
    )
  );
};

render();

window.getLink = e => {
  const val = e.target.getAttribute('value');
  currentUrl.name = val ? urlList.get(val) : urlList.get('1');
  render();
};
