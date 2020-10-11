import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
import Form from '../components/expo-form-starter/Form';
import { firebase } from '../firebase';
import { PrivateValueStore } from '@react-navigation/native';

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('Please enter a valid email')
        .email()
        .label('Email'),
    password: Yup.string()
        .required()
        .min(6, 'Pasword must have at least 6 characters')
        .label('Password'),
    confirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'COnfirmation password must match password'),
});

const RegisterScreen = ({ navigation }) => {
    const [signInError, setSignInError] = useState('');

    async function handleOnSubmit(values) {
        if (values.confirm) {
            firebase
            .auth()
            .createUserWithEmailAndPassword(values.email, values.password)
            .catch(error => {setSignInError(error.message)});
        }
        else {
            firebase.auth().signInWithEmailAndPassword(values.email, values.password)
            .catch(error => {setSignInError(error.message)});
        }
        navigation.navigate("ScheduleScreen");
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Form
                    initialValues={{
                        email: '',
                        password: '',
                        confirm: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleOnSubmit}
                >
                    <Form.Field
                        name="email"
                        leftIcon="email"
                        placeholder="Enter email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <Form.Field
                        name="password"
                        leftIcon="lock"
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                    />
                    <Form.Field
                        name="confirmPassword"
                        leftIcon="lock"
                        placeholder="Confirm Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        keyboardType="email-address"
                        textContentType="password"
                    />
                    {/* smtn here? */}
                    <Form.Button title={PrivateValueStore.confirm ? 'Sign up' : 'Log in'} />
                    {<Form.ErrorMessage error={signInError} visible={true} />}
                </Form>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
})

export default RegisterScreen;