import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from '../screens/Registration';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Splash from '../screens/splash';
import { colors } from '../theme/designSystem';


const Navigate = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name="Registration"  component={Registration}  
        options={{
            title: 'Life Changer',
            headerLeft:()=> null,
            headerTitleStyle: {
              color: 'white',
              
            },
            headerStyle: {
              backgroundColor: colors.primary,
              
            },
          }}
        />
          <Stack.Screen name="Dashboard" component={Home} 
          options={{title:'Life Changer',
          headerLeft:()=> null,
          headerTitleStyle:{
            color:'white'
          },
          headerStyle:{
            backgroundColor:colors.primary,
          }  
            }}
          
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Login" component={Login}
          options={{
            title: 'Life Changer',
            headerLeft:()=> null,
            headerTitleStyle: {
              color: 'white',
            },
            headerStyle: {
              backgroundColor: colors.primary,
            }
          }}
          />
        
          

          
        </Stack.Navigator>
      </NavigationContainer>
      );
}

export default Navigate