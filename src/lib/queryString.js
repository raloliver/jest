const keyValueToString = ([key, value]) => {
  // needs to be an object and not e array
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('We only accepted primitive arrays.');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

module.exports.parseQueryString = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );
