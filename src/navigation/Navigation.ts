import {LayoutRoot, Options} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {ScreenName} from '../types/ScreenName';
import i18n from './../i18n';

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
                        text: i18n.t('bottom_bar_buttons.home'),
                        color: 'white',
                      },
                    },
                    bottomTab: {
                      icon: homeIcon,
                      text: i18n.t('bottom_bar_buttons.home'),
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
                        text: i18n.t('bottom_bar_buttons.doctor'),
                        color: 'white',
                      },
                    },
                    bottomTab: {
                      icon: messageIcon,
                      text: i18n.t('bottom_bar_buttons.doctor'),
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
                        text: i18n.t('bottom_bar_buttons.history'),
                        color: 'white',
                      },
                    },
                    bottomTab: {
                      icon: historyIcon,
                      text: i18n.t('bottom_bar_buttons.history'),
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
                  id: ScreenName.Profile,
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
                      text: i18n.t('bottom_bar_buttons.profile'),
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
