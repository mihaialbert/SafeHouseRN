import React, { Component } from 'react'
import { View, Text, Picker, TextInput } from 'react-native';
import * as firebase from 'firebase';
// import {firebaseConfig} from '../constants/FirebaseConfig'



class Settings extends Component {

  state = {
    intervalValue: 0,
    firebaseInstance: null,
    settingsRef: null
  }
  async componentWillMount() {
    await Expo.Font.loadAsync()({
      Roboto: require('../node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('../node_modules/native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ isReady: true });
  }
  componentDidMount() {
    const firebaseConfig = {
      "databaseURL": "https://safe-house-88034.firebaseio.com",
      "apiKey": "AIzaSyDRiLulshvsguG79sihBGi-JcNBTI9_Qds",
      "authDomain": "safe-house-88034.firebaseapp.com",
      "storageBucket": "safe-house-88034.appspot.com"
    }
    firebaseInstance = firebase.initializeApp(firebaseConfig);

    this.setState({ firebaseInstance: firebaseInstance });

    const database = firebaseInstance.database();
    const ref = database.ref('config');

    this.setState({ settingsRef: ref })

    ref.on("value", snapshot => {
      console.log(snapshot.val().read_sensor_interval_sec);
      this.setState({ intervalValue: snapshot.val().read_sensor_interval_sec })
    })
  }



  render() {
    return (
      <View>
        <Text>
          Sensor readings interval:
        </Text>
        <View>
          <TextInput
            keyboardType={'numeric'}
            value={this.state.intervalValue.toString()}
            onChangeText={(newValue) => { this.state.settingsRef.set({ read_sensor_interval_sec: newValue }) }}
          />
        </View>
      </View>
    )
  }
}
export default Settings;