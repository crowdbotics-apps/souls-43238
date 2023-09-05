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
      <View style={styles.View_151_1747}>
        <View style={styles.View_151_1743} />
        <View style={styles.View_151_1746}>
          <Text style={styles.Text_151_1746}>הזמן</Text>
        </View>
        <View style={styles.View_151_1744}>
          <Text style={styles.Text_151_1744}>קופון 20% הנחה</Text>
        </View>
        <View style={styles.View_151_1745}>
          <Text style={styles.Text_151_1745}>למסעדת “AMORE MIO”</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2de6cb26-036f-4b63-a775-e00a4d7bbb5d"
        }}
        style={styles.ImageBackground_197_2403}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fd0cd2a-81fc-4e31-9b1f-d63471106e84"
        }}
        style={styles.ImageBackground_197_2400}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45430316-83f2-425e-bac6-569f10ff88e1"
        }}
        style={styles.ImageBackground_164_4335}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7c889ec-c175-4f22-9944-6f96052f3baf"
        }}
        style={styles.ImageBackground_164_4337}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/665479dc-f78d-4a04-8692-fb0c2e9ac701"
        }}
        style={styles.ImageBackground_16_394}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c81dcfe-e6b5-48f6-9df1-1db4ec442b75"
        }}
        style={styles.ImageBackground_17_844}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0489efc0-d97b-421f-8173-cb061dfbd293"
        }}
        style={styles.ImageBackground_164_4339}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2290abea-d217-423f-9871-0598f787b2db"
        }}
        style={styles.ImageBackground_164_4341}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edaafdad-91f1-404f-afef-29d49722f533"
        }}
        style={styles.ImageBackground_197_2397}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7351ef92-e45e-44ea-8413-a00dd1f760d8"
        }}
        style={styles.ImageBackground_164_4345}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6218578e-9401-41b4-8939-b094ee8e6484"
        }}
        style={styles.ImageBackground_151_1822}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d1c46d5-c917-4f5a-ad6e-90b40b61bae6"
        }}
        style={styles.ImageBackground_17_739}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51cabdf8-5325-45de-bdd4-bd38bd64b2d4"
        }}
        style={styles.ImageBackground_164_4347}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01bb1426-e276-43e2-887c-a35299ad5643"
        }}
        style={styles.ImageBackground_17_846}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d0f8ecb-aa3f-4055-a7a6-db23946a19c0"
        }}
        style={styles.ImageBackground_164_4349}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/625c93c2-cdbf-471b-9162-79579060dde9"
        }}
        style={styles.ImageBackground_164_4351}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e823b3b-ec40-4369-8f56-691bb8a040df"
        }}
        style={styles.ImageBackground_164_4353}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c128bb5e-7072-42ec-88bf-80cf7ee383da"
        }}
        style={styles.ImageBackground_164_4355}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/432aadc7-7d20-4b53-84e6-40af9a987945"
        }}
        style={styles.ImageBackground_164_4357}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2120186-aa4d-482f-a899-cf0ce8ba1400"
        }}
        style={styles.ImageBackground_164_4359}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/30a9772f-69f4-486d-88b9-1d628523bd82"
        }}
        style={styles.ImageBackground_164_4361}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae5143f4-87e6-4f1f-8f6e-0e4757db5817"
        }}
        style={styles.ImageBackground_164_4363}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e70ccaa-c88c-4b91-9332-ae48c0ee7d1b"
        }}
        style={styles.ImageBackground_164_4365}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6521adaf-8e7d-4d01-90fb-f69cb2dbebea"
        }}
        style={styles.ImageBackground_164_4367}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1711f1d3-9d12-401e-9233-83a47d751b0a"
        }}
        style={styles.ImageBackground_164_4369}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7922daea-897a-4e33-9eeb-05c3e5e1c9bb"
        }}
        style={styles.ImageBackground_164_4371}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a3b7cfc-0df7-46e1-a6ab-5eedbbe86ca4"
        }}
        style={styles.ImageBackground_164_4373}
      />
      <View style={styles.View_10_2185}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd0c329f-f2ac-43d2-8bd9-19ba4e53a5d2"
          }}
          style={styles.ImageBackground_10_2182}
        />
      </View>
      <View style={styles.View_10_2200}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09db5483-9e28-47f4-9351-2b16d13f9761"
          }}
          style={styles.ImageBackground_10_2197}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02eac910-7eea-4f6f-9d25-bb6339f2039d"
        }}
        style={styles.ImageBackground_10_2217}
      />
      <View style={styles.View_164_4375}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37f913c3-c09d-4324-9f9c-180ebde87b75"
          }}
          style={styles.ImageBackground_164_4376}
        />
      </View>
      <View style={styles.View_16_371}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fd70069-85e0-4b60-ad19-0564924025f5"
          }}
          style={styles.ImageBackground_16_363}
        />
      </View>
      <View style={styles.View_16_370}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c327f05e-0e97-4cb5-a6fc-4e97d3e53ce7"
          }}
          style={styles.ImageBackground_16_367}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7abfaad-81ca-4ad4-a287-331f4b2dbc4f"
        }}
        style={styles.ImageBackground_17_449}
      />
      <View style={styles.View_164_4379}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27ab0352-19a3-42bc-acca-f9fc3ab9f9d8"
          }}
          style={styles.ImageBackground_164_4380}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0abad7a0-a185-4c5c-a109-2350e1bbe6ff"
        }}
        style={styles.ImageBackground_164_4386}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f2b8fd7-bffc-4740-9b22-72e8bdcb04a9"
        }}
        style={styles.ImageBackground_10_1904}
      />
      <View style={styles.View_17_492}>
        <View style={styles.View_17_467}>
          <View style={styles.View_17_460}>
            <Text style={styles.Text_17_460}>כפתור</Text>
          </View>
          <View style={styles.View_17_461}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9cf55af-182b-43c5-a455-72f3fd334955"
              }}
              style={styles.ImageBackground_I17_461_10_2197}
            />
          </View>
        </View>
        <View style={styles.View_17_493}>
          <View style={styles.View_17_494}>
            <Text style={styles.Text_17_494}>כפתור</Text>
          </View>
          <View style={styles.View_17_495}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e246be42-91de-40a0-b132-87a05827f61d"
              }}
              style={styles.ImageBackground_I17_495_10_2197}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bd4a8dc-4159-4ebe-8b7c-ccab3402c400"
        }}
        style={styles.ImageBackground_17_517}
      />
      <View style={styles.View_17_523}>
        <View style={styles.View_17_522}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed6bcb91-1354-47eb-b887-80cdffd8a19e"
            }}
            style={styles.ImageBackground_17_518}
          />
          <View style={styles.View_17_521}>
            <View style={styles.View_17_512}>
              <Text style={styles.Text_17_512}>19:24</Text>
            </View>
            <View style={styles.View_17_511}>
              <Text style={styles.Text_17_511}>הודעה</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_17_524}>
          <View style={styles.View_17_525}>
            <View style={styles.View_17_526}>
              <Text style={styles.Text_17_526}>19:24</Text>
            </View>
            <View style={styles.View_17_527}>
              <Text style={styles.Text_17_527}>הודעה</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_17_643}>
        <View style={styles.View_17_642}>
          <View style={styles.View_17_623}>
            <Text style={styles.Text_17_623}>כפתור</Text>
          </View>
          <View style={styles.View_17_636}>
            <View style={styles.View_17_638}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/689eb109-6003-4b7d-890f-db65f00385a7"
                }}
                style={styles.ImageBackground_I17_638_10_2197}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_17_644}>
          <View style={styles.View_17_645}>
            <Text style={styles.Text_17_645}>כפתור</Text>
          </View>
          <View style={styles.View_17_646}>
            <View style={styles.View_17_648}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dac3bf4e-8fd6-4234-931e-831080f75fc6"
                }}
                style={styles.ImageBackground_I17_648_10_2197}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_17_849}>
        <View style={styles.View_17_773}>
          <View style={styles.View_17_766}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abd9de94-5903-4585-9f9b-311b99495677"
              }}
              style={styles.ImageBackground_I17_766_10_2197}
            />
          </View>
          <View style={styles.View_17_750}>
            <Text style={styles.Text_17_750}>כפתור</Text>
          </View>
        </View>
        <View style={styles.View_17_850}>
          <View style={styles.View_17_851}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3303b0ea-075a-42f8-b4fe-6a224548604a"
              }}
              style={styles.ImageBackground_I17_851_10_2197}
            />
          </View>
          <View style={styles.View_17_852}>
            <Text style={styles.Text_17_852}>כפתור</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_20_666}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35cb3822-600e-46ed-b207-42d68335d6c0"
          }}
          style={styles.ImageBackground_20_663}
        />
      </View>
      <View style={styles.View_20_693}>
        <View style={styles.View_20_686} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b4c43e8-d052-420f-8fc6-c5b26cb491f8"
          }}
          style={styles.ImageBackground_20_687}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4483b549-a1b0-4ca1-92ce-8ed8a59ced61"
          }}
          style={styles.ImageBackground_20_688}
        />
        <View style={styles.View_20_689}>
          <Text style={styles.Text_20_689}>#תל אביב #חוף ים</Text>
        </View>
        <View style={styles.View_20_690}>
          <Text style={styles.Text_20_690}>14.7.2023 בשעה 14:24</Text>
        </View>
        <View style={styles.View_20_691}>
          <Text style={styles.Text_20_691}>יום מושלם לים</Text>
        </View>
        <View style={styles.View_20_692}>
          <Text style={styles.Text_20_692}>אהבתי</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5182c415-0a89-4a1c-b2c3-1c0a8f07b445"
        }}
        style={styles.ImageBackground_164_4390}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f39ffffd-47b0-4aef-82c2-765d1b7e1282"
        }}
        style={styles.ImageBackground_164_4393}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83150ce7-cc26-4851-81bb-87ec79fc3c6b"
        }}
        style={styles.ImageBackground_40_2907}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3bd70416-833c-4e83-a500-18a3d7e020a2"
        }}
        style={styles.ImageBackground_40_2906}
      />
      <View style={styles.View_40_2912}>
        <TouchableOpacity
          style={styles.TouchableOpacity_40_2911}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("40_2913"))
          }
        >
          <View style={styles.View_40_2898}>
            <Text style={styles.Text_40_2898}>
              קראתי והסכמתי למדיניות הפרטיות ולתקנון
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4b3cc09-8e06-41ea-bde0-3466700f2206"
            }}
            style={styles.ImageBackground_40_2908}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_40_2913}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("40_2911"))
          }
        >
          <View style={styles.View_40_2914}>
            <Text style={styles.Text_40_2914}>
              קראתי והסכמתי למדיניות הפרטיות ולתקנון
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22efb114-74ef-423e-bb04-da33bd6dbd49"
            }}
            style={styles.ImageBackground_40_2917}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_40_2943}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("164_3989"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/349b3ae8-8c01-4459-9c43-52ed32425483"
          }}
          style={styles.ImageBackground_40_2927}
        />
        <View style={styles.View_40_2926}>
          <Text style={styles.Text_40_2926}>דואר אלקטרוני</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_47_1684}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e65cdf5d-faae-401d-bf11-bb160594dc8f"
          }}
          style={styles.ImageBackground_47_1675}
        />
        <View style={styles.View_47_1679}>
          <Text style={styles.Text_47_1679}>פרופיל</Text>
        </View>
        <View style={styles.View_47_1680}>
          <View style={styles.View_I47_1680_2_206} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34bec646-8b13-4c6b-856e-5f5214b0eb58"
            }}
            style={styles.ImageBackground_I47_1680_2_210}
          />
        </View>
      </View>
      <View style={styles.View_47_1805}>
        <TouchableOpacity
          style={styles.TouchableOpacity_47_1758}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("164_4171"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d07cc06-5d3d-436c-adee-63c968ccf00c"
            }}
            style={styles.ImageBackground_I47_1758_17_766}
          />
          <View style={styles.View_I47_1758_17_750}>
            <Text style={styles.Text_I47_1758_17_750}>חפש באיזור</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_47_1796}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("164_4200"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04d96b2d-c860-4754-bdd1-4c162297843d"
            }}
            style={styles.ImageBackground_I47_1796_17_766}
          />
          <View style={styles.View_I47_1796_17_750}>
            <Text style={styles.Text_I47_1796_17_750}>עוקבים</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_47_1764}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("164_4189"))
          }
        >
          <View style={styles.View_I47_1764_17_766}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0095d892-c8b4-4ec5-9592-24ad9a6384b4"
              }}
              style={styles.ImageBackground_I47_1764_17_766_10_2197}
            />
          </View>
          <View style={styles.View_I47_1764_17_750}>
            <Text style={styles.Text_I47_1764_17_750}>הודעות</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_47_1770}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("164_3799"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/698ad3fb-6429-4c36-ad03-0e605a01be9f"
            }}
            style={styles.ImageBackground_I47_1770_17_766}
          />
          <View style={styles.View_I47_1770_17_750}>
            <Text style={styles.Text_I47_1770_17_750}>בית</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_56_2464}>
        <View style={styles.View_56_2463}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ced83e8-6e71-407f-9f10-018a7178a858"
            }}
            style={styles.ImageBackground_56_2445}
          />
          <View style={styles.View_56_2451}>
            <View style={styles.View_56_2452}>
              <Text style={styles.Text_56_2452}>ישראל ישראלי</Text>
            </View>
            <View style={styles.View_56_2453}>
              <View style={styles.View_56_2455}>
                <Text style={styles.Text_56_2455}>מה קורה?</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_56_2465}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/751cb2c2-24e1-4c7f-8e24-22c98d6d5fb2"
            }}
            style={styles.ImageBackground_56_2466}
          />
          <View style={styles.View_56_2467} />
          <View style={styles.View_56_2468}>
            <View style={styles.View_56_2469}>
              <Text style={styles.Text_56_2469}>ישראל ישראלי</Text>
            </View>
            <View style={styles.View_56_2470}>
              <View style={styles.View_56_2472}>
                <Text style={styles.Text_56_2472}>מה קורה?</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_56_2473}>
            <Text style={styles.Text_56_2473}>1</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_56_2607}>
        <View style={styles.View_56_2606}>
          <View style={styles.View_40_1789} />
          <TouchableOpacity
            style={styles.TouchableOpacity_40_1790}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("56_2608"))
            }
          />
        </View>
        <View style={styles.View_56_2608}>
          <View style={styles.View_56_2609} />
          <TouchableOpacity
            style={styles.TouchableOpacity_56_2610}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("56_2606"))
            }
          />
        </View>
      </View>
      <View style={styles.View_58_1956}>
        <View style={styles.View_58_1936} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96b1d52d-9627-46bf-b38e-7e8275fc4902"
          }}
          style={styles.ImageBackground_58_1934}
        />
        <View style={styles.View_58_1939}>
          <Text style={styles.Text_58_1939}>מסעדת AMORE</Text>
        </View>
        <View style={styles.View_58_1941}>
          <Text style={styles.Text_58_1941}>ראשון לציון</Text>
        </View>
        <View style={styles.View_58_1940}>
          <Text style={styles.Text_58_1940}>מומלץ!</Text>
        </View>
        <View style={styles.View_58_1942}>
          <View style={styles.View_I58_1942_17_460}>
            <Text style={styles.Text_I58_1942_17_460}>בחר מקום</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5decf17-5cac-48d6-9bb0-41a58cc8aa9c"
        }}
        style={styles.ImageBackground_83_2935}
      />
      <View style={styles.View_83_2950}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cce8281-572e-4943-8521-3a30a89ad915"
          }}
          style={styles.ImageBackground_83_2943}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f3ce018-81e2-4d62-910c-a5a194d99099"
        }}
        style={styles.ImageBackground_83_2951}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef6c5843-25e0-4ee3-aac4-7bd9062e3b1f"
        }}
        style={styles.ImageBackground_118_1435}
      />
      <View style={styles.View_140_1445}>
        <TouchableOpacity
          style={styles.TouchableOpacity_140_1444}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("140_1443"))
          }
        >
          <View style={styles.View_140_1432}>
            <Text style={styles.Text_140_1432}>31</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_140_1443}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("140_1444"))
          }
        >
          <View style={styles.View_140_1435}>
            <Text style={styles.Text_140_1435}>31</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.View_140_1442}>
          <View style={styles.View_140_1437}>
            <Text style={styles.Text_140_1437}>31</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_140_1742}>
        <View style={styles.View_140_1726}>
          <View style={styles.View_I140_1726_1_353} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e61d938-6e3b-4113-a3e5-bac8708fa6b1"
            }}
            style={styles.ImageBackground_I140_1726_1_354}
          />
          <View style={styles.View_I140_1726_1_355}>
            <Text style={styles.Text_I140_1726_1_355}>22</Text>
          </View>
        </View>
        <View style={styles.View_140_1727}>
          <View style={styles.View_140_1728}>
            <View style={styles.View_I140_1728_1_360} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/348530bc-472f-439a-b02b-5cb2f5855a6a"
              }}
              style={styles.ImageBackground_I140_1728_1_364}
            />
          </View>
          <View style={styles.View_140_1729}>
            <View style={styles.View_I140_1729_1_204} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c5aa0570-d757-4a5a-8ae5-57cb9aa88225"
              }}
              style={styles.ImageBackground_I140_1729_1_208}
            />
          </View>
          <View style={styles.View_140_1730}>
            <View style={styles.View_I140_1730_1_366} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d12c4e3-92bd-4746-b8e4-8738714432da"
              }}
              style={styles.ImageBackground_I140_1730_1_370}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_151_1710}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f5c882a-f218-40c8-8677-d9f66b2f6781"
          }}
          style={styles.ImageBackground_151_1697}
        />
        <View style={styles.View_151_1698}>
          <View style={styles.View_151_1699}>
            <Text style={styles.Text_151_1699}>25</Text>
          </View>
          <View style={styles.View_151_1700}>
            <Text style={styles.Text_151_1700}>דניאל מנחם</Text>
          </View>
        </View>
        <View style={styles.View_151_1701}>
          <View style={styles.View_151_1702}>
            <Text style={styles.Text_151_1702}>אוהב סרטי מד”ב</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_164_5918}>
        <TouchableOpacity
          style={styles.TouchableOpacity_164_5917}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("237_8508"))
          }
        >
          <View style={styles.View_164_5914} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_164_5915}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("237_8508"))
          }
        >
          <View style={styles.View_164_5910} />
          <View style={styles.View_164_5911} />
        </TouchableOpacity>
      </View>
      <View style={styles.View_168_2609}>
        <View style={styles.View_168_2591} />
        <View style={styles.View_168_2592}>
          <Text style={styles.Text_168_2592}>עדי כהן, 24</Text>
        </View>
        <View style={styles.View_168_2593}>
          <Text style={styles.Text_168_2593}>תל אביב - יפו</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cced02b7-8329-4eda-ad86-9e04d257e86c"
          }}
          style={styles.ImageBackground_168_2590}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_168_2595}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("164_4273"))
          }
        />
        <View style={styles.View_168_2602}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66dc42bd-8c2c-404c-a79e-85da3a518b14"
            }}
            style={styles.ImageBackground_I168_2602_10_2197}
          />
        </View>
      </View>
      <View style={styles.View_197_3095}>
        <View style={styles.View_197_3084} />
        <View style={styles.View_197_3085}>
          <Text style={styles.Text_197_3085}>עדי כהן, 24</Text>
        </View>
        <View style={styles.View_197_3086}>
          <Text style={styles.Text_197_3086}>תל אביב - יפו</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/706e8745-3619-4678-b553-b6dc7272f4e1"
          }}
          style={styles.ImageBackground_197_3087}
        />
      </View>
      <TouchableOpacity
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb3bed4b-e600-4535-a471-158ee4be2396"
        }}
        style={styles.TouchableOpacity_168_3098}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("164_4226"))
        }
      />
      <View style={styles.View_170_4064}>
        <View style={styles.View_170_4060}>
          <View style={styles.View_170_4061}>
            <Text style={styles.Text_170_4061}>ישראל ישראלי</Text>
          </View>
          <View style={styles.View_170_4062}>
            <Text style={styles.Text_170_4062}>ראשון לציון</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f1cbc74-e2a9-40db-b605-b9698164ebbb"
          }}
          style={styles.ImageBackground_170_4063}
        />
      </View>
      <View style={styles.View_181_4665}>
        <TouchableOpacity
          style={styles.TouchableOpacity_181_4662}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("181_4666"))
          }
        >
          <View style={styles.View_181_4661}>
            <Text style={styles.Text_181_4661}>חדר כושר</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_181_4666}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("181_4662"))
          }
        >
          <View style={styles.View_181_4667}>
            <Text style={styles.Text_181_4667}>חדר כושר</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_181_4725}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0743f665-cf1f-4f38-a210-4655e3c0d3fc"
          }}
          style={styles.ImageBackground_181_4721}
        />
        <View style={styles.View_181_4722}>
          <Text style={styles.Text_181_4722}>פיקניק לילי</Text>
        </View>
        <View style={styles.View_181_4723}>
          <Text style={styles.Text_181_4723}>קרא עוד...</Text>
        </View>
        <View style={styles.View_181_4724}>
          <Text style={styles.Text_181_4724}>רעיון מקורי לדייט לא שגרתי</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98e72aea-e362-4c52-b78c-5bb9b731ac2e"
        }}
        style={styles.ImageBackground_197_2409}
      />
      <View style={styles.View_207_4137}>
        <View style={styles.View_207_4133}>
          <Text style={styles.Text_207_4133}>קשר</Text>
        </View>
        <View style={styles.View_207_4134}>
          <View style={styles.View_I207_4134_2_60} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57fb1c4d-dbee-4ead-9b95-13ce6d7c033b"
            }}
            style={styles.ImageBackground_I207_4134_2_64}
          />
        </View>
      </View>
      <View style={styles.View_207_4248}>
        <View style={styles.View_207_4244}>
          <View style={styles.View_207_4241}>
            <Text style={styles.Text_207_4241}>העוקבים שלי</Text>
          </View>
        </View>
        <View style={styles.View_207_4249}>
          <View style={styles.View_207_4250}>
            <Text style={styles.Text_207_4250}>העוקבים שלי</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2953cf75-d974-4180-ba5a-ab4017b303b8"
        }}
        style={styles.ImageBackground_223_1623}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48cbd857-52fc-4833-b84c-00c9658dcdf1"
        }}
        style={styles.ImageBackground_230_8482}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("188%") },
  View_151_1747: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("153%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_1743: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(225, 225, 225, 1)"
  },
  View_151_1746: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_151_1746: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1744: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_151_1744: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1745: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_151_1745: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_197_2403: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_197_2400: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_164_4335: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_164_4337: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_16_394: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_17_844: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_164_4339: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_164_4341: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_197_2397: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  ImageBackground_164_4345: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%")
  },
  ImageBackground_151_1822: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  ImageBackground_17_739: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_164_4347: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_17_846: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_164_4349: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%")
  },
  ImageBackground_164_4351: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%")
  },
  ImageBackground_164_4353: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%")
  },
  ImageBackground_164_4355: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_164_4357: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_164_4359: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%")
  },
  ImageBackground_164_4361: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_164_4363: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_164_4365: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  },
  ImageBackground_164_4367: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%")
  },
  ImageBackground_164_4369: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  ImageBackground_164_4371: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  ImageBackground_164_4373: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_10_2185: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("168%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_2182: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10_2200: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("168%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10_2197: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10_2217: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_164_4375: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("178%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_164_4376: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_16_371: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("168%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_16_363: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_16_370: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("168%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_16_367: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_17_449: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_164_4379: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("178%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_164_4380: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_164_4386: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("178%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_10_1904: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  View_17_492: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("64%")
  },
  View_17_467: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_17_460: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_17_460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_461: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_461_10_2197: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_493: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_494: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_17_494: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_495: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_495_10_2197: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_17_517: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_17_523: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("41%")
  },
  View_17_522: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  ImageBackground_17_518: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_17_521: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_512: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_512: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_511: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_511: {
    color: "rgba(249, 249, 249, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_524: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_17_525: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_526: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_17_526: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_527: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_17_527: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_643: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("9%")
  },
  View_17_642: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_623: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_17_623: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_636: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_17_638: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_638_10_2197: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_644: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_645: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_17_645: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_646: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_17_648: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_648_10_2197: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_849: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("8%")
  },
  View_17_773: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(46, 56, 79, 1)"
  },
  View_17_766: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_766_10_2197: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_750: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_17_750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_17_850: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("16%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_17_851: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I17_851_10_2197: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_17_852: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_17_852: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_666: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("168%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_20_663: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_20_693: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_20_686: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_20_687: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  ImageBackground_20_688: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    resizeMode: "cover"
  },
  View_20_689: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_20_689: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_690: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_20_690: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_691: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_20_691: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_20_692: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("48%"),
    justifyContent: "flex-start"
  },
  Text_20_692: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_164_4390: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%")
  },
  ImageBackground_164_4393: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("170%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  ImageBackground_40_2907: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("171%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%")
  },
  ImageBackground_40_2906: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%")
  },
  View_40_2912: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("89%")
  },
  TouchableOpacity_40_2911: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_2898: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_40_2898: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_2908: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  TouchableOpacity_40_2913: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_2914: {
    flexGrow: 1,
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_40_2914: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_40_2917: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  TouchableOpacity_40_2943: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_40_2927: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_40_2926: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_40_2926: {
    color: "rgba(150, 150, 150, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_1684: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("68%"),
    backgroundColor: "rgba(46, 56, 79, 1)"
  },
  ImageBackground_47_1675: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_47_1679: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_47_1679: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_1680: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I47_1680_2_206: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I47_1680_2_210: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_47_1805: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_47_1758: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 56, 79, 1)"
  },
  ImageBackground_I47_1758_17_766: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I47_1758_17_750: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I47_1758_17_750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_47_1796: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 56, 79, 1)"
  },
  ImageBackground_I47_1796_17_766: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I47_1796_17_750: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I47_1796_17_750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_47_1764: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 56, 79, 1)"
  },
  View_I47_1764_17_766: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I47_1764_17_766_10_2197: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I47_1764_17_750: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I47_1764_17_750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_47_1770: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 56, 79, 1)"
  },
  ImageBackground_I47_1770_17_766: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_I47_1770_17_750: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_I47_1770_17_750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_2464: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("106%")
  },
  View_56_2463: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_56_2445: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%")
  },
  View_56_2451: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_56_2452: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_56_2452: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_2453: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_56_2455: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_56_2455: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_2465: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_56_2466: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%")
  },
  View_56_2467: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_56_2468: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_56_2469: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_56_2469: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 14,
    fontWeight: "800",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_2470: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_56_2472: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_56_2472: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_2473: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_56_2473: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_2607: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("106%")
  },
  View_56_2606: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_1789: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(221, 21, 93, 1)"
  },
  TouchableOpacity_40_1790: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_56_2608: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_56_2609: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  TouchableOpacity_56_2610: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_58_1956: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("118%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_58_1936: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_58_1934: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_58_1939: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_58_1939: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_1941: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_58_1941: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_1940: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_58_1940: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_58_1942: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("40%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_I58_1942_17_460: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I58_1942_17_460: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_83_2935: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_83_2950: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("167%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_83_2943: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_83_2951: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  ImageBackground_118_1435: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  View_140_1445: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("9%")
  },
  TouchableOpacity_140_1444: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("18%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_140_1432: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_140_1432: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_140_1443: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_140_1435: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_140_1435: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1442: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_140_1437: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_140_1437: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1742: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("36%"),
    backgroundColor: "rgba(255, 255, 255, 0.8999999761581421)"
  },
  View_140_1726: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_1726_1_353: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I140_1726_1_354: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I140_1726_1_355: {
    flexGrow: 1,
    width: wp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I140_1726_1_355: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_140_1727: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_140_1728: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_1728_1_360: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I140_1728_1_364: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_140_1729: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_1729_1_204: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I140_1729_1_208: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_140_1730: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I140_1730_1_366: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I140_1730_1_370: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_1710: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("119%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_151_1697: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_151_1698: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_1699: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_1699: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1700: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_1700: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_151_1701: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_151_1702: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_151_1702: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_164_5918: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("10%")
  },
  TouchableOpacity_164_5917: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_164_5914: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_164_5915: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_164_5910: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_164_5911: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(159, 26, 240, 1)",
    borderWidth: 2
  },
  View_168_2609: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_2591: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_168_2592: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_168_2592: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2593: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_168_2593: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_168_2590: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_168_2595: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_168_2602: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I168_2602_10_2197: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_197_3095: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("81%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_197_3084: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_197_3085: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_197_3085: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_197_3086: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_197_3086: {
    color: "rgba(46, 56, 79, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_197_3087: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  TouchableOpacity_168_3098: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_170_4064: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_170_4060: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_170_4061: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_170_4061: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_170_4062: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_170_4062: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_170_4063: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_181_4665: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("11%")
  },
  TouchableOpacity_181_4662: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_181_4661: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_181_4661: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_181_4666: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("11%"),
    backgroundColor: "rgba(159, 26, 240, 1)"
  },
  View_181_4667: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_181_4667: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_181_4725: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("37%"),
    minHeight: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("107%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_181_4721: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_181_4722: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_181_4722: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_181_4723: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("32%"),
    justifyContent: "flex-start"
  },
  Text_181_4723: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_181_4724: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_181_4724: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_197_2409: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("179%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%")
  },
  View_207_4137: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("41%"),
    backgroundColor: "rgba(232, 194, 255, 1)"
  },
  View_207_4133: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_207_4133: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_207_4134: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I207_4134_2_60: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_I207_4134_2_64: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_207_4248: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("136%")
  },
  View_207_4244: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_207_4241: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_207_4241: {
    color: "rgba(159, 26, 240, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_207_4249: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_207_4250: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_207_4250: {
    color: "rgba(232, 194, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_223_1623: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  ImageBackground_230_8482: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("172%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
