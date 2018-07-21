var express = require('express')


var app = express();
app.set('port', process.env.PORT || 5050);
app.listen(app.get('port'), function(){
    console.log('English-proxy is start on http:localhost:'+ app.get('port'));
})