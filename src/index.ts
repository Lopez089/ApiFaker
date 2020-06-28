import express from 'express';
import morgan from 'morgan';
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json());

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
