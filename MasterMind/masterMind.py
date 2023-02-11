import random

print("Welcome to MasterMind! Attempt to guess the 4 letter code in 10 tries")
print("The colors that make up the code are : W I B G Y O R")


colors = ['W','I','B','G','Y','O','R']

def Game():
        
    code=[]
    for i in range(3):
        code.append(colors[random.randint(0,4)])

    completed = False
    for i in range(10):

        guess = input("Guess (space seperated) : ").split(" ")
        if guess == code:
            if i == 0:
                print("You guessed the code in first try")
                completed = True
                break
            else :
                print(f'You guessed the code in {i+1} tries')
                break

        correctPos = 0
        incorrectPos = 0

        temp = code.copy()

        for posInGuess,colorInGuess in enumerate(guess):
            if colorInGuess == code[posInGuess]:
                correctPos += 1
                code.pop(posInGuess)
                guess.pop(posInGuess)

        for i in code:
            if i in guess:
                incorrectPos+=1
        
        print(f'Correct Position : {correctPos} | Incorrect Position : {incorrectPos}')
        code = temp
    if completed:
        print('Congratulations! You have completed the game!')
        print(f'Your code is : {code}')
    else:
        print("You lose !")
        print(f'Your code is : {code}')
   

Game()   
while True:
    choice = input("Wanna try again ? (y/n) : ")
    if choice == 'y':
        Game()
    else:
        print("Thanks for playing!")
        break
