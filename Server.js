import express from 'express';
import serverRender from './Renderer/server';
import path from 'path';
const app = express();

app.use(express.static('Public'));
// app.use('/Public', express.static(path.resolve(__dirname, 'Public')));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const initialContent = await serverRender();
  res.render('index',{...initialContent});
});

app.listen(process.env.PORT || 8080);