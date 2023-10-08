x= 10
y= 9
# print("before swaping x and y are ",x,y)

# def swap(a,b):
#     temp=a
#     a=b
#     b=temp
#     print(a,b)

def swap(a,b):
    # using + and -
    a=a+b
    b=a-b
    a=a-b

    # using * and /
    # a=a*b
    # b=a/b
    # a=a/b

    return a,b
    
# print("after swaping x and y are ",swap(x,y))

# output
# before swaping x and y are  10 9
# after swaping x and y are  (9, 10)

# tuple swapping
a=10
b=30
a, b = b, a
print("After swapping",a,b)
