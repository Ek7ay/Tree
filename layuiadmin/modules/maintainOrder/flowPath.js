  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
  layui.use(['table','element'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,element = layui.element; //Tab的切换功能;
    

    table.render({
      elem: '#LAY-index-topSearch'
      ,height: 'full-200'
//    ,url: layui.setter.base + 'json/console/top-search.js' //模拟接口
      ,page: true
      ,cols: [[ //标题栏
      	//{type:'checkbox'},//开启多选
	      {field: 'ticket', title: '工单类型', width: 180, sort: true}
	      ,{field: 'recipientType', title: '接受人类型', width: 120}
	      ,{field: 'recipientName', title: '接受人名称', width: 120}
	      ,{field: 'ticketResult', title: '工单处理结果', width: 140}
	      ,{field: 'runningState', title: '执行状态', width: 140}
	      ,{field: 'runningName', title: '执行人名称', width: 100}
	      ,{field: 'ticketNews', title: '工单施工信息'}
	      ,{field: 'dateline', title: '操作时间',width:150}
	    ]]
      ,size:'sm'//控制表格样式
      ,limit:'10'
      ,data: [{
		      "ticket": "派单"
		      ,"recipientType": "系统"
		      ,"recipientName": "IOM"
		      ,"ticketResult": "成功"
		      ,"runningState": "执行完毕"
		      ,"runningName": "系统"
		      ,"ticketNews": "点击查看明细"
		      ,"dateline": "2018-09-01 12:21:34"
		    }] 
    })
});