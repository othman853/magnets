const map = array => mapper => {
  const next = (current = 0, mapped = []) => {
    if (current < array.length) {
      return next(current + 1, [...mapped, mapper(array[current])]);
    }
    return mapped;
  };
  return next();
};

const filter = array => criteria => {
  const get = i => array[i];
  const next = (current = 0, filtered = []) => {
    if (current < array.length) {
      return next(
        current + 1,
        (criteria(get(current)) ? [...filtered, get(current)] : filtered)
      );
    }
    return filtered;
  };
  return next();
};

const each = array => callback => {

  const next = (current = 0) => {
    if (current < array.length) {
      callback(array[current]);
      return next(current + 1);
    }
  };

  return next();
};

const pipeline =
  data =>
    (action, cb) =>
      (!action && !cb) ? data : pipeline(action(data)(cb));

const from = data => pipeline(data);

module.exports = { from, filter, map, each };
