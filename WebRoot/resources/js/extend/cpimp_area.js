$(function(){
	$(".cpimp_area").each(function(){
		var isLoad = $(this).attr("isLoad");
		if(!isLoad || isLoad == false || isLoad == "false"){
			var _value = $(this).val() || $(this).attr("value");
			var beforeId = $(this).attr("beforeId");
			var afterId = $(this).attr("afterId");
			var codeId = $(this).attr("codeId");
			var url = $.ctx + "/ajax/sysarea/areaList.json?parentId="; 
			var _url = '';
			if(!beforeId){
				_url = url + '0';
			}
			$(this).combobox({
				url:_url,
				editable : false,
				width : 80,
				panelHeight : 120,
				valueField : 'id',  
				textField : 'areaName',
				onLoadSuccess:function(){
					var isLoad = $(this).attr("isLoad");
					if(_value && (!isLoad || isLoad == false || isLoad == "false")){ 
						$(this).combobox('select',_value);
						if(afterId){
							$("#"+afterId).combobox("reload",url+_value);
						}
					}
					$(this).attr("isLoad",true);
				},
				onChange:function(rec){
					if(codeId){
						var projectCode = $("#"+codeId);
						if(projectCode){
							var projectVal = projectCode.val();
							if(projectVal && projectVal.length == 14){
								projectCode.val(getAreaCode(rec)+projectVal.substring(6,14));
							}
						}
					}
					if(afterId){
						var nextUrl = url + rec;
						$("#"+afterId).combobox('clear');
						$("#"+afterId).combobox('reload',nextUrl);
					}
				}
			});
		}
	});
	$.getAreaCode = getAreaCode;
	$.getAreaName = getAreaName;
	$.initArea = initArea;
	
	$(".area_tree").each(function(){
		if(!$(this).attr("isLoad")){
			var _value = $(this).val();
			var _tiple = $(this).attr('tiple');
			var _url = $.ctx + "/ajax/sysarea/areaTree.json";
			if(_tiple && _tiple != 'false' && _tiple != false){
				_tiple = true;
			}else{
				_tiple = false;
			}
			$(this).combotree({
				url : _url,
			    editable : false,
			    parentField : 'pid',
			    multiple : _tiple,
				onLoadSuccess:function(){
					if(_value) 
						$(this).combotree('check',_value);
					$(this).attr("isLoad",true);
				}
			})
		}
	});
	
});

var initArea = function(){
	if(!$.areaList){
		$.ajax({
			type : "POST",
			url : $.ctx + "/ajax/sysarea/allList.json",
			success:function(result){
				if(result){
					$.areaList = $.parseJSON(result);
				}
				
			}
		});
	}
}();

var getAreaName = function(id){
	if($.areaList){
		for(var i = 0;i<$.areaList.length;i++){
			var area = $.areaList[i];
			if(area.id == id){
				return area.areaName;
			}
		}
	}
}
var getAreaCode = function(id){
	if($.areaList){
		for(var i = 0;i<$.areaList.length;i++){
			var area = $.areaList[i];
			if(area.id == id){
				return area.areaCode;
			}
		}
	}
}