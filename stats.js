var fhs = require("fh-statsc");

module.exports = function(config){
  config = config || {}; // allow undefined config
  var stats = fhs.FHStats({host: config.host, port: config.port, enabled: config.enabled});
  return {
    "gauge": function (id){
      var start = new Date().getTime();
      return {
        "record": function (){
          var end = new Date().getTime();
          var g = end - start;
          stats.gauge("fh-supercore-end-" + id, g);
        }
      }
    },

    "timer": function(id){
      var start = new Date().getTime();
      return {
        "end": function(){
          var end = new Date().getTime();
          var d = end - start;
          stats.timing('fh-supercore-timing-' + id, d);
        }
      }
    }
  }
};
