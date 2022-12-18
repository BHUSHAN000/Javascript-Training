// getElementById  returns single element
// getElementsByClassName returns multiple elements so it returns array of targeted elements
// getElementsByTagName returns multiple elements so it returns array of targeted elements


// const h1element = document.getElementById('h1TagID');
// console.log(h1element)
// console.log(h1element.innerText);
// // console.log(h1element.innerHTML);

// const h1element2 = document.getElementsByClassName('h1TagClass');
// console.log(h1element2)
// console.log(h1element2[0].innerText);
// // console.log(h1element2[0].innerHTML);

// const h1element3 = document.getElementsByTagName('h1');
// console.log(h1element3)
// console.log(h1element3[0].innerText);
// // console.log(h1element3[0].innerHTML);

//==================================================


// const element = document.getElementById('div');
// console.log(element);

// const innerH1Tag= element.getElementsByTagName('h1');
// console.log(innerH1Tag);
// const innerH1Tag2= element.getElementsByTagName('h1');
// console.log(innerH1Tag2.length);

// const ele = document.getElementById('div').getElementsByTagName('h1');
// console.log(ele);

//=================================================

// const element = document.getElementsByClassName('div');
// console.log(element)
// const ele = element[1].getElementsByTagName('h1');
// console.log(ele[0].innerText);
// console.log(ele[1].innerText);

//=======================================================

// const element = document.getElementsByTagName('div');
// const ele = element[1].getElementsByTagName('h1');
// console.log(ele[0].innerText)
// console.log(ele[1].innerText)

//========================================================

//Event Listner 

// console.log(document.getElementsByClassName('abc'));

// const btn = document.getElementsByTagName('button');
// // console.log(btn)
// btn[0].addEventListener('click', () => {
//     console.log('button click')
// })

//==================================================================
// const btn2 = document.getElementById('buttonID');
// btn2.addEventListener('dblclick', function() {
//     const inputField = document.getElementsByTagName('input');
//     console.log(inputField[0].value);
    
// })
// const btn3 = document.getElementById('buttonID');
// btn3.addEventListener('click', function() {
//     const inputField = document.getElementsByClassName('abc');
//     console.log(inputField[0].value);
    
// })
// const btn4 = document.getElementById('buttonID');
// btn4.addEventListener('click', function() {
//     const inputField = document.getElementById('inputID');
//     console.log(inputField.value);
    
// })

//===========================================================

// Event Listener using element's event controll

// function buttonEventHandler() {
//     const btn4 = document.getElementById('buttonID');
//     btn4.addEventListener('click', function() {
//         const inputField = document.getElementById('inputID');
//         console.log(inputField.value);
        
//     });
// }

//===========================================================

//Event Propagation : It having two types
// 1) Bubble Event Propogation => 3rd parameter always needed false
// 2) Capture Event Propogation => 3rd parameter always needed true

//=======================================================================
// 1) Bubble Event Propogation => 3rd parameter always needed false

// const parent = document.getElementsByClassName('parent');
// parent[0].addEventListener('click',() => {
//     console.log('Parent clicked')
// },false)
// const child = document.getElementsByClassName('child');
// child[0].addEventListener('click',() => {
//     console.log('Child clicked')
// },false)
// const gc = document.getElementsByClassName('grandChild');
// gc[0].addEventListener('click',() => {
//     console.log('Grand Child clicked')
// },false)

//=======================================================================
// 2) Capture Event Propogation => 3rd parameter always needed true
// const parent = document.getElementsByClassName('parent');
// parent[0].addEventListener('click',() => {
//     console.log('Parent clicked')
// },true)
// const child = document.getElementsByClassName('child');
// child[0].addEventListener('click',() => {
//     console.log('Child clicked')
// },true)
// const gc = document.getElementsByClassName('grandChild');
// gc[0].addEventListener('click',() => {
//     console.log('Grand Child clicked')
// },true)
//=======================================================================


// function btnHandler() {
//     const h1tag = document.getElementById('h1TagID');
//     h1tag.innerHTML = '<h1>Hello from Rutul</h1>'
// }

// function btnHandler() {
//     const h1tag = document.getElementById('h1TagID');
//     h1tag.innerHTML = `<span><b>${h1tag.innerText}</b><span>`

