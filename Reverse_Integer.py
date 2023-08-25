class Solution:
    def reverse(self, x: int) -> int:
        INT_MAX = 2**31 - 1  # Maximum value of a 32-bit signed integer
        INT_MIN = -2**31     # Minimum value of a 32-bit signed integer

        # Handle negative numbers
        if x < 0:
            x = -x           # Make x positive
            sign = -1        # Set the sign to -1 to remember the original number was negative
        else:
            sign = 1         # Set the sign to 1 if the original number was positive or zero

        reversed_num = 0     # Initialize the variable to store the reversed number
        while x > 0:         # Continue loop until all digits of x are processed
            pop = x % 10     # Get the last digit of x
            x //= 10         # Remove the last digit from x

            # Check for potential overflow before appending the digit
            if reversed_num > (INT_MAX - pop) // 10:
                return 0     # If overflow would occur, return 0

            reversed_num = reversed_num * 10 + pop  # Append the current digit to the reversed_num

        return reversed_num * sign  # Return the reversed number with the original sign
