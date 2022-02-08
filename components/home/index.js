import {
  Card,
  CardTitle,
  CardContent,
  CardAction,
  CardButton,
  CardImage,
} from "react-native-material-cards";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [properties, setproperties] = useState([
    {
      title: "This is a title",
      image:
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80%20852w",
      discription:
        "Discover Property Selling Websites. Find Quick Results from Multiple Sources. Get Property Selling Websites. Get Instant Quality Results at iZito Now! Explore the Best Info Now. Powerful and Easy to Use. 100+ Qualitative Results. Discover Quality Results.",
    },
    {
      title: "Above all i am here",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
      discription:
        "Discover Property Selling Websites. Find Quick Results from Multiple Sources. Get Property Selling Websites. Get Instant Quality Results at iZito Now! Explore the Best Info Now. Powerful and Easy to Use. 100+ Qualitative Results. Discover Quality Results.",
    },
    {
      title: "Above all i am here",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
      discription:
        "Discover Property Selling Websites. Find Quick Results from Multiple Sources. Get Property Selling Websites. Get Instant Quality Results at iZito Now! Explore the Best Info Now. Powerful and Easy to Use. 100+ Qualitative Results. Discover Quality Results.",
    },
    {
      title: "Above all i am here",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80",
      discription:
        "Discover Property Selling Websites. Find Quick Results from Multiple Sources. Get Property Selling Websites. Get Instant Quality Results at iZito Now! Explore the Best Info Now. Powerful and Easy to Use. 100+ Qualitative Results. Discover Quality Results.",
    },
    // {
    //   title: "Title 11111",
    // },Í
    // {
    //   title: "Above all i am here",
    // },
    // {
    //   title: "Title 11111",
    // },
  ]);
  useEffect(() => {
    let init = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    let url = "http://192.168.18.36/ali-work/Catalogue.php";
    fetch(url, init)
      .then((response) => response.json())
      .then((res) => {
        if (res) {
          let newData = JSON.stringify(res);
          newData = JSON.parse(newData);
          setproperties(newData);
          console.log(newData);
        }
        // if (res === "Email Already Exist, Please Try Again !!!") {
        //   Alert.alert(res);
        // } else if (res == "tryAgain") {
        //   Alert.alert("Internal Server Error");
        // } else {
        //   Alert.alert("Register Successful.");
        //   props.navigation.navigate("Home");
        // }
        //   }
        // console.debug(res);

        // Alert.alert(res);
      });
  }, []);

  return (
    // <View style={styles.container}>
    // <SafeAreaView>
    <ScrollView>
      {properties.map((item, index) => (
        <Card style={styles.Card} key={index}>
          <CardImage
            source={{ uri: item?.image1Link }}
            title={item?.propertyName}
            style={styles?.ImageBackground}
          />
          <CardAction separator={true} inColumn={true}>
            <CardTitle
              separator={true}
              title={item.propertyName}
              subtitle="This is subtitle"
            />
            <CardContent text={item.propertyDesc} />
          </CardAction>
          <CardAction
            style={styles.CardAction}
            separator={true}
            inColumn={false}
          >
            <CardTitle style={styles.Price} subtitle={`Price ${item.propertyPrice}`} color="gray" />
            <CardButton onPress={() => {}} title="see More" color="blue" />
          </CardAction>
        </Card>
      ))}
    </ScrollView>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CardAction: {
    margin: 15,
  },

  Price: {
    color: "red",
  },
  Card: {
    margin: 20,
    borderRadius: 30,
    // overflow: "scroll",
  },
  ImageBackground: {
    marginBottom: 30,
    fontWeight: "600",
    fontSize: 15,
  },
});
export default Home;
