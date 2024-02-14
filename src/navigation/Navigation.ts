import {LayoutRoot, Options} from 'react-native-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {ScreenName} from '@types';
import {appTheme} from '@theme';

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

export const authRoot: LayoutRoot = {
  root: {
    stack: {
      options: {
        hardwareBackButton: {
          popStackOnPress: false,
        },
        topBar: {
          backButton: {
            visible: false,
          },
        },
        popGesture: false,
      },
      children: [
        {
          component: {
            name: ScreenName.AuthLaunch,
          },
        },
      ],
    },
  },
};

export const defaultOptions: Options = {
  statusBar: {
    backgroundColor: appTheme.main,
  },
  topBar: {
    title: {
      color: appTheme.white,
    },
    backButton: {
      color: appTheme.white,
    },
    background: {
      color: appTheme.main,
    },
  },
  bottomTab: {
    fontSize: 12,
    textColor: appTheme.text,
    iconColor: appTheme.text,
    selectedIconColor: appTheme.main,
    selectedTextColor: appTheme.main,
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
                    bottomTab: {
                      icon: homeIcon,
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
                    bottomTab: {
                      icon: messageIcon,
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
                    bottomTab: {
                      icon: historyIcon,
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
