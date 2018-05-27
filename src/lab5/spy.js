const runCallback = (callback) => {
  const params = { foo: 'foo' };
  callback(params);
}

const runTwiceCallback = (callback) => {
  const params = { foo: 'foo' };
  callback(params);
  callback(params);
}

export {runCallback, runTwiceCallback};