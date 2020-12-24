import express from 'express';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Server up port 33333, press Ctrl + c, to stop the server');
});
