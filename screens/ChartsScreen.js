import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import {
  LineChart
} from "react-native-chart-kit";
import { AuthSession } from 'expo';

const chartDataSets = [{
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
},
{
  labels: ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00"],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
      ]
    }
  ]
}
]

export default function ChartsScreen() {
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
  );
}

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
