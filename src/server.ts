import App from './app';
import connect from './dbConnection';
connect();
const app: App = new App();
app.start();
