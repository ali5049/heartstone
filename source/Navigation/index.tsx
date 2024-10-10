import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Cards, CardTypes} from '../Screens';
import {RootStackParamList} from '../@types/navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CardTypes" component={CardTypes} />
        <Stack.Screen name="Cards" component={Cards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
