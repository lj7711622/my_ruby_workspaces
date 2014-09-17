/**
 * 扩展数组 通过value取Text emptyValue就是在找不到的情况下 返回什么字符串
 */
Array.prototype.getText = function(value, emptyValue) {
	for ( var i = 0; i < this.length; i++) {
		if (this[i].value == value) {
			return this[i].text;
		}
	}
	return emptyValue ? emptyValue : '';
}
$.ctx = new Object();//初始化项目根路径
$.Lock_Handle_Type =[
                    {value : '',text : '未操作'},
                    {value : '1',text : '开锁'},
                    {value : '2',text : '关锁'},
                    {value : '3',text : '失败'}
                    ];


/**
 * 接口类型
 * 创建：刘伟
 * 时间：2013.12.30
 * 作用：接口管理
 */
$.Sys_Interface_Type_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '主动请求'
}, {
	value : '2',
	text : '被动请求'
} ];

/**
 * 版本类型
 */
$.Sys_Interface_Type_CU = [ {
	value : '1',
	text : '主动请求',
	selected : true
}, {
	value : '2',
	text : '被动请求'
} ];


/**
 * 样品所有状态
 * 创建：刘伟
 * 创建时间：2013.12.17
 * 修改时间：2013.12.31
 * 作用：用于委托单信息显示
 */
$.Sys_SampleStateAll_CU = [
	{value : '110',text : '取样完成'},
	{value : '120',text : '见证未通过'},
	{value : '130',text : '见证通过'},
  	{value : '140',text : '収样不通过'},	
  	{value : '200',text : '収样通过'},
	{value : '210',text : '检测完成'},
	{value : '220',text : '生成报告'},
	{value : '230',text : '审核通过'},
	{value : '201',text : '审核未通过'},
	{value : '240',text : '审批通过'},
	{value : '221',text : '审批未通过'}
];


$.Sys_SampleStateAll_RM = [
	{value:'',text:'--请选择--',selected : true},
	{value : '110',text : '取样完成'},
	{value : '120',text : '见证未通过'},
	{value : '130',text : '见证通过'},
  	{value : '140',text : '収样不通过'},	
  	{value : '200',text : '収样通过'},
	{value : '210',text : '检测完成'},
	{value : '220',text : '生成报告'},
	{value : '230',text : '审核通过'},
	{value : '201',text : '审核未通过'},
	{value : '240',text : '审批通过'},
	{value : '221',text : '审批未通过'}
];

/**
 * 版本类型
 */
$.Sys_Version_Type_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '客户端'
}, {
	value : '2',
	text : 'PC端'
} ];

/**
 * 版本类型
 */
$.Sys_Version_Type_CU = [ {
	value : '1',
	text : '客户端',
	selected : true
}, {
	value : '2',
	text : 'PC端'
} ];


/**
 * 版本是否最新 
 */
$.Sys_Latest_Type_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '是'
}, {
	value : '2',
	text : '否'
} ];

/**
 * 版本是否最新 
 */
$.Sys_Latest_Type_CU = [ {
	value : '1',
	text : '是',
	selected : true
}, {
	value : '2',
	text : '否'
} ];

/**
 * 系统资源类型
 */
$.Sys_Resource_Type_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '菜单'
}, {
	value : '2',
	text : '功能'
} ];

/**
 * 系统资源类型
 */
$.Sys_Resource_Type_CU = [ {
	value : '1',
	text : '菜单',
	selected : true
}, {
	value : '2',
	text : '功能'
} ];




/**
 * 区域类型
 */
$.Sys_Area_Type_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '省/自治区/直辖市'
}, {
	value : '2',
	text : '市/自治县'
}, {
	value : '3',
	text : '区/县'
} ];

/**
 * 区域类型
 */
$.Sys_Area_Type_CU = [ {
	value : '1',
	text : '省/自治区/直辖市'
}, {
	value : '2',
	text : '市/自治县'
}, {
	value : '3',
	text : '区/县'
} ];

/**
 * 性别
 */
$.Sys_Gender_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '男'
}, {
	value : '2',
	text : '女'
}, {
	value : '3',
	text : '保密'
} ];

/**
 * 性别
 */
$.Sys_Gender_CU = [ {
	value : '1',
	text : '男',
	selected : true
}, {
	value : '2',
	text : '女'
}, {
	value : '3',
	text : '保密'
} ];

/**
 * 锁定状态
 */
$.Sys_Locked_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '锁定'
}, {
	value : '2',
	text : '未锁定'
} ];

/**
 * 锁定状态
 */
$.Sys_Locked_CU = [ {
	value : '1',
	text : '锁定'
}, {
	value : '2',
	text : '未锁定',
	selected : true
} ];

/**
 * 手机绑定使用状态
 */
$.Sys_PhoneLocked_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '已使用'
}, {
	value : '2',
	text : '未使用'
} ];

/**
 * 手机绑定使用状态
 */
$.Sys_PhoneLocked_CU = [ {
	value : '1',
	text : '已使用'
}, {
	value : '2',
	text : '未使用',
	selected : true
} ];


/**
 * 显示状态
 */
$.Sys_Show_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '显示'
}, {
	value : '2',
	text : '不显示'
} ];

/**
 * 显示状态
 */
$.Sys_Show_CU = [{
	value : '1',
	text : '显示'
}, {
	value : '2',
	text : '不显示',
	selected : true
} ];

/**
 * 启用状态
 */
$.Sys_Enabled_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '启用'
}, {
	value : '2',
	text : '禁用'
} ];

/**
 * 启用状态
 */
$.Sys_Enabled_CU = [{
	value : '1',
	text : '启用',
	selected : true
}, {
	value : '2',
	text : '禁用'
} ];


/**
 * 检测类型
 */
$.Sys_TestType_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : '委托检测'
}, {
	value : '2',
	text : '见证取样'
} ];

/**
 * 启用状态
 */
$.Sys_TestType_CU = [{
	value : '1',
	text : '委托检测',
	selected : true
}, {
	value : '2',
	text : '见证取样'
} ];

/**
 * 接口类型
 */
$.Dfl_Interface_Type_R = [ {
	value : '',
	text : '--请选择--',
	selected : true
}, {
	value : '1',
	text : 'RPC'
}, {
	value : '2',
	text : 'GET'
},{
	value : '3',
	text : 'POST'
} ];

/**
 * 接口类型
 */
$.Dfl_Interface_Type_CU = [ {
	value : '1',
	text : 'RPC',
	selected : true
}, {
	value : '2',
	text : 'GET'
},{
	value : '3',
	text : 'POST'
} ];

/**
 * 接口类型
 */
$.Dfl_historyMeeting_Type_R = [ {
	value : '3',
	text : '是否开启会议录音记录',
	selected : true
}, {
	value : '1',
	text : '是'
},{
	value : '0',
	text : '否'
} ];
/**
 * 接口类型
 */
$.Dfl_historyMeeting_Type_CU = [ {
	value : '3',
	text : '是否开启会议录音记录',
	selected : true
}, {
	value : '1',
	text : '是'
},{
	value : '0',
	text : '否'
} ];

/**
 * 接口类型
 */
$.Dfl_userphone_Type_CU = [ {
	value : '3',
	text : '是否有效',
	selected : true
}, {
	value : '1',
	text : '有效'
},{
	value : '0',
	text : '无效'
} ];

/**
 * 试件样品状态
 */
$.Sys_SampleState_CU = [
  	{value : '200',text : '收样通过'},
  	{value : '205',text : '试验完成'},
	{value : '210',text : '已录入试验信息'},
	{value : '220',text : '已生成实验报告'},
	{value : '230',text : '审核通过'},
	{value : '201',text : '审核未通过'},
	{value : '240',text : '审批通过'},
	{value : '221',text : '审批未通过'},
	{value : '250',text : '已归档'},
	{value : '260',text : '已打印'}
];

/**
 * 试件样品状态
 */
$.Sys_SampleState_R = [
    {value:"",text:"--请选择--",selected : true},
  	{value : '200',text : '收样通过'},
  	{value : '205',text : '试验完成'},
	{value : '210',text : '已录入试验信息'},
	{value : '220',text : '已生成实验报告'},
	{value : '230',text : '审核通过'},
	{value : '201',text : '审核未通过'},
	{value : '240',text : '审批通过'},
	{value : '221',text : '审批未通过'},
	{value : '250',text : '已归档'},
	{value : '260',text : '已打印'}
];

/**
 * @author 周亚亚
 * 
 * 电子锁、电子标签状态
 */
$.Sys_LockState_CU = [
                	{value : '1',text : '未使用'},	
                	{value : '2',text : '已使用'},
                	{value : '3',text : '已废弃'}
                ];
$.Sys_LockState_R = [
               	{value : '',text : '--请选择--',selected : true},	
               	{value : '1',text : '未使用'},	
               	{value : '2',text : '已使用'},
               	{value : '3',text : '已废弃'}
               ];

$.Lock_Handle_Type =[
                    {value : '',text : '未操作'},
                    {value : '1',text : '开锁'},
                    {value : '2',text : '关锁'},
                    {value : '3',text : '失败'}
                    ]; 
/*********************
 * 
 * 多方聊 枚举
 */

function  dfl_getStartType( startType){
	var returnVal ="";	
	 if(startType =='WEB'){ return 'WEB发起'}
else if(startType =='SMS'){ return '短信发起'}
else if(startType =='CLIENT'){return  '客户端发起'}
	
	return returnVal;
}

function dfl_getJoinType(joinType){
	var returnVal ="";	
	 if(joinType =='INITING'){ return '初始化中'}
	 else if(joinType =='TO_BE_SCHEDULED'){ return '待发起'}
	 else if(joinType =='STARTING'){return  '正在发起'}
	 else if(joinType =='ACTIVE'){return  '正在进行'}
	 else if(joinType =='START_FAILED'){return  '发起失败'}
	
	 
	 
	 return returnVal;
}

function dfl_getMeetingStatus(meetingStatus){
	var returnVal ="";	
	 if(meetingStatus =='INITING'){ return '初始化中'}
	 else if(meetingStatus =='TO_BE_SCHEDULED'){ return '待发起'}
	 else if(meetingStatus =='STARTING'){return  '正在发起'}
	 else if(meetingStatus =='ACTIVE'){return  '正在进行'}
	 else if(meetingStatus =='START_FAILED'){return  '发起失败'}
	 else if(meetingStatus =='CLOSING'){return  '正在关闭'}
	 else if(meetingStatus =='CLOSED'){return  '已关闭(结束)'}
	 
	 
	 return returnVal;
}

function dfl_getStatus(status){
	var returnVal ="";	
	 if(status =='Ringing'){ return '正在振铃'}
	 else if(status =='Active'){ return '活跃（在会议中）'}
	 else if(status =='CallbackFail'){return  '回呼失败(呼叫失败)'}
	 else if(status =='Hangup'){return  '挂机(已经离开会议)'}

	 return returnVal;
}

function dfl_getMuted(muted){
	var returnVal ="";	
	 if(muted =='true'){ return '静音'}
	 else if(muted =='false'){ return '正常'}
	 return returnVal;
}

function dfl_getMonitorStatus(monitorStatus){
	var returnVal ="";	
	 if(monitorStatus =='UNINIT'){ return '静音'}
	 else if(monitorStatus =='TO_BE_SCHEDULED'){ return '正常'}
	 else if(monitorStatus =='STARTING'){return  '正在开始录音'}
	 else if(monitorStatus =='MONITORING'){return  '正在录音'}
	 
	 else if(monitorStatus =='FINISHED'){return  '已经成功结束'}
	 else if(monitorStatus =='FAILED'){return  '失败'}
	 return returnVal;
}


/**
 * 扩展图标
 */
