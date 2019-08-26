  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
  layui.use(['table','element','laydate','form','upload','layer','laytpl'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,upload = layui.upload
    ,laytpl = layui.laytpl
    ,form = layui.form
    ,laydate = layui.laydate
    ,element = layui.element; //Tab的切换功能;
    
    var startDate = laydate.render({//渲染开始时间选择  
            elem: '#starDate',//通过id绑定html中插入的start
            done: function (value, dates) {                     
                endDate.config.min ={  
	                 year:dates.year,   
	                 month:dates.month-1, //关键  
	                 date: dates.date,   
                };      
            }  
        });  
   	var endDate= laydate.render({//渲染结束时间选择  
        elem: '#endDate',//通过id绑定html中插入的end  
        done: function (value, dates) {  
            startDate.config.max={  
                year:dates.year,   
                month:dates.month-1,//关键   
                date: dates.date,   
        }  
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
	      {field: 'id', title: '工单编号', width: 180, sort: true}
	      ,{field: 'username', title: '工单主题', minWidth: 120}
	      ,{field: 'email', title: '当前环节', minWidth: 120}
	      ,{field: 'sign', title: '工单要求处理时限', width: 140}
	      ,{field: 'sex', title: '环节要求处理时限', width: 140}
	      ,{field: 'city', title: '是否受理', width: 100}
	      ,{field: 'experience', title: '预警情况', width: 80,templet: '#warnDemo', unresize: true,align:'center'}
	      ,{field: 'handle', title: '操作',fixed: 'right', width:150, align:'center', toolbar: '#barDemo'} //这里的toolbar值是模板元素的选择器
	    ]]
      ,skin: ''
//    ,size:'sm'//控制表格样式
      ,limit:'10'
      ,data: [{
		      "id": "CJ2018-03-23"
		      ,"username": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"email": "T2故障处理"
		      ,"sex": "2018-04-23"
		      ,"city": "否"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"email": "T2故障处理"
		      ,"sex": "2018-04-23"
		      ,"city": "否"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"email": "T2故障处理"
		      ,"sex": "2018-04-23"
		      ,"city": "否"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"email": "T2故障处理"
		      ,"sex": "2018-04-23"
		      ,"city": "否"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
		    },
      	{
		      "id": "CJ2018-03-23"
		      ,"username": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"email": "T2故障处理"
		      ,"sex": "2018-04-23"
		      ,"city": "否"
		      ,"sign": "2018-04-23"
		      ,"experience": ""
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
    //监听单元格编辑
    table.on('edit(layTable)', function(obj){ //注：edit是固定事件名，test是table原始容器的属性 lay-filter="对应的值"
		  console.log(obj.value); //得到修改后的值
		  console.log(obj.field); //当前编辑的字段名
		  console.log(obj.data); //所在行的所有相关数据  
		});
		
		//监听搜索
    form.on('submit(LAY-user-front-search)', function(data){
      var field = data.field;
      console.log(field)
      //执行重载
      table.reload('LAY-index-topSearch', {
        where: field
      });
    });
    //刷新
    $("#reloadTable").on("click",function(){
    	//当前页的刷新
    	$(".layui-laypage-btn")[0].click();
    })
    //搜索条件
    $('.js-btn-show').on("click",function(){
    	if ($('.lay-popup-form').is(":hidden")) {
    		$('.lay-popup-form').show();
    	} else{
    		$('.lay-popup-form').hide()
    	}
    })
  });