var firebaseConfig = {
  apiKey: "AIzaSyBPYRxc8oIkhnk2c7HGO6KHSYIAh7zFNvA",
  authDomain: "portfolio-338a5.firebaseapp.com",
  databaseURL: "https://portfolio-338a5.firebaseio.com",
  projectId: "portfolio-338a5",
  storageBucket: "portfolio-338a5.appspot.com",
  messagingSenderId: "847946414334",
  appId: "1:847946414334:web:52cef60f6e835dd10ecdaf"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#submit").on("click", function (event) {
  event.preventDefault();

  var name = $("#name").val().trim();
  var email = $("#email").val().trim();
  var subject = $("#subject").val().trim();
  var message = $("#message").val().trim();


  var userInfo = {
    userName: name,
    userEmail: email,
    userSubject: subject,
    userMessage: message
  };

  database.ref().push(userInfo);

  alert("Information Sucessfully Submitted");

  $("#name").val("");
  $("#email").val("");
  $("#subject").val("");
  $("#message").val("");
  return false;
});
