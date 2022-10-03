import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

const stack = createStackNavigator();

export default  App =() =>{
  return(
  <NavigationContainer>
  <stack.Navigator
  screenOptions={{
    headerShown:false
  }}
  >
    <stack.Screen name='Splash' component={Splash} />
    <stack.Screen name='Login'  component={Login} options={{headerShown:false}}/>
    <stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
  </stack.Navigator>
  </NavigationContainer>
  )
}
