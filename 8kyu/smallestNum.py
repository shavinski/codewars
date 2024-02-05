def find_smallest_int(arr):
    # Code here
    smallestNum = arr[0]
    
    for num in arr:
        if num < smallestNum:
            smallestNum = num
            
    return smallestNum