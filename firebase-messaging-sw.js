importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');

var firebaseConfig = {
    apiKey: "AIzaSyBQUpIYvs0WKfP5IMD4TE2IWTvpb5U34Cc",
    authDomain: "portfoliomanagement-16f09.firebaseapp.com",
    databaseURL: "https://portfoliomanagement-16f09.firebaseio.com",
    projectId: "portfoliomanagement-16f09",
    storageBucket: "portfoliomanagement-16f09.appspot.com",
    messagingSenderId: "505793158040",
    appId: "1:505793158040:web:14b9466a349235ef8b69ed",
    measurementId: "G-MRCWJ4R5RJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.setBackgroundmessagingHandler(function(payload){
console.log(payload)
})