import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TextInput,
  ImageBackground,
} from "react-native";

const CartItem = (props) => {
  const image = { uri: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80%20852w" };
  const [email, setemail] = useState();
  const [password, setpassword] = useState("");
  useEffect(() => {
    // Login()
  }, []);
  const Login = async () => {
    console.log("call fn", email, password);
    let init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // name: name,
        email: email,
        password: password,
      }),
    };
    let url = "http://192.168.18.36/ali-work/userLogin.php";
    fetch(url, init)
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        if (res == "loginSuccess") {
          props.navigation.navigate("Home");
        } else {
          Alert.alert("Incorrect Login data Please try again! ");
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
        {/* const image = {uri: "https://reactjs.org/logo-og.png" }; */}
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> </ImageBackground> */}
        {/* <ImageBackground
          source={uri:image  }
          esizeMode="cover"
          style={styles.ImageBackground}
        /> */}
        <View style={styles.titles}>
          <Text style={styles.title}>Property Site</Text>
          {/* <TextInput> */}
          <Text style={styles.subTitle}>Login</Text>
          <TextInput
            placeholder="Enter Email"
            onChangeText={(e) => setemail(e)}
            // onChangeText={UserName => this.setState({UserName})}
            underlineColorAndroid="transparent"
            style={styles.TextInputStyleClass}
          />
          {/* </TextInput> */}
          <TextInput
            secureTextEntry={true}
            style={styles.TextInputStyleClass}
            placeholder="Enter password"
            onChangeText={(e) => setpassword(e)}
          />
          {/* <Text style={styles.subTitle}>Hello this is Bilal Khursheed!</Text> */}
        </View>
        <View style={styles.ButtonsStyle}>
        <Button
          title="Login"
            color="#2196F3"
  
          onPress={Login}
          // style={styles.Buttons}
          />
        </View>
        <View style={styles.ButtonsStyle}>
         <Button
          title="Register"
          color="#2196F3"
          onPress={() => props.navigation.navigate('SignUp')}
          // style={styles.Buttons}
          />
          </View>
         
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
  image: {
    flex: 1,
    justifyContent: "center"
  },
  ButtonsStyle: {
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    borderRadius: 30
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
  Buttons: {
    color: "#5c5e65",
    padding: 50,
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

export default CartItem;
