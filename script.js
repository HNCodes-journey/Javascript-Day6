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