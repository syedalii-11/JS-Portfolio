document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let errorMessages = [];
    
  
    let fullName = document.getElementById("fullName").value;
    if (fullName.trim() === "") {
        errorMessages.push("Full Name is required.");
    }

    // Email Validation
    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

   
    let phone = document.getElementById("phone").value;
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessages.push("Phone number should be 10 digits.");
    }


    let subject = document.getElementById("subject").value;
    if (subject.trim() === "") {
        errorMessages.push("Subject is required.");
    }

  
    let message = document.getElementById("message").value;
    if (message.trim() === "") {
        errorMessages.push("Message is required.");
    }


    if (errorMessages.length > 0) {
     
        document.getElementById("errorMessages").innerHTML = "<ul>" + errorMessages.map(msg => `<li>${msg}</li>`).join('') + "</ul>";
    } else {
       
        alert("Form Submitted Successfully!");
        
    }
});