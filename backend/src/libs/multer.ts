import multer from 'multer';
import {v4 as uuidv4} from 'uuid';
import path from 'path'

const storage = multer.diskStorage({
    destination: 'uploads', // a quina carpeta volem guardar les fotos,
    filename: (req,file,cb)=> {
        cb(null, uuidv4() + path.extname(file.originalname)) //renombrem les fotos de forma que no es repeteixin els noms

    }
});

export default multer({storage});