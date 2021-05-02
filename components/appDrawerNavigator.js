import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppTabNavigator } from "./appTabNavigator";
import CustomSidebarMenu from "./customSidebarMenu";
import SettingScreen from "../screens/settingsScreen";

export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: AppTabNavigator },
    Settings: { screen: SettingScreen },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: "Home",
  }
);
