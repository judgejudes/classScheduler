import React, { useContext, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import CourseList from '../components/CourseList';
import UserContext from '../UserContext';

const Banner = ({ title }) => ( //title is part of parameter list
  <Text style={styles.bannerStyle}>{title || '[loading...]'}</Text>
);

const ScheduleScreen = ({navigation}) => {
  //initial course schedule object; initial value is object with empty title and empty list of courses
  // const user = useContext(UserContext); //can get data stored in user context

  const [schedule, setSchedule] = useState({ title: '', courses: [] });
    const user = useContext(UserContext);
    const canEdit = user && user.role === 'admin';

  const view = (course) => {
      navigation.navigate(canEdit ? 'CourseEditScreen' : 'CourseDetailScreen', { course });
  };

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  //get schedule JSON data, and store using setSchedule() created by useState()
  useEffect(() => {
    const fetchSchedule = async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Banner title={schedule.title} error={schedule.error}/>
      <CourseList courses={schedule.courses} view={view} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  },
});

export default ScheduleScreen;
