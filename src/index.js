import express from 'express';
import cors from 'cors';
import expressJwt from 'express-jwt';
import jwt from 'jsonwebtoken';


const app = express();
app.use(cors());

app.get('/', (req, res) => {
   res.send('hi'); 
});

const secret = 'addfjjfjenneehdnd';

app.get('/token', function(req, res){
    const data = {
        user: 'webfarrock',
        name: 'some name',
    };

    return res.json(jwt.sign(data, secret));
});

app.get('/protected', expressJwt({secret}), function(req, res){
    return res.json(req.user);
});
console.log('upd');
app.listen(3000, () => {
    console.log('app is running on port 3000');
});