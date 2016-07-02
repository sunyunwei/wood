var tplHome = require('../templates/home.string');

SPA.defineView('home', {
  html: tplHome,
  // plugins:['delegated',{
  //   name:'avalon',
  //   options:function (vm) {
  //     vm.livelist = [];
  //   }
  // }],
  // bindActions:{
  //
  // },
  bindEvents:{
    // 'beforeShow':function () {
    //   var vm = this.getVM();
    //   $.ajax({
    //     url:'/rosewood/mock/livelist.json',
    //     type:'get',
    //     data:{
    //       rtype:'origin'
    //     },
    //     success:function (rs) {
    //       //console.log(rs);
    //       vn.livelist = rs.data;
    //     }
    //   });
    // },

    'show':function () {
      var lifenavScroll = this.widgets['lifenav-scroll'];
      lifenavScroll.options.scrollX = true;
      lifenavScroll.options.scrollY = false;
      var myswiper= new Swiper('#banner-swiper',{
         loop:true,
         autoplay:3000,
         //循环
         autoplayDisableOnInteraction : false
      });
    }

  }



});
