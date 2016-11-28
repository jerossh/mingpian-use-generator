var router = require('koa-router')();

router
  .get('/a', async function (ctx, next) {
    ctx.state = {
      title: '文章采集 - 咖普网络服务'
    };

    await ctx.render('index', {
    });
  })
  .post('/get', async function (ctx, next) {
    console.log(ctx.req);
    await ctx.redirect('/a')

  })
module.exports = router;