$.Sys_IconData = [
{value:'icon-standard-accept',text:'icon-standard-accept'},
{value:'icon-standard-add',text:'icon-standard-add'},
{value:'icon-standard-anchor',text:'icon-standard-anchor'},
{value:'icon-standard-application-add',text:'icon-standard-application-add'},
{value:'icon-standard-application-cascade',text:'icon-standard-application-cascade'},
{value:'icon-standard-application-delete',text:'icon-standard-application-delete'},
{value:'icon-standard-application-double',text:'icon-standard-application-double'},
{value:'icon-standard-application-edit',text:'icon-standard-application-edit'},
{value:'icon-standard-application-error',text:'icon-standard-application-error'},
{value:'icon-standard-application-form-add',text:'icon-standard-application-form-add'},
{value:'icon-standard-application-form-delete',text:'icon-standard-application-form-delete'},
{value:'icon-standard-application-form-edit',text:'icon-standard-application-form-edit'},
{value:'icon-standard-application-form-magnify',text:'icon-standard-application-form-magnify'},
{value:'icon-standard-application-form',text:'icon-standard-application-form'},
{value:'icon-standard-application-get',text:'icon-standard-application-get'},
{value:'icon-standard-application-go',text:'icon-standard-application-go'},
{value:'icon-standard-application-home',text:'icon-standard-application-home'},
{value:'icon-standard-application-key',text:'icon-standard-application-key'},
{value:'icon-standard-application-lightning',text:'icon-standard-application-lightning'},
{value:'icon-standard-application-link',text:'icon-standard-application-link'},
{value:'icon-standard-application-osx-terminal',text:'icon-standard-application-osx-terminal'},
{value:'icon-standard-application-osx',text:'icon-standard-application-osx'},
{value:'icon-standard-application-put',text:'icon-standard-application-put'},
{value:'icon-standard-application-side-boxes',text:'icon-standard-application-side-boxes'},
{value:'icon-standard-application-side-contract',text:'icon-standard-application-side-contract'},
{value:'icon-standard-application-side-expand',text:'icon-standard-application-side-expand'},
{value:'icon-standard-application-side-list',text:'icon-standard-application-side-list'},
{value:'icon-standard-application-side-tree',text:'icon-standard-application-side-tree'},
{value:'icon-standard-application-split',text:'icon-standard-application-split'},
{value:'icon-standard-application-tile-horizontal',text:'icon-standard-application-tile-horizontal'},
{value:'icon-standard-application-tile-vertical',text:'icon-standard-application-tile-vertical'},
{value:'icon-standard-application-view-columns',text:'icon-standard-application-view-columns'},
{value:'icon-standard-application-view-detail',text:'icon-standard-application-view-detail'},
{value:'icon-standard-application-view-gallery',text:'icon-standard-application-view-gallery'},
{value:'icon-standard-application-view-icons',text:'icon-standard-application-view-icons'},
{value:'icon-standard-application-view-list',text:'icon-standard-application-view-list'},
{value:'icon-standard-application-view-tile',text:'icon-standard-application-view-tile'},
{value:'icon-standard-application-xp-terminal',text:'icon-standard-application-xp-terminal'},
{value:'icon-standard-application-xp',text:'icon-standard-application-xp'},
{value:'icon-standard-application',text:'icon-standard-application'},
{value:'icon-standard-arrow-branch',text:'icon-standard-arrow-branch'},
{value:'icon-standard-arrow-divide',text:'icon-standard-arrow-divide'},
{value:'icon-standard-arrow-down',text:'icon-standard-arrow-down'},
{value:'icon-standard-arrow-in',text:'icon-standard-arrow-in'},
{value:'icon-standard-arrow-inout',text:'icon-standard-arrow-inout'},
{value:'icon-standard-arrow-join',text:'icon-standard-arrow-join'},
{value:'icon-standard-arrow-left',text:'icon-standard-arrow-left'},
{value:'icon-standard-arrow-merge',text:'icon-standard-arrow-merge'},
{value:'icon-standard-arrow-out',text:'icon-standard-arrow-out'},
{value:'icon-standard-arrow-redo',text:'icon-standard-arrow-redo'},
{value:'icon-standard-arrow-refresh-small',text:'icon-standard-arrow-refresh-small'},
{value:'icon-standard-arrow-refresh',text:'icon-standard-arrow-refresh'},
{value:'icon-standard-arrow-right',text:'icon-standard-arrow-right'},
{value:'icon-standard-arrow-rotate-anticlockwise',text:'icon-standard-arrow-rotate-anticlockwise'},
{value:'icon-standard-arrow-rotate-clockwise',text:'icon-standard-arrow-rotate-clockwise'},
{value:'icon-standard-arrow-switch',text:'icon-standard-arrow-switch'},
{value:'icon-standard-arrow-turn-left',text:'icon-standard-arrow-turn-left'},
{value:'icon-standard-arrow-turn-right',text:'icon-standard-arrow-turn-right'},
{value:'icon-standard-arrow-undo',text:'icon-standard-arrow-undo'},
{value:'icon-standard-arrow-up',text:'icon-standard-arrow-up'},
{value:'icon-standard-asterisk-orange',text:'icon-standard-asterisk-orange'},
{value:'icon-standard-asterisk-yellow',text:'icon-standard-asterisk-yellow'},
{value:'icon-standard-attach',text:'icon-standard-attach'},
{value:'icon-standard-award-star-add',text:'icon-standard-award-star-add'},
{value:'icon-standard-award-star-bronze-1',text:'icon-standard-award-star-bronze-1'},
{value:'icon-standard-award-star-bronze-2',text:'icon-standard-award-star-bronze-2'},
{value:'icon-standard-award-star-bronze-3',text:'icon-standard-award-star-bronze-3'},
{value:'icon-standard-award-star-delete',text:'icon-standard-award-star-delete'},
{value:'icon-standard-award-star-gold-1',text:'icon-standard-award-star-gold-1'},
{value:'icon-standard-award-star-gold-2',text:'icon-standard-award-star-gold-2'},
{value:'icon-standard-award-star-gold-3',text:'icon-standard-award-star-gold-3'},
{value:'icon-standard-award-star-silver-1',text:'icon-standard-award-star-silver-1'},
{value:'icon-standard-award-star-silver-2',text:'icon-standard-award-star-silver-2'},
{value:'icon-standard-award-star-silver-3',text:'icon-standard-award-star-silver-3'},
{value:'icon-standard-basket-add',text:'icon-standard-basket-add'},
{value:'icon-standard-basket-delete',text:'icon-standard-basket-delete'},
{value:'icon-standard-basket-edit',text:'icon-standard-basket-edit'},
{value:'icon-standard-basket-error',text:'icon-standard-basket-error'},
{value:'icon-standard-basket-go',text:'icon-standard-basket-go'},
{value:'icon-standard-basket-put',text:'icon-standard-basket-put'},
{value:'icon-standard-basket-remove',text:'icon-standard-basket-remove'},
{value:'icon-standard-basket',text:'icon-standard-basket'},
{value:'icon-standard-bell-add',text:'icon-standard-bell-add'},
{value:'icon-standard-bell-delete',text:'icon-standard-bell-delete'},
{value:'icon-standard-bell-error',text:'icon-standard-bell-error'},
{value:'icon-standard-bell-go',text:'icon-standard-bell-go'},
{value:'icon-standard-bell-link',text:'icon-standard-bell-link'},
{value:'icon-standard-bell',text:'icon-standard-bell'},
{value:'icon-standard-bin-closed',text:'icon-standard-bin-closed'},
{value:'icon-standard-bin-empty',text:'icon-standard-bin-empty'},
{value:'icon-standard-bin',text:'icon-standard-bin'},
{value:'icon-standard-bomb',text:'icon-standard-bomb'},
{value:'icon-standard-book-add',text:'icon-standard-book-add'},
{value:'icon-standard-book-addresses',text:'icon-standard-book-addresses'},
{value:'icon-standard-book-delete',text:'icon-standard-book-delete'},
{value:'icon-standard-book-edit',text:'icon-standard-book-edit'},
{value:'icon-standard-book-error',text:'icon-standard-book-error'},
{value:'icon-standard-book-go',text:'icon-standard-book-go'},
{value:'icon-standard-book-key',text:'icon-standard-book-key'},
{value:'icon-standard-book-link',text:'icon-standard-book-link'},
{value:'icon-standard-book-next',text:'icon-standard-book-next'},
{value:'icon-standard-book-open',text:'icon-standard-book-open'},
{value:'icon-standard-book-previous',text:'icon-standard-book-previous'},
{value:'icon-standard-book',text:'icon-standard-book'},
{value:'icon-standard-box',text:'icon-standard-box'},
{value:'icon-standard-brick-add',text:'icon-standard-brick-add'},
{value:'icon-standard-brick-delete',text:'icon-standard-brick-delete'},
{value:'icon-standard-brick-edit',text:'icon-standard-brick-edit'},
{value:'icon-standard-brick-error',text:'icon-standard-brick-error'},
{value:'icon-standard-brick-go',text:'icon-standard-brick-go'},
{value:'icon-standard-brick-link',text:'icon-standard-brick-link'},
{value:'icon-standard-brick',text:'icon-standard-brick'},
{value:'icon-standard-bricks',text:'icon-standard-bricks'},
{value:'icon-standard-briefcase',text:'icon-standard-briefcase'},
{value:'icon-standard-bug-add',text:'icon-standard-bug-add'},
{value:'icon-standard-bug-delete',text:'icon-standard-bug-delete'},
{value:'icon-standard-bug-edit',text:'icon-standard-bug-edit'},
{value:'icon-standard-bug-error',text:'icon-standard-bug-error'},
{value:'icon-standard-bug-go',text:'icon-standard-bug-go'},
{value:'icon-standard-bug-link',text:'icon-standard-bug-link'},
{value:'icon-standard-bug',text:'icon-standard-bug'},
{value:'icon-standard-building-add',text:'icon-standard-building-add'},
{value:'icon-standard-building-delete',text:'icon-standard-building-delete'},
{value:'icon-standard-building-edit',text:'icon-standard-building-edit'},
{value:'icon-standard-building-error',text:'icon-standard-building-error'},
{value:'icon-standard-building-go',text:'icon-standard-building-go'},
{value:'icon-standard-building-key',text:'icon-standard-building-key'},
{value:'icon-standard-building-link',text:'icon-standard-building-link'},
{value:'icon-standard-building',text:'icon-standard-building'},
{value:'icon-standard-bullet-add',text:'icon-standard-bullet-add'},
{value:'icon-standard-bullet-arrow-bottom',text:'icon-standard-bullet-arrow-bottom'},
{value:'icon-standard-bullet-arrow-down',text:'icon-standard-bullet-arrow-down'},
{value:'icon-standard-bullet-arrow-top',text:'icon-standard-bullet-arrow-top'},
{value:'icon-standard-bullet-arrow-up',text:'icon-standard-bullet-arrow-up'},
{value:'icon-standard-bullet-black',text:'icon-standard-bullet-black'},
{value:'icon-standard-bullet-blue',text:'icon-standard-bullet-blue'},
{value:'icon-standard-bullet-delete',text:'icon-standard-bullet-delete'},
{value:'icon-standard-bullet-disk',text:'icon-standard-bullet-disk'},
{value:'icon-standard-bullet-error',text:'icon-standard-bullet-error'},
{value:'icon-standard-bullet-feed',text:'icon-standard-bullet-feed'},
{value:'icon-standard-bullet-go',text:'icon-standard-bullet-go'},
{value:'icon-standard-bullet-green',text:'icon-standard-bullet-green'},
{value:'icon-standard-bullet-key',text:'icon-standard-bullet-key'},
{value:'icon-standard-bullet-orange',text:'icon-standard-bullet-orange'},
{value:'icon-standard-bullet-picture',text:'icon-standard-bullet-picture'},
{value:'icon-standard-bullet-pink',text:'icon-standard-bullet-pink'},
{value:'icon-standard-bullet-purple',text:'icon-standard-bullet-purple'},
{value:'icon-standard-bullet-red',text:'icon-standard-bullet-red'},
{value:'icon-standard-bullet-star',text:'icon-standard-bullet-star'},
{value:'icon-standard-bullet-toggle-minus',text:'icon-standard-bullet-toggle-minus'},
{value:'icon-standard-bullet-toggle-plus',text:'icon-standard-bullet-toggle-plus'},
{value:'icon-standard-bullet-white',text:'icon-standard-bullet-white'},
{value:'icon-standard-bullet-wrench',text:'icon-standard-bullet-wrench'},
{value:'icon-standard-bullet-yellow',text:'icon-standard-bullet-yellow'},
{value:'icon-standard-cake',text:'icon-standard-cake'},
{value:'icon-standard-calculator-add',text:'icon-standard-calculator-add'},
{value:'icon-standard-calculator-delete',text:'icon-standard-calculator-delete'},
{value:'icon-standard-calculator-edit',text:'icon-standard-calculator-edit'},
{value:'icon-standard-calculator-error',text:'icon-standard-calculator-error'},
{value:'icon-standard-calculator-link',text:'icon-standard-calculator-link'},
{value:'icon-standard-calculator',text:'icon-standard-calculator'},
{value:'icon-standard-calendar-add',text:'icon-standard-calendar-add'},
{value:'icon-standard-calendar-delete',text:'icon-standard-calendar-delete'},
{value:'icon-standard-calendar-edit',text:'icon-standard-calendar-edit'},
{value:'icon-standard-calendar-link',text:'icon-standard-calendar-link'},
{value:'icon-standard-calendar-view-day',text:'icon-standard-calendar-view-day'},
{value:'icon-standard-calendar-view-month',text:'icon-standard-calendar-view-month'},
{value:'icon-standard-calendar-view-week',text:'icon-standard-calendar-view-week'},
{value:'icon-standard-calendar',text:'icon-standard-calendar'},
{value:'icon-standard-camera-add',text:'icon-standard-camera-add'},
{value:'icon-standard-camera-delete',text:'icon-standard-camera-delete'},
{value:'icon-standard-camera-edit',text:'icon-standard-camera-edit'},
{value:'icon-standard-camera-error',text:'icon-standard-camera-error'},
{value:'icon-standard-camera-go',text:'icon-standard-camera-go'},
{value:'icon-standard-camera-link',text:'icon-standard-camera-link'},
{value:'icon-standard-camera-small',text:'icon-standard-camera-small'},
{value:'icon-standard-camera',text:'icon-standard-camera'},
{value:'icon-standard-cancel',text:'icon-standard-cancel'},
{value:'icon-standard-car-add',text:'icon-standard-car-add'},
{value:'icon-standard-car-delete',text:'icon-standard-car-delete'},
{value:'icon-standard-car',text:'icon-standard-car'},
{value:'icon-standard-cart-add',text:'icon-standard-cart-add'},
{value:'icon-standard-cart-delete',text:'icon-standard-cart-delete'},
{value:'icon-standard-cart-edit',text:'icon-standard-cart-edit'},
{value:'icon-standard-cart-error',text:'icon-standard-cart-error'},
{value:'icon-standard-cart-go',text:'icon-standard-cart-go'},
{value:'icon-standard-cart-put',text:'icon-standard-cart-put'},
{value:'icon-standard-cart-remove',text:'icon-standard-cart-remove'},
{value:'icon-standard-cart',text:'icon-standard-cart'},
{value:'icon-standard-cd-add',text:'icon-standard-cd-add'},
{value:'icon-standard-cd-burn',text:'icon-standard-cd-burn'},
{value:'icon-standard-cd-delete',text:'icon-standard-cd-delete'},
{value:'icon-standard-cd-edit',text:'icon-standard-cd-edit'},
{value:'icon-standard-cd-eject',text:'icon-standard-cd-eject'},
{value:'icon-standard-cd-go',text:'icon-standard-cd-go'},
{value:'icon-standard-cd',text:'icon-standard-cd'},
{value:'icon-standard-chart-bar-add',text:'icon-standard-chart-bar-add'},
{value:'icon-standard-chart-bar-delete',text:'icon-standard-chart-bar-delete'},
{value:'icon-standard-chart-bar-edit',text:'icon-standard-chart-bar-edit'},
{value:'icon-standard-chart-bar-error',text:'icon-standard-chart-bar-error'},
{value:'icon-standard-chart-bar-link',text:'icon-standard-chart-bar-link'},
{value:'icon-standard-chart-bar',text:'icon-standard-chart-bar'},
{value:'icon-standard-chart-curve-add',text:'icon-standard-chart-curve-add'},
{value:'icon-standard-chart-curve-delete',text:'icon-standard-chart-curve-delete'},
{value:'icon-standard-chart-curve-edit',text:'icon-standard-chart-curve-edit'},
{value:'icon-standard-chart-curve-error',text:'icon-standard-chart-curve-error'},
{value:'icon-standard-chart-curve-go',text:'icon-standard-chart-curve-go'},
{value:'icon-standard-chart-curve-link',text:'icon-standard-chart-curve-link'},
{value:'icon-standard-chart-curve',text:'icon-standard-chart-curve'},
{value:'icon-standard-chart-line-add',text:'icon-standard-chart-line-add'},
{value:'icon-standard-chart-line-delete',text:'icon-standard-chart-line-delete'},
{value:'icon-standard-chart-line-edit',text:'icon-standard-chart-line-edit'},
{value:'icon-standard-chart-line-error',text:'icon-standard-chart-line-error'},
{value:'icon-standard-chart-line-link',text:'icon-standard-chart-line-link'},
{value:'icon-standard-chart-line',text:'icon-standard-chart-line'},
{value:'icon-standard-chart-organisation-add',text:'icon-standard-chart-organisation-add'},
{value:'icon-standard-chart-organisation-delete',text:'icon-standard-chart-organisation-delete'},
{value:'icon-standard-chart-organisation',text:'icon-standard-chart-organisation'},
{value:'icon-standard-chart-pie-add',text:'icon-standard-chart-pie-add'},
{value:'icon-standard-chart-pie-delete',text:'icon-standard-chart-pie-delete'},
{value:'icon-standard-chart-pie-edit',text:'icon-standard-chart-pie-edit'},
{value:'icon-standard-chart-pie-error',text:'icon-standard-chart-pie-error'},
{value:'icon-standard-chart-pie-link',text:'icon-standard-chart-pie-link'},
{value:'icon-standard-chart-pie',text:'icon-standard-chart-pie'},
{value:'icon-standard-clock-add',text:'icon-standard-clock-add'},
{value:'icon-standard-clock-delete',text:'icon-standard-clock-delete'},
{value:'icon-standard-clock-edit',text:'icon-standard-clock-edit'},
{value:'icon-standard-clock-error',text:'icon-standard-clock-error'},
{value:'icon-standard-clock-go',text:'icon-standard-clock-go'},
{value:'icon-standard-clock-link',text:'icon-standard-clock-link'},
{value:'icon-standard-clock-pause',text:'icon-standard-clock-pause'},
{value:'icon-standard-clock-play',text:'icon-standard-clock-play'},
{value:'icon-standard-clock-red',text:'icon-standard-clock-red'},
{value:'icon-standard-clock-stop',text:'icon-standard-clock-stop'},
{value:'icon-standard-clock',text:'icon-standard-clock'},
{value:'icon-standard-cog-add',text:'icon-standard-cog-add'},
{value:'icon-standard-cog-delete',text:'icon-standard-cog-delete'},
{value:'icon-standard-cog-edit',text:'icon-standard-cog-edit'},
{value:'icon-standard-cog-error',text:'icon-standard-cog-error'},
{value:'icon-standard-cog-go',text:'icon-standard-cog-go'},
{value:'icon-standard-cog',text:'icon-standard-cog'},
{value:'icon-standard-coins-add',text:'icon-standard-coins-add'},
{value:'icon-standard-coins-delete',text:'icon-standard-coins-delete'},
{value:'icon-standard-coins',text:'icon-standard-coins'},
{value:'icon-standard-color-swatch',text:'icon-standard-color-swatch'},
{value:'icon-standard-color-wheel',text:'icon-standard-color-wheel'},
{value:'icon-standard-comment-add',text:'icon-standard-comment-add'},
{value:'icon-standard-comment-delete',text:'icon-standard-comment-delete'},
{value:'icon-standard-comment-edit',text:'icon-standard-comment-edit'},
{value:'icon-standard-comment',text:'icon-standard-comment'},
{value:'icon-standard-comments-add',text:'icon-standard-comments-add'},
{value:'icon-standard-comments-delete',text:'icon-standard-comments-delete'},
{value:'icon-standard-comments',text:'icon-standard-comments'},
{value:'icon-standard-compress',text:'icon-standard-compress'},
{value:'icon-standard-computer-add',text:'icon-standard-computer-add'},
{value:'icon-standard-computer-delete',text:'icon-standard-computer-delete'},
{value:'icon-standard-computer-edit',text:'icon-standard-computer-edit'},
{value:'icon-standard-computer-error',text:'icon-standard-computer-error'},
{value:'icon-standard-computer-go',text:'icon-standard-computer-go'},
{value:'icon-standard-computer-key',text:'icon-standard-computer-key'},
{value:'icon-standard-computer-link',text:'icon-standard-computer-link'},
{value:'icon-standard-computer',text:'icon-standard-computer'},
{value:'icon-standard-connect',text:'icon-standard-connect'},
{value:'icon-standard-contrast-decrease',text:'icon-standard-contrast-decrease'},
{value:'icon-standard-contrast-high',text:'icon-standard-contrast-high'},
{value:'icon-standard-contrast-increase',text:'icon-standard-contrast-increase'},
{value:'icon-standard-contrast-low',text:'icon-standard-contrast-low'},
{value:'icon-standard-contrast',text:'icon-standard-contrast'},
{value:'icon-standard-control-eject-blue',text:'icon-standard-control-eject-blue'},
{value:'icon-standard-control-eject',text:'icon-standard-control-eject'},
{value:'icon-standard-control-end-blue',text:'icon-standard-control-end-blue'},
{value:'icon-standard-control-end',text:'icon-standard-control-end'},
{value:'icon-standard-control-equalizer-blue',text:'icon-standard-control-equalizer-blue'},
{value:'icon-standard-control-equalizer',text:'icon-standard-control-equalizer'},
{value:'icon-standard-control-fastforward-blue',text:'icon-standard-control-fastforward-blue'},
{value:'icon-standard-control-fastforward',text:'icon-standard-control-fastforward'},
{value:'icon-standard-control-pause-blue',text:'icon-standard-control-pause-blue'},
{value:'icon-standard-control-pause',text:'icon-standard-control-pause'},
{value:'icon-standard-control-play-blue',text:'icon-standard-control-play-blue'},
{value:'icon-standard-control-play',text:'icon-standard-control-play'},
{value:'icon-standard-control-repeat-blue',text:'icon-standard-control-repeat-blue'},
{value:'icon-standard-control-repeat',text:'icon-standard-control-repeat'},
{value:'icon-standard-control-rewind-blue',text:'icon-standard-control-rewind-blue'},
{value:'icon-standard-control-rewind',text:'icon-standard-control-rewind'},
{value:'icon-standard-control-start-blue',text:'icon-standard-control-start-blue'},
{value:'icon-standard-control-start',text:'icon-standard-control-start'},
{value:'icon-standard-control-stop-blue',text:'icon-standard-control-stop-blue'},
{value:'icon-standard-control-stop',text:'icon-standard-control-stop'},
{value:'icon-standard-controller-add',text:'icon-standard-controller-add'},
{value:'icon-standard-controller-delete',text:'icon-standard-controller-delete'},
{value:'icon-standard-controller-error',text:'icon-standard-controller-error'},
{value:'icon-standard-controller',text:'icon-standard-controller'},
{value:'icon-standard-creditcards',text:'icon-standard-creditcards'},
{value:'icon-standard-cross',text:'icon-standard-cross'},
{value:'icon-standard-css-add',text:'icon-standard-css-add'},
{value:'icon-standard-css-delete',text:'icon-standard-css-delete'},
{value:'icon-standard-css-go',text:'icon-standard-css-go'},
{value:'icon-standard-css-valid',text:'icon-standard-css-valid'},
{value:'icon-standard-css',text:'icon-standard-css'},
{value:'icon-standard-cup-add',text:'icon-standard-cup-add'},
{value:'icon-standard-cup-delete',text:'icon-standard-cup-delete'},
{value:'icon-standard-cup-edit',text:'icon-standard-cup-edit'},
{value:'icon-standard-cup-error',text:'icon-standard-cup-error'},
{value:'icon-standard-cup-go',text:'icon-standard-cup-go'},
{value:'icon-standard-cup-key',text:'icon-standard-cup-key'},
{value:'icon-standard-cup-link',text:'icon-standard-cup-link'},
{value:'icon-standard-cup',text:'icon-standard-cup'},
{value:'icon-standard-cursor',text:'icon-standard-cursor'},
{value:'icon-standard-cut-red',text:'icon-standard-cut-red'},
{value:'icon-standard-cut',text:'icon-standard-cut'},
{value:'icon-standard-database-add',text:'icon-standard-database-add'},
{value:'icon-standard-database-connect',text:'icon-standard-database-connect'},
{value:'icon-standard-database-delete',text:'icon-standard-database-delete'},
{value:'icon-standard-database-edit',text:'icon-standard-database-edit'},
{value:'icon-standard-database-error',text:'icon-standard-database-error'},
{value:'icon-standard-database-gear',text:'icon-standard-database-gear'},
{value:'icon-standard-database-go',text:'icon-standard-database-go'},
{value:'icon-standard-database-key',text:'icon-standard-database-key'},
{value:'icon-standard-database-lightning',text:'icon-standard-database-lightning'},
{value:'icon-standard-database-link',text:'icon-standard-database-link'},
{value:'icon-standard-database-refresh',text:'icon-standard-database-refresh'},
{value:'icon-standard-database-save',text:'icon-standard-database-save'},
{value:'icon-standard-database-table',text:'icon-standard-database-table'},
{value:'icon-standard-database',text:'icon-standard-database'},
{value:'icon-standard-date-add',text:'icon-standard-date-add'},
{value:'icon-standard-date-delete',text:'icon-standard-date-delete'},
{value:'icon-standard-date-edit',text:'icon-standard-date-edit'},
{value:'icon-standard-date-error',text:'icon-standard-date-error'},
{value:'icon-standard-date-go',text:'icon-standard-date-go'},
{value:'icon-standard-date-link',text:'icon-standard-date-link'},
{value:'icon-standard-date-magnify',text:'icon-standard-date-magnify'},
{value:'icon-standard-date-next',text:'icon-standard-date-next'},
{value:'icon-standard-date-previous',text:'icon-standard-date-previous'},
{value:'icon-standard-date',text:'icon-standard-date'},
{value:'icon-standard-delete',text:'icon-standard-delete'},
{value:'icon-standard-disconnect',text:'icon-standard-disconnect'},
{value:'icon-standard-disk-multiple',text:'icon-standard-disk-multiple'},
{value:'icon-standard-disk',text:'icon-standard-disk'},
{value:'icon-standard-door-in',text:'icon-standard-door-in'},
{value:'icon-standard-door-open',text:'icon-standard-door-open'},
{value:'icon-standard-door-out',text:'icon-standard-door-out'},
{value:'icon-standard-door',text:'icon-standard-door'},
{value:'icon-standard-down',text:'icon-standard-down'},
{value:'icon-standard-drink-empty',text:'icon-standard-drink-empty'},
{value:'icon-standard-drink',text:'icon-standard-drink'},
{value:'icon-standard-drive-add',text:'icon-standard-drive-add'},
{value:'icon-standard-drive-burn',text:'icon-standard-drive-burn'},
{value:'icon-standard-drive-cd-empty',text:'icon-standard-drive-cd-empty'},
{value:'icon-standard-drive-cd',text:'icon-standard-drive-cd'},
{value:'icon-standard-drive-delete',text:'icon-standard-drive-delete'},
{value:'icon-standard-drive-disk',text:'icon-standard-drive-disk'},
{value:'icon-standard-drive-edit',text:'icon-standard-drive-edit'},
{value:'icon-standard-drive-error',text:'icon-standard-drive-error'},
{value:'icon-standard-drive-go',text:'icon-standard-drive-go'},
{value:'icon-standard-drive-key',text:'icon-standard-drive-key'},
{value:'icon-standard-drive-link',text:'icon-standard-drive-link'},
{value:'icon-standard-drive-magnify',text:'icon-standard-drive-magnify'},
{value:'icon-standard-drive-network',text:'icon-standard-drive-network'},
{value:'icon-standard-drive-rename',text:'icon-standard-drive-rename'},
{value:'icon-standard-drive-user',text:'icon-standard-drive-user'},
{value:'icon-standard-drive-web',text:'icon-standard-drive-web'},
{value:'icon-standard-drive',text:'icon-standard-drive'},
{value:'icon-standard-dvd-add',text:'icon-standard-dvd-add'},
{value:'icon-standard-dvd-delete',text:'icon-standard-dvd-delete'},
{value:'icon-standard-dvd-edit',text:'icon-standard-dvd-edit'},
{value:'icon-standard-dvd-error',text:'icon-standard-dvd-error'},
{value:'icon-standard-dvd-go',text:'icon-standard-dvd-go'},
{value:'icon-standard-dvd-key',text:'icon-standard-dvd-key'},
{value:'icon-standard-dvd-link',text:'icon-standard-dvd-link'},
{value:'icon-standard-dvd',text:'icon-standard-dvd'},
{value:'icon-standard-email-add',text:'icon-standard-email-add'},
{value:'icon-standard-email-attach',text:'icon-standard-email-attach'},
{value:'icon-standard-email-delete',text:'icon-standard-email-delete'},
{value:'icon-standard-email-edit',text:'icon-standard-email-edit'},
{value:'icon-standard-email-error',text:'icon-standard-email-error'},
{value:'icon-standard-email-go',text:'icon-standard-email-go'},
{value:'icon-standard-email-link',text:'icon-standard-email-link'},
{value:'icon-standard-email-open-image',text:'icon-standard-email-open-image'},
{value:'icon-standard-email-open',text:'icon-standard-email-open'},
{value:'icon-standard-email',text:'icon-standard-email'},
{value:'icon-standard-emoticon-evilgrin',text:'icon-standard-emoticon-evilgrin'},
{value:'icon-standard-emoticon-grin',text:'icon-standard-emoticon-grin'},
{value:'icon-standard-emoticon-happy',text:'icon-standard-emoticon-happy'},
{value:'icon-standard-emoticon-smile',text:'icon-standard-emoticon-smile'},
{value:'icon-standard-emoticon-surprised',text:'icon-standard-emoticon-surprised'},
{value:'icon-standard-emoticon-tongue',text:'icon-standard-emoticon-tongue'},
{value:'icon-standard-emoticon-unhappy',text:'icon-standard-emoticon-unhappy'},
{value:'icon-standard-emoticon-waii',text:'icon-standard-emoticon-waii'},
{value:'icon-standard-emoticon-wink',text:'icon-standard-emoticon-wink'},
{value:'icon-standard-error-add',text:'icon-standard-error-add'},
{value:'icon-standard-error-delete',text:'icon-standard-error-delete'},
{value:'icon-standard-error-go',text:'icon-standard-error-go'},
{value:'icon-standard-error',text:'icon-standard-error'},
{value:'icon-standard-exclamation',text:'icon-standard-exclamation'},
{value:'icon-standard-eye',text:'icon-standard-eye'},
{value:'icon-standard-feed-add',text:'icon-standard-feed-add'},
{value:'icon-standard-feed-delete',text:'icon-standard-feed-delete'},
{value:'icon-standard-feed-disk',text:'icon-standard-feed-disk'},
{value:'icon-standard-feed-edit',text:'icon-standard-feed-edit'},
{value:'icon-standard-feed-error',text:'icon-standard-feed-error'},
{value:'icon-standard-feed-go',text:'icon-standard-feed-go'},
{value:'icon-standard-feed-key',text:'icon-standard-feed-key'},
{value:'icon-standard-feed-link',text:'icon-standard-feed-link'},
{value:'icon-standard-feed-magnify',text:'icon-standard-feed-magnify'},
{value:'icon-standard-feed',text:'icon-standard-feed'},
{value:'icon-standard-female',text:'icon-standard-female'},
{value:'icon-standard-film-add',text:'icon-standard-film-add'},
{value:'icon-standard-film-delete',text:'icon-standard-film-delete'},
{value:'icon-standard-film-edit',text:'icon-standard-film-edit'},
{value:'icon-standard-film-error',text:'icon-standard-film-error'},
{value:'icon-standard-film-go',text:'icon-standard-film-go'},
{value:'icon-standard-film-key',text:'icon-standard-film-key'},
{value:'icon-standard-film-link',text:'icon-standard-film-link'},
{value:'icon-standard-film-save',text:'icon-standard-film-save'},
{value:'icon-standard-film',text:'icon-standard-film'},
{value:'icon-standard-find',text:'icon-standard-find'},
{value:'icon-standard-flag-blue',text:'icon-standard-flag-blue'},
{value:'icon-standard-flag-green',text:'icon-standard-flag-green'},
{value:'icon-standard-flag-orange',text:'icon-standard-flag-orange'},
{value:'icon-standard-flag-pink',text:'icon-standard-flag-pink'},
{value:'icon-standard-flag-purple',text:'icon-standard-flag-purple'},
{value:'icon-standard-flag-red',text:'icon-standard-flag-red'},
{value:'icon-standard-flag-yellow',text:'icon-standard-flag-yellow'},
{value:'icon-standard-folder-add',text:'icon-standard-folder-add'},
{value:'icon-standard-folder-bell',text:'icon-standard-folder-bell'},
{value:'icon-standard-folder-brick',text:'icon-standard-folder-brick'},
{value:'icon-standard-folder-bug',text:'icon-standard-folder-bug'},
{value:'icon-standard-folder-camera',text:'icon-standard-folder-camera'},
{value:'icon-standard-folder-close',text:'icon-standard-folder-close'},
{value:'icon-standard-folder-database',text:'icon-standard-folder-database'},
{value:'icon-standard-folder-delete',text:'icon-standard-folder-delete'},
{value:'icon-standard-folder-edit',text:'icon-standard-folder-edit'},
{value:'icon-standard-folder-error',text:'icon-standard-folder-error'},
{value:'icon-standard-folder-explore',text:'icon-standard-folder-explore'},
{value:'icon-standard-folder-feed',text:'icon-standard-folder-feed'},
{value:'icon-standard-folder-find',text:'icon-standard-folder-find'},
{value:'icon-standard-folder-go',text:'icon-standard-folder-go'},
{value:'icon-standard-folder-heart',text:'icon-standard-folder-heart'},
{value:'icon-standard-folder-image',text:'icon-standard-folder-image'},
{value:'icon-standard-folder-key',text:'icon-standard-folder-key'},
{value:'icon-standard-folder-lightbulb',text:'icon-standard-folder-lightbulb'},
{value:'icon-standard-folder-link',text:'icon-standard-folder-link'},
{value:'icon-standard-folder-magnify',text:'icon-standard-folder-magnify'},
{value:'icon-standard-folder-open',text:'icon-standard-folder-open'},
{value:'icon-standard-folder-page-white',text:'icon-standard-folder-page-white'},
{value:'icon-standard-folder-page',text:'icon-standard-folder-page'},
{value:'icon-standard-folder-palette',text:'icon-standard-folder-palette'},
{value:'icon-standard-folder-picture',text:'icon-standard-folder-picture'},
{value:'icon-standard-folder-star',text:'icon-standard-folder-star'},
{value:'icon-standard-folder-table',text:'icon-standard-folder-table'},
{value:'icon-standard-folder-user',text:'icon-standard-folder-user'},
{value:'icon-standard-folder-wrench',text:'icon-standard-folder-wrench'},
{value:'icon-standard-folder',text:'icon-standard-folder'},
{value:'icon-standard-font-add',text:'icon-standard-font-add'},
{value:'icon-standard-font-delete',text:'icon-standard-font-delete'},
{value:'icon-standard-font-go',text:'icon-standard-font-go'},
{value:'icon-standard-font',text:'icon-standard-font'},
{value:'icon-standard-group-add',text:'icon-standard-group-add'},
{value:'icon-standard-group-delete',text:'icon-standard-group-delete'},
{value:'icon-standard-group-edit',text:'icon-standard-group-edit'},
{value:'icon-standard-group-error',text:'icon-standard-group-error'},
{value:'icon-standard-group-gear',text:'icon-standard-group-gear'},
{value:'icon-standard-group-go',text:'icon-standard-group-go'},
{value:'icon-standard-group-key',text:'icon-standard-group-key'},
{value:'icon-standard-group-link',text:'icon-standard-group-link'},
{value:'icon-standard-group',text:'icon-standard-group'},
{value:'icon-standard-heart-add',text:'icon-standard-heart-add'},
{value:'icon-standard-heart-delete',text:'icon-standard-heart-delete'},
{value:'icon-standard-heart',text:'icon-standard-heart'},
{value:'icon-standard-help',text:'icon-standard-help'},
{value:'icon-standard-hmenu-asc.gif',text:'icon-standard-hmenu-asc.gif'},
{value:'icon-standard-hmenu-desc.gif',text:'icon-standard-hmenu-desc.gif'},
{value:'icon-standard-hourglass-add',text:'icon-standard-hourglass-add'},
{value:'icon-standard-hourglass-delete',text:'icon-standard-hourglass-delete'},
{value:'icon-standard-hourglass-go',text:'icon-standard-hourglass-go'},
{value:'icon-standard-hourglass-link',text:'icon-standard-hourglass-link'},
{value:'icon-standard-hourglass',text:'icon-standard-hourglass'},
{value:'icon-standard-house-go',text:'icon-standard-house-go'},
{value:'icon-standard-house-link',text:'icon-standard-house-link'},
{value:'icon-standard-house',text:'icon-standard-house'},
{value:'icon-standard-html-add',text:'icon-standard-html-add'},
{value:'icon-standard-html-delete',text:'icon-standard-html-delete'},
{value:'icon-standard-html-go',text:'icon-standard-html-go'},
{value:'icon-standard-html-valid',text:'icon-standard-html-valid'},
{value:'icon-standard-html',text:'icon-standard-html'},
{value:'icon-standard-image-add',text:'icon-standard-image-add'},
{value:'icon-standard-image-delete',text:'icon-standard-image-delete'},
{value:'icon-standard-image-edit',text:'icon-standard-image-edit'},
{value:'icon-standard-image-link',text:'icon-standard-image-link'},
{value:'icon-standard-image',text:'icon-standard-image'},
{value:'icon-standard-images',text:'icon-standard-images'},
{value:'icon-standard-information',text:'icon-standard-information'},
{value:'icon-standard-ipod-cast-add',text:'icon-standard-ipod-cast-add'},
{value:'icon-standard-ipod-cast-delete',text:'icon-standard-ipod-cast-delete'},
{value:'icon-standard-ipod-cast',text:'icon-standard-ipod-cast'},
{value:'icon-standard-ipod-sound',text:'icon-standard-ipod-sound'},
{value:'icon-standard-ipod',text:'icon-standard-ipod'},
{value:'icon-standard-joystick-add',text:'icon-standard-joystick-add'},
{value:'icon-standard-joystick-delete',text:'icon-standard-joystick-delete'},
{value:'icon-standard-joystick-error',text:'icon-standard-joystick-error'},
{value:'icon-standard-joystick',text:'icon-standard-joystick'},
{value:'icon-standard-key-add',text:'icon-standard-key-add'},
{value:'icon-standard-key-delete',text:'icon-standard-key-delete'},
{value:'icon-standard-key-go',text:'icon-standard-key-go'},
{value:'icon-standard-key',text:'icon-standard-key'},
{value:'icon-standard-keyboard-add',text:'icon-standard-keyboard-add'},
{value:'icon-standard-keyboard-delete',text:'icon-standard-keyboard-delete'},
{value:'icon-standard-keyboard-magnify',text:'icon-standard-keyboard-magnify'},
{value:'icon-standard-keyboard',text:'icon-standard-keyboard'},
{value:'icon-standard-layers',text:'icon-standard-layers'},
{value:'icon-standard-layout-add',text:'icon-standard-layout-add'},
{value:'icon-standard-layout-content',text:'icon-standard-layout-content'},
{value:'icon-standard-layout-delete',text:'icon-standard-layout-delete'},
{value:'icon-standard-layout-edit',text:'icon-standard-layout-edit'},
{value:'icon-standard-layout-error',text:'icon-standard-layout-error'},
{value:'icon-standard-layout-header',text:'icon-standard-layout-header'},
{value:'icon-standard-layout-link',text:'icon-standard-layout-link'},
{value:'icon-standard-layout-sidebar',text:'icon-standard-layout-sidebar'},
{value:'icon-standard-layout',text:'icon-standard-layout'},
{value:'icon-standard-lightbulb-add',text:'icon-standard-lightbulb-add'},
{value:'icon-standard-lightbulb-delete',text:'icon-standard-lightbulb-delete'},
{value:'icon-standard-lightbulb-off',text:'icon-standard-lightbulb-off'},
{value:'icon-standard-lightbulb',text:'icon-standard-lightbulb'},
{value:'icon-standard-lightning-add',text:'icon-standard-lightning-add'},
{value:'icon-standard-lightning-delete',text:'icon-standard-lightning-delete'},
{value:'icon-standard-lightning-go',text:'icon-standard-lightning-go'},
{value:'icon-standard-lightning',text:'icon-standard-lightning'},
{value:'icon-standard-link-add',text:'icon-standard-link-add'},
{value:'icon-standard-link-break',text:'icon-standard-link-break'},
{value:'icon-standard-link-delete',text:'icon-standard-link-delete'},
{value:'icon-standard-link-edit',text:'icon-standard-link-edit'},
{value:'icon-standard-link-error',text:'icon-standard-link-error'},
{value:'icon-standard-link-go',text:'icon-standard-link-go'},
{value:'icon-standard-link',text:'icon-standard-link'},
{value:'icon-standard-lock-add',text:'icon-standard-lock-add'},
{value:'icon-standard-lock-break',text:'icon-standard-lock-break'},
{value:'icon-standard-lock-delete',text:'icon-standard-lock-delete'},
{value:'icon-standard-lock-edit',text:'icon-standard-lock-edit'},
{value:'icon-standard-lock-go',text:'icon-standard-lock-go'},
{value:'icon-standard-lock-open',text:'icon-standard-lock-open'},
{value:'icon-standard-lock',text:'icon-standard-lock'},
{value:'icon-standard-lorry-add',text:'icon-standard-lorry-add'},
{value:'icon-standard-lorry-delete',text:'icon-standard-lorry-delete'},
{value:'icon-standard-lorry-error',text:'icon-standard-lorry-error'},
{value:'icon-standard-lorry-flatbed',text:'icon-standard-lorry-flatbed'},
{value:'icon-standard-lorry-go',text:'icon-standard-lorry-go'},
{value:'icon-standard-lorry-link',text:'icon-standard-lorry-link'},
{value:'icon-standard-lorry',text:'icon-standard-lorry'},
{value:'icon-standard-magifier-zoom-out',text:'icon-standard-magifier-zoom-out'},
{value:'icon-standard-magnifier-zoom-in',text:'icon-standard-magnifier-zoom-in'},
{value:'icon-standard-magnifier',text:'icon-standard-magnifier'},
{value:'icon-standard-male',text:'icon-standard-male'},
{value:'icon-standard-map-add',text:'icon-standard-map-add'},
{value:'icon-standard-map-delete',text:'icon-standard-map-delete'},
{value:'icon-standard-map-edit',text:'icon-standard-map-edit'},
{value:'icon-standard-map-go',text:'icon-standard-map-go'},
{value:'icon-standard-map-magnify',text:'icon-standard-map-magnify'},
{value:'icon-standard-map',text:'icon-standard-map'},
{value:'icon-standard-medal-bronze-1',text:'icon-standard-medal-bronze-1'},
{value:'icon-standard-medal-bronze-2',text:'icon-standard-medal-bronze-2'},
{value:'icon-standard-medal-bronze-3',text:'icon-standard-medal-bronze-3'},
{value:'icon-standard-medal-bronze-add',text:'icon-standard-medal-bronze-add'},
{value:'icon-standard-medal-bronze-delete',text:'icon-standard-medal-bronze-delete'},
{value:'icon-standard-medal-gold-1',text:'icon-standard-medal-gold-1'},
{value:'icon-standard-medal-gold-2',text:'icon-standard-medal-gold-2'},
{value:'icon-standard-medal-gold-3',text:'icon-standard-medal-gold-3'},
{value:'icon-standard-medal-gold-add',text:'icon-standard-medal-gold-add'},
{value:'icon-standard-medal-gold-delete',text:'icon-standard-medal-gold-delete'},
{value:'icon-standard-medal-silver-1',text:'icon-standard-medal-silver-1'},
{value:'icon-standard-medal-silver-2',text:'icon-standard-medal-silver-2'},
{value:'icon-standard-medal-silver-3',text:'icon-standard-medal-silver-3'},
{value:'icon-standard-medal-silver-add',text:'icon-standard-medal-silver-add'},
{value:'icon-standard-medal-silver-delete',text:'icon-standard-medal-silver-delete'},
{value:'icon-standard-money-add',text:'icon-standard-money-add'},
{value:'icon-standard-money-delete',text:'icon-standard-money-delete'},
{value:'icon-standard-money-dollar',text:'icon-standard-money-dollar'},
{value:'icon-standard-money-euro',text:'icon-standard-money-euro'},
{value:'icon-standard-money-pound',text:'icon-standard-money-pound'},
{value:'icon-standard-money-yen',text:'icon-standard-money-yen'},
{value:'icon-standard-money',text:'icon-standard-money'},
{value:'icon-standard-monitor-add',text:'icon-standard-monitor-add'},
{value:'icon-standard-monitor-delete',text:'icon-standard-monitor-delete'},
{value:'icon-standard-monitor-edit',text:'icon-standard-monitor-edit'},
{value:'icon-standard-monitor-error',text:'icon-standard-monitor-error'},
{value:'icon-standard-monitor-go',text:'icon-standard-monitor-go'},
{value:'icon-standard-monitor-lightning',text:'icon-standard-monitor-lightning'},
{value:'icon-standard-monitor-link',text:'icon-standard-monitor-link'},
{value:'icon-standard-monitor',text:'icon-standard-monitor'},
{value:'icon-standard-mouse-add',text:'icon-standard-mouse-add'},
{value:'icon-standard-mouse-delete',text:'icon-standard-mouse-delete'},
{value:'icon-standard-mouse-error',text:'icon-standard-mouse-error'},
{value:'icon-standard-mouse',text:'icon-standard-mouse'},
{value:'icon-standard-music',text:'icon-standard-music'},
{value:'icon-standard-new',text:'icon-standard-new'},
{value:'icon-standard-newspaper-add',text:'icon-standard-newspaper-add'},
{value:'icon-standard-newspaper-delete',text:'icon-standard-newspaper-delete'},
{value:'icon-standard-newspaper-go',text:'icon-standard-newspaper-go'},
{value:'icon-standard-newspaper-link',text:'icon-standard-newspaper-link'},
{value:'icon-standard-newspaper',text:'icon-standard-newspaper'},
{value:'icon-standard-note-add',text:'icon-standard-note-add'},
{value:'icon-standard-note-delete',text:'icon-standard-note-delete'},
{value:'icon-standard-note-edit',text:'icon-standard-note-edit'},
{value:'icon-standard-note-error',text:'icon-standard-note-error'},
{value:'icon-standard-note-go',text:'icon-standard-note-go'},
{value:'icon-standard-note',text:'icon-standard-note'},
{value:'icon-standard-overlays',text:'icon-standard-overlays'},
{value:'icon-standard-package-add',text:'icon-standard-package-add'},
{value:'icon-standard-package-delete',text:'icon-standard-package-delete'},
{value:'icon-standard-package-go',text:'icon-standard-package-go'},
{value:'icon-standard-package-green',text:'icon-standard-package-green'},
{value:'icon-standard-package-link',text:'icon-standard-package-link'},
{value:'icon-standard-package',text:'icon-standard-package'},
{value:'icon-standard-page-add',text:'icon-standard-page-add'},
{value:'icon-standard-page-attach',text:'icon-standard-page-attach'},
{value:'icon-standard-page-code',text:'icon-standard-page-code'},
{value:'icon-standard-page-copy',text:'icon-standard-page-copy'},
{value:'icon-standard-page-delete',text:'icon-standard-page-delete'},
{value:'icon-standard-page-edit',text:'icon-standard-page-edit'},
{value:'icon-standard-page-error',text:'icon-standard-page-error'},
{value:'icon-standard-page-excel',text:'icon-standard-page-excel'},
{value:'icon-standard-page-find',text:'icon-standard-page-find'},
{value:'icon-standard-page-gear',text:'icon-standard-page-gear'},
{value:'icon-standard-page-go',text:'icon-standard-page-go'},
{value:'icon-standard-page-green',text:'icon-standard-page-green'},
{value:'icon-standard-page-key',text:'icon-standard-page-key'},
{value:'icon-standard-page-lightning',text:'icon-standard-page-lightning'},
{value:'icon-standard-page-link',text:'icon-standard-page-link'},
{value:'icon-standard-page-paintbrush',text:'icon-standard-page-paintbrush'},
{value:'icon-standard-page-paste',text:'icon-standard-page-paste'},
{value:'icon-standard-page-red',text:'icon-standard-page-red'},
{value:'icon-standard-page-refresh',text:'icon-standard-page-refresh'},
{value:'icon-standard-page-save',text:'icon-standard-page-save'},
{value:'icon-standard-page-white-acrobat',text:'icon-standard-page-white-acrobat'},
{value:'icon-standard-page-white-actionscript',text:'icon-standard-page-white-actionscript'},
{value:'icon-standard-page-white-add',text:'icon-standard-page-white-add'},
{value:'icon-standard-page-white-c',text:'icon-standard-page-white-c'},
{value:'icon-standard-page-white-camera',text:'icon-standard-page-white-camera'},
{value:'icon-standard-page-white-cd',text:'icon-standard-page-white-cd'},
{value:'icon-standard-page-white-code-red',text:'icon-standard-page-white-code-red'},
{value:'icon-standard-page-white-code',text:'icon-standard-page-white-code'},
{value:'icon-standard-page-white-coldfusion',text:'icon-standard-page-white-coldfusion'},
{value:'icon-standard-page-white-compressed',text:'icon-standard-page-white-compressed'},
{value:'icon-standard-page-white-copy',text:'icon-standard-page-white-copy'},
{value:'icon-standard-page-white-cplusplus',text:'icon-standard-page-white-cplusplus'},
{value:'icon-standard-page-white-csharp',text:'icon-standard-page-white-csharp'},
{value:'icon-standard-page-white-cup',text:'icon-standard-page-white-cup'},
{value:'icon-standard-page-white-database',text:'icon-standard-page-white-database'},
{value:'icon-standard-page-white-delete',text:'icon-standard-page-white-delete'},
{value:'icon-standard-page-white-dvd',text:'icon-standard-page-white-dvd'},
{value:'icon-standard-page-white-edit',text:'icon-standard-page-white-edit'},
{value:'icon-standard-page-white-error',text:'icon-standard-page-white-error'},
{value:'icon-standard-page-white-excel',text:'icon-standard-page-white-excel'},
{value:'icon-standard-page-white-find',text:'icon-standard-page-white-find'},
{value:'icon-standard-page-white-flash',text:'icon-standard-page-white-flash'},
{value:'icon-standard-page-white-freehand',text:'icon-standard-page-white-freehand'},
{value:'icon-standard-page-white-gear',text:'icon-standard-page-white-gear'},
{value:'icon-standard-page-white-get',text:'icon-standard-page-white-get'},
{value:'icon-standard-page-white-go',text:'icon-standard-page-white-go'},
{value:'icon-standard-page-white-h',text:'icon-standard-page-white-h'},
{value:'icon-standard-page-white-horizontal',text:'icon-standard-page-white-horizontal'},
{value:'icon-standard-page-white-key',text:'icon-standard-page-white-key'},
{value:'icon-standard-page-white-lightning',text:'icon-standard-page-white-lightning'},
{value:'icon-standard-page-white-link',text:'icon-standard-page-white-link'},
{value:'icon-standard-page-white-magnify',text:'icon-standard-page-white-magnify'},
{value:'icon-standard-page-white-medal',text:'icon-standard-page-white-medal'},
{value:'icon-standard-page-white-office',text:'icon-standard-page-white-office'},
{value:'icon-standard-page-white-paint',text:'icon-standard-page-white-paint'},
{value:'icon-standard-page-white-paintbrush',text:'icon-standard-page-white-paintbrush'},
{value:'icon-standard-page-white-paste',text:'icon-standard-page-white-paste'},
{value:'icon-standard-page-white-php',text:'icon-standard-page-white-php'},
{value:'icon-standard-page-white-picture',text:'icon-standard-page-white-picture'},
{value:'icon-standard-page-white-powerpoint',text:'icon-standard-page-white-powerpoint'},
{value:'icon-standard-page-white-put',text:'icon-standard-page-white-put'},
{value:'icon-standard-page-white-ruby',text:'icon-standard-page-white-ruby'},
{value:'icon-standard-page-white-stack',text:'icon-standard-page-white-stack'},
{value:'icon-standard-page-white-star',text:'icon-standard-page-white-star'},
{value:'icon-standard-page-white-swoosh',text:'icon-standard-page-white-swoosh'},
{value:'icon-standard-page-white-text-width',text:'icon-standard-page-white-text-width'},
{value:'icon-standard-page-white-text',text:'icon-standard-page-white-text'},
{value:'icon-standard-page-white-tux',text:'icon-standard-page-white-tux'},
{value:'icon-standard-page-white-vector',text:'icon-standard-page-white-vector'},
{value:'icon-standard-page-white-visualstudio',text:'icon-standard-page-white-visualstudio'},
{value:'icon-standard-page-white-width',text:'icon-standard-page-white-width'},
{value:'icon-standard-page-white-word',text:'icon-standard-page-white-word'},
{value:'icon-standard-page-white-world',text:'icon-standard-page-white-world'},
{value:'icon-standard-page-white-wrench',text:'icon-standard-page-white-wrench'},
{value:'icon-standard-page-white-zip',text:'icon-standard-page-white-zip'},
{value:'icon-standard-page-white',text:'icon-standard-page-white'},
{value:'icon-standard-page-word',text:'icon-standard-page-word'},
{value:'icon-standard-page-world',text:'icon-standard-page-world'},
{value:'icon-standard-page',text:'icon-standard-page'},
{value:'icon-standard-paintbrush',text:'icon-standard-paintbrush'},
{value:'icon-standard-paintcan',text:'icon-standard-paintcan'},
{value:'icon-standard-palette',text:'icon-standard-palette'},
{value:'icon-standard-paste-plain',text:'icon-standard-paste-plain'},
{value:'icon-standard-paste-word',text:'icon-standard-paste-word'},
{value:'icon-standard-pencil-add',text:'icon-standard-pencil-add'},
{value:'icon-standard-pencil-delete',text:'icon-standard-pencil-delete'},
{value:'icon-standard-pencil-go',text:'icon-standard-pencil-go'},
{value:'icon-standard-pencil',text:'icon-standard-pencil'},
{value:'icon-standard-phone-add',text:'icon-standard-phone-add'},
{value:'icon-standard-phone-delete',text:'icon-standard-phone-delete'},
{value:'icon-standard-phone-sound',text:'icon-standard-phone-sound'},
{value:'icon-standard-phone',text:'icon-standard-phone'},
{value:'icon-standard-photo-add',text:'icon-standard-photo-add'},
{value:'icon-standard-photo-delete',text:'icon-standard-photo-delete'},
{value:'icon-standard-photo-link',text:'icon-standard-photo-link'},
{value:'icon-standard-photo',text:'icon-standard-photo'},
{value:'icon-standard-photos',text:'icon-standard-photos'},
{value:'icon-standard-picture-add',text:'icon-standard-picture-add'},
{value:'icon-standard-picture-delete',text:'icon-standard-picture-delete'},
{value:'icon-standard-picture-edit',text:'icon-standard-picture-edit'},
{value:'icon-standard-picture-empty',text:'icon-standard-picture-empty'},
{value:'icon-standard-picture-error',text:'icon-standard-picture-error'},
{value:'icon-standard-picture-go',text:'icon-standard-picture-go'},
{value:'icon-standard-picture-key',text:'icon-standard-picture-key'},
{value:'icon-standard-picture-link',text:'icon-standard-picture-link'},
{value:'icon-standard-picture-save',text:'icon-standard-picture-save'},
{value:'icon-standard-picture',text:'icon-standard-picture'},
{value:'icon-standard-pictures',text:'icon-standard-pictures'},
{value:'icon-standard-pilcrow',text:'icon-standard-pilcrow'},
{value:'icon-standard-pill-add',text:'icon-standard-pill-add'},
{value:'icon-standard-pill-delete',text:'icon-standard-pill-delete'},
{value:'icon-standard-pill-go',text:'icon-standard-pill-go'},
{value:'icon-standard-pill',text:'icon-standard-pill'},
{value:'icon-standard-plugin-add',text:'icon-standard-plugin-add'},
{value:'icon-standard-plugin-delete',text:'icon-standard-plugin-delete'},
{value:'icon-standard-plugin-disabled',text:'icon-standard-plugin-disabled'},
{value:'icon-standard-plugin-edit',text:'icon-standard-plugin-edit'},
{value:'icon-standard-plugin-error',text:'icon-standard-plugin-error'},
{value:'icon-standard-plugin-go',text:'icon-standard-plugin-go'},
{value:'icon-standard-plugin-link',text:'icon-standard-plugin-link'},
{value:'icon-standard-plugin',text:'icon-standard-plugin'},
{value:'icon-standard-printer-add',text:'icon-standard-printer-add'},
{value:'icon-standard-printer-delete',text:'icon-standard-printer-delete'},
{value:'icon-standard-printer-empty',text:'icon-standard-printer-empty'},
{value:'icon-standard-printer-error',text:'icon-standard-printer-error'},
{value:'icon-standard-printer',text:'icon-standard-printer'},
{value:'icon-standard-rainbow',text:'icon-standard-rainbow'},
{value:'icon-standard-report-add',text:'icon-standard-report-add'},
{value:'icon-standard-report-delete',text:'icon-standard-report-delete'},
{value:'icon-standard-report-disk',text:'icon-standard-report-disk'},
{value:'icon-standard-report-edit',text:'icon-standard-report-edit'},
{value:'icon-standard-report-go',text:'icon-standard-report-go'},
{value:'icon-standard-report-key',text:'icon-standard-report-key'},
{value:'icon-standard-report-link',text:'icon-standard-report-link'},
{value:'icon-standard-report-magnify',text:'icon-standard-report-magnify'},
{value:'icon-standard-report-picture',text:'icon-standard-report-picture'},
{value:'icon-standard-report-user',text:'icon-standard-report-user'},
{value:'icon-standard-report-word',text:'icon-standard-report-word'},
{value:'icon-standard-report',text:'icon-standard-report'},
{value:'icon-standard-resultset-first',text:'icon-standard-resultset-first'},
{value:'icon-standard-resultset-last',text:'icon-standard-resultset-last'},
{value:'icon-standard-resultset-next',text:'icon-standard-resultset-next'},
{value:'icon-standard-resultset-previous',text:'icon-standard-resultset-previous'},
{value:'icon-standard-rosette',text:'icon-standard-rosette'},
{value:'icon-standard-rss-add',text:'icon-standard-rss-add'},
{value:'icon-standard-rss-delete',text:'icon-standard-rss-delete'},
{value:'icon-standard-rss-go',text:'icon-standard-rss-go'},
{value:'icon-standard-rss-valid',text:'icon-standard-rss-valid'},
{value:'icon-standard-rss',text:'icon-standard-rss'},
{value:'icon-standard-ruby-add',text:'icon-standard-ruby-add'},
{value:'icon-standard-ruby-delete',text:'icon-standard-ruby-delete'},
{value:'icon-standard-ruby-gear',text:'icon-standard-ruby-gear'},
{value:'icon-standard-ruby-get',text:'icon-standard-ruby-get'},
{value:'icon-standard-ruby-go',text:'icon-standard-ruby-go'},
{value:'icon-standard-ruby-key',text:'icon-standard-ruby-key'},
{value:'icon-standard-ruby-link',text:'icon-standard-ruby-link'},
{value:'icon-standard-ruby-put',text:'icon-standard-ruby-put'},
{value:'icon-standard-ruby',text:'icon-standard-ruby'},
{value:'icon-standard-script-add',text:'icon-standard-script-add'},
{value:'icon-standard-script-code-red',text:'icon-standard-script-code-red'},
{value:'icon-standard-script-code',text:'icon-standard-script-code'},
{value:'icon-standard-script-delete',text:'icon-standard-script-delete'},
{value:'icon-standard-script-edit',text:'icon-standard-script-edit'},
{value:'icon-standard-script-error',text:'icon-standard-script-error'},
{value:'icon-standard-script-gear',text:'icon-standard-script-gear'},
{value:'icon-standard-script-go',text:'icon-standard-script-go'},
{value:'icon-standard-script-key',text:'icon-standard-script-key'},
{value:'icon-standard-script-lightning',text:'icon-standard-script-lightning'},
{value:'icon-standard-script-link',text:'icon-standard-script-link'},
{value:'icon-standard-script-palette',text:'icon-standard-script-palette'},
{value:'icon-standard-script-save',text:'icon-standard-script-save'},
{value:'icon-standard-script',text:'icon-standard-script'},
{value:'icon-standard-server-add',text:'icon-standard-server-add'},
{value:'icon-standard-server-chart',text:'icon-standard-server-chart'},
{value:'icon-standard-server-compressed',text:'icon-standard-server-compressed'},
{value:'icon-standard-server-connect',text:'icon-standard-server-connect'},
{value:'icon-standard-server-database',text:'icon-standard-server-database'},
{value:'icon-standard-server-delete',text:'icon-standard-server-delete'},
{value:'icon-standard-server-edit',text:'icon-standard-server-edit'},
{value:'icon-standard-server-error',text:'icon-standard-server-error'},
{value:'icon-standard-server-go',text:'icon-standard-server-go'},
{value:'icon-standard-server-key',text:'icon-standard-server-key'},
{value:'icon-standard-server-lightning',text:'icon-standard-server-lightning'},
{value:'icon-standard-server-link',text:'icon-standard-server-link'},
{value:'icon-standard-server-uncompressed',text:'icon-standard-server-uncompressed'},
{value:'icon-standard-server',text:'icon-standard-server'},
{value:'icon-standard-shading',text:'icon-standard-shading'},
{value:'icon-standard-shape-align-bottom',text:'icon-standard-shape-align-bottom'},
{value:'icon-standard-shape-align-center',text:'icon-standard-shape-align-center'},
{value:'icon-standard-shape-align-left',text:'icon-standard-shape-align-left'},
{value:'icon-standard-shape-align-middle',text:'icon-standard-shape-align-middle'},
{value:'icon-standard-shape-align-right',text:'icon-standard-shape-align-right'},
{value:'icon-standard-shape-align-top',text:'icon-standard-shape-align-top'},
{value:'icon-standard-shape-flip-horizontal',text:'icon-standard-shape-flip-horizontal'},
{value:'icon-standard-shape-flip-vertical',text:'icon-standard-shape-flip-vertical'},
{value:'icon-standard-shape-group',text:'icon-standard-shape-group'},
{value:'icon-standard-shape-handles',text:'icon-standard-shape-handles'},
{value:'icon-standard-shape-move-back',text:'icon-standard-shape-move-back'},
{value:'icon-standard-shape-move-backwards',text:'icon-standard-shape-move-backwards'},
{value:'icon-standard-shape-move-forwards',text:'icon-standard-shape-move-forwards'},
{value:'icon-standard-shape-move-front',text:'icon-standard-shape-move-front'},
{value:'icon-standard-shape-rotate-anticlockwise',text:'icon-standard-shape-rotate-anticlockwise'},
{value:'icon-standard-shape-rotate-clockwise',text:'icon-standard-shape-rotate-clockwise'},
{value:'icon-standard-shape-square-add',text:'icon-standard-shape-square-add'},
{value:'icon-standard-shape-square-delete',text:'icon-standard-shape-square-delete'},
{value:'icon-standard-shape-square-edit',text:'icon-standard-shape-square-edit'},
{value:'icon-standard-shape-square-error',text:'icon-standard-shape-square-error'},
{value:'icon-standard-shape-square-go',text:'icon-standard-shape-square-go'},
{value:'icon-standard-shape-square-key',text:'icon-standard-shape-square-key'},
{value:'icon-standard-shape-square-link',text:'icon-standard-shape-square-link'},
{value:'icon-standard-shape-square',text:'icon-standard-shape-square'},
{value:'icon-standard-shape-ungroup',text:'icon-standard-shape-ungroup'},
{value:'icon-standard-shield-add',text:'icon-standard-shield-add'},
{value:'icon-standard-shield-delete',text:'icon-standard-shield-delete'},
{value:'icon-standard-shield-go',text:'icon-standard-shield-go'},
{value:'icon-standard-shield',text:'icon-standard-shield'},
{value:'icon-standard-sitemap-color',text:'icon-standard-sitemap-color'},
{value:'icon-standard-sitemap',text:'icon-standard-sitemap'},
{value:'icon-standard-sound-add',text:'icon-standard-sound-add'},
{value:'icon-standard-sound-delete',text:'icon-standard-sound-delete'},
{value:'icon-standard-sound-low',text:'icon-standard-sound-low'},
{value:'icon-standard-sound-mute',text:'icon-standard-sound-mute'},
{value:'icon-standard-sound-none',text:'icon-standard-sound-none'},
{value:'icon-standard-sound',text:'icon-standard-sound'},
{value:'icon-standard-spellcheck',text:'icon-standard-spellcheck'},
{value:'icon-standard-sport-8ball',text:'icon-standard-sport-8ball'},
{value:'icon-standard-sport-basketball',text:'icon-standard-sport-basketball'},
{value:'icon-standard-sport-football',text:'icon-standard-sport-football'},
{value:'icon-standard-sport-golf',text:'icon-standard-sport-golf'},
{value:'icon-standard-sport-raquet',text:'icon-standard-sport-raquet'},
{value:'icon-standard-sport-shuttlecock',text:'icon-standard-sport-shuttlecock'},
{value:'icon-standard-sport-soccer',text:'icon-standard-sport-soccer'},
{value:'icon-standard-sport-tennis',text:'icon-standard-sport-tennis'},
{value:'icon-standard-star',text:'icon-standard-star'},
{value:'icon-standard-status-away',text:'icon-standard-status-away'},
{value:'icon-standard-status-busy',text:'icon-standard-status-busy'},
{value:'icon-standard-status-offline',text:'icon-standard-status-offline'},
{value:'icon-standard-status-online',text:'icon-standard-status-online'},
{value:'icon-standard-stop',text:'icon-standard-stop'},
{value:'icon-standard-style-add',text:'icon-standard-style-add'},
{value:'icon-standard-style-delete',text:'icon-standard-style-delete'},
{value:'icon-standard-style-edit',text:'icon-standard-style-edit'},
{value:'icon-standard-style-go',text:'icon-standard-style-go'},
{value:'icon-standard-style',text:'icon-standard-style'},
{value:'icon-standard-sum',text:'icon-standard-sum'},
{value:'icon-standard-tab-add',text:'icon-standard-tab-add'},
{value:'icon-standard-tab-close-left',text:'icon-standard-tab-close-left'},
{value:'icon-standard-tab-close-right',text:'icon-standard-tab-close-right'},
{value:'icon-standard-tab-delete',text:'icon-standard-tab-delete'},
{value:'icon-standard-tab-edit',text:'icon-standard-tab-edit'},
{value:'icon-standard-tab-go',text:'icon-standard-tab-go'},
{value:'icon-standard-tab',text:'icon-standard-tab'},
{value:'icon-standard-table-add',text:'icon-standard-table-add'},
{value:'icon-standard-table-delete',text:'icon-standard-table-delete'},
{value:'icon-standard-table-edit',text:'icon-standard-table-edit'},
{value:'icon-standard-table-error',text:'icon-standard-table-error'},
{value:'icon-standard-table-gear',text:'icon-standard-table-gear'},
{value:'icon-standard-table-go',text:'icon-standard-table-go'},
{value:'icon-standard-table-key',text:'icon-standard-table-key'},
{value:'icon-standard-table-lightning',text:'icon-standard-table-lightning'},
{value:'icon-standard-table-link',text:'icon-standard-table-link'},
{value:'icon-standard-table-multiple',text:'icon-standard-table-multiple'},
{value:'icon-standard-table-refresh',text:'icon-standard-table-refresh'},
{value:'icon-standard-table-relationship',text:'icon-standard-table-relationship'},
{value:'icon-standard-table-row-delete',text:'icon-standard-table-row-delete'},
{value:'icon-standard-table-row-insert',text:'icon-standard-table-row-insert'},
{value:'icon-standard-table-save',text:'icon-standard-table-save'},
{value:'icon-standard-table-sort',text:'icon-standard-table-sort'},
{value:'icon-standard-table',text:'icon-standard-table'},
{value:'icon-standard-tag-blue-add',text:'icon-standard-tag-blue-add'},
{value:'icon-standard-tag-blue-delete',text:'icon-standard-tag-blue-delete'},
{value:'icon-standard-tag-blue-edit',text:'icon-standard-tag-blue-edit'},
{value:'icon-standard-tag-blue',text:'icon-standard-tag-blue'},
{value:'icon-standard-tag-green',text:'icon-standard-tag-green'},
{value:'icon-standard-tag-orange',text:'icon-standard-tag-orange'},
{value:'icon-standard-tag-pink',text:'icon-standard-tag-pink'},
{value:'icon-standard-tag-purple',text:'icon-standard-tag-purple'},
{value:'icon-standard-tag-red',text:'icon-standard-tag-red'},
{value:'icon-standard-tag-yellow',text:'icon-standard-tag-yellow'},
{value:'icon-standard-tag',text:'icon-standard-tag'},
{value:'icon-standard-telephone-add',text:'icon-standard-telephone-add'},
{value:'icon-standard-telephone-delete',text:'icon-standard-telephone-delete'},
{value:'icon-standard-telephone-edit',text:'icon-standard-telephone-edit'},
{value:'icon-standard-telephone-error',text:'icon-standard-telephone-error'},
{value:'icon-standard-telephone-go',text:'icon-standard-telephone-go'},
{value:'icon-standard-telephone-key',text:'icon-standard-telephone-key'},
{value:'icon-standard-telephone-link',text:'icon-standard-telephone-link'},
{value:'icon-standard-telephone',text:'icon-standard-telephone'},
{value:'icon-standard-television-add',text:'icon-standard-television-add'},
{value:'icon-standard-television-delete',text:'icon-standard-television-delete'},
{value:'icon-standard-television',text:'icon-standard-television'},
{value:'icon-standard-text-align-center',text:'icon-standard-text-align-center'},
{value:'icon-standard-text-align-justify',text:'icon-standard-text-align-justify'},
{value:'icon-standard-text-align-left',text:'icon-standard-text-align-left'},
{value:'icon-standard-text-align-right',text:'icon-standard-text-align-right'},
{value:'icon-standard-text-allcaps',text:'icon-standard-text-allcaps'},
{value:'icon-standard-text-bold',text:'icon-standard-text-bold'},
{value:'icon-standard-text-columns',text:'icon-standard-text-columns'},
{value:'icon-standard-text-dropcaps',text:'icon-standard-text-dropcaps'},
{value:'icon-standard-text-heading-1',text:'icon-standard-text-heading-1'},
{value:'icon-standard-text-heading-2',text:'icon-standard-text-heading-2'},
{value:'icon-standard-text-heading-3',text:'icon-standard-text-heading-3'},
{value:'icon-standard-text-heading-4',text:'icon-standard-text-heading-4'},
{value:'icon-standard-text-heading-5',text:'icon-standard-text-heading-5'},
{value:'icon-standard-text-heading-6',text:'icon-standard-text-heading-6'},
{value:'icon-standard-text-horizontalrule',text:'icon-standard-text-horizontalrule'},
{value:'icon-standard-text-indent-remove',text:'icon-standard-text-indent-remove'},
{value:'icon-standard-text-indent',text:'icon-standard-text-indent'},
{value:'icon-standard-text-italic',text:'icon-standard-text-italic'},
{value:'icon-standard-text-kerning',text:'icon-standard-text-kerning'},
{value:'icon-standard-text-letter-omega',text:'icon-standard-text-letter-omega'},
{value:'icon-standard-text-letterspacing',text:'icon-standard-text-letterspacing'},
{value:'icon-standard-text-linespacing',text:'icon-standard-text-linespacing'},
{value:'icon-standard-text-list-bullets',text:'icon-standard-text-list-bullets'},
{value:'icon-standard-text-list-numbers',text:'icon-standard-text-list-numbers'},
{value:'icon-standard-text-lowercase',text:'icon-standard-text-lowercase'},
{value:'icon-standard-text-padding-bottom',text:'icon-standard-text-padding-bottom'},
{value:'icon-standard-text-padding-left',text:'icon-standard-text-padding-left'},
{value:'icon-standard-text-padding-right',text:'icon-standard-text-padding-right'},
{value:'icon-standard-text-padding-top',text:'icon-standard-text-padding-top'},
{value:'icon-standard-text-replace',text:'icon-standard-text-replace'},
{value:'icon-standard-text-signature',text:'icon-standard-text-signature'},
{value:'icon-standard-text-smallcaps',text:'icon-standard-text-smallcaps'},
{value:'icon-standard-text-strikethrough',text:'icon-standard-text-strikethrough'},
{value:'icon-standard-text-subscript',text:'icon-standard-text-subscript'},
{value:'icon-standard-text-superscript',text:'icon-standard-text-superscript'},
{value:'icon-standard-text-underline',text:'icon-standard-text-underline'},
{value:'icon-standard-text-uppercase',text:'icon-standard-text-uppercase'},
{value:'icon-standard-textfield-add',text:'icon-standard-textfield-add'},
{value:'icon-standard-textfield-delete',text:'icon-standard-textfield-delete'},
{value:'icon-standard-textfield-key',text:'icon-standard-textfield-key'},
{value:'icon-standard-textfield-rename',text:'icon-standard-textfield-rename'},
{value:'icon-standard-textfield',text:'icon-standard-textfield'},
{value:'icon-standard-thumb-down',text:'icon-standard-thumb-down'},
{value:'icon-standard-thumb-up',text:'icon-standard-thumb-up'},
{value:'icon-standard-tick',text:'icon-standard-tick'},
{value:'icon-standard-time-add',text:'icon-standard-time-add'},
{value:'icon-standard-time-delete',text:'icon-standard-time-delete'},
{value:'icon-standard-time-go',text:'icon-standard-time-go'},
{value:'icon-standard-time',text:'icon-standard-time'},
{value:'icon-standard-timeline-marker',text:'icon-standard-timeline-marker'},
{value:'icon-standard-transmit-add',text:'icon-standard-transmit-add'},
{value:'icon-standard-transmit-blue',text:'icon-standard-transmit-blue'},
{value:'icon-standard-transmit-delete',text:'icon-standard-transmit-delete'},
{value:'icon-standard-transmit-edit',text:'icon-standard-transmit-edit'},
{value:'icon-standard-transmit-error',text:'icon-standard-transmit-error'},
{value:'icon-standard-transmit-go',text:'icon-standard-transmit-go'},
{value:'icon-standard-transmit',text:'icon-standard-transmit'},
{value:'icon-standard-tux',text:'icon-standard-tux'},
{value:'icon-standard-up',text:'icon-standard-up'},
{value:'icon-standard-user-add',text:'icon-standard-user-add'},
{value:'icon-standard-user-comment',text:'icon-standard-user-comment'},
{value:'icon-standard-user-delete',text:'icon-standard-user-delete'},
{value:'icon-standard-user-edit',text:'icon-standard-user-edit'},
{value:'icon-standard-user-female',text:'icon-standard-user-female'},
{value:'icon-standard-user-go',text:'icon-standard-user-go'},
{value:'icon-standard-user-gray',text:'icon-standard-user-gray'},
{value:'icon-standard-user-green',text:'icon-standard-user-green'},
{value:'icon-standard-user-orange',text:'icon-standard-user-orange'},
{value:'icon-standard-user-red',text:'icon-standard-user-red'},
{value:'icon-standard-user-suit',text:'icon-standard-user-suit'},
{value:'icon-standard-user',text:'icon-standard-user'},
{value:'icon-standard-vcard-add',text:'icon-standard-vcard-add'},
{value:'icon-standard-vcard-delete',text:'icon-standard-vcard-delete'},
{value:'icon-standard-vcard-edit',text:'icon-standard-vcard-edit'},
{value:'icon-standard-vcard',text:'icon-standard-vcard'},
{value:'icon-standard-vector-add',text:'icon-standard-vector-add'},
{value:'icon-standard-vector-delete',text:'icon-standard-vector-delete'},
{value:'icon-standard-vector',text:'icon-standard-vector'},
{value:'icon-standard-wand',text:'icon-standard-wand'},
{value:'icon-standard-weather-clouds',text:'icon-standard-weather-clouds'},
{value:'icon-standard-weather-cloudy',text:'icon-standard-weather-cloudy'},
{value:'icon-standard-weather-lightning',text:'icon-standard-weather-lightning'},
{value:'icon-standard-weather-rain',text:'icon-standard-weather-rain'},
{value:'icon-standard-weather-snow',text:'icon-standard-weather-snow'},
{value:'icon-standard-weather-sun',text:'icon-standard-weather-sun'},
{value:'icon-standard-webcam-add',text:'icon-standard-webcam-add'},
{value:'icon-standard-webcam-delete',text:'icon-standard-webcam-delete'},
{value:'icon-standard-webcam-error',text:'icon-standard-webcam-error'},
{value:'icon-standard-webcam',text:'icon-standard-webcam'},
{value:'icon-standard-world-add',text:'icon-standard-world-add'},
{value:'icon-standard-world-delete',text:'icon-standard-world-delete'},
{value:'icon-standard-world-edit',text:'icon-standard-world-edit'},
{value:'icon-standard-world-go',text:'icon-standard-world-go'},
{value:'icon-standard-world-link',text:'icon-standard-world-link'},
{value:'icon-standard-world',text:'icon-standard-world'},
{value:'icon-standard-wrench-orange',text:'icon-standard-wrench-orange'},
{value:'icon-standard-wrench',text:'icon-standard-wrench'},
{value:'icon-standard-xhtml-add',text:'icon-standard-xhtml-add'},
{value:'icon-standard-xhtml-delete',text:'icon-standard-xhtml-delete'},
{value:'icon-standard-xhtml-go',text:'icon-standard-xhtml-go'},
{value:'icon-standard-xhtml-valid',text:'icon-standard-xhtml-valid'},
{value:'icon-standard-xhtml',text:'icon-standard-xhtml'},
{value:'icon-standard-zoom-in',text:'icon-standard-zoom-in'},
{value:'icon-standard-zoom-out',text:'icon-standard-zoom-out'},
{value:'icon-standard-zoom',text:'icon-standard-zoom'}
];

