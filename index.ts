import cors from 'cors'

import express, {Request, Response} from 'express'

import uploadRouter from './routes/upload/upload.route';

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

console.log("Starting server...");

app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})    

app.get('/home', (req:Request, res:Response) => {
    res.send('Documento seguro main path');
})

// app.use('/', downloadRouter);

app.use('/upload', uploadRouter);

app.get('*', (req:Request, res:Response) => {
    res.send('404 - Not found');
});