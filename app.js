// Connect is a middleware layer for Node.js
var connect = require('connect')
// expressjs 中间件  Serve static files
var serveStatic = require('serve-static');
var chalk = require('chalk');

const app = connect();
const basePath = '/';
const port = 8800;
const staticPath = './dist';

//
app.use(
    basePath,
    serveStatic(staticPath, {
        index: ['index.html', '/']
    }),
);

//
app.listen(port, function () {
    console.log(
        chalk.green(`> Listening at  http://localhost:${port}${basePath}`)
    )
});