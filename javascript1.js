function Submit(){
	var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
	var fname = document.form.Name.value,
		lname = document.form.LastName.value,
		username = document.form.UserName.value,
		femail = document.form.Email.value,
		freemail = document.form.enterEmail.value,
		fpassword = document.form.Password.value,
		frepassword = document.form.RePassword.value,
		fcheckbox = document.form.checkbox,
		fphone = document.form.phoneNumber.value,
		fmonth = document.form.birthday_month.value,
		fday = document.form.birthday_day.value,
		fyear = document.form.birthday_year.value;

		
	if(fname == "")
   {
     document.form.Name.focus();
	 document.getElementById("errorBox").innerHTML = "Въведете първо име!";
     return false;
   }
	if(lname == "")
   {
     document.form.LastName.focus();
	  document.getElementById("errorBox").innerHTML = "Въведете фамилия!";
     return false;
   }
   
      if (username == "")
{
      document.form.UserName.focus();
	  document.getElementById("errorBox").innerHTML = "Въведете псевдоним!";	
	  return false;
}


if(fpassword == "")
	 {
		 document.form.Password.focus();
		 document.getElementById("errorBox").innerHTML = "Въведете парола";
		 return false;
	 }

if((form.Password.value).length < 6){
         document.form.Password.focus();
	     document.getElementById("errorBox").innerHTML = "Паролата не може да бъде по-малка от 6 символа";
         return false;
    }

if(frepassword == "")
	 {
		 document.form.RePassword.focus();
		 document.getElementById("errorBox").innerHTML = "Повторете паролата";
		 return false;
	 }


if(frepassword !=  fpassword){
		 document.form.RePassword.focus();
		 document.getElementById("errorBox").innerHTML = "Паролите не съвпадат, въведете отново";
		 return false;
		 }


   if (femail == "" )
	{
		document.form.Email.focus();
		document.getElementById("errorBox").innerHTML = "Въведете имейл адрес";
		return false;
	 }else if(!emailRegex.test(femail)){
		document.form.Email.focus();
		document.getElementById("errorBox").innerHTML = "Въведете валиден имейл адрес";
		return false;
	 }
	 
	  if (freemail == "" )
	{
		document.form.enterEmail.focus();
		document.getElementById("errorBox").innerHTML = "Повторете имейл адреса";
		return false;
	 }else if(!emailRegex.test(freemail)){
		document.form.enterEmail.focus();
		document.getElementById("errorBox").innerHTML = "Повторете валиден имейл";
		return false;
	 }
	 
	 if(freemail !=  femail){
		 document.form.enterEmail.focus();
		 document.getElementById("errorBox").innerHTML = "Имейл адресите не съвпадат, въведете отново";
		 return false;
		 }

     if(fphone == "")
	 {
		 document.form.phoneNumber.focus();
		 document.getElementById("errorBox").innerHTML = "Въведете телефонен номер!";
		 return false;
	 }
	 	
	 if(isNaN(form.phoneNumber.value)){
	 	document.form.phoneNumber.focus();
	     document.getElementById("errorBox").innerHTML = "Невалиден телефонен номер!";
         return false;
	 }

     if((form.phoneNumber.value).length < 10){
         document.form.phoneNumber.focus();
	     document.getElementById("errorBox").innerHTML = "Номерът е под 10 цифри";
         return false;
    }

    if((form.phoneNumber.value).length > 10){
         document.form.phoneNumber.focus();
	     document.getElementById("errorBox").innerHTML = "Номерът е над 10 цифри!";
         return false;
    }

		 if (fmonth == "") {
        document.form.birthday_month.focus();
		document.getElementById("errorBox").innerHTML = "Изберете месец";
        return false;
     }
	 if (fday == "") {
        document.form.birthday_day.focus();
		document.getElementById("errorBox").innerHTML = "Изберете ден";
        return false;
     }
	 if (fyear == "") {
        document.form.birthday_year.focus();
		document.getElementById("errorBox").innerHTML = "Изберете година";
        return false;
     }
		if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false)
		{
				document.getElementById("errorBox").innerHTML = "Изберете пол";
			 return false;
		}

if(document.form.checkbox.checked == false )
{
	document.getElementById("errorBox").innerHTML = "Моля съгласете се с общите правила!"
	return false
} 


		if(fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != '' && fmonth != '' && fday != '' && fyear != '')
		{
			document.getElementById("errorBox").innerHTML = "form submitted successfully";
			window.location.href="thank-you-regd.html";
			}


		  
}

