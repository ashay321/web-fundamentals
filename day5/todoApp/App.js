import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import SignupForm from './components/SignupForm';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './components/LoginForm';


const Stack = createNativeStackNavigator();


const App = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Signin"
              options={{ headerShown:false }}
              component={SignupForm}
            />
            
            <Stack.Screen 
              name="Login" 
              options={{ headerShown:false }}
              component={LoginForm} 
            />
          </Stack.Navigator>
        </NavigationContainer>
  //   <SafeAreaView>
  //   <ScrollView
  //     contentInsetAdjustmentBehavior="automatic"
  //     >
      
  //     {/* <SignupForm/> */}
      

  //   </ScrollView>
  // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
