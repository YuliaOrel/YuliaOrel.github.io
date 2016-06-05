"use strict";
//data23
$(function() {
const questions=[
	{
		question_text: 'Какого цвета солнце?',
		ansvers: ['голубое', 'желтое', 'зеленое'],
		true_ansver: [false, true, false],
		number:0
	},
	{
		question_text: 'Сколько лап у кошки?',
		ansvers: ['4', '3', '5'],
		true_ansver: [true, false, false],
		number:1
	},
	{
		question_text: 'Как зовут кота Олега?',
		ansvers: ['Васька', 'Жорик', 'Мурзик'],
		true_ansver: [false, true, false],
		number:2
	},
	{
		question_text: 'Сколько лепестков у счастливого клевера?',
		ansvers: ['4', '3', 'Я такого не видел', 'Такого не бывает.'],
		true_ansver: [true, true, true, false],
		number:3
	},
	{
		question_text: 'Сколько горбов у верблюда?',
		ansvers: ['3', '4', '2', ' 1'],
		true_ansver: [false, false, true, true],
		number:4
	}
];


let json_questions=JSON.stringify(questions);             
localStorage.setItem('local_storage_questions',json_questions);
let store_questions=localStorage.getItem('local_storage_questions');
store_questions=JSON.parse(store_questions);//+ object
let page_template=$('#0').html();//+ template
let tmpl = _.template(page_template);
let result = tmpl({list:store_questions});
 $('body').append(result);


function show_answer(test_result=[false]){
	let you_res=0;
	for(let  i of test_result){
    	if(i)++you_res;
	}

  
    let modal_window_template=$("#modal_window").html();//template
     modal_window_template = _.template(modal_window_template);
     let new_modal=modal_window_template({test_result:test_result,you_res:you_res});
     $('body').append(new_modal);
     $(".overlay").css({"visibility":"visible"});
	 $("#closeModal").on("click",function(){
     $(".overlay").detach();

	});
	 
}
	


function check(e){
	 e.preventDefault();
	 let test_result=[];

	for(let i of questions){
		let is_correct=false;
		let correct_counter=0;
	    let jnumber=0;
		for(let j of i.true_ansver){
            if (j===document.getElementsByName(i.number+'name')[jnumber].checked) {
         
         	correct_counter++;
            }  
           document.getElementsByName(i.number+'name')[jnumber].checked = false;
            jnumber++;
        }
        if(correct_counter===i.true_ansver.length)is_correct=true;

        test_result.push(is_correct);
	}
	show_answer(test_result);
	 
	}

	let Button=document.getElementsByClassName("Button");
	Button[0].addEventListener("click",check);

 });