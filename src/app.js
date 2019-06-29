const Koa = require('Koa');

const app = new Koa();

app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,ab!</h1>';
})

app.listen(9090);
console.log("port at 9090...");