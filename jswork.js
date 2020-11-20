//HW -leson7
//
//1
//
// let first = document.getElementById('text');
// filet firstButton = document.createElement('button');
// firstButton.innerText = 'REMUVE'
// rst.style.backgroundColor= 'aqua';
//
//Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// firstButton.onclick =(ev)=>{
//     ev.target.parentElement.style.display='none';   
// }
//
//- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// firstButton.onclick =(ev)=>{
//     ev.target.style.display='none';   
// }
//
//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// click.onclick = ()=>{
//     if(vik.value <18){
//         alert('Ty maliy');
//     }else{
//         document.write('Wellcome!!!');
//     }
// }
// first.appendChild(firstButton);
//
//- Создайте меню, которое раскрывается/сворачивается при клике
//
// let menyu = document.getElementById('Menu');
// Menu.style.backgroundColor='red';
// pomenu = document.getElementById('poMenu');
// pomenu.style.backgroundColor='yellow';
//     Menu.onclick =()=>{
//         if (poMenu.style.display !=='none'){
//         poMenu.style.display ='none';
//         return;
//         }
//         poMenu.style.display ='block';
//     }
//
//  - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//Вывести список комментариев в документ, каждый в своем блоке.
//Добавьте каждому комментарию по кнопке для сворачивания его body.
//
// let bodyCom = document.getElementById('allcomment');
// let myButton = document.createElement('button');
// commbutton.onclick =()=>{
//     if(allcomment.style.display !=='none'){
//     allcomment.style.display ='none';
//     return;
// }
// allcomment.style.display ='block';
// }
//
//- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
//Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let clicker = document.getElementById('click1');
// click1.onclick =()=>{
//    console.log(document.forms.myForm1.someText1.value+document.forms.myForm1.someText2.value+document.forms.myForm2.someText3.value+document.forms.myForm2.someText4.value);
// }
//
//- Створити функцію, яка генерує таблицю.
//Перший аргумент визначає кількість строк.
//Другий параметр визначає кліькіть ячеєк в кожній строці.
//Третій параметр визначає елемент в який потрібно таблицю додати.
//-------------------------|+|-----------------------------
//- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)
//
// let elem = document.getElementById('elem');
// function createTabel(rows,colons,text,parent){
// let tabel= document.createElement('tabel');
//  for (let i=0;i<rows;i++){
//      let tr = document.createElement('tr');
//      for(let j=0;j<colons;j++){
//         let td = document.createElement('td');
//         td.style.padding='50px';
//         td.style.border = '1px solid black';
//         td.innerHTML=text;
//         td.onclick=()=>{
//             console.log(`Ryad- ${[i+1]} stovpchyk- ${[j+1]} text: ${text} `);
//         }
//         tr.appendChild(td); 
//     }
//      tabel.appendChild(tr);
//  }
//  parent.appendChild(tabel);
// }
// click2.onclick =(kn1)=>{
// kn2=document.forms.myForm5.KilkYach.value;
// kn1=document.forms.myForm5.Ryady.value;
// kn3=document.forms.myForm5.Textic.value;
// createTabel(kn1,kn2,kn3,elem);
// }

let div1=  document.getElementById('hwid1');
div1.style.backgroundColor = 'black';
div1.style.width= '700px';
div1.style.height = '300px';
div1.style.paddingTop ='50px'
div1.style.paddingLeft= '20px';
div1.style.paddingRight ='20px';

let ulka = document.getElementById('hwid11');
ulka.style.backgroundColor= 'grey';
ulka.style.margin ='20px';
let imeges = ['https://www.shareicon.net/data/2015/09/25/107067_development_512x512.png','https://www.tiriniti.com/wp-content/uploads/2017/05/STEAM-1.jpg','http://cdn.onlinewebfonts.com/svg/img_104791.png','https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.png','https://i.artfile.ru/3600x2400_911576_[www.ArtFile.ru].jpg','https://www.shareicon.net/data/2015/09/25/107067_development_512x512.png','http://geek-nose.com/wp-content/uploads/2016/07/697152fa6efe0191a2885079ff35244f.jpg'];



let knpBack= document.getElementById('knpBack');
let knpNext = document.getElementById('knpNext');
knpBack.style.display ='inline';
knpBack.style.borderRadius ='50%'
knpBack.style.listStyle ='none';
knpBack.style.height='30px';
knpBack.style.width='30px';
knpBack.style.backgroundColor='white';
knpBack.style.position ='absolute';
knpBack.style.marginTop='90px';
knpBack.style.marginLeft= '-50px';

knpNext.style.display ='inline';
knpNext.style.borderRadius ='50%'
knpNext.style.listStyle ='none';
knpNext.style.height='30px';
knpNext.style.width='30px';
knpNext.style.backgroundColor='white';
knpNext.style.position ='absolute';
knpNext.style.marginTop='90px';
knpNext.style.marginLeft= '10px';


for ( i=0; i < 3; i++) {
    let test = document.getElementById('imegeses');
    test.style.display = 'inline';
    test.style.borderRadius = '5%';
    test.style.width = '200px';
    test.style.height = '200px';
    test.style.listStyle = 'none';
    test.style.marginLeft = '-20px';

    
    let img = document.createElement('img');
    img.style.backgroundColor = 'white';
    img.setAttribute('src', imeges[i]);
    img.width = 200;
    img.height = 200;
    img.style.borderRadius = '5%';
    img.style.margin = '3px';
    test.appendChild(img);
  
}

function funk(i, r) {

    for ( i; i < r; i++) {
        let test = document.getElementById('imegeses');
        test.style.display = 'inline';
        test.style.borderRadius = '5%';
        test.style.width = '200px';
        test.style.height = '200px';
        test.style.listStyle = 'none';
        test.style.marginLeft = '-20px';

        
        let img = document.createElement('img');
        img.style.backgroundColor = 'white';
        img.setAttribute('src', imeges[i]);
        img.width = 200;
        img.height = 200;
        img.style.borderRadius = '5%';
        img.style.margin = '3px';
        test.appendChild(img);
      
    }
   
   } 
   let n =0;
knpBack.onclick=()=>{
    n++;
    console.log(n);
          if (n==1){
            imegeses.style.display ='none';
              funk(3,6);
          }
        
}


    





    

