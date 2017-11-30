const navigation = urlList => {
  const result = [];
  const logMapElements = (value, key, map) => {
    result.push(`
      <li>
      <a class="navigation" href="#" value="${key}" >${value}</a>
    </li>`);
  };
  urlList.forEach(logMapElements);
  return result.join(' ');
};

export default navigation;
