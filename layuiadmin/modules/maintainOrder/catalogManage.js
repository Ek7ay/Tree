  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
  layui.use(['element','laydate','form','upload','layer','jqZtreeCore'], function(){
    var $ = layui.jquery
    ,upload = layui.upload
    ,layer = layui.layer
    ,form = layui.form
    ,jqZtreeCore = layui.jqZtreeCore
    ,element = layui.element; //Tab的切换功能;
    //文档目录树
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
		
		//=================ztree右键菜单开始=====
		function OnRightClick(event, treeId, treeNode) {
		    if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
		        showRMenu("root", event.clientX, event.clientY);
		    } else if (treeNode && !treeNode.noR) {
		        showRMenu("node", event.clientX, event.clientY);
		    }
		}
		//显示右键菜单
		function showRMenu(type, x, y) {
		    $("#rMenu").show();
		    if (type == "root") {
            $("#m_del").hide();
        } else {
            $("#m_del").show();
        }
		    rMenu.css({"top":y+"px", "left":x+"px", "visibility":"visible"}); //设置右键菜单的位置、可见
		    $("body").bind("mousedown", onBodyMouseDown);
		}
		//隐藏右键菜单
		function hideRMenu() {
		  if (rMenu) rMenu.css({"visibility": "hidden"});
			$("body").unbind("mousedown", onBodyMouseDown);
		}
		//鼠标按下事件
		function onBodyMouseDown(event){
		    if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length>0)) {
		        $("#rMenu").css({"visibility" : "hidden"});
		    }
		}
		//=================ztree右键菜单结束=====
		var addCount = 1;
		function addTreeNode() {
			hideRMenu();
			var newNode = { name:"增加" + (addCount++)};
			if (zTree.getSelectedNodes()[0]) {
				newNode.checked = zTree.getSelectedNodes()[0].checked;
				zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
			} else {
				zTree.addNodes(null, newNode);
			}
		}
		function updateNode(){//更新节点-修改节点名称
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
					var msg = "要删除的节点是父节点，如果删除将连同子节点一起删掉。\n\n请确认！";
					if (confirm(msg)==true){
						zTree.removeNode(nodes[0]);
					}
				} else {
					zTree.removeNode(nodes[0]);
				}
			}
		}
		//=================ztree页面加载开始及各个点击事件=======
    var zTree, rMenu;
		$(document).ready(function(){
			$.fn.zTree.init($("#treeDemo"), setting, zNodes);
			zTree = $.fn.zTree.getZTreeObj("treeDemo");
			rMenu = $("#rMenu");
			//新增部门
	    $("#m_add").on("click",function(){
	        addTreeNode();
	    });
	    //重命名部门
	    $("#m_rename").on("click",function(){
	        updateNode();
	    });
	    //删除部门
	    $("#m_del").on("click",function(){
	        removeTreeNode();
	    });
		});
		//可阅读、可编辑选择树
		$.fn.zTree.init($("#readTree"), setting1, zNodes);
		$.fn.zTree.init($("#editTree"), setting1, zNodes);
		$("#submitTree").on("click",function(){
			getCheckValue()
		})
		function getCheckValue(e,treeId,treeNode){
	   	var treeObj = $.fn.zTree.getZTreeObj("readTree"),
	        nodes = treeObj.getCheckedNodes(true);
	        
	        if(nodes.length==0){
						layer.msg("您没有进行选择！");
						return false;
					}
          for(var i=0;i<nodes.length;i++){
            alert("节点id:"+nodes[i].id+"节点名称:"+nodes[i].name); //获取选中节点的值
          }
			
		}
		
		//监听提交
  form.on('submit(LAY-user-front-search)', function(data){
    layer.alert(JSON.stringify(data.field), {
      title: '最终的提交信息'
    })
    return false;
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
      }
    };
    
    
    $('.js_choice').on('click', function(){
      var type = $(this).data('type');
      active[type] && active[type].call(this);
    });
    
  });