var serve = require('koa-static');
var koa = require('koa');
var app = koa();
var util = require("util");

// x-response-time

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
});

// logger

app.use(function *(next) {
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(serve('./src'));

app.use(function *(next){
    yield next;
    if ('/' == this.path) {
        this.body = 'Try `GET /package.json`';
    }
});

app.listen(8080);
