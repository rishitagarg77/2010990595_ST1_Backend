const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 1000;

app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const msg = 'My First App';
    const params = {
        'title': 'My First App',
        'message': msg
    }
    res.status(200).render('index.pug', params);
});

app.post('/', (req, res) => {
    name1 = req.body.name1;
    age = req.body.age;
    gender = req.body.gender;
    email = req.body.email;
    phone = req.body.phone;
    address = req.body.address;
    more = req.body.more;

    let output = `Name : ${name1}
                  Age : ${age}
                  Gender : ${gender}
                  Email : ${email}
                  Phone : ${phone}
                  Address : ${address}
                  More Info : ${more}`;
    fs.writeFileSync('outputNew.text',output);
    res.status(200).render('index.pug');              
});

app.listen(port, () => {
    console.log(`The application is running on port ${port}`)
})