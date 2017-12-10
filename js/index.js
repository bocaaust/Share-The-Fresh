/*function getCredentials(callbackFunction) {
	//getGifCredentials();
  var data = {
    'grant_type': 'client_credentials',
    'apiKey': API_KEY
  };
  var url = 'https://api.clarifai.com/v2/token';

  return axios.post(url, data, {
    'transformRequest': [
      function() {
        return transformDataToParams(data);
      }
    ]
  }).then(function(r) {
    localStorage.setItem('accessToken', r.data.access_token);
    localStorage.setItem('tokenTimestamp', Math.floor(Date.now() / 1000));
    callbackFunction();
  }, function(err) {
    console.log(err);
  });
}*/

function transformDataToParams(data) {
  var str = [];
  for (var p in data) {
    if (data.hasOwnProperty(p) && data[p]) {
      if (typeof data[p] === 'string'){
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
      }
      if (typeof data[p] === 'object'){
        for (var i in data[p]) {
          str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p][i]));
        }
      }
    }
  }
  return str.join('&');
}





function postImage(imgurl) {
	
	
 // var accessToken = localStorage.getItem('accessToken');
  var input = {    
     "inputs": [      
       {        
          "data": {          
             "image": {            
                "url": imgurl               }    
          }      
       }    
     ]  
};
  var url = 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs';
  return axios.post(url, input, {
    'headers': {
      'Authorization': 'Key ' + API_KEY,
		'Content-Type': 'application/json'
    }
  }).then(function(r) {
    parseResponse(r.data);
  }, function(err) {
    console.log('Sorry, something is wrong: ' + err);
  });
}


/*function tagCloud(current){
	//console.log(localStorage.getItem('popularTags'));
	//console.log(localStorage.getItem('popularTags') === null);
		//console.log(localStorage.getItem('popularTags') === '');
	if (localStorage.getItem('popularTags') === 'empty' || localStorage.popularTags === undefined){
	
		
		var tags2 = [];
		var weights = [];
		for(i=0; i < current.length; i++){
			tags2[i] = current[i];
			weights[i] = 1;
		}
		
	}else{
		
		var tags2 = JSON.parse(localStorage.getItem('popularTags'));
	var weights = JSON.parse(localStorage.getItem('popularWeights'));
		//console.log(tags2.length)
		//console.log(current.length)
		//var i;
		for(i=0; i < current.length; i++){
			var notFound = true;
			//var n;
			for(n=0; n < tags2.length; n++){
				if(current[i] === tags2[n]){
					notFound = false;
					weights[n]++;
					break;
				}
			}
			if (notFound){
				tags2[tags2.length] = current[i];
				weights[weights.length] = 1;
			}
		}
	}
	localStorage.setItem('popularTags',JSON.stringify(tags2));
	localStorage.setItem('popularWeights',JSON.stringify(weights));
	if(document.getElementById('imgurl').value !== localStorage.getItem('imgurl') || document.getElementById('cloudSuggestion').hidden === true){
	generateCloud(tags2,weights);
	cloudGif(tags2,weights);
	}
}

function cloudGif(tags,weights){ 



	var tags = top(tags,weights);	



	var url = 'https://api.gfycat.com/v1test/gfycats/search?search_text=';

	axios.get(url + tags[0].toString() + ',' + tags[1].toString() + ',' + tags[2].toString() ).then(function(r) {

		//console.log(r.data.gfycats[Math.floor((Math.random() * 10))]);

		if (r.data.gfycats.length > 0){

		document.getElementById('cloudImage').src = r.data.gfycats[Math.floor((Math.random() * r.data.gfycats.length))].gifUrl;

	}else{

		document.getElementById('cloudImage').src = 'https://az853139.vo.msecnd.net/static/images/not-found.png';

	}
		document.getElementById('cloudImage').hidden = false;

		document.getElementById('cloudSuggestion').hidden = false;

	}, function(err) {

    console.log('Sorry, something is wrong: ' + err);

  });


	document.getElementById('popular').hidden = false;
	document.getElementById('cloudSuggestion').hidden = false;
	

} 



function top(tags,weights) {

	var output = [];
	var temp = weights;
	var check = 0;
	if (tags.length === 2){
		check = 1;
	}
	if (tags.length === 1){
		check = 2;
	}

	for (n = 0; n < 3 - check; n++){

		var position = highest(tags, temp);
		output[n] = tags[position];
		temp[n] = 0;

		

	}
	return output;

}



function highest(tags,weights) {

	var output = 0;

	for (i = 0; i < tags.length; i++){

		if (weights[i] > weights[output]){

			output = i;

		}

	}

	return output;

}

function altParse(){
	//document.getElementById('third').hidden = false;
	var tags = [];
	var resp = JSON.parse(localStorage.getItem('data'));
	 if (resp.status_code === 'OK') {
    var results = resp.results;
    tags = results[0].result.tag.classes;
		tagCloud(results[0].result.tag.classes);
  } else {
    console.log('Sorry, something is wrong.');
  }
	 document.getElementById('tags').innerHTML = tags.toString().replace(/,/g, ', ');
	var url = 'https://api.gfycat.com/v1test/gfycats/search?search_text=';
	axios.get(url + tags[0].toString() + ',' + tags[2].toString() + ',' + tags[3].toString()  + ',' + tags[Math.floor(3 + (Math.random()*6))].toString()).then(function(r) {
		//console.log(r.data.gfycats[Math.floor((Math.random() * 10))]);
		if (r.data.gfycats.length > 0){
		document.getElementById('suggested').src = r.data.gfycats[Math.floor((Math.random() * r.data.gfycats.length))].gifUrl;
	}else{
		document.getElementById('suggested').src = 'https://az853139.vo.msecnd.net/static/images/not-found.png';
	}
		document.getElementById('third').hidden = false;
	}, function(err) {
    console.log('Sorry, something is wrong: ' + err);
  });
  return tags;
}*/


