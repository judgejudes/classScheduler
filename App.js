import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'; //container component managing screen interactions
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import UserContext from './UserContext';
import CourseEditScreen from './screens/CourseEditScreen';

const Stack = createStackNavigator();

// App is a component (function that when called returns piece of UI,
//which is the View component to hold UI elements and Text component to hold text
const App = () => {
  const [user, setUser] = useState({ role: 'admin'});
  return (
    <UserContext.Provider value={user}>
      {/* wrap UserContext.Provider around components that need the data */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* put screens below */}
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={{ title: 'Schedule' }}
          />
          <Stack.Screen name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ title: 'Course Detail' }}
          />
          <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
