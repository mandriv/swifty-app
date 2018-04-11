import { AppRegistry, YellowBox } from 'react-native';
import App from './App';

YellowBox.ignoreWarnings([
  'Module RCTImageLoader requires main queue',
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

AppRegistry.registerComponent('Swifty', () => App);
