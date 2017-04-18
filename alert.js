var jsonString = '													\
{																	\
  "root": {															\
    "design": {														\
      "options": [{"val": 1}, {"val": 2}, {"val": 3}]               \
    },																\
    "comments": [0, 1, 2],											\
    "data": {														\
      "inner": [{"array": [{"x": 35}]}, {"array": [{"y": 15}]}]     \
    }																\
  }																	\
}';

var json = JSON.parse(jsonString);
var reformed = fun(json, '');
console.log(reformed);

function fun (obj, str) {
	for (var key in obj) {
		switch (typeof(obj[key])) {
	    case 'object':
	    	fun (obj[key],str + '.' + key);
	       break;
	    default:
	    	var result = str + '.' + key + ':' + obj[key];
	    	console.log(result);
  		}

	}
};
