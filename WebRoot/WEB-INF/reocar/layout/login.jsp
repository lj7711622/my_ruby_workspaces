<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ include file="/resources/includes/tags.jsp"%>
<%@ include file="/resources/includes/head.jsp"%>
<head>
	<link href="${ctx}/resources/css/login/login.css" type="text/css" rel="stylesheet" rev="stylesheet" />
	
</head>
<script type="text/javascript">
	function bindInputKeyDown() { 
		$inp = $(':input'); 
		$inp.bind('keydown', function (e) { 
			if (e.which == 13) { 
				e.preventDefault(); 
				var nxtIdx = $inp.index(this) + 1; 
				$(":input:eq(" + nxtIdx + ")").focus(); 
				if($inp.index(this) == 2) 
					$('#loginButton').click(); 
			} 
		}); 
	}
	function bindCaptchaImageClick() {
		$('#validateCodeImage').click(function() {
			changeValidate();
			$('#validateCode').val('');
			$('#validateCode').focus();
		});
	}
	/**
	function changeValidate() {
		$('#validateCodeImage').attr('src','${ctx}/validatecode.html?random=' + Math.random());
	}*/
	function validate() { 
		$("#errorMsg").html(''); 
		if ($.trim($('#loginName').val()) == '') {
			$("#errorMsg").html('<fmt:message key="blank_01"><fmt:param value="用户名"></fmt:param></fmt:message>');
			$('input:text:first').focus(); 
			return false;
		} 
		if ($.trim($('#loginPass').val()) == '') {
			$("#errorMsg").html('<fmt:message key="blank_01"><fmt:param value="密码"></fmt:param></fmt:message>');
			$('#loginPass').focus();
			return false;
		}
		if ($.trim($('#validateCode').val()) == '') {
			$("#errorMsg").html('<fmt:message key="blank_01"><fmt:param value="验证码"></fmt:param></fmt:message>');
			$('#validateCode').focus();
			return false;
		}
		return true;
	};
	setTimeout(function(){
		(function($) {
			$("#loginButton").click(function(){
				if ($("#loginForm").form("validate")) {
					var loginName = $.cookie("loginName");
					if(loginName != null){
						$.cookie("loginName",loginName,{expires:-1});
					}
					$.messager.progress({title : "<fmt:message key='default_message_title' />",msg : "正在登录,请稍候片刻..."}); 
					$("#loginForm").submit();
					return false;
				}
			});
		})(jQuery);	
	}, 0);
	 
</script>
 <body  class="loginBgX">
	<div class="fixFlt loginBox">
			<div><span>${message }</span></div>
			<form id="loginForm" name="loginForm" method="post" action="${ctx }/reocar/layout/login.html">
				<table class="loginTable">
					<tr>
						<td class="logTleft">
							登录名称：
						</td>
						<td class="logTright">
							<input id="loginName" name="loginName" maxlength="20" tabindex="1" class="iptStyle01" />
						</td>
					</tr>
					<tr>
						<td class="logTleft">
							登录密码：
						</td>
						<td class="logTright">
							<input type="password" id="loginPass" name="loginPass" maxlength="20" tabindex="2" class="iptStyle01" />
						</td>
					</tr>
					<tr>
						<td>
							&nbsp;
						</td>
						<td class="logTright">
							<input class="btn_log" type="button" id="loginButton" tabindex="4" style="cursor: pointer;"/>
						</td>
					</tr>
				</table>
			</form>
		</div>	
 </body>
</html>
	
