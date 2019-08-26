  /*
    ����ͨ�� layui.use �ֶμ��ز�ͬ��ģ�飬ʵ�ֲ�ͬ�����ͬʱ��Ⱦ���Ӷ���֤��ͼ�Ŀ��ٳ���
  */
  //������
  layui.use(['element','laydate','form','upload','layer','jqZtreeCore'], function(){
    var $ = layui.jquery
    ,upload = layui.upload
    ,layer = layui.layer
    ,form = layui.form
    ,jqZtreeCore = layui.jqZtreeCore
    ,element = layui.element; //Tab���л�����;
    //�ĵ�Ŀ¼��
    var setting = {
			data: {
				simpleData: {
					enable: true
				}
			},
    	callback: {
				onRightClick: OnRightClick
			}
		};
		
		//Ȩ�ޱ༭��
		var setting1 = {
			data: {
				simpleData: {
					enable: true
				}
			},
			check: {
        enable: true,   //��ѡ���ѡ��
				autoCheckTrigger: true,   //�¼��ص�����
				chkStyle: "checkbox",   //��ѡ������(checkbox �� radio��
				chkboxType: { "Y": "", "N": "" }   //��ѡ checkbox ���ڸ��ӽڵ�Ĺ�����ϵ
    	},
    	callback: {}
		};
		

		var zNodes =[
			{ id:1, pId:0, name:"���ڵ�1 - չ��", open:true,noR:true},
			{ id:11, pId:1, name:"���ڵ�11 - �۵�"},
			{ id:111, pId:11, name:"Ҷ�ӽڵ�111"},
			{ id:112, pId:11, name:"Ҷ�ӽڵ�112"},
			{ id:113, pId:11, name:"Ҷ�ӽڵ�113"},
			{ id:114, pId:11, name:"Ҷ�ӽڵ�114"},
			{ id:12, pId:1, name:"���ڵ�12 - �۵�"},
			{ id:121, pId:12, name:"Ҷ�ӽڵ�121"},
			{ id:122, pId:12, name:"Ҷ�ӽڵ�122"},
			{ id:123, pId:12, name:"Ҷ�ӽڵ�123"},
			{ id:124, pId:12, name:"Ҷ�ӽڵ�124"},
			{ id:13, pId:1, name:"���ڵ�13 - û���ӽڵ�", isParent:true},
			{ id:3, pId:0, name:"���ڵ�3 - û���ӽڵ�", isParent:true}
		];
		
		//=================ztree�Ҽ��˵���ʼ=====
		function OnRightClick(event, treeId, treeNode) {
		    if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
		        showRMenu("root", event.clientX, event.clientY);
		    } else if (treeNode && !treeNode.noR) {
		        showRMenu("node", event.clientX, event.clientY);
		    }
		}
		//��ʾ�Ҽ��˵�
		function showRMenu(type, x, y) {
		    $("#rMenu").show();
		    if (type == "root") {
            $("#m_del").hide();
        } else {
            $("#m_del").show();
        }
		    rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"}); //�����Ҽ��˵���λ�á��ɼ�
		    $("body").bind("mousedown", onBodyMouseDown);
		}
		//�����Ҽ��˵�
		function hideRMenu() {
		  if (rMenu) rMenu.css({"visibility": "hidden"});
			$("body").unbind("mousedown", onBodyMouseDown);
		}
		//��갴���¼�
		function onBodyMouseDown(event){
		    if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
		        $("#rMenu").css({"visibility" : "hidden"});
		    }
		}
		//=================ztree�Ҽ��˵�����=====
		var addCount = 1;
		function addTreeNode() {
			hideRMenu();
			var newNode = { name:"����" + (addCount++)};
			if (zTree.getSelectedNodes()[0]) {
				newNode.checked = zTree.getSelectedNodes()[0].checked;
				zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
			} else {
				zTree.addNodes(null, newNode);
			}
		}
		function updateNode(){//���½ڵ�-�޸Ľڵ�����
			hideRMenu();
	    zTree = $.fn.zTree.getZTreeObj("treeDemo");
	    nodes = zTree.getSelectedNodes();
	    zTree.editName(nodes[0]);
    }
		function removeTreeNode() {
			hideRMenu();
			var nodes = zTree.getSelectedNodes();
			if (nodes && nodes.length>0) {
				if (nodes[0].children && nodes[0].children.length > 0) {
					var msg = "Ҫɾ���Ľڵ��Ǹ��ڵ㣬���ɾ������ͬ�ӽڵ�һ��ɾ����\n\n��ȷ�ϣ�";
					if (confirm(msg)==true){
						zTree.removeNode(nodes[0]);
					}
				} else {
					zTree.removeNode(nodes[0]);
				}
			}
		}
		//=================ztreeҳ����ؿ�ʼ����������¼�=======
    var zTree, rMenu;
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			zTree = $.fn.zTree.getZTreeObj("treeDemo");
			rMenu = $("#rMenu");
			//��������
	    $("#m_add").on("click",function(){
	        addTreeNode();
	    });
	    //����������
	    $("#m_rename").on("click",function(){
	        updateNode();
	    });
	    //ɾ������
	    $("#m_del").on("click",function(){
	        removeTreeNode();
	    });
		});
		//���Ķ����ɱ༭ѡ����
		$.fn.zTree.init($("#readTree"), setting1, zNodes);
		$.fn.zTree.init($("#editTree"), setting1, zNodes);
		$("#submitTree").on("click",function(){
			getCheckValue()
		})
		function getCheckValue(e,treeId,treeNode){
	   	var treeObj = $.fn.zTree.getZTreeObj("readTree"),
	        nodes = treeObj.getCheckedNodes(true);
	        
	        if(nodes.length==0){
						layer.msg("��û�н���ѡ��");
						return false;
					}
          for(var i=0;i<nodes.length;i++){
            alert("�ڵ�id:"+nodes[i].id+"�ڵ�����:"+nodes[i].name); //��ȡѡ�нڵ��ֵ
          }
			
		}
		
		//�����ύ
  form.on('submit(LAY-user-front-search)', function(data){
    layer.alert(JSON.stringify(data.field), {
      title: '���յ��ύ��Ϣ'
    })
    return false;
  });
		
    /* �������� */
    var active = {
      choice: function(){
        layer.open({
          type: 2,
          title: 'ѡ����',
          shadeClose: true,
          shade: 0.8,
          area: ['375px', '500px'],
          content: 'http://www.layui.com/'
        }); 
      },
      executor: function(){
        layer.open({
          type: 2,
          title: 'ѡ�������',
          shadeClose: true,
          shade: 0.5,
          area: ['555px', '90%'],
          content: 'executor.html',
          btn: ['ȷ��','ȡ��'],
          yes: function(index, layero){
		        var iframeWin = window[layero.find('iframe')[0]['name']]; //�õ�iframeҳ�Ĵ��ڶ���ִ��iframeҳ�ķ�����iframeWin.method();
            //������Ȩ�ύ����
            var flag = iframeWin.doSetSelectedNode();
            return flag;
			    },
			    btn2: function(index){
		        layer.close(index);
			    }
        }); 
      }
    };
    
    
    $('.js_choice').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
    });
    
  });