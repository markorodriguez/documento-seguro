import express, {Request, Response} from 'express'
import { uploadMulter } from '../../utils/multer.util';

const uploadRouter = express.Router();

uploadRouter.post('/', uploadMulter.array('pdf[]') ,(req:Request, res:Response)=>{   
    res.status(200).send({message: "Archivos cargados correctamente"});
})

export default uploadRouter;