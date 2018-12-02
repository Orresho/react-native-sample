import { Navigation } from "react-native-navigation";
import Icon from 'react-native-vector-icons/Ionicons';
// start the app

export const startTabs = () => {
  Promise.all([
    Icon.getImageSource("home", 30),
    Icon.getImageSource("contact", 30)
  ]).then(sources =>
    Navigation.startTabBasedApp({
      tabs: [
        {
          label: 'Home',
          screen: 'testing.HomeScreen', // this is a registered name for a screen
          title: 'Home',
          icon: sources[0]
        },
        {
          label: 'Profile',
          screen: 'testing.ProfileScreen',
          title: 'Profile',
          icon: sources[1]
        }
      ]
    })
  )
}
