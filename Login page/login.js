function submitForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var country = document.getElementById("country").value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById("profession").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
  
   
    if (firstName === "" || lastName === "" || dob === "" || country === "" || gender.length === 0 || profession === "" || email === "" || mobile === "") {
      alert("Please fill in all the fields.");
      return;
    }
  
   
    var popupContent = "First Name: " + firstName + "\n";
    popupContent += "Last Name: " + lastName + "\n";
    popupContent += "Date of Birth: " + dob + "\n";
    popupContent += "Country: " + country + "\n";
    popupContent += "Gender: ";
    for (var i = 0; i < gender.length; i++) {
      popupContent += gender[i].value + " ";
    }
    popupContent += "\n";
    popupContent += "Profession: " + profession + "\n";
    popupContent += "Email: " + email + "\n";
    popupContent += "Mobile Number: " + mobile;
  
    alert(popupContent);
  
    document.getElementById("myForm").reset();
  }
  
  function resetForm() {
    document.getElementById("myForm").reset();
  }