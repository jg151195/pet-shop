import express from 'express'
import cors from 'cors'
import proprietariosRouter from './routers/proprietarios.route.js'
import animaisRouter from './routers/animais.route.js'
import servicosRouter from './routers/servicos.route.js'
import postRouter from './routers/posts.route.js'

const app = express();

app.use(express.json())

app.use(cors());
app.use('/proprietarios', proprietariosRouter);
app.use('/animais', animaisRouter);
app.use('/servicos', servicosRouter)
app.use('/post', postRouter),

app.listen(3000, console.log('Listening 3000'));



