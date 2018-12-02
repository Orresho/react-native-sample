import { Navigation } from "react-native-navigation";
import StartScreen from "./src/screens/Start";
import HomeScreen from "./src/screens/Home";
import ProfileScreen from "./src/screens/Profile";


// Register screens
Navigation.registerComponent("testing.StartScreen", () => StartScreen);
Navigation.registerComponent("testing.HomeScreen", () => HomeScreen);
Navigation.registerComponent("testing.ProfileScreen", () => ProfileScreen);

// Start app
Navigation.startSingleScreenApp({
  screen: {
    screen: "testing.StartScreen",
    title: "Home"
  }
});