function parseResponse(resp) {
	//document.getElementById('third').hidden = false;
	//localStorage.setItem('data',JSON.stringify(resp));
  var tags = [];
  if (resp.status.code === 10000) {
    var results = resp.outputs;
    tags = results[0].data.concepts;
	 //tagCloud(results[0].result.tag.classes);
  } else {
    console.log('Sorry, something is wrong.');
  }
	
	//var pins = JSON.parse(localStorage.getItem('pins'));
	//var classes = [];
	//console.log(tags[0].name);
	//topTag(tags[0].name);
	pins = [];
	for(i=0;i<tags.length;i++){
		//console.log(JSON.stringify(tags));
		//console.log(tags[i].value);
		//addNode('img/' + tags[i].name + '.png',tags[i].value);
		addTag(tags[i].name);
		pins.push(tags[i].name);
		
	}
	updateFields();
	//pins[1][pins[1].length] = classes;
	localStorage.setItem('pins',JSON.stringify(pins));
	//addNode(pins[0][pins[0].length - 1], classes);
	//updateTopDestination(classes);
  //return classes;
}
function secondButton(){
	addTag(document.getElementById('imgurl').value)
}
function updateFields(){
	document.getElementById('Parameters').style.visibility = "visible";
	var button = document.getElementById("mainButton");
	var field = document.getElementById("imgurl");
	field.placeholder = "Food Name";
	field.value = "";
	button.removeEventListener("click",firstButton);
	button.addEventListener("click",secondButton);
	
	button.removeChild(button.lastChild);
	var tip = document.createTextNode("Add Food");
	button.appendChild(tip);
	
	var hint = document.getElementById("mainText");
	hint.removeChild(hint.lastChild);
	var hintText = document.createTextNode("Missing a Food? Enter it Below");
	hint.appendChild(hintText);
		
}

function updateTopDestination(tags){
	if (localStorage.getItem('destination') === null){
		var destination = [0,0,0,0,0];
	}else{
		var destination = JSON.parse(localStorage.getItem('destination'));
	}
	for (var i = 0; i< citylist[0].length; i++){
		for(var j = 0; j < citylist[1][i].length; j++){
			for (var k = 0; k < tags.length; k++){
				if ((tags[k]).toLowerCase() === (citylist[1][i][j]).toLowerCase()){
					destination[i]++;
				}
			}
		}
	}
	localStorage.setItem('destination',JSON.stringify(destination));
	postTopDestination();
	
}



/*function generateCloud(tags3,weights){
	//console.log(tags3.length);
	var container = document.getElementById('popular');
	while (container.firstChild) {
    container.removeChild(container.firstChild);
	}
	for (i=0;i<tags3.length;i++){
		var item = document.createElement("H4");
		var text = document.createTextNode(tags3[i] + ', ');
		item.appendChild(text);
		item.style.fontSize = (8 + weights[i]) + "px";
		item.style.display = "inline";
		container.appendChild(item);
	}
}

function reset(){
	//console.log('reset');
	localStorage.setItem('popularTags','empty');
	localStorage.setItem('popularWeights','empty');
	var container = document.getElementById('popular');
	while (container.firstChild) {
    container.removeChild(container.firstChild);
	}
}

*/