/********************** 材料检测****************************/
/**
 * 检测类型
 */
$.Sys_CheckType_CU = [
    {value:"HNTKYQDJC",text:"混凝土抗压检测"},
    {value:"GJHJJC",text:"钢筋焊接检测"},
    {value:"GJJXLJJC",text:"钢筋机械连接检测"},
    {value:"GJYCLJC",text:"钢筋原材料检测"},
    {value:"SJKYQDJC",text:"砂浆抗压强度检测"},
    {value:"SJKXZHKXQK",text:"烧结空心砖和空心砌块检测"},
    {value:"SJPTZKYQDJC",text:"烧结普通砖抗压强度检测"},
    {value:"SHIYJC",text:"石样检测"},
    {value:"SHAYJC",text:"砂样检测"},
    {value:"SNJC",text:"水泥检测"},
    {value:"ZYJQHNTQKJC",text:"蒸压加汽混凝土砌块检测"}
    //,{value:"FSJCJC",text:"防水卷材检测"}
];
/**
 * 检测类型Combox加载数据
 */
$.Sys_CheckType_RM = [
    {value:"",text:"--请选择--",selected : true},
    {value:"HNTKYQDJC",text:"混凝土抗压检测"},
    {value:"GJHJJC",text:"钢筋焊接检测"},
    {value:"GJJXLJJC",text:"钢筋机械连接检测"},
    {value:"GJYCLJC",text:"钢筋原材料检测"},
    {value:"SJKYQDJC",text:"砂浆抗压强度检测"},
    {value:"SJKXZHKXQK",text:"烧结空心砖和空心砌块检测"},
    {value:"SJPTZKYQDJC",text:"烧结普通砖抗压强度检测"},
    {value:"SHIYJC",text:"石样检测"},
    {value:"SHAYJC",text:"砂样检测"},
    {value:"SNJC",text:"水泥检测"},
    {value:"ZYJQHNTQKJC",text:"蒸压加汽混凝土砌块检测"}
    //,{value:"FSJCJC",text:"防水卷材检测"}
];

