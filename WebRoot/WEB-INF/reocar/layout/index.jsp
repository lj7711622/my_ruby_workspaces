<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page language="java" pageEncoding="UTF-8"
	contentType="text/html; charset=UTF-8"%>
<%@ include file="/resources/includes/tags.jsp"%>
<%@ include file="/resources/includes/head.jsp"%>
<head>

</head>

<body style="overflow-y: hidden">
	<noscript>
		<div
			style="position: absolute; z-index: 100000; height: 246px; top: 0px; left: 0px; width: 100%; background: white; text-align: center;">
			抱歉，请开启脚本支持</div>
	</noscript>
	<div class="easyui-layout" data-options="fit:true,border:false">
		<div data-options="region:'north',border:false" style="height: 61px;">
			<c:import url="/reocar/layout/top.html" />
		</div>

		<div data-options="region:'west',title:'功能导航',split:true"
			style="width: 200px;">
			<c:import url="/reocar/layout/left.html" />
		</div>
		<div data-options="region:'center'">
			<c:import url="/reocar/layout/center.html" />
		</div>
		<%--
			<div data-options="region:'east',title:'右',split:false" style="width: 200px;">
				<c:import url="east" />
			</div>
			--%>
		<div data-options="region:'south'" style="height: 20px;">
			<c:import url="/reocar/layout/bottom.html" />
		</div>
	</div>
</body>
</html>
