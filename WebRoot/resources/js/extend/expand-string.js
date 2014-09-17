/**
 * @author 孙宇
 * 
 * 增加formatString功能
 * 
 * 使用方法：$.formatString('字符串{0}字符串{1}字符串','第一个变量','第二个变量');
 * 
 * @returns 格式化后的字符串
 */
$.formatString = function(str) {
	for ( var i = 0; i < arguments.length - 1; i++) {
		str = str.replace("{" + i + "}", arguments[i + 1]);
	}
	return str;
};

$.subString = function(str,begin,length) {
	if(!str) return '';
	if(str.length <= length) return str;
	return str.substr(begin,length) + '...';
};


$.lt_Phone = function(phone) {
	var array=[130,131,132,155,156,186,185,145];
		if(phone.length<3){
			return false;
		}else{
			var stemp=phone.substring(0,3);
			for(var i=0;i<array.length;i++){
				if(array[i]==stemp){
					return true;
				}
			}
		}
	return false;
};