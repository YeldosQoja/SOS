import {LayoutRoot, Navigation, Options} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {ScreenName} from '../types/ScreenName';

const homeIcon = MaterialIcons.getImageSourceSync('home', 24, 'black');
const messageIcon = FeatherIcons.getImageSourceSync(
  'message-square',
  22,
  'black',
);
const historyIcon = MaterialIcons.getImageSourceSync('history', 24, 'black');
const personIcon = MaterialIcons.getImageSourceSync(
  'person-outline',
  24,
  'black',
);

export const splashRoot: LayoutRoot = {
  root: {
    component: {
      name: ScreenName.Splash,
    },
  },
};

export const defaultOptions: Options = {
  statusBar: {
    backgroundColor: '#5e90ff',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#5e90ff',
    },
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    selectedIconColor: '#5e90ff',
    selectedTextColor: '#5e90ff',
  },
};

export const mainRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: ScreenName.Home,
                  options: {
                    topBar: {
                      title: {
                        text: 'Главная',
                        color: 'white',
                      },
                    },
                    bottomTab: {
                      icon: homeIcon,
                      text: 'Главная',
                      fontSize: 12,
                    },
                  },
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: ScreenName.Doctor,
                  options: {
                    topBar: {
                      title: {
                        text: 'Доктор',
                        color: 'white',
                      },
                    },
                    bottomTab: {
                      icon: messageIcon,
                      text: 'Доктор',
                      fontSize: 12,
                    },
                  },
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: ScreenName.History,
                  options: {
                    topBar: {
                      title: {
                        text: 'История болезней',
                        color: 'white',
                      },
                    },
                    bottomTab: {
                      icon: historyIcon,
                      text: 'История',
                      fontSize: 12,
                    },
                  },
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: ScreenName.Profile,
                  options: {
                    topBar: {
                      rightButtons: [
                        {
                          id: 'SETTINGS_BUTTON',
                          component: {
                            name: ScreenName.SettingsButton,
                          },
                        },
                      ],
                    },
                    bottomTab: {
                      icon: personIcon,
                      text: 'Профиль',
                      fontSize: 12,
                    },
                  },
                },
              },
            ],
          },
        },
      ],
    },
  },
};

export const pushNavigationScreen = (
  componentId: string,
  screenName: string,
) => {
  Navigation.push(componentId, {
    component: {
      name: screenName,
    },
  });
};

export const dismissModalScreen = Navigation.dismissModal;

export const showModalScreen = (screenName: string) => {
  Navigation.showModal({
    component: {
      name: screenName,
    },
  });
};