function updateLogo(imgurl){
	var content = document.getElementById('content');
	var item = document.createElement("DIV");
	item.id = 'box';
	item.className += "animated fadeIn first col-xs-12 col-sm-6 col-xs-offset-0 col-sm-offset-3";
	//item.style.margin = "0px";
	//item.style.height = "55vh";
	//item.width -= 8;
	var hero = document.createElement("IMG");
	hero.className+="img-thumbnail"
	hero.style.marginTop = "12px";
	hero.style.width = "100%";
	hero.style.padding = "8px";
	hero.src = imgurl;
	item.appendChild(hero);
	content.appendChild(item);
}

function topTag(industry){
	var content = document.getElementById('box');
	var title = document.createElement("H2");
		var titletext = document.createTextNode("Most Relevant Industry: " + industry);
	title.appendChild(titletext);
	content.appendChild(title);
}

function hasTag(name){
	var pinboard = document.getElementById('pinboard');
	var children = pinboard.children;
	for (var i = 0; i < children.length; i++) {
		if (children[i].id === name){
			return false;
		}
	}
	return true;
}

function isUseless(name){
	for (var i = 0; i < useless.length; i++) {
		if (useless[i] === name){
			return false;
		}
	}
	
	return true;
}

function addTag(name) {
	document.getElementById('imgurl').value = "";
	if (name != "" && hasTag(name) && isUseless(name)){
	var pinboard = document.getElementById('pinboard');
	var item = document.createElement("DIV");
	item.id=name;
	item.className+= "tagItem col-xs-12 col-sm-4 animated fadeIn";
	var food2 = document.createElement("DIV");
	food2.className+="foodItem";
	var foodName = document.createTextNode(name);
	food2.appendChild(foodName);
	item.appendChild(food2);
	var button = document.createElement("BUTTON");
	button.className+="btn button";
	button.onclick = function() {remove(name);};
	var x = document.createTextNode("X");
	button.appendChild(x);
	item.appendChild(button);
	pinboard.appendChild(item);
	}
}

function addNode(url, prob){
	var pinboard = document.getElementById('pinboard');
	var item = document.createElement("DIV");
	item.className += "animated fadeIn first col-xs-12 col-sm-4 well";
	item.style.margin = "0px";

	item.style.border = "white 8px solid";
	item.style.height = "30vh";
	//item.width -= 8;
	var hero = document.createElement("IMG");
	hero.style.width = "100%";
	hero.style.padding = "8px";
	hero.src = url;
	item.appendChild(hero);
	var probability = document.createElement("H4");
	probability.style.textAlign = "center";
		var probtext = document.createTextNode(Math.floor((prob*10000))/100.0+"%");
	probability.appendChild(probtext);
	item.appendChild(probability);
	pinboard.appendChild(item);
}

function remove(id){
	var pinboard = document.getElementById('pinboard');
	var children = pinboard.children;
	for (var i = 0; i < children.length; i++) {
		if (children[i].id === id){
			pinboard.removeChild(children[i]);
			var pins = JSON.parse(localStorage.getItem('pins'));
			/*for (var n = i+1; n < pins[1].length; n++){
				pins[1][n-1] = pins[1][n];
				pins[2][n-1] = pins[2][n];
			}
			pin[1][pins.length - 1] = */
			//removeDestination(pins[1][i]);
			pins.splice(i,1);
			//pins[0].splice(i,1);
			localStorage.setItem('pins',JSON.stringify(pins));
			break;
		}
	}
}


/*function remove(){
	var pinboard = document.getElementById('content');
	var children = pinboard.children;
	for (var i = 0; i < children.length; i++) {
		//if (children[i].id === id){
			pinboard.removeChild(children[i]);
			//var pins = JSON.parse(localStorage.getItem('pins'));
			/*for (var n = i+1; n < pins[1].length; n++){
				pins[1][n-1] = pins[1][n];
				pins[2][n-1] = pins[2][n];
			}
			pin[1][pins.length - 1] = 
			//removeDestination(pins[1][i]);
			//pins[1].splice(i,1);
			//pins[0].splice(i,1);
			//localStorage.setItem('pins',JSON.stringify(pins));
		//	break;
		//}
	}
	var node = document.getElementById('pinboard');
	while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
}
}*/

