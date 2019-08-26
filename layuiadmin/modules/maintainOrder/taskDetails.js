  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //form 表单示例
layui.use(['form','laydate','element','upload','layer','table'], function(){
	var $ = layui.jquery
		,form = layui.form
		,table = layui.table
		,upload = layui.upload
		,element = layui.element
    ,layer = layui.layer
		,laydate=layui.laydate;
		
		
		
	/* 触发弹层 */
    var active = {
    	flowPath: function(){//跟踪流程
        layer.open({
		      type: 2,
		      title: 'ZTEsoft服务开通定单进程查询',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: true, //开启最大化最小化按钮
		      area: ['900px','80%'],
		      content: 'flowPath.html'
		      ,btn: ['确定', '取消'] 
	        ,yes: function(){
	          $(that).click(); 
	        }
	        ,btn2: function(){
	          layer.closeAll();
	        }
		      ,btnAlign: 'c' //按钮居中
		    });
      },
      manage: function(){//处理
        $(".layui-mess-panel").show();
	    	$('.js_mask_close').on("click",function(){
	    		$(this).parents(".layui-mess-panel").hide();
	    	})
	    	//延迟执行
				setTimeout(function(){
					//加载判断js_panel_height 高度改变样式
					var panel_hei = $("#js_panel_height").height();
					if ( panel_hei < 300) {
						$("#js_panel_height").css("overflow","visible");
					} 
				},1500);
	    	
      },
      reminder: function(){//催办功能
        layer.open({
		      type: 2,
		      title: '发送催办消息及短信',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: false, //开启最大化最小化按钮
		      area: ['700px','80%'],
		      content: 'reminder.html'
		      ,btn: ['确定', '取消'] 
	        ,yes: function(){
	          $(that).click(); 
	        }
	        ,btn2: function(){
	          layer.closeAll();
	        }
		      ,btnAlign: 'c' //按钮居中
		    });
      },
      make: function(){//新建
        $("#restform .layui-input").removeAttr("readonly");
        $("#restform input[type=checkbox]").removeAttr("disabled").next('.layui-form-switch').removeClass('layui-disabled');
      },
      tfileList: function(){//附件列表
      	layer.open({
		      type: 2,
		      title: '附件列表',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: false, //开启最大化最小化按钮
		      area: ['800px','505px'],
		      content: 'tfileList.html'
		    });
      },
      turnOver: function(){
        layer.alert('你好，体验者');
      },
      payout: function(){
        layer.alert('你好，体验者');
      },
      finish: function(){
        layer.alert('你好，体验者');
      },
      reject: function(){
        layer.alert('你好，体验者');
      },
      disposeIdea:function(){//选择处理意见
      	layer.open({
		      type: 2,
		      title: '选择处理意见',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: false, //开启最大化最小化按钮
		      area: ['800px', '523px'],
		      content: 'dealIead.html'
		      ,btn: ['确定', '取消'] 
	        ,yes: function(){
	          $(that).click(); 
	        }
	        ,btn2: function(){
	          layer.closeAll();
	        }
		      ,btnAlign: 'c' //按钮居中
		    });
      },
      toggle: function(){//展开隐藏 弹框
        if ($(".layui-toggle-con").is(":hidden")) {
        	$(".layui-toggle-con").slideDown(100);//显示
        	$(this).css("background-image","url(../../layuiadmin/style/res/t-hide.png)");
        } else{
        	$(".layui-toggle-con").slideUp(100);//隐藏
        	$(this).css("background-image","url(../../layuiadmin/style/res/t-show.png)");
        }
        
      }
      
    };
    $('#layui-message .js-operate').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
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
    //监听指定开关
	  form.on('switch(switchTest)', function(data){
	    layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
	      offset: '6px'
	    });
	  });
	  
	  
		//右侧锚点菜单
		var _mainCont = $("#layui-message-con"),
			_caList = $("#catalogList");
		
		var exp = {
			scrollTo: function(target, num) {
				var top = target.offset().top - ("undefined" == typeof num ? 10 : num);
				$("html,body").animate({
					scrollTop: top
				},300)
			}
		};
		
		//目录点击事件
		$("#catalogList").on("click", "dd",function() {
			var _dd = $(this),
				_dindex = _dd.index();
				
			var target = $("#layui-message-con").find(".js_section").eq(_dindex);
			exp.scrollTo(target,0)
		});
		$(window).on("scroll",function(){
			var dScrollT = $(document).scrollTop(),
			cur = 0,
			objs = $("#layui-message-con").find(".js_section");
			objs.each(function(index,obj) {
				var n = $(obj).offset().top;
				if(n > dScrollT){
					cur = index;
					return false;
				}else if(objs.length-1 == index){
					cur = objs.length;
				}
			});
			_caList.children("dd").eq(cur > 0 ? cur-1 : 0).addClass("side-hover").siblings().removeClass("side-hover");
		})
		
		//模块显示、隐藏
		$(".js_unfold").on("click",function(){
			var unfold_con = $(this).next(".js_unfold_con");
			if(unfold_con.is(":hidden")){
				unfold_con.show();
			}else{
				unfold_con.hide();
			}
		});
		
		table.render({
      elem: '#LAY-taskDetails'
      ,height: ''
//    ,url: layui.setter.base + 'json/console/top-search.js' //模拟接口
      ,page: true
      ,cols: [[ //标题栏
	      {field: 'taskType', title: '工单状态'}
	      ,{field: 'name', title: '操作人', minWidth: 120}
	      ,{field: 'taskSection', title: '操作人部门', minWidth: 120}
	      ,{field: 'taskPhone', title: '操作人联系方式'}
	      ,{field: 'taskRole', title: '操作人当前角色'}
	      ,{field: 'linkTime', title: '操作人时间'}
	      ,{field: 'tache', title: '环节名称'}
	      ,{field: 'result', title: '投诉处理结果'}
	    ]]
      ,skin: ''
      ,size:'sm'//控制表格样式
      ,limit:'10'
      ,data: [{
		      "taskType": "运行中"
		      ,"name": "赵磊，张磊"
		      ,"taskSection": "中移铁通塔城维护中心托里维护站"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "客服装维人员"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "已派单"
		      ,"result": "已解决"
		    },
      	{
		      "taskType": "运行中"
		      ,"name": "赵磊，张磊"
		      ,"taskSection": "中移铁通塔城维护中心托里维护站"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "客服装维人员"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "已派单"
		      ,"result": "已解决"
		    }
      	,{
		      "taskType": "运行中"
		      ,"name": "赵磊，张磊"
		      ,"taskSection": "中移铁通塔城维护中心托里维护站"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "客服装维人员"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "已派单"
		      ,"result": "已解决"
		    }
      	,{
		      "taskType": "运行中"
		      ,"name": "赵磊，张磊"
		      ,"taskSection": "中移铁通塔城维护中心托里维护站"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "客服装维人员"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "已派单"
		      ,"result": "已解决"
		    }]
    });
})