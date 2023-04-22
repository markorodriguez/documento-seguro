import multer from "multer";

const multerStorage = multer.diskStorage(
    {
        destination: (req, file, cb) => {
            cb(null, 'test/');
        },
        filename: (req, file, cb) => {
            try {
                cb(null, file.originalname.split(".")[0]+".pdf");
            } catch (error:any) {
                console.log("Ha ocurrido un error cargando los archivos");
            }
        }
    }
)

const uploadMulter = multer({ storage: multerStorage });

export { uploadMulter, multerStorage }