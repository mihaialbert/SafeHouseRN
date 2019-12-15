import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import {config} from '../constants/FirebaseConfig'


class Graphics extends Component {

    state={
      chartDataSets: []
    };

    componentWillMount() {
        const config = {
            "databaseURL": "https://safe-house-88034.firebaseio.com",
            "apiKey": "AIzaSyDRiLulshvsguG79sihBGi-JcNBTI9_Qds",
            "authDomain": "safe-house-88034.firebaseapp.com",
            "storageBucket": "safe-house-88034.appspot.com"
        }
        const firebase = firebase.initializeApp(config);

        const database = firebase.database();
        const ref = database.ref('sensorData');
        ref.on("value", snap => { console.log(snap.val()) })
    }

    componentDidMount() {

    }

    render() {
      ChartsScreen.navigationOptions = {
        title: 'Charts',
      };
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          paddingTop: 15,
          backgroundColor: '#fff',
        }
      });
        return (

            <View>
                {
                    chartDataSets.map((dataSet, index) => {
                        return (
                            <LineChart
                                key={index}
                                data={dataSet}
                                width={Dimensions.get("window").width} // from react-native
                                height={220}
                                yAxisLabel={"$"}
                                yAxisSuffix={"k"}
                                chartConfig={{
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#fb8c00",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#ffa726"
                                    }
                                }}
                                bezier
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16
                                }}
                            />
                        )
                    })
                }

            </View>

        )
    }
}
export default Graphics;