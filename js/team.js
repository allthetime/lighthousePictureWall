"use strict";

var biography_div = document.querySelector('#biography');
var members = document.querySelectorAll('.member');
var team = document.querySelector('#team-members');

document.addEventListener('click',function(e){
  if (e.target.className == "member" || e.target.className ==  "name") {
    team.classList.add('covered');
    if(e.target.parentNode.className == "member") {
      var target = e.target.parentNode
    } else {
      var target = e.target
    }
    var file = window.getComputedStyle(target).getPropertyValue('background-image');
    console.log(get_name(file));
    biography_div.innerHTML = 

      "<img src='"+file.slice(4,-1)+"''></img><br>" + 
      "<h2>" + get_name(file) + "</h2>" +
      bios[get_name(file)];

    biography_div.classList.add('on');
  } else {
    biography_div.classList.remove('on');
    team.classList.remove('covered');
  }  
},false);

function get_name(str){
  var reg = new RegExp(/^url\(.+\/(\w+)\_(\w+).jpg\)/);
  var name = str.replace(reg, "$1 $2");
  return name;
};

var names = [];
names.forEach.call(members,function (member,index){
  var file = window.getComputedStyle(member).getPropertyValue('background-image');
  member.querySelector('.name').innerText = get_name(file)
});

var bios = {
  "Andrew Wheeler": "This is the biographyThis is the biographyThis is the biographyThis is the biographyThis is the biographyThis is the biographyThis is the biographyThis is the biographyThis is the biographyThis is the biography",
  "Benjamin Visser": "This is the biography",
  "Brandon Lee": "This is the biography",
  "Brendan Deere": "This is the biography",
  "Christopher Chan": "This is the biography",
  "Daniel Harris": "This is the biography",
  "Derek Hendricks": "This is the biography",
  "Eric Leong": "This is the biography",
  "Eric Yee": "This is the biography",
  "Kieran Cormack": "This is the biography",
  "Kinnan Kwok": "This is the biography",
  "Kristine Chalk": "This is the biography",
  "Lucy Ly": "This is the biography",
  "Marlon Kenny": "This is the biography",
  "Marly Guha": "This is the biography",
  "Melody Ma": "This is the biography",
  "Mike Kakebeeke": "This is the biography",
  "Mike Legrice": "This is the biography",
  "Shannon McDonald": "This is the biography",
  "Thiago Noguerra": "This is the biography",
  "Tom McGuirk": "This is the biography",
  "Veronika Bitkina": "This is the biography",
  "Zach Hill": "This is the biography",
};



