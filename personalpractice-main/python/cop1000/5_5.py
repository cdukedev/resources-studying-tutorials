# Display an introductory screen that explains what the program does.

# Get the number of cups.

# Convert the number of cups to fluid ounces and display the result.

def main():
    intro()
    cups = get_cups()
    ounces = convert_cups(cups)
    print(cups, "cups is", ounces, "ounces.")

def intro():
    print("This program converts a number of cups to fluid ounces.")
    print("For example, if you enter 2 cups, the program will return 16 ounces.")

def get_cups():
    cups = int(input("How many cups? "))
    return cups
def convert_cups(cups):
    ounces = cups * 8
    return ounces

main()