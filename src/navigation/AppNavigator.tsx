import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../screens';
import RoutNames from './RouteNames';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={RoutNames.HOME_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default AppStack;
