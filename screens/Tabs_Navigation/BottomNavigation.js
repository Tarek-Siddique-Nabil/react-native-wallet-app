import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import Records from "../Records";
import Modal from "../Modal";
import Statistics from "../Statistics";
import Settings from "../Settings";
import { AntDesign, Entypo, Feather, Foundation } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
const CustomTabButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
const BottomNavigation = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          title: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <AntDesign
                name="home"
                style={{
                  color: focused ? "#e32f45" : "black",
                }}
                size={24}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {" "}
                HOME
              </Text>
            </View>
          ),
        }}
      />

      <BottomTab.Screen
        name="Records"
        component={Records}
        options={{
          title: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <AntDesign
                name="calendar"
                style={{
                  color: focused ? "#e32f45" : "black",
                }}
                size={24}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {" "}
                Records
              </Text>
            </View>
          ),
        }}
      />


      <BottomTab.Screen 
        name="Modal"
        component={Modal}
        options={{
    
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="pluscircleo"
              style={{
                color: focused ? "cyan" : "black",
              }}
              size={40}
            />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
      />

      
      <BottomTab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          title: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Foundation
                name="graph-bar"
                style={{
                  color: focused ? "#e32f45" : "black",
                }}
                size={24}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {" "}
                Statistics
              </Text>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 10,
              }}
            >
              <Feather
                name="settings"
                style={{
                  color: focused ? "#e32f45" : "black",
                }}
                size={24}
              />
              <Text
                style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}
              >
                {" "}
                Settings
              </Text>
            </View>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#00FFFF",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.85,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
