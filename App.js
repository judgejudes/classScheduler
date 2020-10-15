import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { firebase } from './firebase';
import { Button } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'; //container component managing screen interactions
import { createStackNavigator } from '@react-navigation/stack';
import ScheduleScreen from './screens/ScheduleScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';
import UserContext from './UserContext';
import CourseEditScreen from './screens/CourseEditScreen';
import SignInScreen from './screens/SignInScreen'; //or should this be RegisterScreen?

const Stack = createStackNavigator();

const SignInButton = ({ navigation, user }) => (
  user && user.uid
    ? <Button title="Logout" color="#448aff"
      onPress={() => firebase.auth().signOut()}
    />
    : <Button title="Sign In" color="#448aff"
      onPress={() => navigation.navigate('SignInScreen')}
    />
);

// App is a component (function that when called returns piece of UI,
//which is the View component to hold UI elements and Text component to hold text
const App = () => {
  const [auth, setAuth] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    // console.log("hi");
    firebase.auth().onAuthStateChanged((auth) => {
      setAuth(auth);
    });
  }, []);

  useEffect(() => {
    if (auth && auth.uid) {
      const db = firebase.database().ref('users').child(auth.uid);
      const handleData = (snap) => {
        setUser({ uid: auth.uid, ...snap.val() });
      };
      db.on('value', handleData, (error) => alert(error));
      return () => { db.off('value', handleData); };
    } else {
      setUser(null);
    }
  }, [auth]);

  return (
    <UserContext.Provider value={user}>
      {/* wrap UserContext.Provider around components that need the data */}
      <NavigationContainer>
        <Stack.Navigator>
          {/* put screens below */}
          <Stack.Screen name="ScheduleScreen"
            component={ScheduleScreen}
            options={({ navigation }) => ({
              title: "Schedule",
              headerRight: () => (
                <SignInButton navigation={navigation} user={user} />
              ),
            })
            }
          />
          <Stack.Screen name="CourseDetailScreen"
            component={CourseDetailScreen}
            options={{ title: 'Course Detail' }}
          />
          <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor' }}
          />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
