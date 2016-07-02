var tplStore = require('../templates/store.string');
var util = require('../utils/fn.js');

SPA.defineView('store', {
  html: tplStore,
  //plugins: ['delegated'],
  // bindActions: {
  //   'tap.homehot.slide': function (e, data) {
  //     this.homeHotSwiper.slideTo($(e.el).index());
  //   },
  //
  //   'tap.home.slide': function (e, data) {
  //     this.homeSwiper.slideTo($(e.el).index());
  //   }
  // },
  bindEvents:{
    'show':function(){
      var myswiper= new Swiper('#store-swiper',{
        loop:false
      });
    }
    }
  });
