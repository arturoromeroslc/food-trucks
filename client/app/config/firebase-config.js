import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB5rNQBo3uPVDktxITLjnIpx91ClRPfE94",
    authDomain: "foodtruckawards.firebaseapp.com",
    databaseURL: "https://foodtruckawards.firebaseio.com",
    storageBucket: "foodtruckawards.appspot.com",
};

export function initializeFirebaseApp() {
    firebase.initializeApp(config);
    return config;
};