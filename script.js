const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
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

const req = new Request(url);

fetch(req)
  .then( response => response.json() )
  .then(
    ({ articles }) => {
      document.querySelector("div").innerHTML = markup(articles);
    }
  )
  .catch(
    error => document.querySelector("div").innerHTML = `Some happens! ${error.message}`
  );
