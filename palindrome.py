n = int(input("enter nmuber: "))
l=[]
if n >= 0:
    num = str(n)
    for i in num:
        l.append(i)
    if (l == l[::-1]):
        print("A palindrome serires")
    else:
        print("Not a palindrome serires")
else:
    print("Enter a positive number")

// js another method 
//function palindrome(arg) {
//  let reversed = "";
//    let palindrome = false
//  for (let i = arg.length - 1; i >= 0; i--) {
//      reversed += arg[i];
//  }
//  // return Number(reversed);
//  if(arg === reversed ){
//    palindrome = true
//    }
//  return  palindrome
//}

//console.log(palindrome("1231"));
