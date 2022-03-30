const express = require('express')
const compression = require('compression')
const open = require('open')

let port = 3000
const app = express()

// gzip压缩一定要在托管静态资源之前
app.use(compression())
// 托管静态资源
app.use(express.static('./dist'))

open(`http://127.0.0.1:${port}`)
app.listen(port, () => {
  console.log(`服务器运行在${port}端口`);
})