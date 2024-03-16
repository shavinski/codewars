def create_phone_number(n):
    #your code here
    
    firstPart = ""
    secondPart = ""
    lastPart = ""
    
    for i, num in enumerate(n):
        if i <= 2:
            firstPart += str(num)
        elif i > 2 and i <= 5:
            secondPart += str(num)
        else:
            lastPart += str(num)
            
    return f"({firstPart}) {secondPart}-{lastPart}"


"""
Better way to do it? From the result section

def create_phone_number(n):
	return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)

"""