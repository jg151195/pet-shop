import express from 'express'
import cors from 'cors'
import proprietariosRouter from './routers/proprietarios.route.js'
import animaisRouter from './routers/animais.route.js'

const app = express();

app.use(express.json())

app.use(cors());
app.use('/proprietarios', proprietariosRouter);
app.use('/animais', animaisRouter);

app.listen(3000, console.log('Listening 3000'));



