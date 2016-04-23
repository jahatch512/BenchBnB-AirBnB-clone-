var Dispatcher = require('../dispatcher/dispatcher');
var BenchConstants = require('../constants/bench_constants');
var ApiUtil = require('../util/apiUtil');

var ClientAction = {
  fetchBenches: function() {
    ApiUtil.fetchBenches();
  }
};

module.exports = ClientAction;
