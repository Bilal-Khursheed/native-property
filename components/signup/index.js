import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";

const SingUp = (props) => {
  const image = { uri: "https://reactjs.org/logo-og.png" };
  const [email, setemail] = useState();
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const SignUp = () => {
    console.log("call fn", email, password);
    let init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };
    let url = "http://192.168.18.36/ali-work/user_registration.php";
    fetch(url, init)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res === "Email Already Exist, Please Try Again !!!") {
          Alert.alert(res);
        } else if (res == "tryAgain") {
          Alert.alert("Internal Server Error");
        } else {
          Alert.alert("Register Successful.");
          props.navigation.navigate("Home");
        }
        // console.debug(res);

        // Alert.alert(res);
      });
    // response = response.json();
    // console.log("here is the res", response);
  };
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground
          source={{ uri: "assets/ModelY.jpeg" }}
          esizeMode="cover"
          style={styles.ImageBackground}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>Property Site</Text>
          {/* <TextInput> */}
          <Text style={styles.subTitle}>User Registration</Text>
          <TextInput
            placeholder="Enter UserName"
            onChangeText={(UserName) => setname(UserName)}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          <TextInput
            placeholder="Enter Email"
            onChangeText={(email) => setemail(email)}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          {/* </TextInput> */}
          <TextInput
            secureTextEntry={true}
            style={styles.TextInputStyleClass}
            placeholder="Enter password"
            onChangeText={(pass) => setpassword(pass)}
          />
          {/* <Text style={styles.subTitle}>Hello this is Bilal Khursheed!</Text> */}
        </View>
        <Button
          title="Register"
          color="#2196F3"
          onPress={SignUp}
          style={styles.LoginButton}
        />
        <Button
          title="Login"
          color="#2196F3"
          onPress={() => props.navigation.navigate("Login")}
          style={styles.LoginButton}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  LoginButton: {
    backgroundColor: "red",
    color: "black",
    borderRadius: 5,
    borderTopEndRadius: 40,
  },
  container: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  carContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "30%",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 40,
    fontFamily: "Courier New",
    marginBottom: 70,
    // underline: true,
  },
  subTitle: {
    color: "#5c5e65",
    fontSize: 26,
    fontFamily: "Courier New",
    marginBottom: 50,
  },
  ImageBackground: {
    // height: "100%",
    // width: "100%",
    // resizeMode: "cover",
    position: "absolute",
  },
  buttons: {
    color: "#5c5e65",
  },
  TextInputStyleClass: {
    textAlign: "center",
    marginBottom: 10,
    height: 40,
    width: 300,
    borderWidth: 2,
    // Set border Hex Color Code Here.
    borderColor: "#2196F3",

    // Set border Radius.
    borderRadius: 5,

    // Set border Radius.
    //borderRadius: 10 ,
  },
});

export default SingUp;
