importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js"),importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");const firebaseConfig={apiKey:"AIzaSyDMpRz7qqXLS6dJCgMIyU7c3QXIkPwzQkI",authDomain:"asdf-3e590.firebaseapp.com",databaseURL:"https://asdf-3e590.firebaseio.com",projectId:"asdf-3e590",storageBucket:"asdf-3e590.appspot.com",messagingSenderId:"990553321355",appId:"1:990553321355:web:e461977aeb6c99d1bc098e",measurementId:"G-4YHRGW6XW7"},app=firebase.initializeApp(firebaseConfig),messaging=app.messaging();messaging.onBackgroundMessage((e=>self.registration.showNotification()));