function fetch(url, cb) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        return cb(data);
      }
      return cb(xhr.responseText);
    }
    return ' ';
  };
  xhr.open('GET', url);
  xhr.send();
}
