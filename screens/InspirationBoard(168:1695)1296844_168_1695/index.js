import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/684fb56c-65ef-4bb5-9d94-7863ae609683"
        }}
        style={styles.ImageBackground_168_1696}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a3e631a-0348-47bb-ac60-9810f624cd75"
        }}
        style={styles.ImageBackground_168_1697}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd082607-2bd8-4cb3-9855-8f5712f0d842"
        }}
        style={styles.ImageBackground_168_1698}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e49d4d41-63ff-4ef7-a007-1e2f4caf900e"
        }}
        style={styles.ImageBackground_168_1699}
      />
      <View style={styles.View_168_1700} />
      <View style={styles.View_168_1701} />
      <View style={styles.View_168_1702} />
      <View style={styles.View_168_1703} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8763c3ed-5e4b-402a-bd6f-df17f1b005bb"
        }}
        style={styles.ImageBackground_168_1704}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82d215be-39d7-426d-9584-f6f541caa323"
        }}
        style={styles.ImageBackground_168_1705}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/713b84a5-751d-467c-b403-ea33a63a6e3c"
        }}
        style={styles.ImageBackground_168_1706}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94f002bd-2855-4c9b-8c31-79cb948442e6"
        }}
        style={styles.ImageBackground_168_1707}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/201f64f9-b492-4e85-b083-a3614c055e8e"
        }}
        style={styles.ImageBackground_168_1708}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bd340aa-df5e-43d8-a763-d5bf9b8f370c"
        }}
        style={styles.ImageBackground_168_1709}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c981f22-c57b-4575-a114-eaca9d06ae68"
        }}
        style={styles.ImageBackground_168_1710}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67a02985-7809-46f4-b059-b7bf09b28143"
        }}
        style={styles.ImageBackground_168_1711}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("247%") },
  ImageBackground_168_1696: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("18%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1697: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("41%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("78%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1698: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("70%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1699: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("56%"),
    minHeight: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("139%"),
    resizeMode: "cover"
  },
  View_168_1700: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("147%"),
    backgroundColor: "rgba(251, 105, 124, 1)"
  },
  View_168_1701: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("147%"),
    backgroundColor: "rgba(102, 111, 128, 1)"
  },
  View_168_1702: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("147%"),
    backgroundColor: "rgba(196, 200, 211, 1)"
  },
  View_168_1703: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("147%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_168_1704: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("12%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1705: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("173%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1706: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("22%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1707: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("72%"),
    minHeight: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("60%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1708: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("76%"),
    minHeight: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("58%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1709: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("77%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1710: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  ImageBackground_168_1711: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("57%"),
    minHeight: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("12%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
