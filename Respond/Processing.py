import Config as cfg

def process(target, guess):
    cow = 0
    bull = 0
    for i in range(len(guess)):
        if guess[i] == target[i]:
            cow += 1
        elif guess[i] in target:
            bull += 1
    if bull or cow:
        if cow == cfg.N:
            return True, "Hurray, you guessed the number right"
        s = ""
        if cow:
            s += str(cow) + " cow "
        if bull:
            s += str(bull) + " bull"
        return False, s
    else:
        return False, "Bullshit"
