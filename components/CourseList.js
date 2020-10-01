import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';

//creating object to map letters to terms, then making list of term names to make buttons with
const termMap = { F: 'Fall', W: 'Winter', S: 'Spring' };
const terms = Object.values(termMap);

const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);

const CourseList = ({ courses }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');

  //list of courses in selected term
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return (
    <ScrollView>
      {/* passing selected term as a property to term selector */}
      <TermSelector selectedTerm = {selectedTerm} setSelectedTerm={setSelectedTerm}/>
        <CourseSelector courses={termCourses} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CourseList;