import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import NextScreen from './screens/NextScreen';

const Stack = createStackNavigator();

const App = () => {
  const horizontalTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
          backgroundColor: '#F8F8F8',
        },
      };
    },
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00BF63',
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'Arial',
          },
          headerStyleInterpolator: HeaderStyleInterpolators.forFade,
          ...horizontalTransition,
        }}
      >
        <Stack.Screen
          name="Tela Inicial"
          component={HomeScreen}
          options={{
            title: 'Tela Inicial',
          }}
        />
        <Stack.Screen
          name="Next"
          component={NextScreen}
          options={{
            title: 'Next',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
