//ADICIONE SEUS LINKS FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyCjfruJO_7KKQxcQN-495AL947WFfLPvgU",
    authDomain: "x-fake-kkkkkkkkkkk.firebaseapp.com",
    databaseURL: "https://x-fake-kkkkkkkkkkk-default-rtdb.firebaseio.com",
    projectId: "x-fake-kkkkkkkkkkk",
    storageBucket: "x-fake-kkkkkkkkkkk.appspot.com",
    messagingSenderId: "603955160685",
    appId: "1:603955160685:web:036b187c76e56346834164"
  };

  firebase.initializeApp(firebaseConfig);

function addUser()
{
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuário"
    });
}