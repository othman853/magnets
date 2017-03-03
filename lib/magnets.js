
const magnet = apply => input => cb => {
  const proceed = i => i < input.length;

  const next =
    (travel, output, i) => travel(i + 1, apply(input[i], cb, output));

  const travel = (i, output) => proceed(i) ? next(travel, output, i) : output;

  return travel(0, []);
};

const map =
  magnet((current, cb, mapped) => [...mapped, cb(current)]);

const filter =
  magnet(
    (current, cb, filtered) => cb(current) ? [...filtered, current] : filtered
  );

const each =
  magnet((current, cb) => cb(current));

const pipe =
  data =>
    (action, cb) =>
      (!action || !cb) ? data : pipe(action(data)(cb));

const from = data => pipe(data);

module.exports = { from, filter, map, each };
