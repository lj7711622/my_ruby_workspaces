$.fn.tree.defaults.loadFilter = function(data, parent) {
	var opt = $(this).data().tree.options;
	var idField, textField, parentField;
	if (opt.parentField) {
		idField = opt.idField || 'id';
		textField = opt.textField || 'text';
		parentField = opt.parentField;
		var i, l, treeData = [], tmpMap = [];
		for (i = 0, l = data.length; i < l; i++) {
			tmpMap[data[i][idField]] = data[i];
		}
		for (i = 0, l = data.length; i < l; i++) {
			if (tmpMap[data[i][parentField]] && data[i][idField] != data[i][parentField]) {
				if (!tmpMap[data[i][parentField]]['children'])
					tmpMap[data[i][parentField]]['children'] = [];
				data[i]['text'] = data[i][textField];
				tmpMap[data[i][parentField]]['children'].push(data[i]);
			} else {
				data[i]['text'] = data[i][textField];
				treeData.push(data[i]);
			}
		}
		return treeData;
	}
	return data;
};

$.fn.treegrid.defaults.loadFilter = function(data, parentId) {
	var opt = $(this).data().treegrid.options;
	var idField, textField, parentField;
	if (opt.parentField) {
		idField = opt.idField || 'id';
		textField = opt.textField || 'text';
		parentField = opt.parentField;
		var i, l, treeData = [], tmpMap = [];
		for (i = 0, l = data.length; i < l; i++) {
			tmpMap[data[i][idField]] = data[i];
		}
		for (i = 0, l = data.length; i < l; i++) {
			if (tmpMap[data[i][parentField]] && data[i][idField] != data[i][parentField]) {
				if (!tmpMap[data[i][parentField]]['children'])
					tmpMap[data[i][parentField]]['children'] = [];
				data[i]['text'] = data[i][textField];
				tmpMap[data[i][parentField]]['children'].push(data[i]);
			} else {
				data[i]['text'] = data[i][textField];
				treeData.push(data[i]);
			}
		}
		return treeData;
	}
	return data;
};

$.fn.combotree.defaults.loadFilter = $.fn.tree.defaults.loadFilter;

$.fn.tree.defaults.onCheck = function(node, checked) {
	var opt = $(this).data().tree.options;
	if(opt.myCascade && !opt.cascadeCheck){
		var tree = $(this);
		if(checked) {	//如果选中,则判断父节点有没有被选中,如果没有,则选中
			var parent = tree.tree('getParent',node.target);
			if(parent){
				tree.tree('check',parent.target);
			}
		} else {	// 如果未选中,则判断子节点有没有被选中,如果有,则不选中
			var children = tree.tree('getChildren',node.target);
			if(children){
				$.each(children, function(i, child) {
					tree.tree('uncheck',child.target);
				});
			}
		}
	}
};

$.fn.combotree.defaults.onCheck = $.fn.tree.defaults.onCheck;