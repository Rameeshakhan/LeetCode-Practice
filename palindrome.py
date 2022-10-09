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