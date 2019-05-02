import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Google } from "expo";
// import { authorize } from "react-native-app-auth";
const wS = Dimensions.get("window");
const dh = wS.height;
const dw = wS.width;

const hh = h => {
  return (dh * h) / 670;
};

const ww = w => {
  return (dw * w) / 375;
};

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "signin"
    };
  }

  gsignIn = async () => {
    try {
      const clientId = {
        clientId:
          "376542755138-r0h1n3bbgj859rf7rbrl7c47euh0khia.apps.googleusercontent.com"
      };
      const { type, accessToken, user } = await Google.logInAsync(clientId);
      if (type === "success") {
        /* `accessToken` is now valid and can be used to get data from the Google API with HTTP requests */
        console.log(user);
      }
    } catch ({ message }) {
      alert("GoogleSignIn.initAsync(): " + message);
    }
  };

  renderLogin() {
    return (
      <View
        style={{
          flex: 1,
          borderWidth: 0,
          width: "100%",
          height: "100%",
          padding: 10
        }}
      >
        <Text
          style={{
            fontSize: ww(24),
            fontWeight: "600",
            color: "#676767"
          }}
        >
          Sign In
        </Text>
        <View
          style={{
            width: "100%",
            marginVertical: hh(20)
          }}
        >
          <TextInput placeholder="Email Address" style={[styles.input]} />
          <TextInput placeholder="Password" style={styles.input} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: hh(10)
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  height: 15,
                  width: 15,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: "blue",
                  backgroundColor: "white",
                  marginRight: 10
                }}
              />
              <Text
                style={{
                  color: "#676767",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontSize: ww(14)
                }}
              >
                Remember Me
              </Text>
            </View>
            <Text
              style={{
                color: "#CC3333",
                fontSize: ww(14),
                fontWeight: "500"
              }}
            >
              Forgot Password ?
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Main")}
            style={{
              width: "100%",
              height: hh(45),
              backgroundColor: "#3380CC",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: ww(5)
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: ww(16),
                fontWeight: "500",
                color: "white"
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontSize: ww(16),
              padding: "8%",
              fontWeight: "500",
              color: "#676767"
            }}
          >
            or
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <TouchableOpacity style={styles.btn} onPress={() => this.gsignIn()}>
              <Image
                source={require("../../assets/google.png")}
                style={{
                  height: ww(25),
                  width: ww(25)
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Image
                source={require("../../assets/fb.png")}
                style={{
                  height: ww(25),
                  width: ww(25)
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            paddingTop: "15%"
          }}
        >
          <Text
            style={{
              fontSize: ww(16),
              fontWeight: "500",
              color: "#676767"
            }}
          >
            Dont have an account ?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Join")}
          >
            <Text
              style={{
                fontSize: ww(16),
                fontWeight: "600",
                paddingLeft: "5%",
                color: "#3380CC"
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#2a56c6"
          translucent
          barStyle="light-content"
        />
        <View
          style={{
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <View
            style={{
              height: "100%",
              width: "100%",
              padding: "7%"
            }}
          >
            <Image
              source={require("../../assets/logo.png")}
              style={{
                height: dw * 0.2,
                width: dw * 0.2,
                marginBottom: "5%",
                alignSelf: "flex-start"
              }}
              resizeMode="contain"
            />
            {this.renderLogin()}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
    borderColor: "#3380CC",
    height: hh(40),
    width: 0.35 * dw,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  input: {
    backgroundColor: "white",
    padding: ww(20),
    height: hh(45),
    width: "100%",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#3380CC",
    marginBottom: hh(20)
  },
  container: {
    flex: 1
  }
});