// }

//=========================================================================


// window.onload= () => {
//     document.getElementById('test1').focus();
// }

// const btn = document.getElementById('submitID');
// btn.addEventListener('',() => {
//     document.getElementById('test2').focus();
//     document.getElementById('test1').blur();
// });

//=========================================================================

// const test =  document.getElementById('test1');
// test.addEventListener('input', () => {
//     console.log(test.value);
// })
// const h1id2 = document.getElementById('h1id');
// h1id2.addEventListener('select',() => {
//     console.log(h1id2.innerText)
//     h1id2.style.fontSize= '60px';
// })


//==========================================================

//radiobutton handling
// function display() {
//     const rd1 = document.getElementById('test1');
//     const rd2 = document.getElementById('test2');
//     const rd3 = document.getElementById('test3');
    
//     if(rd1.checked === true) {
//         console.log('male selected');
//         document.getElementById('selected').innerText = rd1.value;
//     } else if (rd2.checked === true) {
//         console.log('female selected');
//         document.getElementById('selected').innerText = rd2.value;
//     } else if (rd3.checked === true) {
//         console.log('Other');
//         document.getElementById('selected').innerText = rd3.value;
//     }
// }

// //==========================================================
//dropdown handling
// function dropdownHandler() {
    // console.log('dropdownHandler')
//     const dropdown = document.getElementById('dropdownId');
//     console.log(dropdown.options[dropdown.selectedIndex].value);
// }
//==========================================================


// const parentDiv = document.getElementsByClassName('parent');
// parentDiv[0].addEventListener('mouseover', () => {
//     console.log('hover');
//     parentDiv[0].style.backgroundColor = 'pink';
// })
// const parentDiv = document.getElementsByClassName('parent');

// function colorchanger() {
//     console.log('hover');
//     parentDiv[0].style.backgroundColor = 'pink';
// }
// function colorchanger2() {
//     console.log('hover');
//     parentDiv[0].style.backgroundColor = 'red';
// }

// function selectHandler() {
//     console.log(document.getElementById('inputID').value);
// }

//===================================================================

// RE = Regular expression


// 1. Match method => if found => it always returns value of array
// if not found => returns null
// if g flag isnot present then it returns first occurance of result
// if g flat present then it returns all results

// let str = "We will, we will rock you"; 
// const res = str.match(/we/ig) || [];
// console.log( res );
// if(!res.length) {
//     console.log(" Not found")
// }

//====================================================================
// 2. replace method => if found => it always replace the distination string
// if not found => no replacement
// if g flag isnot present then it replace first occurance of result
// if g flat present then it replace all occurances

// let str = "We will, we will rock you"; 
// const res = str.replace(/wee/ig,'I');
// console.log(res);


// matching self replacement 
// let str = "We will rock you"; 
// const res = str.replace(/we/ig,"$& and JavaScript");
// console.log(res);

// matching previous part  replacement
// let str = "Hi We will rock you"; 
// const res = str.replace(/we/ig,"$` and JavaScript");
// console.log(res);


// mactching after part replacement
// let str = "Hi We will rock you"; 
// const res = str.replace(/we/ig,"$' and JavaScript");
// console.log(res);

//====================================================================

//3. test method => returns true if found otherwise returns false

// let str = "Hi We will rock you"; 
// const reg = /we/g;

// console.log(reg.test(str));


//=================================================================

// Character occurance

// let str = "(+91)-7887-40-8887";
// let regexp = /\d/;
// console.log( str.match(regexp).join("") ); 


// let str = "(+91)-7887-40-8887";
// let regexp = /\d/g;
// console.log( str.match(regexp).join("") ); 


// console.log( "I love HTML5!".match(/\s\w\w\w\w\d/) );

// let str = "(+91)-7887-40-8887";
// let regexp = /-\d\d\d\d/g;
// console.log( str.match(regexp)); 


// let str = "+7(903)-123-45-67";
// alert( str.match(/\D/g));


// let str = "bhushan pawar hi";
// console.log( str.match(/\S/g) );
// console.log( str.match(/\W/g) );

//=================================================================

// const aaa = `bhushan pawar`;
// console.log(aaa.match(/./g));

