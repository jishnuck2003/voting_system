// if 
// if else
// else if
// nested if
// else if ladder
// switch
// 

// if(true){
//     document.write("hello");
// }


// if(10>30)
//     document.write("hello");
// else
//     document.write("jhi") 



// if(19>20){
//     document.write("helllo");
// }else if(30>40){
//     document.write("helllo1");
// }else if(30>40){
//     document.write("helllo2");
// }else if(30>40){
//     document.write("helllo3");
// }else if(30>40){
//     document.write("helllo4");
// }else
//     document.write("hi")


// var x= 29;
// switch (key) {
//     case 9:
//         console.log("he 1")
//         break;
//     case 29:
//          console.log("he 3")
//         break;
//     case 129:
//         console.log("he 5")
//         break;
//     default:
//         console.log("so") ;
//         break;   
// }


let a=document.getElementById("age");
let res=document.getElementById("res");
function vote(){
    if (a.value<11 && a.value>0  ){
        res.innerHTML = ("you are too young to vote");
        res.style.color="red"
    }
    else if (a.value>17 && a.value<=100){
        res.innerHTML=("you are eligible to vote");
        res.style.color="green"

    }else if (a.value>10 && a.value <18){
        res.innerHTML= "you are going to vote soon"
        res.style.color="orange"
    }else if (a.value>100 ){
        res.innerHTML="can vote(you need special permission)"
        res.style.color="pink"
    }else{
        res.innerHTML="invalid age"
        res.style.color="black"
    }
        
}