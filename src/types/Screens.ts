import DiseaseListScreen from '../screens/diseases/DiseaseListScreen';
import {ScreenName} from '.';
import HomeScreen from '../screens/HomeScreen';
import HospitalListScreen from '../screens/hospitals/HospitalListScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SplashScreen from '../screens/SplashScreen';
import ContactsScreen from '../screens/contacts/ContactsScreen';
import DoctorScreen from '../screens/doctor/DoctorScreen';
import DiseaseHistoryScreen from '../screens/history/DiseaseHistoryScreen';
import MapScreen from '../screens/map/MapScreen';
import {SettingsButton} from '../screens/profile';
import ProfileScreen from '../screens/profile/ProfileScreen';

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
  [ScreenName.DiseaseList]: DiseaseListScreen,
  [ScreenName.Settings]: SettingsScreen,
  [ScreenName.SettingsButton]: SettingsButton,
};