/********************** 人脸考勤****************************/
/**
 * 机构类型
 */
$.Sys_OrgType_RM = [
          {value:"",text:"--请选择--",selected : true},
          {value:"1",text:"省级"},
          {value:"2",text:"市级"},
          {value:"3",text:"区县级"}
      ];
$.Sys_OrgType_CU = [
                    {value:"1",text:"省级"},
                    {value:"2",text:"市级"},
                    {value:"3",text:"区县级"}
                ];
/**
 * 机构性质
 */
$.Sys_OrgNature_RM = [
                    {value:"",text:"--请选择--",selected : true},
                    {value:"1",text:"省级"},
                    {value:"2",text:"市级"},
                    {value:"3",text:"区县级"}
                ];
  $.Sys_OrgNature_CU = [
                      {value:"1",text:"省级"},
                      {value:"2",text:"市级"},
                      {value:"3",text:"区县级"}
                  ];
  /**
   * 机构级别
   */
  $.Sys_OrgGrade_RM = [
                      {value:"",text:"--请选择--",selected : true},
                      {value:"1",text:"省级"},
                      {value:"2",text:"市级"},
                      {value:"3",text:"区县级"}
                  ];
  $.Sys_OrgGrade_CU = [
                        {value:"1",text:"省级"},
                        {value:"2",text:"市级"},
                        {value:"3",text:"区县级"}
                    ];
    /**
     * 组织机构状态
     */
  $.Sys_OrgStatus_RM = [
                        {value:"",text:"--请选择--",selected : true},
                        {value:"1",text:"省级"},
                        {value:"2",text:"市级"},
                        {value:"3",text:"区县级"}
                    ];
  $.Sys_OrgStatus_CU = [
                          {value:"1",text:"省级"},
                          {value:"2",text:"市级"},
                          {value:"3",text:"区县级"}
                      ];

  
$.extend($.fn.validatebox.defaults.rules, {
			remote: { 
		        validator: function(value,url){
					var flag = false;
					$.ajax({
						type : "POST",
						url : url+value,
						success:function(result){
						alert(result);
							if(result && result == "unexist"){
								flag = true;
							}
						}
					});
		            return  flag;
		        },
		        message: '已被使用'
		    }
		});