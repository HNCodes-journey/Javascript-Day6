// Question 1:
let x = 10;
let y = 20;
if(x>5 && y<25){
    console.log("A");
}
else{
    console.log("B");
}

// Output: A

let isAdmin =true;
let isLoggedIn = false;
if(isAdmin || isLoggedIn){
    console.log("Access granted");
}
else{
    console.log("Access Denied");
}

//Output : Access granted
//Question 3:
let temp = 35;
if(!(temp<30)){
    console.log("Hot");
}
else{
    console.log("Pleasent");
}
//Output : Hot
// Question 4:
let a = 0;
if(a){
    console.log("Truthy");
}
else{
    console.log("Falsy");
}
//Output : falsy
// Question 5:
let score = 78;
let grade = score>=90 ? "A" : score>=75 ? "B" : score >=60 ? "C" : "fail";
console.log("grade");

//Output : grade
// Question 6:
let LoggedIn = true;
let hastoken = false;
let access = LoggedIn && hastoken ? "Allow" : "Deny";
console.log(access);

//Output : Deny

//Question 7:
let b =7;
++b;
console.log(b);
 //output : 8

 //Question 8:
 let d = 3;
 let e = d++ ;
 console.log(d,e);
// output : 4 , 3

//Question 9:
let p =4;
let q = ++p;
console.log(p,q);
//Output : 5 5

//Question 10:
let m = 10;
console.log(m--); //line 1
console.log(m);    //Line 2
//Output : 10 , 9

//Question 11:
let n = 5; 
let result = n++ + ++n;
console.log(result);

// Output : 12

//Question 12:
let likes = 100;
function likepost(){
    return ++likes;
}
console.log(likepost());
console.log(likes);

//Output : 101
//         101

//Question 13:
let count = 5;
 if (count-- ===5 ){
    console.log("Matched"); 
 }
 else{
    console.log("Not Matched");
 }
//Output : Matched









 
