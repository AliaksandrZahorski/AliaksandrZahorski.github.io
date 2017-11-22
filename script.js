const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=a17853ebbbad40ecadb0b6ca47fe356d';

const req = new Request(url);

fetch(req)
  .then(response => response.json())
  .then(({ articles }) => console.log(articles))
  .catch(error => console.log(error.message));
