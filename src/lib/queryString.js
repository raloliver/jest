const keyValueToString = ([key, value]) => {
  // needs to be an object and not e array
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('We only accepted primitive arrays.');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj => {
  return Object.entries(obj).map(keyValueToString).join('&');
};
