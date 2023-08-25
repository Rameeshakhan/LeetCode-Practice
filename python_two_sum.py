
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
            
//another            
class Solution:
   def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
solution = Solution()
nums=[1,2,3,4]
target = 7
result = solution.twoSum(nums, target)
print(result)
