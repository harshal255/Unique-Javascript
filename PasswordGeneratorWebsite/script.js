function generatePassword() {
  var length = 12;
  var charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  var password = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  var passwordInput = document.getElementById("password");
  passwordInput.select();
  document.execCommand("copy");
}
