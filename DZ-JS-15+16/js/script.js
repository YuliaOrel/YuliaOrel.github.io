'use strict';



function Human(name,age,gender,height,weight){
	this._name=name;
 	this._age=age;
 	this._gender=gender;
 	this._height=height;
 	this._weight=weight;
}
function Worker(job,salary,humanPropertyes){
	Human.apply(this, humanPropertyes);
	this._job=job;
	this._salary=salary;
}

function Student(educationPlace,scholarship,humanPropertyes){
	Human.apply(this, humanPropertyes);
	this._educationPlace=educationPlace;
	this._scholarship=scholarship;
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;
 
Worker.prototype.work=function(){
	console.log(this._name+' working now!')
}
Student.prototype.watchSerial=function(){
	console.log(this._name+' watch serial now!')
}

$(function(){

var newWorker= new Worker('Mom',50000,['Mary ',25,'female','160','50']);
var newStudent = new Student('Donetsk National Technical University', 2100,['Yulia',37,'female',175,65]);

console.log('newWorker._name=',newWorker._name);
console.log('newWorker._age=',newWorker._age);
console.log('newWorker._gender=',newWorker._gender);
console.log('newWorker._height=',newWorker._height);
console.log('newWorker._weight=',newWorker._weight);
console.log('newWorker._job=',newWorker._job);
console.log('newWorker._salary=',newWorker._salary);


console.log('newStudent._name=',newStudent._name);
console.log('newStudent._age=',newStudent._age);
console.log('newStudent._gender=',newStudent._gender);
console.log('newStudent._height=',newStudent._height);
console.log('newStudent._weight=',newStudent._weight);
console.log('newStudent._educationPlace=',newStudent._educationPlace);
console.log('newStudent._scholarship=',newStudent._scholarship);
});





//$(function(){
//	
//
//var API_KEY = '2612184-7d3c53808f49251d4c3b415f2';
//
//$('#submit').click(function(e)
//{
//	e.preventDefault();
//	var search_query=$('#search_query').val();
//	var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(search_query);
//
//	$.getJSON(URL, function(data)
//	{
//	    if (parseInt(data.totalHits) > 0)
//	    {
//		      //data.hits[0].pageURL
//		      console.log(data);
//		    var template=$('#results').html();
//			template=_.template(template);
//			template=template({data:data});
//			$('.search_result').detach();
//			$('body').append(template);
//	    }
//	    else
//	        console.log('No hits');
//	});
//}); 