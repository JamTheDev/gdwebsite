var firebaseConfig = {
    apiKey: "AIzaSyC4frRn2JKi3RJr62_oyW8ZcL4pG-Hw3Bw",
    authDomain: "gdwebsite-1628b.firebaseapp.com",
    databaseURL: "https://gdwebsite-1628b.firebaseio.com",
    projectId: "gdwebsite-1628b",
    storageBucket: "gdwebsite-1628b.appspot.com",
    messagingSenderId: "786398665043",
    appId: "1:786398665043:web:a3db21a7be77ef7116e9a6",
    measurementId: "G-MD6BV2HQ9C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const db = firebase.database();

class insert{
    writeData(level_name, vote){
        db.ref("/"+level_name).once("value", function(snapshot){
			var childData = snapshot.val();
			
			if(childData == null){
				db.ref(level_name).set({
					vote
				})
			}else{
				db.ref(level_name).set({
					vote: vote+childData["vote"]
				})
			}
        })
    }
}