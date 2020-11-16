

onUserLogin = [];



clevertap.onUserLogin.push({
    "Site": {
      "Name": name,           // use the Name variable
      "Email": email,         // Email address of the user
      "Phone": phone,           // Phone (with the country code
      "DOB": new Date()                // Date of Birth. Date object   
     
    }
   });


   clevertap.profile.push({
    "Site": {
      "Name": name,           // use the Name variable
      "Email": email,         // Email address of the user
      "Phone": phone,           // Phone (with the country code
      "DOB": new Date()                 // Date of Birth. Date object   
    }
   });
   
   console.log(onUserLogin);
   