import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from '../screen/Account';

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Accountt" component={AccountScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}