// let goodInput = "12:34"; 
// let badInput = "12:345"; 
// let regexp = /^\d\d:\d\d$/; 
// console.log( regexp.test(goodInput) ); // true 
// console.log( regexp.test(badInput) );


// let str = `1st place: Winnie 
// 2nd place: Piglet 
// 3rd place: Eeyore`; 
// console.log(str.match(/^\d\w\w/gm) );

// let str = `Winnie: 1 
//  Piglet: 2 
//   Eeyore: 3`; 
//   console.log( str.match(/\d\s$/gm) );


//   let str = `Winnie: 1
//    Piglet: 2
//     Eeyore: 3`; 
//     console.log( str.match(/\d\n/g) );

// console.log( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/ig) );


// /^abc/      == start with abc
// [^abc]      == do not include  with a/b/c


// /\d{10}/

// console.log( "I'm 123234 12345 9876543 years old".match(/\d{3,5}/g) );

// console.log('7123456789'.match(/^[7-9]\d{9}$/ig));

// aa...d@gmail1212.com
// adada@gmail134234.co.edu

// console.log('bhus----han....pcst@gmail123.com'.match(/^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,})(.[a-z]{2,})?$/));


//=================================================================


// const iddd = setTimeout(() => {
//     console.log(new Date())
// },1000);

// clearTimeout(iddd)


// setInterval and clearInterval

// const heading = document.getElementById('headingID');
// const button = document.getElementById('buttonId');
// let idd = setInterval(() => {
//     heading.innerText = new Date().toLocaleTimeString();
// },1000);

// button.addEventListener('click', (e) => {
//     clearInterval(idd);
// })

// setTimeout and clearTimeout

// const heading = document.getElementById('headingID');
// const button = document.getElementById('buttonId');
// let idd = setTimeout(() => {
//     heading.innerText = new Date().toLocaleTimeString();
// },10000);

// button.addEventListener('click', (e) => {
//     clearTimeout(idd);
// })

//=================================================================

// const Ptag = document.getElementById('paraId');

// console.log(Ptag.innerHTML);
// console.log(Ptag.innerText);
// console.log(Ptag.getAttribute('class'));
// console.log(Ptag.getAttributeNode('class'));
// console.log(Ptag.attributes);
// console.log(Ptag.attributes[0].value);
// console.log(Ptag.attributes[1].value);

// Ptag.setAttribute('class','aaaa');      // it overwrite new value on existing
// console.log(Ptag.getAttribute('class'));
// Ptag.removeAttribute('class');
// console.log(Ptag.getAttribute('class'));
//=================================================================

// querySelector() method is always used to target element instead of getElementById(), getElementsByClassName(), getElementsByTagName()methods
// it  always returns a first occurance of result
// it not found it always returns null

// const aa1 = document.querySelector('#paraId4');
// const aa2 = document.querySelector('.abc');
// const aa3 = document.querySelector('p');

// console.log(aa1,aa2,aa3);

// // querySelectorAll() method is always used to target element instead of getElementById(), getElementsByClassName(), getElementsByTagName()methods
// // it  always returns all matching occurances result in the form of array
// // it not found it always returns blank array

// const aa4 = document.querySelectorAll('#paraId4');
// const aa5 = document.querySelectorAll('.abc');
// const aa6 = document.querySelectorAll('p');

// console.log(aa4,aa5,aa6);

//=================================================================

// const headingTarget = document.querySelector('h1');
// function eventHandler() {
//     console.log('called1');
//     // headingTarget.removeEventListener('dblclick',eventHandler2)
// }
// function eventHandler2() {
//     console.log('called2');
// }
// headingTarget.addEventListener('click', eventHandler)

// headingTarget.addEventListener('dblclick',eventHandler2)

//=================================================================

//className= it always returns all the classes applied to that respective element which we are targeting

//classList = it returns all the classes applied to that respective element which we are targeting in the form of array

//add = it adds the new class to that respective element which we are targeting  => it won't overwrite the exiting values, it only appends the new class in exiting one
//remove = it removed the existing class from that respective element which we are targeting

// const aaa = document.querySelector('#paraId1');

// console.log(aaa.getAttribute('style'));
// // aaa.className ='pqr'
// // console.log(aaa.className);
// // console.log(aaa.classList);
// // console.log(aaa.classList]);

