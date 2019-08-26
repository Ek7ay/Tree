  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //高级搜索 条件
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
	      {field: 'taskType', title: '工单类型', width: 180, sort: true}
	      ,{field: 'taskTitle', title: '工单主题', minWidth: 120}
	      ,{field: 'currentLink', title: '当前环节', minWidth: 120}
	      ,{field: 'taskTime', title: '工单要求处理时限', width: 150}
	      ,{field: 'linkTime', title: '环节要求处理时限', width: 150}
	      ,{field: 'case', title: '是否受理', width: 100}
	    ]]
      ,skin: ''
//    ,size:'sm'//控制表格样式
      ,limit:'10'
      ,data: [{
		      "taskType": "故障处理单"
		      ,"taskTitle": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"currentLink": "T2故障处理"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "否"
		    },
      	{
		      "taskType": "故障处理单"
		      ,"taskTitle": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"currentLink": "T2故障处理"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "否"
		    },
      	{
		      "taskType": "故障处理单"
		      ,"taskTitle": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"currentLink": "T2故障处理"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "否"
		    },
      	{
		      "taskType": "故障处理单"
		      ,"taskTitle": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"currentLink": "T2故障处理"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "否"
		    },
      	{
		      "taskType": "故障处理单"
		      ,"taskTitle": "[新疆乌鲁木齐]155-52-肖路口委员会-AP-960-1故障"
		      ,"currentLink": "T2故障处理"
		      ,"taskTime": "2018-04-23"
		      ,"linkTime": "2018-04-23"
		      ,"case": "否"
		    }]
    });
    		 
    //监听复选框选择
    table.on('checkbox(layTable)', function(obj){
		  console.log(obj.checked); //当前是否选中状态
		  console.log(obj.data); //选中行的相关数据
		  console.log(obj.type); //如果触发的是全选，则为：all，如果触发的是单选，则为：one
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
    
  });