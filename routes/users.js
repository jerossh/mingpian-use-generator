var router = require('koa-router')();

router
.get('/index', async function (ctx, next) {
  ctx.state = {
    title: '文章采集 - 咖普网络服务'
  };

  await ctx.render('user', {
  });
});

module.exports = router;
