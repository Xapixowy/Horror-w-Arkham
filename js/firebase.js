var firebaseConfig = {
   apiKey: 'AIzaSyCuWKnnEOG0WIYLlTS2OYLILt1r_DFXKUs',
   authDomain: 'horror-w-arkham.firebaseapp.com',
   databaseURL: 'https://horror-w-arkham-default-rtdb.firebaseio.com',
   projectId: 'horror-w-arkham',
   storageBucket: 'horror-w-arkham.appspot.com',
   messagingSenderId: '702466094694',
   appId: '1:702466094694:web:e52e4be8314fd1ce90dfa7',
   measurementId: 'G-19QWGH08BS',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const getFirebaseData = (variable) => {
   return firebase
      .database()
      .ref()
      .child(variable)
      .get()
      .then((snapshot) => {
         if (snapshot.exists()) {
            return snapshot.val();
         } else {
            console.log('No data available');
         }
      })
      .catch((error) => {
         console.error(error);
      });
};

const sendFirebaseData = (variable, value) => {
   firebase.database().ref(variable).set(value);
};
