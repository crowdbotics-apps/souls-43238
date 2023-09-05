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
      <View style={styles.View_164_4259} />
      <View style={styles.View_164_4260} />
      <View style={styles.View_164_4261}>
        <Text style={styles.Text_164_4261}>FREE</Text>
      </View>
      <View style={styles.View_164_4262}>
        <Text style={styles.Text_164_4262}>PRO</Text>
      </View>
      <View style={styles.View_164_4263}>
        <Text style={styles.Text_164_4263}>צ’אט מוגבל עד 50 הודעות ביום</Text>
      </View>
      <View style={styles.View_164_4264}>
        <Text style={styles.Text_164_4264}>צ’אט לא מוגבל</Text>
      </View>
      <View style={styles.View_164_4265}>
        <Text style={styles.Text_164_4265}>עד 50 חברים</Text>
      </View>
      <View style={styles.View_164_4266}>
        <Text style={styles.Text_164_4266}>מס’ חברים לא מוגבל</Text>
      </View>
      <View style={styles.View_164_4267}>
        <Text style={styles.Text_164_4267}>התאמות על פי תגיות בלבד</Text>
      </View>
      <View style={styles.View_164_4268}>
        <Text style={styles.Text_164_4268}>התאמות מבוססות AI</Text>
      </View>
      <View style={styles.View_164_4269}>
        <Text style={styles.Text_164_4269}>39.90 ₪ בחודש</Text>
      </View>
      <View style={styles.View_164_4270}>
        <View style={styles.View_I164_4270_17_460}>
          <Text style={styles.Text_I164_4270_17_460}>רכוש מינוי</Text>
        </View>
      </View>
      <View style={styles.View_164_5623}>
        <Text style={styles.Text_164_5623}>מינוי</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_164_5624}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("181_4474"))
        }
      >
        <View style={styles.View_I164_5624_2_206} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1032b90-296b-4acd-835c-3adbdde83485"
          }}
          style={styles.ImageBackground_I164_5624_2_210}
        />
      </TouchableOpacity>
      <View style={styles.View_197_2641}>
        <View style={styles.View_I197_2641_21_288} />
        <View style={styles.View_I197_2641_21_289}>
          <View style={styles.View_I197_2641_21_289_1_353} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/071416ef-55a9-43be-9f25-0149fc1a2e2d"
            }}
            style={styles.ImageBackground_I197_2641_21_289_1_354}
          />
          <View style={styles.View_I197_2641_21_289_1_355}>
            <Text style={styles.Text_I197_2641_21_289_1_355}>22</Text>
          </View>
        </View>
        <View style={styles.View_I197_2641_21_290}>
          <View style={styles.View_I197_2641_21_291}>
            <View style={styles.View_I197_2641_21_291_1_360} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddf35601-e108-4bdb-99eb-6d05eaec7bf4"
              }}
              style={styles.ImageBackground_I197_2641_21_291_1_364}
            />
          </View>
          <View style={styles.View_I197_2641_21_292}>
            <View style={styles.View_I197_2641_21_292_1_204} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01008f88-9356-4ed7-b184-3792c5731476"
              }}
              style={styles.ImageBackground_I197_2641_21_292_1_208}
            />
          </View>
          <View style={styles.View_I197_2641_21_293}>
            <View style={styles.View_I197_2641_21_293_1_366} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5916ff8a-1848-43d8-95aa-f8e6213ac017"
              }}
              style={styles.ImageBackground_I197_2641_21_293_1_370}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(159, 26, 240, 1)" },
  View_2: { height: hp("109%") },
  View_164_4259: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("15%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_164_4260: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("42%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.800000011920929
  },
  View_164_4261: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_164_4261: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4262: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_164_4262: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 22,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4263: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_164_4263: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4264: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("50%"),
    justifyContent: "flex-start"
  },
  Text_164_4264: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4265: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_164_4265: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4266: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("55%"),
    justifyContent: "flex-start"
  },
  Text_164_4266: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4267: {
    width: wp("59%"),
    minWidth: wp("59%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_164_4267: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4268: {
    width: wp("47%"),
    minWidth: wp("47%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("59%"),
    justifyContent: "flex-start"
  },
  Text_164_4268: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4269: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("63%"),
    justifyContent: "flex-start"
  },
  Text_164_4269: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_4270: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("67%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_I164_4270_17_460: {
    flexGrow: 1,
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I164_4270_17_460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_5623: {
    width: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_164_5623: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_164_5624: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I164_5624_2_206: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I164_5624_2_210: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_197_2641: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_2641_21_288: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 209, 209, 1)",
    opacity: 0.30000001192092896
  },
  View_I197_2641_21_289: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_2641_21_289_1_353: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I197_2641_21_289_1_354: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_2641_21_289_1_355: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I197_2641_21_289_1_355: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I197_2641_21_290: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_2641_21_291: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_2641_21_291_1_360: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I197_2641_21_291_1_364: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_2641_21_292: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_2641_21_292_1_204: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I197_2641_21_292_1_208: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I197_2641_21_293: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I197_2641_21_293_1_366: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I197_2641_21_293_1_370: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
