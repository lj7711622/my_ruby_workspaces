(function ($) {
		$.swfupload_ctx = $.ctx + "\/resources\/swfupload";
	    $.swfupload_settings = {
	   		//upload_url : "${ctx}/imageUpload.json",				//处理上传文件的服务器端url地址
	   		file_post_name : "imageFile",	//相当于用普通的文件域上传文件时的name属性，服务器端接收页面通过该名称来获取上传的文件
	   		post_params : {					//一个对象直接量，里面的键/值对会随着每一个文件一起上传，文件上传要附加一些信息时很有用
	   		},
	   		file_types : "*.jpg;*.jpeg;*.png",		//该属性指定了允许上传的文件类型，当有多个类型时使用分号隔开，比如：*.jpg;*.png ,允许所有类型时请使用 *.*
	   		file_types_description: "图片文件",		//指定在文件选取窗口中显示的文件类型描述，起一个提示和说明的作用吧
	   		file_size_limit : "1024KB",		//指定要上传的文件的最大体积，可以带单位，合法的单位有:B、KB、MB、GB，如果省略了单位，则默认为KB。该属性为0时，表示不限制文件的大小。
	   		button_placeholder_id : "btnPlaceholder",//指定一个dom元素的id,该dom元素在swfupload实例化后会被Flash按钮代替，这个dom元素相当于一个占位符
	   		file_upload_limit : 0,			//指定最多能上传多少个文件，当上传成功的文件数量达到了这个最大值后，就不能再上传文件了，也不能往上传队列里添加文件了。把该属性设为0时表示不限制文件的上传数量。
	   		file_queue_limit : 1,			//指定文件上传队列里最多能同时存放多少个文件。当超过了这个数目后只有当队列里有文件上传成功、上传出错或被取消上传后，等同数量的其他文件才可以被添加进来。当file_upload_limit的数值或者剩余的能上传的文件数量小于file_queue_limit时，则取那个更小的值
	   		//flash_url : "${swfuploadctx}/swfupload_fp10/swfupload.swf",//swfupload.swf文件的绝对或相对地址，相对地址是指相对于当前的页面地址。实例化swfupload后，就不能再改变该属性的值了。
	   		//flash9_url : "${swfuploadctx}/swfupload_fp9/swfupload_fp9.swf",//核心功能swf的地址,这个可以不要,用来支持flash9的.
	   		use_query_string : false,		//为false时,post_params属性定义的参数会以post方式上传；为true时，则会以get方式上传（即参数会以查询字符串的形式附加到url后面）
	   		// requeue_on_error : false,
	   		// http_success : [201, 202],
	   		// assume_success_timeout : 0,
	   		prevent_swf_caching : false,	//为true时会加一个随机数在swfupload.swf地址的后面，以阻止flash影片被缓存，这是为了防止某些版本的IE浏览器在读取缓存的falsh影片时出现的bug
	   		// preserve_relative_urls : false,
	   		//button_image_url : "${swfuploadctx}/Djsc_60x25.jpg",//指定Flash按钮的背景图片，相对地址或绝对地址都可以。该地址会受到preserve_relative_urls属性的影响，遵从与upload_url一样的规则。该背景图片必须是一个sprite图片,从上到下包含了Flash按钮的正常、鼠标悬停、按下、禁用这四种状态。因此该图片的高度应该是Flash按钮高度的四倍
	   		button_width : 60,				//指定Flash按钮的宽度
	   		button_height : 25,				//指定Flash按钮的高度，应该为button_image_url所指定的按钮背景图片高度的1/4
	   		//button_text : "<span class='redText'>请选择图片</span>",//指定Flash按钮上的文字，也可以是html代码
	   		//button_text_style : ".redText { color: #FF0000; }",//Flash按钮上的文字的样式
	   		//button_text_left_padding : 30,						//指定Flash按钮左边的内边距，可使用负值				
	   		//button_text_top_padding : 2,		//指定Flash按钮顶部的内边距，可使用负值
	   		button_action : SWFUpload.BUTTON_ACTION.SELECT_FILES,
	   		button_disabled : false,						//为true时Flash按钮将变为禁用状态，点击也不会触发任何行为
	   		button_cursor : SWFUpload.CURSOR.HAND,			//指定鼠标悬停在Flash按钮上时的光标样式，可用值为SWFUpload.CURSOR里定义的常量
	   		button_window_mode : SWFUpload.WINDOW_MODE.TRANSPARENT,//指定Flash按钮的WMODE属性，可用值为SWFUpload.WINDOW_MODE里定义的常量
	   		swfupload_preload_handler : function() {	//加载swfupload.swf之前触发
	   			if (!this.support.loading) {
	   				$.messager.alert('您需要安装Flash Player 9.028或以上版本才可以使用SwfUpload的上传功能!');
	   				return false;
	   			}
	   		},
	   		// swfupload_loaded_handler : swfupload_loaded_function,
	   		swfupload_load_failed_handler : function() {	//加载swfupload.swf失败时触发
	   			$.messager.alert("系统提示",'加载SwfUpload失败!');
	   		},
	   		// file_dialog_start_handler : file_dialog_start_function,//在文件选取窗口将要弹出时触发
	   		// file_queued_handler : file_queued_function,			//当一个文件被添加到上传队列时会触发此事件，提供的唯一参数为包含该文件信息的file object对象
	   		file_queue_error_handler : function(file, errorCode, message) { //当文件添加到上传队列失败时触发此事件，失败的原因可能是文件大小超过了你允许的数值、文件是空的或者文件队列已经满员了等。该事件提供了三个参数。第一个参数是当前出现问题的文件对象，第二个参数是具体的错误代码，可以参照SWFUpload.QUEUE_ERROR中定义的常量
	   			try{
	   				switch (errorCode) {
	   				case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
	   					$.messager.alert("系统提示",'选择上传的文件数量过多,请检查!');
	   					return;
	   				case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
	   					$.messager.alert("系统提示",'选择上传的文件不能为空文件,请检查!');
	   					return;
	   				case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
	   					$.messager.alert("系统提示",'选择上传的文件过大,请检查!');
	   					return;
	   				case SWFUpload.QUEUE_ERROR.INVALID_FILETYPE:
	   					$.messager.alert("系统提示",'选择上传的文件类型不正确,请检查!');
	   					return;
	   				default:
	   					$.messager.alert("系统提示",'未知错误,请检查!');
	   					break;
	   				}
	   			} catch (ex) {
	   				this.debug(ex);
	   			}
	   		},
	   		file_dialog_complete_handler : function(numFilesSelected, numFilesQueued) {
	   			try {
	   				if (numFilesQueued > 0) {
	   					// this.startUpload();
	   					this.startResizedUpload(this.getFile(0).ID, 100, 100, SWFUpload.RESIZE_ENCODING.JPEG, 100);
	   				}
	   			} catch (ex) {
	   				this.debug(ex);
	   			}
	   		},
	   		upload_start_handler : function(file) {//uploadStart事件侦听函数
	   			return true;
	   		},			
	   		upload_progress_handler : function(file, bytesLoaded, bytesTotal) {//uploadProgress事件侦听函数
	   			
	   		},		
	   		upload_error_handler : function (file, errorCode, message) {//uploadError事件侦听函数
	   			try {
	   				switch (errorCode) {
	   				case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED://用户取消
	   					$.messager.show({msg : '您取消了上传!'});
	   					break;
	  				case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED://用户停止
	   					$.messager.show({msg : '您停止了上传!'});
	   					break;
	   				case SWFUpload.UPLOAD_ERROR.IO_ERROR:
	   					$.messager.alert("系统提示",'上传失败,读取或传输文件时发生错误!');
	   					return;
	   				case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
	   					$.messager.alert("系统提示",'上传失败,上传过程中发生错误!');
	   					return;
	   				case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
	   					$.messager.alert("系统提示",'上传失败,因安全问题,导致上传失败,请检查!');
	   					return;
	   				case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
	   					$.messager.alert("系统提示",'上传失败,上传的文件数量超出最大限制!');
	   					return;
	   				case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
	   					$.messager.alert("系统提示",'上传失败,上传过程中发生错误!');
	   					return;
	   				case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED://uploadStart()方法中返回了false
	   					return;
	   				default:
	   					$.messager.alert("系统提示",'上传失败,未知错误!');
	   					break;
	   				}
	   			} catch (ex) {
	   				this.debug(ex);
	   			}
	   		},			
	   		upload_success_handler : function(file, serverData) {	//uploadSuccess事件侦听函数
	   			$.messager.show({msg : '图片上传成功!'});
	   		},
	   		upload_complete_handler : function(file) {	//uploadComplete事件侦听函数
	   			
	   		},
	   		// debug_handler : debug_function,
	   		// custom_settings : {
	   		//	 progressTarget : "fsUploadProgress",
	   		//	 cancelButtonId : "btnCancel"
	   		// },
	   		debug : false
	   };
	   $.swfupload_defaultSetting = $.extend({}, $.swfupload_settings,{
			upload_url : $.ctx+"\/ajax\/sysfile\/upload.json",
			flash_url : $.swfupload_ctx+"/swfupload_fp10/swfupload.swf",//swfupload.swf文件的绝对或相对地址，相对地址是指相对于当前的页面地址。实例化swfupload后，就不能再改变该属性的值了。
	   		flash9_url : $.swfupload_ctx +"/swfupload_fp9/swfupload_fp9.swf",//核心功能swf的地址,这个可以不要,用来支持flash9的.
	   		button_image_url : $.swfupload_ctx+"/Djsc_60x25.jpg"
		});
	   $.swfupload_afterUploadSuccess = function(file,swfId,setting){
		   if(file && swfId && setting){
			   if(!setting.multi){
				   $("#"+swfId).find(".cpimp_swfupload_item").remove();
				   $("#"+swfId).find(".cpimp_swfupload_clear").remove();
			   }
			   var itemDiv = "<br/><div class='cpimp_swfupload_item'>";
			   var fileNameMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileName" value="'+file.fileName+'"/>';
			   itemDiv = itemDiv + fileNameMsg;
			   var fileTypeMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileType" value="'+file.fileType+'"/>';
			   itemDiv = itemDiv + fileTypeMsg;
			   var fileUrlMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileUrl" value="'+file.relativeFilePath+'"/>';
			   itemDiv = itemDiv + fileUrlMsg;
			   var fileType = file.fileType;
			   var realName = file.fileName + fileType;
			   if(fileType == ".jpg"  || 
				  fileType == ".jepg" ||
				  fileType ==".gif"   || 
				  fileType == ".png"){
			      itemDiv = itemDiv +"<img class='cpimp_swfupload_msg' width=96 height='68' src='"+$.ctx +file.relativeFilePath+"' title='"+realName+"' alt='"+realName+"'>";
			   }else{
				  itemDiv = itemDiv +"<span class='cpimp_swfupload_msg' style='float:left;'>"+realName+"</span>"; 
			   }
			   itemDiv = itemDiv + "&nbsp;&nbsp;<img class='cpimp_swfupload_clear' title='取消' alt='取消' src='"+$.ctx+ "/resources/js/jquery-easyui-1.3.4/themes/icons/cut.png' style='cursor:pointer;vertical-align:bottom;' onclick='$.swfupload_clearItem(this)'/>";
			   itemDiv = itemDiv + "</div>";
			   $("#"+swfId).append(itemDiv);
		   }
	   }
	   $.swfupload_loadEditItems = function(groupId,swfId,setting){
		   var files;
		   $.ajax({
			   type:"POST",
			   url:$.ctx +"\/ajax\/sysfile\/getFileByGroupId.json?groupId="+groupId,
			   success:function(result){
			   	  files = $.parseJSON(result);
			   	  if(files && files.length > 0){
			   		   var _length = files.length;
			   		   if(!setting.multi){
			   			   _length = 1;
					   }
					   for(var i=0;i<_length;i++){
						   var file = files[0];
						   var itemDiv = "<br/><div class='cpimp_swfupload_item'>";
						   var fileNameMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileName" value="'+file.fileName+'"/>';
						   itemDiv = itemDiv + fileNameMsg;
						   var fileTypeMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileType" value="'+file.fileType+'"/>';
						   itemDiv = itemDiv + fileTypeMsg;
						   var fileUrlMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileUrl" value="'+file.fileUrl+'"/>';
						   itemDiv = itemDiv + fileUrlMsg;
						   var fileType = file.fileType;
						   var realName = file.fileName + fileType;
						   if(fileType == ".jpg"  || 
							  fileType == ".jepg" ||
							  fileType ==".gif"   || 
							  fileType == ".png"){
						      itemDiv = itemDiv +"<img class='cpimp_swfupload_msg' width=96 height='68' src='"+$.ctx+file.fileUrl+"' title='"+realName+"' alt='"+realName+"'>";
						   }else{
							  itemDiv = itemDiv +"<span class='cpimp_swfupload_msg' style='float:left;'>"+realName+"</span>"; 
						   }
						   itemDiv = itemDiv + "&nbsp;&nbsp;<img class='cpimp_swfupload_clear' fileId='"+file.id+"' title='取消' alt='取消' src='"+$.ctx+ "/resources/js/jquery-easyui-1.3.4/themes/icons/cut.png' style='cursor:pointer;vertical-align:bottom;' onclick='$.swfupload_clearItem(this)'/>";
						   itemDiv = itemDiv + "</div>";
						   $("#"+swfId).append(itemDiv);
					   }
				   }
			   }
		   });
		   
	   }
	   $.swfupload_loadEditItem = function(fileId,swfId,setting){
		   var file;
		   $.ajax({
			   type:"POST",
			   url:$.ctx +"\/ajax\/sysfile\/getFileById.json?fileId="+fileId,
			   success:function(result){
			   	  file = $.parseJSON(result);
			   	  if(file){
					   var itemDiv = "<br/><div class='cpimp_swfupload_item'>";
					   var fileNameMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileName" value="'+file.fileName+'"/>';
					   itemDiv = itemDiv + fileNameMsg;
					   var fileTypeMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileType" value="'+file.fileType+'"/>';
					   itemDiv = itemDiv + fileTypeMsg;
					   var fileUrlMsg = '<input type="hidden" class="cpimp_swfupload_msg" name="fileUrl" value="'+file.fileUrl+'"/>';
					   itemDiv = itemDiv + fileUrlMsg;
					   var fileType = file.fileType;
					   var realName = file.fileName + fileType;
					   if(fileType == ".jpg"  || 
						  fileType == ".jepg" ||
						  fileType ==".gif"   || 
						  fileType == ".png"){
					      itemDiv = itemDiv +"<img class='cpimp_swfupload_msg' width=96 height='68' src='"+$.ctx +file.fileUrl+"' title='"+realName+"' alt='"+realName+"'>";
					   }else{
						  itemDiv = itemDiv +"<span class='cpimp_swfupload_msg' style='float:left;'>"+realName+"</span>"; 
					   }
					   itemDiv = itemDiv + "&nbsp;&nbsp;<img class='cpimp_swfupload_clear' fileId='"+file.id+"' title='取消' alt='取消' src='"+$.ctx+ "/resources/js/jquery-easyui-1.3.4/themes/icons/cut.png' style='cursor:pointer;vertical-align:bottom;' onclick='$.swfupload_clearItem(this)'/>";
					   itemDiv = itemDiv + "</div>";
					   $("#"+swfId).append(itemDiv);
				   }
			   }
		   });
	   }
	   $.swfupload_clearItem = function(obj){
		   var fileId = $(obj).attr("fileId");
		   if(fileId){
			   $(obj).parent().after("<input type='hidden' name='delFileId' value='"+fileId+"'/>");
		   }
		   $(obj).parent().remove();
	   }
	})($);