import express, { json, urlencoded, static as fsStatic } from 'express';
import path from 'path';
import indexRouter from './routes/index';
import cors from 'cors';

class Application {
  public app: express.Application;
  private viewsPath: string = path.join(__dirname, 'views');
  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }
  // Settings
  settings() {
    this.app.set('port', process.env.PORT || 3000);
    this.app.set('views', this.viewsPath);
    this.app.set('view engine', 'pug');
  }

  //  Middlewares
  middlewares() {
    //  serving static files
    this.app.use(fsStatic(path.join(__dirname, 'public')));
    //  To parse the body fo the request
    this.app.use(json());
    // To parese the request queries params
    this.app.use(urlencoded({ extended: true }));
    // cors
    this.app.use(cors());
  }

  //  Routes
  routes() {
    this.app.use('*', cors());
    this.app.use('/api/v1/users', indexRouter);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is started at ${this.app.get('port')}...`);
    });
  }
}
export default Application;
