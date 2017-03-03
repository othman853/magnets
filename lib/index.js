const magnet = (apply, initial = []) => input => cb => {
  const BEGIN_INDEX = 0;
  const proceed = i => i < input.length;

  const next =
    (travel, output, i) => travel(i + 1, apply(input[i], cb, output));

  const travel = (i, output) => proceed(i) ? next(travel, output, i) : output;

  return travel(BEGIN_INDEX, initial);
};

const map =
  magnet((current, cb, mapped) => [...mapped, cb(current)]);

const filter =
  magnet(
    (current, cb, filtered) => cb(current) ? [...filtered, current] : filtered
  );

const each =
  magnet((current, cb) => cb(current));

const reduce =
  initial => magnet(
    (current, cb, accumulator) => cb(accumulator, current), initial
  );

const pipe =
  data =>
    (magnet, cb) =>
      (!magnet)
      ? data
      : (magnet && !cb)
        ? magnet(data)
        : pipe(magnet(data)(cb));

const from = data => pipe(data);

const $ = from;

module.exports = { $, from, filter, map, reduce, each };
