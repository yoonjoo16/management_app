const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers',(req,res) => {
    res.send([{
        'id': 1,
        'image': 'https://placeimg.com/64/64/1',
        'name': 'Bani',
        'birthday': '880524',
        'gender': 'female',
        'job': 'student'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/2',
        'name': 'Erik',
        'birthday': '890127',
        'gender': 'male',
        'job': 'nurse'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/3',
        'name': 'Kristin',
        'birthday': '861112',
        'gender': 'female',
        'job': 'dentist'
      }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));