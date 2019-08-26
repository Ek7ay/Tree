/***/
 
layui.extend({
  setter: 'config' //配置模块
  ,admin: 'lib/admin' //核心模块
  ,view: 'lib/view' //视图渲染模块
}).define(['setter', 'admin'], function(exports){
  var $ = layui.jquery,
  setter = layui.setter
  ,element = layui.element
  ,admin = layui.admin
  ,tabsPage = admin.tabsPage
  ,view = layui.view
  
  //打开标签页
  ,openTabsPage = function(url, text){
    //遍历页签选项卡
    var matchTo
    ,tabs = $('#LAY_app_tabsheader>li')
    ,path = url.replace(/(^http(s*):)|(\?[\s\S]*$)/g, '');
    
    tabs.each(function(index){
      var li = $(this)
      ,layid = li.attr('lay-id');
      
      if(layid === url){
        matchTo = true;
        tabsPage.index = index;
      }
    });
    
    text = text || '新标签页';
    
    if(setter.pageTabs){
      //如果未在选项卡中匹配到，则追加选项卡
      if(!matchTo){
        $(APP_BODY).append([
          '<div class="layadmin-tabsbody-item layui-show">'
            ,'<iframe src="'+ url +'" frameborder="0" class="layadmin-iframe"></iframe>'
          ,'</div>'
        ].join(''));
        tabsPage.index = tabs.length;
        element.tabAdd(FILTER_TAB_TBAS, {
          title: '<span>'+ text +'</span>'
          ,id: url
          ,attr: path
        });
      }
    } else {
      var iframe = admin.tabsBody(admin.tabsPage.index).find('.layadmin-iframe');
      iframe[0].contentWindow.location.href = url;
    }

    //定位当前tabs
    element.tabChange(FILTER_TAB_TBAS, url);
    admin.tabsBodyChange(tabsPage.index, {
      url: url
      ,text: text
    });
  }
  
  ,APP_BODY = '#LAY_app_body', FILTER_TAB_TBAS = 'layadmin-layout-tabs'
  ,$ = layui.$, $win = $(window);
  
  //初始
  if(admin.screen() < 2) admin.sideFlexible();
  
  //将模块根路径设置为 controller 目录
  layui.config({
    base: setter.base + 'modules/'
  });
  
  //扩展 lib 目录下的其它模块
  layui.each(setter.extend, function(index, item){
    var mods = {};
    mods[item] = '{/}' + setter.base + 'lib/extend/' + item;
    layui.extend(mods);
  });
  
  view().autoRender();
  
  //加载公共模块
  layui.use('common');
  //1119 触发tab切换
  $('#LAY_app_tabsheader').on("click","li",function(){
  	var index = $(this).index();
  	$(this).addClass("layui-this").siblings().removeClass("layui-this");
  	$("#LAY_app_body .layadmin-tabsbody-item").eq(index).addClass("layui-show").siblings().removeClass("layui-show");
  });
  //待办工单汇总
    $('#repairOrder').on("click",function(){
    	layer.open({
    		title:'待办工单汇总'
	        ,type: 2
	        ,maxmin: true //开启最大化最小化按钮
	        ,area: ['550px', '450px']//宽高
	        ,content: '../views/maintainOrder/repairOrder.html'
	        ,shade: 0 //不显示遮罩        
     	});
    })
	$('.all-sort-list > .item').hover(function(){
		var eq = $('.all-sort-list > .item').index(this),				//获取当前滑过是第几个元素
			h = $('.all-sort-list').offset().top,						//获取当前下拉菜单距离窗口多少像素
			s = $(window).scrollTop(),									//获取游览器滚动了多少高度
			i = $(this).offset().top,									//当前元素滑过距离窗口多少像素
			item = $(this).children('.item-list').height(),				//下拉菜单子类内容容器的高度
			sort = $('.all-sort-list').height();						//父类分类列表容器的高度
		
		if ( item < sort ){												//如果子类的高度小于父类的高度
			if ( eq == 0 ){
				$(this).children('.item-list').css('top', (i-h));
			}
		} else {
			if ( s > h ) {												//判断子类的显示位置，如果滚动的高度大于所有分类列表容器的高度
				if ( i-s > 0 ){											//则 继续判断当前滑过容器的位置 是否有一半超出窗口一半在窗口内显示的Bug,
					$(this).children('.item-list').css('top', (s-h)+2 );
				} else {
					$(this).children('.item-list').css('top', (s-h)-(-(i-s))+2 );
				}
			} else {
				$(this).children('.item-list').css('top', 3 );
			}
		}	
 
			$(this).addClass('hover');
		$(this).children('.item-list').css('display','block');
	},function(){
		$(this).removeClass('hover');
		$(this).children('.item-list').css('display','none');
	});
  //对外输出
  exports('index', {
    openTabsPage: openTabsPage
  });
});
