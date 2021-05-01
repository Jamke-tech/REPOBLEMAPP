import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import path from 'path'

const app = express();

import indexRoutes from './routes/index'

const cloudinary = require('cloudinary').v2
const bodyParser = require ('body-parser');


//settings
app.set('port', process.env.PORT || 25000); // definim el port del nostre servidor

// Middlewares que volem utilitzar pel nostre backend

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//Routes de la API
app.use('/api',indexRoutes); //Les rutes començaran per api i continuaran com posa en indexRoutes

// Preparació per poder pujar fotografies amb multer i a la carpeta qeu pot accedir
app.use('/uploads',express.static(path.resolve('uploads')));


//Configuració de cloudinary

cloudinary.config({
    cloud_name: "repoblemapp",
    api_key: "168943783851354",
    api_secret: "uNelnOOPzkuhsrsU2gvgi_ls_es"
  });

app.get("/", (request, response) => {
    response.json({ message: "Boneeees sóc el teu servidor" });
  });


// image upload API
app.post("/upload-image", (request, response) => {

    // collected image from a user
    const data = {
     image: request.body.image,
    }

    // upload image here
    cloudinary.uploader.upload(data.image);
});



  export default app;

