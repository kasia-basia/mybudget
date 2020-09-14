const firestoreService = require("firestore-export-import");
const serviceAccount = require("upload-script/serviceAccount");

const databaseURL = "https://mybudget-a9260.firebaseio.com";


firestoreService.initializeApp(serviceAccount, databaseURL);
firestoreService.restore("sampleData.json");




