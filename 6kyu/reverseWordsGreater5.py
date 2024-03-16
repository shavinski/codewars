def spin_words(sentence):
    # Your code goes here

    wordsArr = sentence.split(" ")
    result = []

    for word in wordsArr:
        if len(word) >= 5:
            result.append(word[::-1])
        else:
            result.append(word)

    return " ".join(result)
