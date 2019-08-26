  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
layui.use(['element','form','table','jqZtreeCore'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,form = layui.form
    ,jqZtreeCore = layui.jqZtreeCore
    ,element = layui.element; //Tab的切换功能;
  
	//权限编辑树
	var setting1 = {
		data: {
			simpleData: {
				enable: true
			}
		},
		check: {
	        enable: true,   //复选框或单选框
			autoCheckTrigger: true,   //事件回调函数
			chkStyle: "checkbox",   //勾选框类型(checkbox 或 radio）
			chkboxType: { "Y": "", "N": "" }   //勾选 checkbox 对于父子节点的关联关系
    	},
    	callback: {}
	};
	
	var zNodes =[
		{ id:1, pId:0, name:"父节点1 - 展开", open:true,noR:true},
		{ id:11, pId:1, name:"父节点11 - 折叠"},
		{ id:111, pId:11, name:"叶子节点111"},
		{ id:112, pId:11, name:"叶子节点112"},
		{ id:113, pId:11, name:"叶子节点113"},
		{ id:114, pId:11, name:"叶子节点114"},
		{ id:12, pId:1, name:"父节点12 - 折叠"},
		{ id:121, pId:12, name:"叶子节点121"},
		{ id:122, pId:12, name:"叶子节点122"},
		{ id:123, pId:12, name:"叶子节点123"},
		{ id:124, pId:12, name:"叶子节点124"},
		{ id:13, pId:1, name:"父节点13 - 没有子节点", isParent:true},
		{ id:3, pId:0, name:"父节点3 - 没有子节点", isParent:true}
	];
	
	//可阅读、可编辑选择树
	$.fn.zTree.init($("#readTree"), setting1, zNodes);
	$.fn.zTree.init($("#editTree"), setting1, zNodes);
	
	
    table.render({
      elem: '#LAY-Auditing'
      ,height: 'full-200'
//    ,url: layui.setter.base + 'json/console/top-search.js' //模拟接口
      ,page: true
      ,cols: [[ //标题栏
	      {field: 'id', title: '审核人', width: 200, sort: true}
	      ,{field: 'username', title: '审核结果', minWidth: 120}
	      ,{field: 'email', title: '审核意见', minWidth:200}
	      ,{field: 'sign', title: '审核时间', width: 140}
	    ]]
      ,skin: ''
      ,limit:'10'
      ,data: [{
	      "id": "CJ2018-03-23"
	      ,"username": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
	      ,"email": "T2故障处理"
	      ,"sign": "2018-04-23"
	    }]
    });
});