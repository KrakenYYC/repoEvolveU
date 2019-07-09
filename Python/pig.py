# get sentence from user

original = input("Please enter a sentence: ").strip().lower()

# split sentence into words

words = original.split()

# loop through words and convert to pig latin

new_words = []

for harlot in words:
    print(harlot, "watch this")
    if harlot[0] in "aeiou":
        new_word = harlot + "yay"
        new_words.append(new_word)
    else:
        vowel_pos = 0
        for letter in harlot:
            if letter not in "aeiou":
                vowel_pos = vowel_pos + 1
            else:
                break
        cons = harlot[:vowel_pos]
        the_rest = harlot[vowel_pos:]
        new_word = the_rest + cons + "ay"
        new_words.append(new_word)

# stick words back together

output = " ".join(new_words)

# output the final string

print(output)