// aaa.classList.add('pqr');
// console.log(aaa.className);
// aaa.classList.remove('pqr');
// console.log(aaa.className);


//=================================================================

// const btn = document.querySelector('#buttonId');
// const heading = document.querySelector('#headingID');

// btn.addEventListener('click', () =>{
//     heading.classList.toggle('abc');
// })

//=================================================================

// const a = document.querySelectorAll('.abc');

// console.log(a[0].classList.item(0));
// console.log(a[0].classList.contains('abc'));
// console.log(a[0].classList.contains('abcd'));


//==========================================================


//parentElement = shows parent till html tag
//parentNode = shows parent till document tag as per DOM tree
//children = shows all children elements
//childNodes = show all children elements with text nodes
//firstElementChild = shows first occurance child
//lastElementChild = shows last occurance  child
// firstChild = returns any element or node which comes first i.e element, text node i.e enter or comment type of nodes
// lastChild = returns any element or node which comes last i.e element, text node i.e enter or comment type of nodes
//nextElementSibling = returns next element of target element
//previousElementSibling = returns previous element of target element
//nextSibling= returns any element or node which comes next to current targeted element i.e element, text node i.e enter or comment type of nodes
//previousSibling= returns any element or node which comes next to current targeted element i.e element, text node i.e enter or comment type of nodes

// const aa = document.querySelectorAll('.children');
// console.log(aa.parentElement)
// console.log(aa.parentNode) 

// console.log(aa.children[1].children[0].children[0].children);
// console.log(aa.childNodes);console.log(aa.childNodes);


// console.log(aa.firstElementChild);
// console.log(aa.lastElementChild);

// console.log(aa.firstChild)
// console.log(aa.lastChild)

// console.log(aa[1].nextElementSibling);
// console.log(aa[1].previousElementSibling);
// console.log(aa[1].nextSibling)
// console.log(aa[1].previousSibling)

//==========================================================

// const temp = document.createElement('p');
// console.log(temp);
// const temp2 = document.createElement('span');
// console.log(temp2);
// const temp3 = document.createTextNode('Bhushan');
// console.log(temp3);
// const temp4 = document.createComment('Bhushan');
// console.log(temp4);

// const aa =document.createElement('h1');
// const temp5 = document.createTextNode('Bhushan');
// aa.appendChild(temp5)
// console.log(aa);
// const temp6 = document.querySelector('#abc');
// temp6.appendChild(temp5)

// const temp6 = document.querySelector('#abc');
// console.log(temp6.childNodes[1])
// temp6.insertBefore(aa,temp6.childNodes[1])

// const bodyTag = document.querySelector('body');
// const temp7 = document.querySelector('#xxx');
// bodyTag.insertBefore(aa,bodyTag.childNodes[3])

// =====================================================

// insertAdjacentElement= it inserts element inside the targetted element with options
// 1) beforebegin
// 2) afterbegin
// 3) beforeend
// 4) afterend
// const temp1 = document.createElement('h2');
// const temp2 = document.createTextNode('Welcome');
// temp1.appendChild(temp2);

// const temp3 = document.querySelector('#parent');
// temp3.insertAdjacentElement('beforebegin',temp1);
// temp3.insertAdjacentElement('afterbegin',temp1);
// temp3.insertAdjacentElement('beforeend',temp1);
// temp3.insertAdjacentElement('afterend',temp1);

//=====================================================

// insertAdjacentHTML()=it inserts element inside the targetted element with options
// 1) beforebegin
// 2) afterbegin
// 3) beforeend
// 4) afterend

// const h1tag = "<h1>Hello</h1>"
// const temp3 = document.querySelector('#parent');
// temp3.insertAdjacentHTML('beforebegin',h1tag)

//=====================================================

// insertAdjacentText()=it inserts element inside the targetted element with options
// 1) beforebegin
// 2) afterbegin
// 3) beforeend
// 4) afterend

// const h1tag = "Hello"
// const temp3 = document.querySelector('#parent');
// temp3.insertAdjacentText('beforebegin',h1tag)

//=====================================================

