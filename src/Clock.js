var Clock = function() {
  var getNowDate = function() {
    return new Date();
  };

  var getTime = function() {
    return getNowDate().getTime();
  };

  return {
    getNowDate: getNowDate,
    getTime: getTime
  };
};

module.exports = Clock;
