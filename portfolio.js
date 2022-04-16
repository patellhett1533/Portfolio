let PROFILE = document.getElementById('PROFILE');
let EDUCATION = document.getElementById('EDUCATION');
let PROJECT = document.getElementById('PROJECT');
let SKILL = document.getElementById('SKILL');
let OTHER = document.getElementById('OTHER');

let profile = document.getElementById('profile');
let education = document.getElementById('education');
let project = document.getElementById('project');
let skill = document.getElementById('skill');
let other = document.getElementById('other');

let dark = document.getElementById('dark');
let main = document.getElementById('main');
let myImg = document.getElementById('myImg');
let menu = document.getElementById('menu');
let left = document.getElementById('left');

let web = document.getElementById('web');
let pps = document.getElementById('pps');
let gd  = document.getElementById('gd');
let webDis = document.getElementById('web-dis');
let ppsDis = document.getElementById('pps-dis');
let gdDis = document.getElementById('gd-dis');
let webScroll = document.getElementById('web-scroll');
let ppsScroll = document.getElementById('pps-scroll');
let gdScroll = document.getElementById('gd-scroll');
let webUp = document.getElementById('web-up');
let ppsUp = document.getElementById('pps-up');
let gdUp = document.getElementById('gd-up');
let element1 = document.getElementById('e1');
let element2 = document.getElementById('e2');
let element3 = document.getElementById('e3');

PROFILE.addEventListener('click',()=>{
    profile.style.display = 'block';
    education.style.display = 'none';
    project.style.display = 'none';
    skill.style.display = 'none';
    other.style.display = 'none';
})
EDUCATION.addEventListener('click',()=>{
    profile.style.display = 'none';
    education.style.display = 'block';
    project.style.display = 'none';
    skill.style.display = 'none';
    other.style.display = 'none';
})
PROJECT.addEventListener('click',()=>{
    profile.style.display = 'none';
    education.style.display = 'none';
    project.style.display = 'block';
    skill.style.display = 'none';
    other.style.display = 'none';
})
SKILL.addEventListener('click',()=>{
    profile.style.display = 'none';
    education.style.display = 'none';
    project.style.display = 'none';
    skill.style.display = 'block';
    other.style.display = 'none';
})
OTHER.addEventListener('click',()=>{
    profile.style.display = 'none';
    education.style.display = 'none';
    project.style.display = 'none';
    skill.style.display = 'none';
    other.style.display = 'block';
})

dark.addEventListener('click',()=>{
   if(main.style.filter != 'invert(100%)'){
    main.style.filter = 'invert(100%)';
    myImg.classList.add('edit');
   }
   else{
       main.style.filter = 'invert(0%)';
       myImg.classList.remove('edit');
   }
})

webScroll.addEventListener('click',()=>{
    pps.style.display = 'none';
    gd.style.display = 'none';
    webDis.style.display = 'none';
    element1.style.display = 'block'
    webScroll.style.display = 'none';
    webUp.style.display = 'block';
})
webUp.addEventListener('click',()=>{
    pps.style.display = 'block';
    gd.style.display = 'block';
    webDis.style.display = 'block';
    element1.style.display = 'none';
    webScroll.style.display = 'block';
    webUp.style.display = 'none';
})

ppsScroll.addEventListener('click',()=>{
    web.style.display = 'none';
    gd.style.display = 'none';
    ppsDis.style.display = 'none';
    element2.style.display = 'block';
    ppsScroll.style.display = 'none';
    ppsUp.style.display = 'block';
})
ppsUp.addEventListener('click',()=>{
    web.style.display = 'block';
    gd.style.display = 'block';
    ppsDis.style.display = 'block';
    element2.style.display = 'none';
    ppsScroll.style.display = 'block';
    ppsUp.style.display = 'none';
})

gdScroll.addEventListener('click',()=>{
    web.style.display = 'none';
    pps.style.display = 'none';
    gdDis.style.display = 'none';
    element3.style.display = 'block';
    gdScroll.style.display = 'none';
    gdUp.style.display = 'block';
})
gdUp.addEventListener('click',()=>{
    web.style.display = 'block';
    pps.style.display = 'block';
    gdDis.style.display = 'block';
    element3.style.display = 'none';
    gdScroll.style.display = 'block';
    gdUp.style.display = 'none';
})