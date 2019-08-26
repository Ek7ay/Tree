  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //form ��ʾ��
layui.use(['form','laydate','element','upload','layer','table'], function(){
	var $ = layui.jquery
		,form = layui.form
		,table = layui.table
		,upload = layui.upload
		,element = layui.element
    ,layer = layui.layer
		,laydate=layui.laydate;
		
		
		
	/* �������� */
    var active = {
    	flowPath: function(){//��������
        layer.open({
		      type: 2,
		      title: 'ZTEsoft����ͨ�������̲�ѯ',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: true, //���������С����ť
		      area: ['900px','80%'],
		      content: 'flowPath.html'
		      ,btn: ['ȷ��', 'ȡ��'] 
	        ,yes: function(){
	          $(that).click(); 
	        }
	        ,btn2: function(){
	          layer.closeAll();
	        }
		      ,btnAlign: 'c' //��ť����
		    });
      },
      manage: function(){//����
        $(".layui-mess-panel").show();
	    	$('.js_mask_close').on("click",function(){
	    		$(this).parents(".layui-mess-panel").hide();
	    	})
	    	//�ӳ�ִ��
				setTimeout(function(){
					//�����ж�js_panel_height �߶ȸı���ʽ
					var panel_hei = $("#js_panel_height").height();
					if ( panel_hei < 300) {
						$("#js_panel_height").css("overflow","visible");
					} 
				},1500);
	    	
      },
      reminder: function(){//�߰칦��
        layer.open({
		      type: 2,
		      title: '���ʹ߰���Ϣ������',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: false, //���������С����ť
		      area: ['700px','80%'],
		      content: 'reminder.html'
		      ,btn: ['ȷ��', 'ȡ��'] 
	        ,yes: function(){
	          $(that).click(); 
	        }
	        ,btn2: function(){
	          layer.closeAll();
	        }
		      ,btnAlign: 'c' //��ť����
		    });
      },
      make: function(){//�½�
        $("#restform .layui-input").removeAttr("readonly");
        $("#restform input[type=checkbox]").removeAttr("disabled").next('.layui-form-switch').removeClass('layui-disabled');
      },
      tfileList: function(){//�����б�
      	layer.open({
		      type: 2,
		      title: '�����б�',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: false, //���������С����ť
		      area: ['800px','505px'],
		      content: 'tfileList.html'
		    });
      },
      turnOver: function(){
        layer.alert('��ã�������');
      },
      payout: function(){
        layer.alert('��ã�������');
      },
      finish: function(){
        layer.alert('��ã�������');
      },
      reject: function(){
        layer.alert('��ã�������');
      },
      disposeIdea:function(){//ѡ�������
      	layer.open({
		      type: 2,
		      title: 'ѡ�������',
		      shadeClose: true,
		      shade: 0.5,
		      maxmin: false, //���������С����ť
		      area: ['800px', '523px'],
		      content: 'dealIead.html'
		      ,btn: ['ȷ��', 'ȡ��'] 
	        ,yes: function(){
	          $(that).click(); 
	        }
	        ,btn2: function(){
	          layer.closeAll();
	        }
		      ,btnAlign: 'c' //��ť����
		    });
      },
      toggle: function(){//չ������ ����
        if ($(".layui-toggle-con").is(":hidden")) {
        	$(".layui-toggle-con").slideDown(100);//��ʾ
        	$(this).css("background-image","url(../../layuiadmin/style/res/t-hide.png)");
        } else{
        	$(".layui-toggle-con").slideUp(100);//����
        	$(this).css("background-image","url(../../layuiadmin/style/res/t-show.png)");
        }
        
      }
      
    };
    $('#layui-message .js-operate').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
    });
    
    //ָ�������ϴ����ļ�����
    upload.render({
      elem: '#test-upload-type1'
      ,url: '/upload/'
      ,accept: 'file' //��ͨ�ļ�
      ,done: function(res){
        console.log(res)
      }
    });
    //����ָ������
	  form.on('switch(switchTest)', function(data){
	    layer.msg('����checked��'+ (this.checked ? 'true' : 'false'), {
	      offset: '6px'
	    });
	  });
	  
	  
		//�Ҳ�ê��˵�
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
		
		//Ŀ¼����¼�
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
		
		//ģ����ʾ������
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
//    ,url: layui.setter.base + 'json/console/top-search.js' //ģ��ӿ�
      ,page: true
      ,cols: [[ //������
	      {field: 'taskType', title: '����״̬'}
	      ,{field: 'name', title: '������', minWidth: 120}
	      ,{field: 'taskSection', title: '�����˲���', minWidth: 120}
	      ,{field: 'taskPhone', title: '��������ϵ��ʽ'}
	      ,{field: 'taskRole', title: '�����˵�ǰ��ɫ'}
	      ,{field: 'linkTime', title: '������ʱ��'}
	      ,{field: 'tache', title: '��������'}
	      ,{field: 'result', title: 'Ͷ�ߴ�����'}
	    ]]
      ,skin: ''
      ,size:'sm'//���Ʊ����ʽ
      ,limit:'10'
      ,data: [{
		      "taskType": "������"
		      ,"name": "���ڣ�����"
		      ,"taskSection": "������ͨ����ά����������ά��վ"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "�ͷ�װά��Ա"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "���ɵ�"
		      ,"result": "�ѽ��"
		    },
      	{
		      "taskType": "������"
		      ,"name": "���ڣ�����"
		      ,"taskSection": "������ͨ����ά����������ά��վ"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "�ͷ�װά��Ա"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "���ɵ�"
		      ,"result": "�ѽ��"
		    }
      	,{
		      "taskType": "������"
		      ,"name": "���ڣ�����"
		      ,"taskSection": "������ͨ����ά����������ά��վ"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "�ͷ�װά��Ա"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "���ɵ�"
		      ,"result": "�ѽ��"
		    }
      	,{
		      "taskType": "������"
		      ,"name": "���ڣ�����"
		      ,"taskSection": "������ͨ����ά����������ά��վ"
		      ,"taskPhone": "18729394439"
		      ,"taskRole": "�ͷ�װά��Ա"		      
		      ,"linkTime": "2018-04-23 12:00:00"
		      ,"tache": "���ɵ�"
		      ,"result": "�ѽ��"
		    }]
    });
})