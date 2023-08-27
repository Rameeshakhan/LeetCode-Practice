def isPalindrome(self, s: str) -> bool:
        new_string = ''.join(char for char in s if char.isalnum())  
        cleaned_string = new_string.lower()  
        return cleaned_string == cleaned_string[::-1]