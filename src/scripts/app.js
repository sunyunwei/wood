require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');



require('./views/guide.js');
require('./views/store.js');
require('./views/my.js');
require('./views/shopcart.js');
require('./views/sort.js');
require('./views/home.js');
require('./views/index.js');

SPA.config({
  indexView: 'guide'
});
