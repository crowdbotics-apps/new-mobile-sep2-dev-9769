import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen212172Navigator from '../features/BlankScreen212172/navigator';
import BlankScreen112171Navigator from '../features/BlankScreen112171/navigator';
import BlankScreen011297Navigator from '../features/BlankScreen011297/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen212172: { screen: BlankScreen212172Navigator },
BlankScreen112171: { screen: BlankScreen112171Navigator },
BlankScreen011297: { screen: BlankScreen011297Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