function postTopDestination(){
	var destination = localStorage.getItem('destination');
	if (destination !== null){
		destination = JSON.parse(destination);
		if (destination !== [0,0,0,0,0]){
			var top = destination.length;
			var highest = 0;
			for (var i = 0; i< destination.length; i++){
				if(destination[i] > highest){
					top = i;
					highest = destination[i];
				}
			}
			var item = document.getElementById('topDestination');
		item.removeChild(item.firstChild);
			if (highest !== 0){
		
		var text = document.createTextNode(citylist[2][top]);
				document.getElementById('location').defaultValue = citylist[2][top];
		item.appendChild(text);
				postHotel(top);
		//searchAirbnb(citylist[0][top]);
		}else{
			var hotelInfo = document.getElementById('hotelContent');
			while (hotelInfo.firstChild){
				hotelInfo.removeChild(hotelInfo.firstChild);
			}
			var text = document.createTextNode("Not Enough Information");
		item.appendChild(text);
		}
	}
	
}
}

function postHotel(index){
	//console.log("Finding Hotel");
	var container = document.getElementById('hotelContent');
	while (container.firstChild){
		container.removeChild(container.firstChild);
	}
	var box = document.createElement("DIV");
	box.className+="col-xs-6";
	var image = document.createElement("IMG");
	image.style.width = "100%";
	image.src = hotels[index][1];
	box.appendChild(image);
	container.appendChild(box);
	var item = document.createElement("DIV");
	item.className+="col-xs-6";
	var title = document.createElement("H3");
	var titleText = document.createTextNode(hotels[index][0]);
	title.appendChild(titleText);
	item.appendChild(title);
	
	var price = document.createElement("H4");
	var priceText = document.createTextNode(hotels[index][2]);
	document.getElementById('amount').defaultValue = hotels[index][2];
	price.appendChild(priceText);
	item.appendChild(price);
	var referral = document.createElement("A");
	var textBox = document.createElement("H4");
	referral.href = hotels[index][3];
	var referralText = document.createTextNode("See Listing on Airbnb");
	textBox.appendChild(referralText);
	referral.appendChild(textBox);
	item.appendChild(referral);
	container.appendChild(item);
}


function removeDestination(tags){
	if (localStorage.getItem('destination') === null){
		var destination = [0,0,0,0,0];
	}else{
		var destination = JSON.parse(localStorage.getItem('destination'));
	}
	for (var i = 0; i< citylist[0].length; i++){
		for(var j = 0; j < citylist[1][i].length; j++){
			for (var k = 0; k < tags.length; k++){
				if ((tags[k]).toLowerCase() === (citylist[1][i][j]).toLowerCase()){
					destination[i]--;
				}
			}
		}
	}
	localStorage.setItem('destination',JSON.stringify(destination));
	postTopDestination();
	
}
	
	

function searchAirbnb(destination){

	
	var data = {
    'client_id': '3092nxybyb0otqw18e8nh5nty',
    'locale':	'en-US',
		'currency':	'USD',
		'location': destination
  };
  var url='https://api.airbnb.com/v2/search_results';

  return axios.get(url, data, {
    'transformRequest': [
      function() {
        return transformDataToParams(data);
      }
    ]
  }).then(function(r) {
   //Write Function that can do something with results
    callbackFunction();
  }, function(err) {
    console.log(err);
  });
}

function run(imgurl) {
	
	/*if (localStorage.getItem('data') === null){
		var pins = [];
		pins[0] = [];
		pins[0][0] = imgurl;
		pins[1] = [];
	}else{
		
		var pins = JSON.parse(localStorage.getItem('pins'));
		pins[0][pins.length] = imgurl;
	}*/
	
  /*if (Math.floor(Date.now() / 1000) - localStorage.getItem('tokenTimeStamp') > 86400 || localStorage.getItem('accessToken') === null) {
    getCredentials(function() {
  	postImage(imgurl);
});
  } else {*/
	//remove();
	//updateFields();
	//localStorage.setItem('imgurl',imgurl);
	updateLogo(imgurl);
    postImage(imgurl);
	//remove(imgurl);
	
 // }
	
	
	//localStorage.setItem('pins',JSON.stringify(pins));
	//addNode(imgurl)
}

var myform = document.getElementById('myform');
//myform.submit(function(event){
//	event.preventDefault();
function submitForm(){
	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";

  var template_id = "wishbnb";
  myform.find("button").text("Sending...");
  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       alert("Sent!");
       myform.find("button").text("Send");
     }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
}

function collectPins(){
	var p = document.getElementById('pinboard');
	var d = [];
	var children = p.children;
	for (var i = 0; i < children.length; i++) {
		d.push(children[i].id);
	}
	return d;
}

