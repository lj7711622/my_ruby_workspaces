$(function(){
	$(".cpimp_upload").each(function(){
		var _this = this;
		var _thisId = $(this).attr("id");
		var _options = {};
		var options = $(this).attr("options");
		if(options){
			_options = eval("("+options+")");
		}
		_options.success = function(file, data, response){
			_thisId = _thisId + "-queue";
			var fileName = $(_this).attr("name");
			if(!fileName) fileName = file.name;
			if(fileName.indexOf(".")>0){
				fileName = fileName.split(".")[0];
			}
			$("#"+_thisId).append("<input type='hidden' name='fileUrl' value='"+data+"'/>");
			$("#"+_thisId).append("<input type='hidden' name='fileName' value='"+fileName+"'/>");
			$("#"+_thisId).append("<input type='hidden' name='fileType' value='"+file.type+"'/>");
			$("#"+file.id).find("div.cancel>a").attr("href","javascript:onCancelFunction('"+file.id+"');");
		}
		initUploadify(_options,this);
	});
});
function initUploadify(options,obj){
	var uploadifyPath = $.ctx+"\/resources\/uploadify\/";
	options = initOptions(options);
	if(!obj){
		 obj = $("#"+options.id);
	}
	$(obj).uploadify({
		'uploader': $.ctx +'\/ajax\/sysfile\/upload',//上传后台服务处理
		 'swf':uploadifyPath+'uploadify.swf',
		 'formData': options.data,
		'cancelImg': uploadifyPath+'css\/cancel.png',//单个取消上传的图片
		'script': uploadifyPath+'uploadify.php',//实现上传的程序
		'folder': uploadifyPath+'uploads',//服务端的上传目录
		'auto': options.auto,//自动上传
		 'removeCompleted':false,//是否删除容器内已完成的
		'multi': options.multi,//是否多文件上传
		'checkScript': options.checkScript,//验证 ，服务端的
		'displayData': 'speed',//进度条的显示方式
		'fileDesc': options.fileDesc,//对话框的文件类型描述
		'fileExt': options.fileExt,//可上传的文件类型
		'sizeLimit': options.sizeLimit ,//限制上传文件的大小
		'simUploadLimit' :options.simUploadLimit, //并发上传数据
		'queueSizeLimit' :options.queueSizeLimit, //可上传的文件个数
		'buttonText' :'文件上传',//通过文字替换钮扣上的文字
		'buttonImg': uploadifyPath+'images\/browseBtn.png',//替换上传钮扣
		'width': options.width,//buttonImg的大小
		'height': options.height,//
		'rollover': options.rollover,//button是否变换
		 'onUploadSuccess' : options.success,
		"onComplete": options.completeCallback,
		 "onClearQueue":onClearQueue,
		"onError": options.errorCallback
	});
}
var onLoadSuccessFunction = function(file, data, response){
	
}
varcompleteFunction = function(evt, queueID, fileObj, result, data){
	
}
var onCancelFunction = function(queueItemId){
	var _queue = $("#"+queueItemId).parent();
	var _uploadify = _queue.parent();
	alert($(_queue).attr("id"));
	$($(_uploadify).find(".uploadify")[0]).uploadifyCancel();
}
var onClearQueue = function(){
	
}
var errorFunction = function(errorObj){
	
}
function checkScript(){
	
}
function initOptions(options){
	var initOption = new Object();
	if(!options) options = new Object();
	initOption.id = options.id || "uploadify";
	initOption.multi = options.multi || false;
	initOption.auto = options.auto || true;
	initOption.fileDesc = options.fileDesc || "Image(*.jpg;*.png)";
	initOption.fileExt = options.fileExt || "*.jpg;*.png;";
	initOption.sizeLimit = options.sizeLimit || 10;
	initOption.uploadLimit = options.uploadLimit || 1;
	initOption.simUploadLimit = options.simUploadLimit || 1;
	initOption.queueSizeLimit = options.queueSizeLimit || 1;
	initOption.width = options.width || 80;
	initOption.height = options.height || 24;
	initOption.data = options.data || {};
	initOption.rollover = options.rollover || true;
	initOption.checkScript = options.checkScript || checkScript();
	initOption.completeCallback = options.completeCallback || completeFunction;
	initOption.errorCallback = options.errorCallback || errorFunction;
	initOption.success = options.success || onLoadSuccessFunction;
	return initOption;
}
