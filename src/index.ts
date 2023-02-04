import express from 'express';
import morgan from 'morgan';
import { empoints, jobsRouter } from './routes';
const app = express();

//setting
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json());

//Router
app.use('/', empoints)
app.use('/api/jobs', jobsRouter);

app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});