function collectNutrition(pins) {
	var output = [];
	for (var i=0; i < pins.length; i++){
		if(pins[i] in food){
		output.push(food[pins[i]]);
		}else{
			remove(pins[i]);
			pins.splice(i,1);
		}
	}
	return output;
}

function clearTwo(){
	var node = document.getElementById('secondary');
	while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
}
}

function clearThree(){
	var node = document.getElementById('third');
	while (node.hasChildNodes()) {
    node.removeChild(node.lastChild);
}
}

function dairyPins(pins){
	var output = pins;
	var containsDairy = false;
	for(var i = 0; i < output.length; i++){
		if(food[output[i]][3] == 'dairy'){
			containsDairy = true;
		}
		if(food[output[i]][3] == 'sour' || food[output[i]][3] == 'vegetable' || food[output[i]][3] == 'condiment'){
			output.splice(i,1);
		}
	}
	if (containsDairy){
		return output;
	}else{
		return false;
	}
}

function calculate(){
	clearTwo();
	clearThree();
	console.log("starting calculation");
	var pins = collectPins();
	var facts = collectNutrition(pins);
	var meals = [];
	var targetCalories = document.getElementById('dailyCalories').value;
	var targetProteint = document.getElementById('dailyProtein').value;
	var targetFat = document.getElementById('dailyFat').value;
	var temp = [];
	var calorieTotal = 0;
	var fatTotal = 0;
	var proteinTotal = 0;
	var accuracy = 0.65;
	var backupPins = pins;
	//pins = dairyPins(pins);
	//if (pins != false){
	var letLen = Math.pow(2, pins.length);
	for (var i = 0; i < letLen ; i++){
    temp= [];
	calorieTotal = 0;
	proteinTotal = 0;
		fatTotal = 0;
	var has = [];
		has['dairy'] = false;
		has['sweet'] = false;
		has['sour'] = false;
		has['condiment'] = false;
		has['vegetable'] = false;
		has['savory'] = false;
		has['everything'] = false;
	var notGross = true;
    for (var j=0;j<pins.length;j++) {
        if ((i & Math.pow(2,j))){ 
			calorieTotal+=facts[j][0];
			fatTotal+=facts[j][1];
			proteinTotal+=facts[j][1];
            temp.push(pins[j]);
			if (calorieTotal > targetCalories || fatTotal > targetFat || targetProteint > proteinTotal){
				break;
			}
			has[food[pins[j]][3]] = true;
			if ((has['dairy'] && (has['sour'] || has['condiment'] || has['vegetable']))||(has['sweet'] && (has['condiment'] || has['savory']))){
				notGross = false;
				break;
			}
        }
    }
		console.log(temp);
	if (notGross){
    if (calorieTotal >= targetCalories*accuracy && calorieTotal <= targetCalories && fatTotal >= targetFat*accuracy && fatTotal <= targetFat && targetProteint >= proteinTotal*accuracy && targetProteint <= proteinTotal) {
        meals.push(temp);
    }
	}
}
//	}
	
	var excess = [];
	for(var l = 0; l < pins.length; l++){
		excess[l] = true;
	}
	var mealTitle = document.createElement("H3");
	var mealTitleText = document.createTextNode("Here is a list of your potential meals");
	var excessTitle = document.createElement("H3");
	var excessTitleText = document.createTextNode("Here is a list of excess items purchased you can donate")
	excessTitle.appendChild(excessTitleText);
	document.getElementById('third').appendChild(excessTitle);
	mealTitle.appendChild(mealTitleText);
	document.getElementById('secondary').appendChild(mealTitle);
	for(var u=0; u < meals.length; u++){
		var mealString = (u+1)+". ";
		mealString+=meals[u][0];
		for (var c =1; c< meals[u].length; c++){
			mealString+=", " + meals[u][c];
		}
		var mealItem = document.createElement("H4");
		var mealItemText = document.createTextNode(mealString);
		mealItem.appendChild(mealItemText);
		document.getElementById('secondary').appendChild(mealItem);
		for (var g = 0; g < pins.length; g++){
				if (meals[u].includes(pins[g])){
					console.log(pins[g]);
					excess[g] = false;
				}
			}
	}
	
	for(var r = 0; r< excess.length; r++){
		if (excess[r]){
			var excessItem = document.createElement("DIV");
			excessItem.className+="col-xs-12 col-sm-4 animated fadeIn tagItem text-center";
			var excessItemText = document.createTextNode(pins[r]);
			excessItem.appendChild(excessItemText);
			document.getElementById('third').appendChild(excessItem);
			
		}
	}
	
	document.getElementById('shelters').style.visibility="visible";
	
	
}