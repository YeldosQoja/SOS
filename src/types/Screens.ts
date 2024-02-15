import {ScreenName} from './ScreenName';
import HomeScreen from '../screens/HomeScreen';
import HospitalListScreen from '../screens/hospitals/HospitalListScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import SplashScreen from '../screens/SplashScreen';
import ContactsScreen from '../screens/contacts/ContactsScreen';
import DoctorScreen from '../screens/doctor/DoctorScreen';
import DiseaseHistoryScreen from '../screens/history/DiseaseHistoryScreen';
import MapScreen from '../screens/map/MapScreen';
import {SettingsButton} from '../screens/profile';
import ProfileScreen from '../screens/profile/ProfileScreen';
import DiseaseListScreen from '../screens/diseases/DiseaseListScreen';
import DiseaseDetailScreen from '../screens/diseaseDetail/DiseaseDetailScreen';
import DiseasePropertyDetailScreen from '../screens/diseaseDetail/DiseasePropertyDetailScreen';
import LanguageScreen from '../screens/language/LanguageScreen';
import SigninScreen from 'screens/auth/SigninScreen';
import SignupScreen from 'screens/auth/SignupScreen';
import AuthLaunchScreen from 'screens/auth/AuthLaunchScreen';
import CodeConfirmationScreen from 'screens/auth/CodeConfirmationScreen';

export const Screens = {
  [ScreenName.Splash]: SplashScreen,
  [ScreenName.AuthLaunch]: AuthLaunchScreen,
  [ScreenName.CodeConfirmation]: CodeConfirmationScreen,
  [ScreenName.Signin]: SigninScreen,
  [ScreenName.Signup]: SignupScreen,
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
  [ScreenName.Language]: LanguageScreen,
  [ScreenName.SettingsButton]: SettingsButton,
  [ScreenName.DiseaseDetail]: DiseaseDetailScreen,
  [ScreenName.DiseasePropertyDetail]: DiseasePropertyDetailScreen,
};
