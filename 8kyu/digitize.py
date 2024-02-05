def digitize(n):
    # could do this:
    # return [int(num) for num in str(n)[::-1]]
    result = [int(num) for num in str(n)]
    result.reverse()
    return result
