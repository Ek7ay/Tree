  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //form 表单示例
  layui.use(['form','laydate','layer'], function(){
    var $ = layui.jquery,form = layui.form
    ,laydate=layui.laydate,layer = layui.layer;
    
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
    //监听指定开关
      form.on('switch(switchTest)', function(data){
        layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
          offset: '6px'
        });
      });
    //设置我的资料
	  form.on('submit(setmyinfo)', function(obj){
	    layer.msg(JSON.stringify(obj.field));
	    
	    //提交修改
	    /*
	    admin.req({
	      url: ''
	      ,data: obj.field
	      ,success: function(){
	        
	      }
	    });
	    */
	    return false;
	  });
  });