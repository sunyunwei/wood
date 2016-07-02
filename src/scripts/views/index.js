
var tplIndex = require('../templates/index.string');

var util = require('../utils/fn.js');

SPA.defineView('index', {
   html: tplIndex,

   plugins: ['delegated'],

   modules: [{
     name: 'content', // 子视图的名字，用作后边引用的句柄
     views: ['home', 'sort', 'shopcart','store','my'], // 定义子视图的列表数组
     defaultTag: 'home', // 定义默认视图
     container: '.l-container' // 子视图的容器
   }],
   bindActions: {
     'switch.tabs': function (e, data) {
       // 设置当前 tab 高亮
       util.setFocus(e.el);
       // 切换子视图
       this.modules.content.launch(data.tag);
     },
     'exit': function (e, data) {
       util.setFocus(e.el);
       // 关闭视图
       this.hide();
     }
   },

   bindEvents:{
     show:function () {

     }
   }


 });
