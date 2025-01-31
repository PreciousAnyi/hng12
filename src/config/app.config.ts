import express from 'express'
import cors from 'cors'
import infoRoute from '../routes/infoRoute'

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', infoRoute);

export default app
