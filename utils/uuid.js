const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

module.export = function() {
  return `${s4()}-${s4()}-${s4()}-${s4()}-${s4()}`;
};
