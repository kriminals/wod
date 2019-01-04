import React from "react";
import { Text, View, ScrollView, Dimensions } from "react-native";
export default class WodScreen extends React.Component {
  static navigationOptions = {
    title: "WOD"
  };
  render() {
    let screenWidth = Dimensions.get("window").width;
    return (
      <ScrollView pagingEnabled={true} horizontal={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: screenWidth,
            backgroundColor: "tomato"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center"
            }}
          >
            Wod 1
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: screenWidth,
            backgroundColor: "green"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center"
            }}
          >
            Wod 2
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: screenWidth,
            backgroundColor: "blue"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "white",
              textAlign: "center"
            }}
          >
            Wod 3
          </Text>
        </View>
      </ScrollView>
    );
  }
}
