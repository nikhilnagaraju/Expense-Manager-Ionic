# Expense-Manager-Ionic

The application is based on [Ionic Framework](https://ionicframework.com/) (Ionic 3). It also uses cordova plugins.


# Setup

* Install [Node Package Manager or NPM](https://nodejs.org/en/).
* Make sure you have installed Ionic and Cordova packages, if not install it using npm
```
$ npm install -g ionic cordova
```
* check for errors, if any install those packages properly.
* Goto project folder.
```
$ cd Expense-Manager-Ionic/
```


# Run, Debug or Build

* To run the application on android Emulator/Virtual Device setup the paths for Android SDK & then run ionic.
```
$ export ANDROID_HOME="/Users/<username>/Library/Android/sdk"
$ export PATH=${PATH}:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
$ ionic cordova run android
```

* or Run the app on a physical android Device. `-lc` option for live reloading & console logging.
```
$ ionic cordova run android --device -lc
```
* or Simply view the app in a browser using. 
```
$ ionic serve
```

* Build a standalone debug apk. The apk can be found in `<ProjectDir>/platforms/android/app/build/outputs/apk/debug/`.
```
$ ionic cordova build android --debug
```
* or Quickly try the app by downloading the apk from [releases](https://github.com/nikhilnagaraju/Expense-Manager-Ionic/releases).
