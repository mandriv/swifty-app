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
import MainSettingsScreen from '../screens/Settings/Main';
import ModifyGoalsSettingsScreen from '../screens/Settings/ModifyGoals';
import LeaderboardStepsScreen from '../screens/Leaderboard/Steps';
import LeaderboardDistanceScreen from '../screens/Leaderboard/Distance';
import LeaderboardCaloriesScreen from '../screens/Leaderboard/Calories';
import MapTodayScreen from '../screens/Map/Today';
import MapThisWeekScreen from '../screens/Map/ThisWeek';
import MapThisMonthScreen from '../screens/Map/ThisMonth';
import MapAnytimeScreen from '../screens/Map/Anytime';
// other
import withInit from '../screens/Splash/withInit';
import { primaryLight, secondaryLight, offWhite, primary } from '../config/colours';

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
    activeBackgroundColor: primary,
    inactiveTintColor: offWhite,
    inactiveBackgroundColor: primary,
  },
});

export const MapTabs = TabNavigator({
  Today: {
    screen: MapTodayScreen,
  },
  ThisWeek: {
    screen: MapThisWeekScreen,
  },
  ThisMonth: {
    screen: MapThisMonthScreen,
  },
  Anytime: {
    screen: MapAnytimeScreen,
  },
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: secondaryLight,
    activeBackgroundColor: primary,
    inactiveTintColor: offWhite,
    inactiveBackgroundColor: primary,
  },
});

export const LeaderboardTabs = TabNavigator({
  Steps: {
    screen: LeaderboardStepsScreen,
  },
  Distance: {
    screen: LeaderboardDistanceScreen,
  },
  Calories: {
    screen: LeaderboardCaloriesScreen,
  },
}, {
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: secondaryLight,
    activeBackgroundColor: primary,
    inactiveTintColor: offWhite,
    inactiveBackgroundColor: primary,
  },
});

export const SettingsStack = StackNavigator({
  MainSettings: {
    screen: MainSettingsScreen,
  },
  ModifyGoals: {
    screen: ModifyGoalsSettingsScreen,
  },
}, {
  navigationOptions: {
    header: null,
  },
});

export const AppDrawer = DrawerNavigator({
  Today: TodayTabs,
  Map: MapTabs,
  Leaderboard: LeaderboardTabs,
  Profile: {
    screen: ProfileScreen,
  },
  Settings: SettingsStack,
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
