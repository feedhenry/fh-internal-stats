fh-internal-stats
=================
Stats client for tracking internal timings in components

## Usage
  
  var stats = require('fh-internal-stats)({
    host : 'localhost', // statsd host
    port : '8145' // statsd port
  });
  
  var stat = stats.gauge("example");
  setTimeout(function(){
	// 1 second "example" timer
    stat.end();
  }, 1000);
