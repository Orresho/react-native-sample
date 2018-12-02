import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const Bootstrap = () => (
  <App />
);

AppRegistry.registerComponent(appName, () => Bootstrap);
