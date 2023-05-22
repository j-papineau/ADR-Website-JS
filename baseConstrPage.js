



//Set phone buttons and stuff below

phoneNumberValue = '501-315-6462' //(xxx)-xxx-xxxx
phoneNumberLink = phoneNumberValue //xxx-xxx-xxxx
locationFull = 'Little Rock, AR' 
locationShort = 'Little Rock' 
urlLocation = "little-rock"
regionID = "131";






//Do not edit below

telLink = "tel:" + phoneNumberValue;

phoneClass = document.getElementsByClassName("phoneClass")

for(let i = 0; i < phoneClass.length; i++){
	
	phoneClass[i].innerHTML = "<strong>" + phoneNumberValue + "</strong>"
	
}

document.getElementById("bigHeadLine").innerHTML = "Dumpster Service Rental in " + locationFull
document.getElementById("callUsText").innerHTML = "Call Us: " + phoneNumberValue
document.getElementById("jumbotronText").innerHTML = "Super Fast & Friendly Service in <br> <i>" + locationFull + "</i>"

phoneButtons = document.getElementsByClassName("phoneButton")

for(let i = 0; i < phoneButtons.length; i++){
	
	phoneButtons[i].href = "tel:" + phoneNumberLink
	
}

blockText = document.getElementById("textDiv")

//blockText.innerHTML = "<p>This is a test to see inserting interim <a href=https://www.google.com">links</a></p>"

blockText.innerHTML = "<p>The " + locationShort + " area is rich in commercial and residential construction. Our goal is to ensure \
that you have the best construction dumpster waste management service \
you can get. For this reason, we have assembled a team of professionals \
to help handle everything from making the right choice of the construction \
dumpster sizes you need to timely pickups and deliveries. All this is to make sure \
that you have great experience handling your construction project and the waste generated \
during the process doesn't cause you any worries. Just give us a call at " + '<a href="' + telLink + '">'+ phoneNumberValue + "</a>.\
 </p>";

document.getElementById("servingText").innerHTML = "Serving " + locationShort + " and Surrounding Areas"


//other declarations and changes take place on element level


//session data stuff

sessionStorage.setItem("phoneNumber", phoneNumberValue);
sessionStorage.setItem("locationFull", locationFull);
sessionStorage.setItem("locationShort", locationShort);
sessionStorage.setItem("originURL", document.URL);
sessionStorage.setItem("markerID", 2)
sessionStorage.setItem("urlLocation", urlLocation);
sessionStorage.setItem("hasData", true);
sessionStorage.setItem("regionID", regionID);

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

residentialButtons = document.getElementsByClassName("residentialButton")

for(i = 0; i < residentialButtons.length; i++){
	
	residentialButtons[i].href = residentialURL
	
}


//TODO: set regionID for form submit






