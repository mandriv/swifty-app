import { SwitchNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
// screens
import SplashScreen from '../screens/Splash';
import StartScreen from '../screens/Start';
import RegisterScreen from '../screens/Register';
import SignInScreen from '../screens/SignIn';
import TodayScreen from '../screens/Today';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import LeaderboardScreen from '../screens/Leaderboard';
import MapScreen from '../screens/Map';
// other
import withInit from '../screens/Splash/withInit';

export const AuthStack = StackNavigator(
  {
    Start: {
      screen: StartScreen,
      navigationOptions: {
        header: false,
      },
    },
    Login: {
      screen: SignInScreen,
      navigationOptions: {
        header: false,
      },
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: false,
      },
    },
       Map: {
      screen: MapScreen,
      navigationOptions: {
        header: false,
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
    Splash: withInit(SplashScreen),
    Auth: AuthStack,
    App: AppDrawer,
  },
  {
    initialRouteName: 'Splash',
  },
);
