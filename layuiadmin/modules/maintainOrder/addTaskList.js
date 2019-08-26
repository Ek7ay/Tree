  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
  layui.use(['element','laydate','form','upload','layer','laytpl'], function(){
    var $ = layui.jquery
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
    
    //指定允许上传的文件类型
    upload.render({
      elem: '#test-upload-type1'
      ,url: '/upload/'
      ,accept: 'file' //普通文件
      ,done: function(res){
        console.log(res)
      }
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
      },
      executor: function(){
        layer.open({
          type: 2,
          title: '选择审核人',
          shadeClose: true,
          shade: 0.5,
          area: ['555px', '90%'],
          content: 'executor.html',
          btn: ['确定','取消'],
          yes: function(index, layero){
		        var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
            //调用授权提交方法
            var flag = iframeWin.doSetSelectedNode();
            return flag;
			    },
			    btn2: function(index){
		        layer.close(index);
			    }
        }); 
      },
      powerSearch: function(){
        layer.open({
          type: 2,
          title: '高级查询',
          shadeClose: true,
          shade: 0.5,
          area: ['80%', '500px'],
          content: 'powerSearch.html'
          ,btn: ['确定']
          ,yes: function(index){
          	//do someing
            layer.close(index);
            
          }
        }); 
      }
    };
    
    
    $('#LAY-addTaskList .js_choice').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
    });
    
  });