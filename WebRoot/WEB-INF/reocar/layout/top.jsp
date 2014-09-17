<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<%@ include file="/resources/includes/tags.jsp"%>
<script type="text/javascript">
</script>
<div style="overflow: hidden; height: 60px; line-height: 100px; color: #fff; font-family: Verdana, 微软雅黑, 黑体;background-image: url('${ctx}/resources/css/imt/head.jpg')">
	<div style="position: absolute; right: 0px; bottom: 0px;">
		<a  class="easyui-menubutton" data-options="menu:'#adminindex_north_changeTheme_Menu',iconCls:'icon-ok'">更换皮肤</a>
		<a  class="easyui-menubutton" data-options="menu:'#adminindex_north_loginout_Menu',iconCls:'icon-back'">注销</a>
	</div>
	<div id="adminindex_north_changeTheme_Menu" style="width: 120px; display: none;">
		<div onclick="__changetheme('default');">default</div>
		<div onclick="__changetheme('gray');">gray</div>
		<div onclick="__changetheme('black');">black</div>
		<div onclick="__changetheme('bootstrap');">bootstrap</div>
		<div onclick="__changetheme('jqueryui-cupertino');">cupertino</div>
		<div onclick="__changetheme('jqueryui-dark-hive');">dark-hive</div>
		<div onclick="__changetheme('jqueryui-pepper-grinder');">pepper-grinder</div>
		<div onclick="__changetheme('jqueryui-sunny');">sunny</div>
		<div onclick="__changetheme('metro-standard');">metro</div>
		<div onclick="__changetheme('metro-blue');">metro-blue</div>
		<div onclick="__changetheme('metro-gray');">metro-gray</div>
		<div onclick="__changetheme('metro-green');">metro-green</div>
		<div onclick="__changetheme('metro-orange');">metro-orange</div>
		<div onclick="__changetheme('metro-red');">metro-red</div>
	</div>
	<div id="adminindex_north_loginout_Menu" style="width: 100px; display: none;">
		<div onclick="__changePassword();">
			修改密码
		</div>
		<div id="">
			修改个人信息
		</div>
		<div onclick="__loginOut();"> 
			退出系统
		</div>
	</div>
</div>
<script>

/**
 * 更换主题
 */
function __changetheme(themeName){
	var jeasyuiTheme = $('#jeasyuiTheme');
	var currentThemePath = jeasyuiTheme.attr('href');
	var newThemePath = currentThemePath.substring(0, currentThemePath.indexOf('themes')) + 'themes/' + themeName + '/easyui.css';
	jeasyuiTheme.attr('href', newThemePath);
	var allIframes = $('iframe');
	if (allIframes.length > 0) {
		for(var i = 0; i < allIframes.length; i++) {
			var ifr = allIframes[i];
			$(ifr).contents().find('#jeasyuiTheme').attr('href', newThemePath);
		}
	}
	$.cookie('cpimpThemeName',themeName,{expires:7});
}
</script>