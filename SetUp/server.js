/**
 * Created by ttnd on 13/10/16.
 */

import express from 'express'
import path from 'path'
import webpack from 'webpack'
import config from '../webpack'

const app = express();
let compile = webpack(config);


//middlewares executed sequentially
app.use(require('webpack-dev-middleware')(compile, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


//
app.use('*', function (req, res){
  res.sendFile(path.join(__dirname , '../src/index.html'))
});
app.listen(6000, function() {
    console.log('Server running on port 6000')

})
