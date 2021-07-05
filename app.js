// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBI99AC87xYDae5kXp55PgWInK09ab6I-k",
  authDomain: "personal-site-29aa1.firebaseapp.com",
  projectId: "personal-site-29aa1",
  storageBucket: "personal-site-29aa1.appspot.com",
  messagingSenderId: "629518932691",
  appId: "1:629518932691:web:70a392e5d938a469475226"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".yourname").value;
  let email = document.querySelector(".youremail").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
