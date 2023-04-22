import express, {Request, Response} from 'express'
import { openFile } from '../../controller/file.controller';
import path from 'path'

const downloadRouter = express.Router();

downloadRouter.get('/:filename', (req:Request, res:Response) => {
    const { filename } = req.params;
    console.log(filename);
    const exists = openFile(filename);
    if (exists) {
        // open file in browser
        res.sendFile(path.join(__dirname, `../../test/${filename}`));
    }
});

export default downloadRouter;