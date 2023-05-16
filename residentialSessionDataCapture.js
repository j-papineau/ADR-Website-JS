



//Set phone buttons and stuff below

phoneNumberValue = '501-315-6462' //(xxx)-xxx-xxxx
phoneNumberLink = phoneNumberValue //xxx-xxx-xxxx
locationFull = 'Little Rock, AR' 
locationShort = 'Little Rock' 
urlLocation = "little-rock"


//Do not edit below

telLink = "tel:" + phoneNumberValue;

phoneClass = document.getElementsByClassName("phoneClass")

for(let i = 0; i < phoneClass.length; i++){
	
	phoneClass[i].innerHTML = "<strong>" + phoneNumberValue + "</strong>"
	
}

document.getElementById("bigHeadLine").innerHTML = "Dumpster Rental in " + locationFull
document.getElementById("callUsText").innerHTML = "Call Us: " + phoneNumberValue
document.getElementById("jumbotronText").innerHTML = "Super Fast & Friendly Service in <br> <i>" + locationFull + "</i>"

phoneButtons = document.getElementsByClassName("phoneButton")

for(let i = 0; i < phoneButtons.length; i++){
	
	phoneButtons[i].href = "tel:" + phoneNumberLink
	
}

blockText = document.getElementById("textDiv")

//blockText.innerHTML = "<p>This is a test to see inserting interim <a href=https://www.google.com">links</a></p>"

blockText.innerHTML = "<p>The " + locationShort + " area is a beautiful place to live \
and an even more beautiful place to renovate! We know your small projects\
 can require a big cleanup, which is why ADR is here to handle the waste \
so you can keep on doing what you do best. Just give us a call at " + '<a href="' + telLink + '">'+ phoneNumberValue + "</a>.\
 </p>";

document.getElementById("servingText").innerHTML = "Serving " + locationShort + " and Surrounding Areas"


//other declarations and changes take place on element level


//store session data 

sessionStorage.setItem("phoneNumber", phoneNumberValue);
sessionStorage.setItem("locationFull", locationFull);
sessionStorage.setItem("locationShort", locationShort);
sessionStorage.setItem("originURL", document.URL);
sessionStorage.setItem("markerID", 2)
sessionStorage.setItem("urlLocation", urlLocation);
sessionStorage.setItem("hasData", true);


//generate URLS
resourceURL = location.origin + "/resources/";
baseURL = resourceURL + urlLocation;
constructionURL = baseURL + "/construction-dumpsters";
residentialURL = baseURL + "/residential-dumpsters";
permPlacementURL = baseURL + "/permanent-placement";
rolloffURL = baseURL + "/roll-off-dumpsters";

sessionStorage.setItem("baseURL", baseURL);
sessionStorage.setItem("constructionURL", constructionURL);
sessionStorage.setItem("residentialURL", residentialURL);
sessionStorage.setItem("rolloffURL", rolloffURL);



constructionButtons = document.getElementsByClassName("constructionButton")

for(i = 0; i < constructionButtons.length; i++){
	
	constructionButtons[i].href = constructionURL;
	
}






