const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); // express ko btana hoga hai ki public folder se static files(style.css),(login.jpg) serve karni hai,wrna cssfile ya image file load hi nhi lega.


//"jb tum get method se index.html file bulaoge tb web page sab kuch fetch kr lega except  html me rakhi static files like css,image files etc
// static file ko load nhi lega ,aise case ke tumko express ko btana hoga hai ki public folder se static files(style.css),(login.jpg) serve karni hai,wrna css file ya image file load hi nhi lega website/webpage pr.
app.post('/submit', (req, res) => {
   const e_mail_id=req.body.e_mail;
    const password=req.body.paass;

    if (e_mail_id === 'abhilashtiwari.smn@gmail.com' && password === 'Abhi32@#'){
        res.send('welcome to the login page');
    } 
    else {
       res.send('Invalid email or password');
   }
});

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});