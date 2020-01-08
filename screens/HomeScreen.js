import React, { Component } from 'react';

//Login authentification with firebase
import { Container, Item, Form, Input, Button, Label, Text } from "native-base";
import * as firebase from "firebase";

import {
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }


  firebaseConnection() {
    const config = {
      "databaseURL": "https://safe-house-88034.firebaseio.com",
      "apiKey": "AIzaSyDRiLulshvsguG79sihBGi-JcNBTI9_Qds",
      "authDomain": "safe-house-88034.firebaseapp.com",
      "storageBucket": "safe-house-88034.appspot.com"
    }
    const firebase = firebase.initializeApp(config);



    SignUp = (email, password) => {
      try {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            console.log(user);
          });
      } catch (error) {
        console.log(error.toString(error));
      }
    };

    Login = (email, password) => {
      try {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(res => {
            console.log(res.user.email);
          });
      } catch (error) {
        console.log(error.toString(error));
      }
    };
  }

  render() {
    return (
      <Container>
        <Form style={{ marginTop: 200 }}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input autoCapitalize="none"
              autoCorrect={false}
              onChangeText={email => this.setState({ email })} />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button full rounded success style={{ marginTop: 30 }} onPress={() => this.Login(this.state.email, this.state.password)}>
            <Text>Login</Text>
          </Button>
        </Form>
        <Button full rounded success style={{ marginTop: 30 }} onPress={() => this.SignUp(this.state.email, this.state.password)}>
          <Text>Signup</Text>
        </Button>
      </Container>
    );
  }
};
export default HomeScreen;
