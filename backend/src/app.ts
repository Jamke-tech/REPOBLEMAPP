import express from 'express';
import cors from 'cors'
import morgan from 'morgan';
import path from 'path'

const app = express();

import indexRoutes from './routes/index'


//settings
app.set('port', process.env.PORT || 25000); // definim el port del nostre servidor

// Middlewares que volem utilitzar pel nostre backend

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes de la API
app.use('/api',indexRoutes); //Les rutes començaran per api i continuaran com posa en indexRoutes

// Preparació per poder pujar fotografies amb multer i a la carpeta qeu pot accedir
app.use('/uploads',express.static(path.resolve('uploads')));



export default app;