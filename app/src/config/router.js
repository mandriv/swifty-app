import { StackNavigator, NavigationActions } from 'react-navigation';
// screens
import SplashScreen from '../screens/Splash';

// resets stack
export const resetAction = route => NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: route })],
});

// main navigator
export const RootNavigator = StackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      header: false,
      title: 'Splash',
      gesturesEnabled: false,
    },
  },
}, {
  initialRouteName: 'Splash',
});
