import { SwitchNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
// screens
import SplashScreen from '../screens/Splash';
import StartScreen from '../screens/Start';
import RegisterScreen from '../screens/Register';
import LoginScreen from '../screens/Login';
import TodayScreen from '../screens/Today';
// other
import withRedirect from '../screens/Splash/withRedirect';

export const AuthStack = StackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: {
        header: false,
        gesturesEnabled: false,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: false,
        gesturesEnabled: true,
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: false,
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Start',
  },
);

export const AppDrawer = DrawerNavigator({
  Today: {
    screen: TodayScreen,
  },
});

export const RootNavigator = SwitchNavigator(
  {
    Splash: withRedirect(SplashScreen),
    Auth: AuthStack,
    App: AppDrawer,
  },
  {
    initialRouteName: 'Splash',
  },
);
