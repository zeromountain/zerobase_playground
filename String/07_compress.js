const compress = str => {
  return str.replace(/(\D)\1*/g, s =>
    s.length === 1 ? s[0] : s[0] + s.length,
  );
};

module.exports = compress;
