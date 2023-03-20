import { NavigationContainer } from "@react-navigation/native";

import BottomNavigation from "./screens/Tabs_Navigation/BottomNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