//replaceChild = it replaces existing child with new node
// const newTag = document.createElement('p');
// const newText = document.createTextNode('Hello4');
// newTag.appendChild(newText);
// const temp3 = document.querySelector('#parent');
// console.log(temp3.childNodes[3])
// temp3.replaceChild(newTag,temp3.children[1])

// //removeChild = it removes existing child

// temp3.removeChild(temp3.children[1]);

//=====================================================

//contains= it checks whether the element is present or not? and returns the boolean value

// const divtag = document.querySelector('#parent')
// const ptag = document.querySelector('#abc1')

// console.log(divtag.contains(ptag))


//===========================================================

// const temp1 = document.querySelector('#abc1');
// console.log(temp1.hasAttribute('class'));

// const formTag = document.querySelector('form');
// console.log(formTag.hasChildNodes())


//==========================================================

// function focushandler() {
//     document.querySelector('#abc1').style.border='5px solid red';
// }
// function blurHandler() {
//     document.querySelector('#abc1').style.border='';
// }
// function focushandler2() {
//     document.querySelector('#abc2').style.border='5px solid red';
// }
// function blurHandler2() {
//     document.querySelector('#abc2').style.border='';
// }

// function changeHandler1() {
//     console.log(document.querySelector('#abc1').value.length)
// }
// function inputHandler() {
//     const val = document.querySelector('#abc2').value;
//     console.log(val.length)
// }

// function selectHandler() {
//     console.log(document.querySelector('#abc1').value)
// }

// /**
//  <form onsubmit="event.preventDefault(); submitHandler();">
//   <input type="text" id="abc1" class="" onchange="changeHandler1()" onselect="selectHandler()">
//   <input type="text" id="abc2" oninput="inputHandler()">
//   <p onselect="selectHandler()" id="abc3">Hello Guys</p>
  
//   <input type="submit" value="submit">
// </form>

//  */
// // function submitHandler() {
// //     console.log('submitted')
// // }

// // function invalidhandler() {
// //     console.log('Invalid handler called')
// // }


// // console.log(window.innerHeight);
// // console.log(window.innerWidth);
// // console.log(window.outerHeight);
// // console.log(window.outerWidth);
// // var a; 
// // document.querySelector('#buttonID').addEventListener('click', () => {
// //     a= window.open('https://www.google.com',"_blank");
// // })

// // document.querySelector('#buttonID2').addEventListener('click', () => {
// //     a.close();
// // })


// //==============================================================
// // URL = https://ebyggesaknor.dev.com/locator/DMS/AI/RegisterDocument?recno=200405
// // // hwo to get parameters from url
// // new URLSearchParams(window.location.search).get('recno');

// //================================================


// // function disp1() {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         console.log('Hello from disp4');
// //         resolve();
// //       },1000);
// //     });
// //   }
  
  
  
// //   disp1()
// //   .then((res) => {
// //     console.log(res);
// //   }).catch((error) => {
// //     console.log(error);
// //   }).finally( () => {
// //     console.log('Dialog should get close')
// //   })

// //================================================
  
// function disp() {
//   return new Promise((resolve, reject) => {
//     resolve('The promise has been resolved');
//   });
// }

// async function generateResult() {
//   try{
//     const aa  = await disp();
//     console.log(aa);
//   }catch(err) {
//     console.log(err);
//   } finally {
//     console.log('Hello')
//   }
// }
// generateResult()
  
  

// const handleChange = (e) => {
//   e.preventDefault();
//   setSearchInput(e.target.value);
// };

// if (searchInput.length > 0) {
//     countries.filter((country) => {
//     return country.name.match(searchInput);
// });
// }
// let a=10;

// export default a;
// export const b=20,c=30;


// export ways

//1) default export
//2) named export
function register() {
	return new Promise((res,rej) => {
  	rej('hello 1');
  })
}
function login(){
    return new Promise((res,rej) => {
        rej('hello 2');
    })
}
function logout(){
    return new Promise((res,rej) => {
        res('Hi3');
    })
}


console.log('Start');
let a;
async function disp() {
    try{
        a= await register();
        b= await login();
        c= await logout();
        console.log(a,b,c)
    }catch(e){
        console.log('error',e)
    }finally{
        console.log('In finally')
    }
}

await disp();


console.log('end')