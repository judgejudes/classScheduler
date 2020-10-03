import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'; //container component managing screen interactions
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';

const Stack = createStackNavigator();

// App is a component (function that when called returns piece of UI,
//which is the View component to hold UI elements and Text component to hold text
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        {/* put screens below */}
        <Stack.Screen name="ScheduleScreen"
          component={ScheduleScreen}
          options={{ title: 'Schedule' }}
        />
        <Stack.Screen name="CourseDetailScreen"
          component={CourseDetailScreen}
          options={{ title: 'Course detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
