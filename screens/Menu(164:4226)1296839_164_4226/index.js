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
      <View style={styles.View_164_4227} />
      <View style={styles.View_164_4228}>
        <View style={styles.View_164_4229}>
          <Text style={styles.Text_164_4229}>אודות</Text>
        </View>
        <View style={styles.View_164_4230}>
          <Text style={styles.Text_164_4230}>בקשות</Text>
        </View>
        <View style={styles.View_164_4231}>
          <Text style={styles.Text_164_4231}>תמיכה טכנית</Text>
        </View>
        <View style={styles.View_164_4232}>
          <Text style={styles.Text_164_4232}>צור קשר</Text>
        </View>
        <View style={styles.View_164_4233}>
          <Text style={styles.Text_164_4233}>תקנון</Text>
        </View>
        <View style={styles.View_164_4234}>
          <Text style={styles.Text_164_4234}>תנאי שימוש</Text>
        </View>
        <View style={styles.View_164_4235}>
          <Text style={styles.Text_164_4235}>מדיניות פרטיות</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_164_4236}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("164_3900"))
        }
      >
        <Text style={styles.Text_164_4236}>התנתק</Text>
      </TouchableOpacity>
      <View style={styles.View_164_4237}>
        <View style={styles.View_164_4238}>
          <Text style={styles.Text_164_4238}>מינוי</Text>
        </View>
        <View style={styles.View_164_4239}>
          <Text style={styles.Text_164_4239}>המינוי שלי</Text>
        </View>
      </View>
      <View style={styles.View_164_4240}>
        <View style={styles.View_164_4241}>
          <Text style={styles.Text_164_4241}>פרופיל</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_164_4242}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("164_4247"))
          }
        >
          <Text style={styles.Text_164_4242}>התראות</Text>
        </TouchableOpacity>
        <View style={styles.View_164_4244}>
          <Text style={styles.Text_164_4244}>אלבום תמונות</Text>
        </View>
        <View style={styles.View_164_4245}>
          <Text style={styles.Text_164_4245}>גיבוי שיחות</Text>
        </View>
      </View>
      <View style={styles.View_164_4246}>
        <Text style={styles.Text_164_4246}>הגדרות</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_181_5206}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("164_4017"))
        }
      >
        <View style={styles.View_164_5578}>
          <Text style={styles.Text_164_5578}>דניאל מנחם</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04923893-5bf5-4194-a951-2f8bbcef05ca"
          }}
          style={styles.ImageBackground_164_5579}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_220_1730}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("164_3900"))
        }
      >
        <Text style={styles.Text_220_1730}>Dark Mode</Text>
      </TouchableOpacity>
      <View style={styles.View_220_1727}>
        <View style={styles.View_I220_1727_40_1789} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I220_1727_40_1790}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("56_2608"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("109%") },
  View_164_4227: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 56, 79, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 40
  },
  View_164_4228: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("53%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_164_4229: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_164_4229: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4230: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_164_4230: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4231: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_164_4231: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4232: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_164_4232: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4233: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_164_4233: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4234: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_164_4234: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4235: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_164_4235: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_164_4236: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("86%"),
    justifyContent: "flex-start"
  },
  Text_164_4236: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4237: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_164_4238: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_164_4238: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4239: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_164_4239: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4240: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_164_4241: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_164_4241: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_164_4242: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_164_4242: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4244: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_164_4244: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4245: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_164_4245: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4246: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_164_4246: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_181_5206: {
    width: wp("61%"),
    minWidth: wp("61%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_164_5578: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_164_5578: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_164_5579: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%")
  },
  TouchableOpacity_220_1730: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("97%"),
    justifyContent: "flex-start"
  },
  Text_220_1730: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_220_1727: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("100%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I220_1727_40_1789: {
    flexGrow: 1,
    width: wp("28%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 21, 93, 1)"
  },
  TouchableOpacity_I220_1727_40_1790: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
