//get session data 

hasData = sessionStorage.getItem("hasData");
sessionPhone = sessionStorage.getItem("phoneNumber");
sessionLocationFull = sessionStorage.getItem("locationFull");
sessionLocationShort = sessionStorage.getItem("locationShort");
sessionOriginURL = sessionStorage.getItem("originURL");

//create check var for hidden div
//check = document.getElementById("values")
//check.style.display = "none";

//first case is if the check div exists, meaning the url has a php id value



valid = document.getElementById("validID").value



if(valid){
	
	slug = document.getElementById("slug").value;
	phoneNumberValue = document.getElementById("phone").value;
	locationShort = document.getElementById("shortName").value;
	locationFull = document.getElementById("longName").value;
	regionID = document.getElementById("regionID").value;
	
	
	
	telLink = "tel:" + phoneNumberValue
	
	constructionURL = "https://affordabledumpsterrental.com/resources/" + slug + "/construction-dumpsters";
	residentialURL  = "https://affordabledumpsterrental.com/resources/" + slug + "/residential-dumpsters";
	
	
	//console prints just for checking
	

}

else if(hasData){
	
	//session data case
	
	phoneNumberValue = sessionPhone;
	phoneNumberLink = phoneNumberValue;
	locationFull = sessionLocationFull;
	locationShort = sessionLocationShort;
	
	constructionURL = sessionStorage.getItem("constructionURL");
	residentialURL = sessionStorage.getItem("residentialURL");
	
	
	telLink = "tel:" + phoneNumberValue;
	
}

else{
	
	//default case

	phoneNumberValue = '877-393-8677' //(xxx)-xxx-xxxx
	phoneNumberLink = phoneNumberValue //xxx-xxx-xxxx
	locationFull = 'Your County' 
	locationShort = 'County' 
	regionID = "100"

	constructionURL = "https://affordabledumpsterrental.com"
	residentialURL = "https://affordabledumpsterrental.com"
	//Do not edit below

	telLink = "tel:" + phoneNumberValue;
	
}


//set all based on vars

	phoneClass = document.getElementsByClassName("phoneClass")

	for(let i = 0; i < phoneClass.length; i++){

		phoneClass[i].innerHTML = "<strong>" + phoneNumberValue + "</strong>"

	}



	phoneButtons = document.getElementsByClassName("phoneButton")

	for(let i = 0; i < phoneButtons.length; i++){

		phoneButtons[i].href = telLink

	}
	
	constructionButtons = document.getElementsByClassName("constructionButton")
	
	for(i = 0; i < constructionButtons.length; i++){
		
		
		constructionButtons[i].href = constructionURL
		
	}
	
	
	homeownerButtons = document.getElementsByClassName("homeownerButton")
	
	for(i = 0; i < homeownerButtons.length; i++){
		
		homeownerButtons[i].href = residentialURL

	}

//set regionID for form tracking in CRM

var regionClass = document.getElementsByClassName("region")


	for(i = 0; i < regionClass.length; i++){
		
		regionClass[i].setAttribute("regionid", regionID);
		
		
	}


//print region id for check
console.log("region id: " + regionID);

//other logs

	console.log ("phoneNumber = " + phoneNumberValue);
	console.log("short = " + locationShort);
	console.log("long = " + locationFull);
	console.log("link = " + telLink);

//other declarations and changes take place on element level
