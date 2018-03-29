import React from "react"
import { Root } from "native-base"
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator } from "react-navigation"
import TabBarItem from "./components/TabBarItem"

import Header from "./screens/Header/"
import Home from "./screens/home/"
import Contact from "./screens/contact/"
import Spinner from "./screens/spinner"
import SideBar from "./screens/sidebar"

import Config from "./config.js"

const Tab = TabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tabbar_home.png')}
                        selectedImage={require('../assets/tabbar_home_selected.png')}
                    />
                )
            }),
        },

        Contact: {
            screen: Contact,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Contact',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tabbar_contact.png')}
                        selectedImage={require('../assets/tabbar_contact_selected.png')}
                        size={35}
                    />
                )
            }),
        },

        Mine: {
            screen: Header,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={require('../assets/tabbar_mine.png')}
                        selectedImage={require('../assets/tabbar_mine_selected.png')}
                    />
                )
            }),
        },
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#c63281',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
            showLabel: false
        },
    }

)

const AppNavigator = StackNavigator(
  {
    Tab: { screen: Tab },
    Spinner: { screen: Spinner },
    Header: { screen: Header }
  },
  {
    initialRouteName: "Tab",
    headerMode: "none"
  }
)

const Drawer = DrawerNavigator(
    {
      Home: AppNavigator
    },
    {
      contentComponent: props => <SideBar data={Config.menu} {...props} />
    }
)

export default () =>
  <Root>
    <Drawer />
  </Root>
