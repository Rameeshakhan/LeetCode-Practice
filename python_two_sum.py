
n= int(input("Enter no of elements in list : "))
for i in range(0,n):
    e= int(input("Enter elements: "))
    nums.append(e)
#print (nums)
target=int(input("Enter Target: "))
for i in nums:
    for j in nums:
        if(i+j == target):
            print([i,j])