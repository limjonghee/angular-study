
angular.module('customFilter', [])
.filter('unique', function(){
	return function(data, prop){
		if(angular.isArray(data) && angular.isString(prop)){
			var results=[]; 
			var keys={}; 
			for(var i=0; i<data.length;i++){
				var val = data[i][prop];
			
				
				if(angular.isUndefined(keys[val])){
					keys[val] = true;
					results.push(val);
				}
			}

			return results;
		}else{
			return data;
		}
	}
})
.filter('range', function($filter){
	return function(data, prop, size){
		if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
			var startIndex = (page - 1) * size; 
			if(data.length < startIndex){
				return[];
			}else{
				return $filter('limitTo')(data.splice(startIndex), size);
			}
		}else{
			return data;
			}
	}
})
.filter('pageCount', function(){
	return function (data, size){
		if(angular.isArray(data)){
			var result = [];
			for(var i=0; i<math.ceil(data.length / size);i++){
				result.push(i);
			}
			return result;
		}else{
			return data;
			}
	}
});