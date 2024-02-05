def reverse_seq(n):
    number = n
    array = []
    while number > 0:
        array.append(number)
        number -= 1
        
    return array

# instead do this
# return list(range(n, 0, -1))