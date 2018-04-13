import { SwitchNavigator, StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation';
// screens
import SplashScreen from '../screens/Splash';
import StartScreen from '../screens/Start';
import RegisterScreen from '../screens/Register';
import SignInScreen from '../screens/SignIn';
import TodayStepsScreen from '../screens/Today/Steps';
import TodayDistanceScreen from '../screens/Today/Distance';
import TodayCaloriesScreen from '../screens/Today/Calories';
import TodayAverageSpeedScreen from '../screens/Today/AverageSpeed';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import LeaderboardScreen from '../screens/Leaderboard';
import MapScreen from '../screens/Map';
// other
import withInit from '../screens/Splash/withInit';
import { primaryLight, secondaryLight, offWhite, white } from '../config/colours';

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
  },
  {
    initialRouteName: 'Start',
  },
);

export const TodayTabs = TabNavigator({
  Steps: {
    screen: TodayStepsScreen,
  },
  Distance: {
    screen: TodayDistanceScreen,
  },
  Calories: {
    screen: TodayCaloriesScreen,
  },
  AverageSpeed: {
    screen: TodayAverageSpeedScreen,
  },
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: secondaryLight,
    activeBackgroundColor: primaryLight,
    inactiveTintColor: offWhite,
    inactiveBackgroundColor: primaryLight,
  },
});

export const AppDrawer = DrawerNavigator({
  Today: TodayTabs,
  Map: {
    screen: MapScreen,
  },
  Leaderboard: {
    screen: LeaderboardScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
}, {
  drawerBackgroundColor: primaryLight,
  contentOptions: {
    activeTintColor: secondaryLight,
    inactiveTintColor: offWhite,
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
