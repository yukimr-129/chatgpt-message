import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD_QixfGE1Vcg25gtVzq5NWBhVANf2A3bQ',
  authDomain: 'chatgpt-messenger-9fa40.firebaseapp.com',
  projectId: 'chatgpt-messenger-9fa40',
  storageBucket: 'chatgpt-messenger-9fa40.appspot.com',
  messagingSenderId: '438008799294',
  appId: '1:438008799294:web:c6009823d7adb2dce4716f',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
