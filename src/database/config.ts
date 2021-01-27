import firebase from 'firebase/app'
import "firebase/firestore";

firebase.initializeApp({
    apiKey: wodManager.env.FB_API_KEY,
    authDomain: wodManager.env.FB_AUTH_DOMAIN,
    projectId: wodManager.env.FB_PROJECT_ID,
    storageBucket: wodManager.env.FB_STORAGE_BUCKET,
    messagingSenderId: wodManager.env.FB_MESSAGING_SENDER_ID,
    appId: wodManager.env.FB_APP_ID,
})

const Firestore = firebase.firestore()

export { Firestore }