<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ include file="/resources/includes/tags.jsp"%>
<div class="easyui-panel" data-options="fit:true,border:false">
	<div class="easyui-accordion" data-options="fit:true,border:false">
		<div title="系统菜单" data-options="iconCls:'icon-save'">
			<ul id="layout_west_tree">
			</ul>
		</div>
	</div>
</div>
<script>
	(function($){
		$("#layout_west_tree").tree({
			data:[{
				text:"瑞卡租车系统",
				children:[{
					"text":"资源管理",    
			        "state":"open",    
			        "attributes":{    
			            "url":"/reocar/core/recources/index.html",    
			            "price":100    
			        },
			        onClick:function(){
			        	alert("1111111111111");
			        }
				}]
			}]
		});
	})(jQuery);
</script>

