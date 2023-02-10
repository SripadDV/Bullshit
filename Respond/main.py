import random
import Config as cfg
import Processing as proc

def setNum():
    num_List = list(range(1,10))
    num = list()
    for i in range(cfg.N):
        x = random.choice(num_List)
        num_List.remove(x)
        print(num_List)
        num.append(x)
        if i==0:
            num_List.append(0)
    return num

def processInput(ip):
    try:
        guess = [int(x) for x in ip]
        if len(guess) == cfg.N and len(guess) == len(set(guess)):
            return guess, 0
        else:
            return [], 1
    except:
        return [], -1



def runner():
    print("Let's begin!!")
    target = setNum()
    print(target)
    exit = False
    win = False
    tries = 0
    while not win and not exit and tries < cfg.MaxTries:
        ip = input("Guess the number")
        guess, status = processInput(ip)
        if status == 0:
            result, msg = proc.process(target, guess)
            print(msg)
            if result:
                win = True
            else:
                tries += 1
        elif status == 1:
            print("Incorrect number entered")
        else:
            print("Exiting the game...")
            exit = True
        if tries == cfg.MaxTries:
            print("Maximum tries reached...")

runner()