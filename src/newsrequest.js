import render from './render';

const newsRequest = () => {
  const element = document.querySelector("div");
  element.innerHTML = '';
  const button = document.createElement('button');
  button.innerHTML = 'Get news';
  element.appendChild(button);
  button.addEventListener('click', e => {
    System.import('./render')
      .then(module => {
        module.default();
      });
  });
};

export default newsRequest;
