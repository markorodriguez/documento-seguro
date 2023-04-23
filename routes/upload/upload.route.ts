import express, { NextFunction, Request, Response } from 'express'
import { uploadMulter } from '../../utils/multer.util';

const uploadRouter = express.Router();

uploadRouter.post('/', (req: Request, res: Response) => {

    uploadMulter.array('pdf[]', 200)(req, res, (err: any) => {
        console.log(req.files?.length);
        if (err) {
            console.error(err.message)
            res.status(400).json({ message: err.message });
        } else {
            console.info("File uploaded successfully");
            res.status(200).json({ message: 'Archivos cargados correctamente', limits: { fieldSize: 25 * 1024 * 1024 } });
        }
    });

})

export default uploadRouter;