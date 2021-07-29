# React Native Expo with Firebase

- [Expo link](https://expo.dev/@votepurchase/react-native-expo-firebase-appmenu)
- [Demo video](https://youtu.be/WTE3YHfLE9g)

## Screenshot

<img src='https://github.com/kiyohken2000/react-native-expo-firebase/blob/master/__DELELE_ME__/img.png' width='80%'>

## Infrastructure

- React Native 
- Expo
- Firebase(Firestore)

## Libraries

- Expo
- react-navigation
- firebase
- react-native-elements
- react-native-svg
- react-native-vector-icons

## How to use

### 1. Install

```
git clone https://github.com/kiyohken2000/react-native-expo-firebase
cd react-native-expo-firebase
yarn install
```

### 2. Setting up Firebase

`src\firebase.js`

```javascript
import * as firebase from 'firebase'
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
  apiKey: "Your API Key",
  authDomain: "Your API Key",
  projectId: "Your API Key",
  storageBucket: "Your API Key",
  messagingSenderId: "Your API Key",
  appId: "Your API Key",
  measurementId: "Your API Key"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
```

### 3. Update app.json

Replace the name and Slug with yours.

```
"name": "your-app-name",
"slug": "your-app-name",
```

### 4. Run Your App

```
expo start
```

## Licence

This project is available under the MIT license. See the [LICENSE](https://github.com/kiyohken2000/react-native-expo-firebase/blob/master/LICENSE) file for more info.
