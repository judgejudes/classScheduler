import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const schedule = {
  "title": "CS Courses for 2018-2019",
  "courses": [
    {
      "id": "F101",
      "title": "Computer Science: Concepts, Philosophy, and Connections",
      "meets": "MWF 11:00-11:50"
    },
    {
      "id": "F110",
      "title": "Intro Programming for non-majors",
      "meets": "MWF 10:00-10:50"
    },
    {
      "id": "F111",
      "title": "Fundamentals of Computer Programming I",
      "meets": "MWF 13:00-13:50"
    },
    {
      "id": "F211",
      "title": "Fundamentals of Computer Programming II",
      "meets": "TuTh 12:30-13:50"
    }
  ]
};

// App is a component (function that when called returns piece of UI,
//which is the View component to hold UI elements and Text component to hold text
const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.bannerStyle}>{schedule.title}</Text> */}
      <Banner title={schedule.title} />
    </View>
  );
}

const Banner = ({title}) => ( //title is part of parameter list
  <Text style={styles.bannerStyle}>{title}</Text>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  }
});

export default App;
