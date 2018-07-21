const express = require('express');
const path = require('path');
const realRoutes = require('./routes');

const app = express();

 app.set('port', ( process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));

app.use(realRoutes);


app.listen(app.get('port'), () => {
  console.log('App running on port', app.get('port'));

});

