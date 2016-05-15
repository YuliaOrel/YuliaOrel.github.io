$ (function (){
	
var html=$('#0').html();
   var profile0=[
     {
      id:'0',
      name:'Орёл Юлия Васильевна',
      rank: 'Специалист по управлению качеством',
      reasons:['Хочу','Могу','Сделаю'],
      phone:'+38095461235',
      profile:['www.linkedin.com','https://www.linkedin.com/profile/preview?locale=ru_RU&trk=prof-0-sb-preview-primary-button'],
      feedback:'Могу копать, могу не копать, могу заставить кого-то копать'
     },
    {
      id:'1',
      name:'Орёл Юленька',
      rank: 'мама двоих детей',
      reasons:['сама себе начальник'],
      phone:'+3069761358',
      profile:['vk.com','http://vk.com/orelyulia'],
      feedback:'Могу связать свитер'
     },
     {
      id:'2',
      name:'Воронова (Орёл) Юлия',
      rank: 'переселенец',
      reasons:['хочу домой'],
      phone:'+3066487512',
      profile:['ok.ru','http://ok.ru/yuliya.vasilyevna3'],
      feedback:'Вкусно готовлю'
     }
   ];
   var content=tmpl(html,{data:profile0});
   $('body').append(content);

});