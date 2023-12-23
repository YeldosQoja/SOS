import {ScreenName} from '../types';
import HomeScreen from './HomeScreen';
import HospitalListScreen from './HospitalListScreen';
import MessagesScreen from './MessagesScreen';
import SettingsScreen from './SettingsScreen';
import SplashScreen from './SplashScreen';
import ContactsScreen from './contacts/ContactsScreen';
import DoctorScreen from './doctor/DoctorScreen';
import DiseaseHistoryScreen from './history/DiseaseHistoryScreen';
import MapScreen from './map/MapScreen';
import {SettingsButton} from './profile';
import ProfileScreen from './profile/ProfileScreen';

export const Screens = {
  [ScreenName.Splash]: SplashScreen,
  [ScreenName.Home]: HomeScreen,
  [ScreenName.Doctor]: DoctorScreen,
  [ScreenName.History]: DiseaseHistoryScreen,
  [ScreenName.Profile]: ProfileScreen,
  [ScreenName.Contacts]: ContactsScreen,
  [ScreenName.Map]: MapScreen,
  [ScreenName.Messages]: MessagesScreen,
  [ScreenName.HospitalList]: HospitalListScreen,
  [ScreenName.Settings]: SettingsScreen,
  [ScreenName.SettingsButton]: SettingsButton,
};
