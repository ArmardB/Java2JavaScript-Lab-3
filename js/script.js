" use strict ";

var display = document.getElementById("display");
var directory = [];

class PhoneBook {
	constructor(){
		
	}
}


function Contact(name, number){
	this.name = name;
	this.number = number;
}

function listAllNames() {
  // code to list all names
  var str = "";
  for (var i = 0; i < getDirectorySize(); i++){
  	str += directory[i].name + "<br>";
  }

  display.innerHTML = str;
};

function listAllNumbers() {
  // code to list all numbers
  	var str = "";
  for (var i = 0; i < getDirectorySize(); i++){
  	str += directory[i].number + "<br>";
  }
  
  display.innerHTML = str;
  	
};

function showAdd() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");

  
  directory.push(new Contact(name, number));

};

function showRemove() {
  var remove = prompt("Enter name to remove");

  deleteContact(remove);
};

function showLookup() {
  var lookup = prompt("Enter number to lookup");
  reverseLookUp(lookup);
};

function getDirectorySize(){
	return directory.length;
};

function deleteContact(name){
	var pos = directory.indexOf(name);
	directory.splice(pos);
};

function reverseLookUp(number){
	var pos = directory.indexOf(number);
	var str = "";

	str += directory[pos].name + ": " + directory[pos].number;
	display.innerHTML = str; 
};



