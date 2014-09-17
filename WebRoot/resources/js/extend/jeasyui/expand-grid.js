$.extend($.fn.datagrid.methods,{
	getRow:function(obj,id){
		return $(obj).datagrid("getRows")[$(obj).datagrid("getRowIndex",id)];
	},
	refresh:function(obj){
		var _id,_rows;
		 _rows = $(obj).datagrid("getSelections");
		if(_rows && _rows.length >0) _id = _rows[0].id;
		$(obj).datagrid("reload");
		if(_id) $(obj).datagrid("selectRecord",_id);
	}
});