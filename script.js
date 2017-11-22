const url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=a17853ebbbad40ecadb0b6ca47fe356d';

const req = new Request(url);

const htmlToElement = html => {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstChild;
}

fetch(req)
  .then(
    response => response.json()
  )
  .then(
    ({ articles }) => {
      console.log(articles);
      document.querySelector("main").appendChild(htmlToElement(articles[1].author));
    }
  )
  .catch(
    error => console.log(error.message)
  );


document.main.appendChild(htmlToElement());
