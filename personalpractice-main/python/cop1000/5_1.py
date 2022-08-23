# Display a starting message, explaining what the program does.
# Ask the user to press Enter to see step 1.
# Display the instructions for step 1.
# Ask the user to press Enter to see the next step.
# Display the instructions for step 2.
# Ask the user to press Enter to see the next step.
# Display the instructions for step 3.
# Ask the user to press Enter to see the next step.
# Display the instructions for step 4.

def main():
    start_message()
    input("Press Enter to see Step 1.")
    step_1()
    input("Press Enter to see Step 2.")
    step_2()
    input("Press Enter to see Step 3.")
    step_3()
    input("Press Enter to see Step 4.")
    step_4()


def start_message():
    print("This program will display the instructions for each step.")

def step_1():
    print("Step 1:")
    print("This is the first step.")

def step_2():
    print("Step 2:")
    print("This is the second step.")

def step_3():
    print("Step 3:")
    print("This is the third step.")

def step_4():
    print("Step 4:")
    print("This is the fourth step.")

main()


