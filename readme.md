# Boilerplate React Native & Native Base V1.0.0
A basic react native app with native base and expo using Tabs and Drawer navigation, based on [Kitchen Sink NativeBase Demo](https://github.com/damianfabian/NativeBase-KitchenSink/)

## Demo

iOS | Android
 :--:| :-----:
 ![ios-demo](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/iOS.gif) | ![android-demo](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/Android.gif)

![demo](./expoqr.png)

Scan the QR with Expo app to open the demo

## Description

This App was created using the expo command line, if you want to know more about expo command line you can see more details here [Expo.io](https://expo.io/learn).

## Pre-Requirements

Before to start your development process install the expo command line:

`npm install exp --global`

Once you have install the expo command line you will be available to execute the next commands

## Commands

### `exp start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `exp run-ios`

Like `exp start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `exp run-android`

Like `npm start`, but also attempts to open your app in the Android Simulator if you're on a Windows and have it installed.

#### `exp --help`

Shows the help content for the expo command line, you can also check all the documentation here [Expo Command Line](https://docs.expo.io/versions/latest/guides/exp-cli.html)

## Customizing App Display Name and Icon

You can edit `app.json` to include [configuration keys](https://docs.expo.io/versions/latest/guides/configuration.html) under the `expo` key.

To change your app's display name, set the `expo.name` key in `app.json` to an appropriate string.

To set an app icon, set the `expo.icon` key in `app.json` to be either a local path or a URL. It's recommended that you use a 512x512 png file with transparency.


## Configuring Drawer Menu

You will found a `config.js` file under `src` folder. This file contains the configuration for the Drawer Menu List, you can change icons, text and routes there.

## Pending Tasks

- Linter (Airbnb)
- Testing Framework
- Authentication (Login/Roles)
- Notifications

## Contributing

PR's are very welcome! This is a very young boilerplate with the best idea of help people to start a mobile development, and probably has a wealth of bugs and optimizations to fix and improve on. I have just a couple requests:

- Please create an issue for any change of modification you want to add, so we can discuss the road map of the boilerplate.
- Please add the readme with enough information about your changes if applies.

## License
MIT

