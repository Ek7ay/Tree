  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
  layui.use(['element','form','layer','tree','table'], function(){
    var $ = layui.jquery
    ,layer = layui.layer
    ,form = layui.form
    ,tree = layui.tree
    ,table = layui.table
    ,element = layui.element; //Tab的切换功能;
    
    layui.tree({
		  elem: '#treeDemo'
		  ,nodes: [{ //节点数据
		    name: 'WLAN设备网管信息上报'
		    ,children: [{
		      name: '节点A1'
		      ,spread: true //展开
		    }]
		  },{
		    name: '应急通信管理'
		    ,spread: true //展开
		    ,children: [{
		      name: '节点B1'
		      ,alias: 'bb' //可选
		      ,id: '123' //可选
		    }, {
		      name: '节点B2'
		    }]
		  },{
		    name: '知识文档管理'
		    ,spread: true //展开
		    ,children: [{
		      name: '奥运指标'
		      ,spread: true //展开
		      ,alias: 'bb' //可选
		      ,id: '123' //可选
		    }, {
		      name: 'EMOS升级测试'
		    }]
		  }] 
		  ,click: function(node){
		    console.log(node) //node即为当前点击的节点数据
		    layer.msg(node);
		  }  
		});
    
    table.render({
      elem: '#LAY-index-topSearch'
      ,height: 'full-200'
//    ,url: layui.setter.base + 'json/console/top-search.js' //模拟接口
	  	,page: { //支持传入 laypage 组件的所有参数（某些参数除外，如：jump/elem） - 详见文档
		      layout: ['limit', 'count', 'prev', 'page', 'next', 'skip'] //自定义分页布局
		      //,curr: 5 //设定初始在第 5 页
		      ,groups: 5 //只显示 5 个连续页码
		      ,first: true //显示首页
		      ,last: true //显示尾页
			}
//    ,page: true
      ,cols: [[ //标题栏
      	{type:'checkbox'},//开启多选
	      {field: 'title', title: '标题', minWidth: 180}
	      ,{field: 'username', title: '作者', width: 120}
	      ,{field: 'creater', title: '创建人', width: 120}
	      ,{field: 'branch', title: '部门', width: 120}
	      ,{field: 'state', title: '文档状态', width: 100}
	      ,{field: 'creatTime', title: '创建时间', width: 140}
	      ,{field: 'handle', title: '操作',fixed: 'right', width:80, align:'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
	    ]]
      ,skin: ''
//    ,size:'sm'//控制表格样式
      ,limit:'10'
      ,data: [{
		      "title": "[新疆乌鲁木齐]155-52-肖路口委员会"
		      ,"username": "刘翔"
		      ,"creater": "刘翔"
		      ,"branch": "新疆办事处"
		      ,"state": "未发布"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[新疆乌鲁木齐]155-52-肖路口委员会"
		      ,"username": "刘翔"
		      ,"creater": "刘翔"
		      ,"branch": "新疆办事处"
		      ,"state": "未发布"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[新疆乌鲁木齐]155-52-肖路口委员会"
		      ,"username": "刘翔"
		      ,"creater": "刘翔"
		      ,"branch": "新疆办事处"
		      ,"state": "未发布"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[新疆乌鲁木齐]155-52-肖路口委员会"
		      ,"username": "刘翔"
		      ,"creater": "刘翔"
		      ,"branch": "新疆办事处"
		      ,"state": "未发布"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[新疆乌鲁木齐]155-52-肖路口委员会"
		      ,"username": "刘翔"
		      ,"creater": "刘翔"
		      ,"branch": "新疆办事处"
		      ,"state": "未发布"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[新疆乌鲁木齐]155-52-肖路口委员会"
		      ,"username": "刘翔"
		      ,"creater": "刘翔"
		      ,"branch": "新疆办事处"
		      ,"state": "未发布"
		      ,"creatTime": "2018-04-23"
		    },{
		      "title": "[新疆乌鲁木齐]155-52-肖路口委员会"
		      ,"username": "刘翔"
		      ,"creater": "刘翔"
		      ,"branch": "新疆办事处"
		      ,"state": "未发布"
		      ,"creatTime": "2018-04-23"
		    }]
    });
    //监听工具条
	table.on('tool(layTable)', function(obj){ //注：tool是工具条事件名，test是table原始容器的属性 lay-filter="对应的值"
	  var data = obj.data; //获得当前行数据
	  var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
	  var tr = obj.tr; //获得当前行 tr 的DOM对象
	 
		  if(layEvent === 'del'){ //删除
					layer.confirm('真的删除行么', function(index){
					  obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
					  layer.close(index);
					  //向服务端发送删除指令
			    });
		  } else if(layEvent === 'edit'){ //编辑
				//do something
		
				//同步更新缓存对应的值
				obj.update({
				  username: '123'
				  ,title: 'xxx'
				});
			}
		});
    //监听复选框选择
    table.on('checkbox(layTable)', function(obj){
		  console.log(obj.checked); //当前是否选中状态
		  console.log(obj.data); //选中行的相关数据
		  console.log(obj.type); //如果触发的是全选，则为：all，如果触发的是单选，则为：one
		});
    /* 触发弹层 */
    var active = {
      choice: function(){
        layer.open({
          type: 2,
          title: '选择树',
          shadeClose: true,
          shade: 0.8,
          area: ['375px', '500px'],
          content: 'http://www.layui.com/'
        }); 
      }
    };
    
    
    $('#LAY-addTaskList .js_choice').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
    });
    //搜索条件
    $('.js-btn-show').on("click",function(){
    	if ($('.lay-popup-form').is(":hidden")) {
    		$('.lay-popup-form').show();
    	} else{
    		$('.lay-popup-form').hide()
    	}
    })
  });