import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { empoints, jobsRouter } from './routes';
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//Router
app.use('/', empoints)
app.use('/api/jobs', jobsRouter);

// middleware
app.use(cors)
app.use(morgan('dev'));
app.use(express.json());


app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
