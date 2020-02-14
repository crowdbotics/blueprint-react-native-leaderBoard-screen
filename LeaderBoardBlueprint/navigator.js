import { createStackNavigator } from "react-navigation-stack";

import Contacts from "./screens/leaderBoard";
import Home from "./screens";

export default LeaderBoardBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    LeaderBoard: { screen: LeaderBoard },
  },
  {
    initialRouteName: "Home"
  }
);
