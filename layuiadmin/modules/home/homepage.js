  /*
    下面通过 layui.use 分段加载不同的模块，实现不同区域的同时渲染，从而保证视图的快速呈现
  */
  //待办表格
layui.use(['table','element', 'layer'], function(){
    var $ = layui.jquery
    ,table = layui.table
    ,element = layui.element; //Tab的切换功能;
    
    //今日热搜
    table.render({
      elem: '#LAY-index-topSearch'
      ,height: 400
//    ,url: layui.setter.base + 'json/console/top-search.js' //模拟接口
      ,page: true
      ,cols: [[ //标题栏
	      {field: 'id', title: 'ID', width: 80, sort: true}
	      ,{field: 'username', title: '用户名', width: 120}
	      ,{field: 'email', title: '邮箱', minWidth: 150}
	      ,{field: 'sign', title: '签名', minWidth: 160}
	      ,{field: 'sex', title: '性别', width: 80}
	      ,{field: 'city', title: '城市', width: 100}
	      ,{field: 'experience', title: '积分', width: 80, sort: true}
	    ]]
      ,skin: 'line'
      ,size:'sm'//控制表格样式
      ,limit:'10'
      ,data: [{
		      "id": "10001"
		      ,"username": "杜甫"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "李白"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "杜甫"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "李白"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "杜甫"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "李白"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "杜甫"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "李白"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    },{
		      "id": "10001"
		      ,"username": "杜甫"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "116"
		      ,"ip": "192.168.0.8"
		      ,"logins": "108"
		      ,"joinTime": "2016-10-14"
		    }, {
		      "id": "10002"
		      ,"username": "李白"
		      ,"email": "xianxin@layui.com"
		      ,"sex": "男"
		      ,"city": "浙江杭州"
		      ,"sign": "人生恰似一场修行"
		      ,"experience": "12"
		      ,"ip": "192.168.0.8"
		      ,"logins": "106"
		      ,"joinTime": "2016-10-14"
		      ,"LAY_CHECKED": true
		    }]
      ,done: function(res, curr, count){
      	var $mylist = $("#LAY-index-topSearch").next('.layui-table-view').find('table.layui-table');
				$mylist.dblclick(function(event){
					alert($(event.target).closest("tr")[0].outerHTML)
				});
      }
    });
    //添加常用工单
    $('.js-add-btn').on("click",function(){
    	layer.open({
    		title:'添加常用功能'
        ,type: 2
        ,area: ['320px', '340px']//宽高
        ,content: '../maintainOrder/comTree.html'
        ,btn: '关闭'
        ,btnAlign: 'c' //按钮居中
        ,shade: 0 //不显示遮罩
        ,yes: function(){
          layer.closeAll();
        }
     });
    })
    
    //管理常用功能
    $("#manageBtn").on("click",function(){
    	$(this).addClass('none').siblings("#fulfillBtn").removeClass('none');
			var editHtml='';
    		
     	$('.js-manage .manage-a').each(function(i,e){
			    var manText = $(this).text();
						editHtml= "<span class='editInput'><input type='text' value='" + manText + "' /><i class='layui-icon layui-del'>&#x1006;</i></span>";
			    		
			    $('.manageBox').append(editHtml);
			    $(this).remove();
			});
			$('.js-add-btn').hide();
			$(".layui-del").on('click',function(){
	    	$(this).parent().remove();
	    })
    });
    $("#fulfillBtn").on("click",function(){
    	$(this).addClass('none').siblings("#manageBtn").removeClass('none');
			var editHtml='';
    		
     	$('.js-manage .editInput input').each(function(i,e){
			    var iptVal = $(this).val();
						editHtml= "<a class='manage-a' lay-href='javascript:;'>" + iptVal + "</a>";
			    		
			    $('.manageBox').append(editHtml);
			    $(this).parent('.editInput').remove();
			});
			$('.js-add-btn').show();
    });
    
  });