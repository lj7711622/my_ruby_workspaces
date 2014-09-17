$.extend($.fn.tabs.methods,{
	/**
	 * 新增或刷新tab页,使用href的方式
	 * @param	{jquery Object}	jq 代表调用该方法的jquery对象
	 * @param	{Object} params	方法的参数
	 * 						tab(必填) : {title(标题,必填),href(网址,新增时必填,刷新时选填),iconCls(图标,选填)}
	 * 						
	 * @return	{jquery Object}	jq 代表调用该方法的jquery对象
	 */
	addOrUpdate : function(jq,params) {
		return jq.each(function() {
			if(!params) return;
			if(!params.tab) return;
			if(!params.tab.title) return;
			if($(this).tabs('exists',params.tab.title)) {
				if(params.refresh == true) {
					var tab = $(this).tabs('getTab',params.tab.title);
					$(this).tabs('update',{tab:tab,options:params.tab});
				}
				if($(this).tabs('getSelected').panel('options').title!=params.tab.title)//防止2次加载
					$(this).tabs('select',params.tab.title);
				return;
			}
			if (!params.tab.href && !params.tab.content) return;
			$(this).tabs('add',params.tab);
		});
	}
});