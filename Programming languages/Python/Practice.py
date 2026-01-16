''' 
a=10
b=8

print('a=',a)
print('b=',b)

a,b=b,a
print('a=',a)
print('b=',b)   '''

'''
boy_name=input('Enter Boy name: ')
boy_age=int(input('Enter Boy age: '))
girl_name=input('Enter Girl name: ')
girl_age=int(input('Eneter Girl age: '))
age_diff = abs(boy_age-girl_age)
# print('\n',boy_name,'loves',girl_name, ',age difference is ',age_diff,' year')
# print(f'{boy_name} loves {girl_name} , age difference is {age_diff} year')

if boy_age>girl_age:
    print(f'{boy_name} loves {girl_name} , Boy is {age_diff}yr older than girl')
else :
 print(f'{boy_name} loves {girl_name} , Girl is {age_diff}yr older than Boy')
'''

# concatination + repition + some inbuilt functions
'''
fname = input("Enter first name ")
lname = input("Enter last name ")
fullName=fname+lname
print(fullName.strip()*3)
print(fullName.upper())
print(fullName.lower())

msg='Harsha says "Hello" '      #vice versa is also possible inside double code single code 
print(msg)
'''
'''
# Lists
items1=["Harsha","Guru","Harish"]
items2=["Harsha",19,True,32.32]   #can store multiple datatype
print(items1[0],items1[-2])
print(items1)
items2.pop()  #removes the last element put index for particular item
print(items2)
items2.append("Mandya")   #adds a new item to the list
items2.insert(1,"Human")
print(items2)    #there are remove() and clear() function also

# slice
price=[100,150,200,220,250,300,350,400]
print(price[1:3])
print(price[1:2])
print(price[1:7:2])
print(price[1:6:1])
'''

'''
# Tuples - It is similiar to the list but here once we created means we can't modify it.    
#list users [] ,tuple uses ()   
gender=("Male","Female","Others") 
print(gender.count('Male'))
print("Male" in gender)   #To check is the element is available in touple or not uses in 

# Sets - It is a collection of unique items uses cureved brackets{}  
# Unorderd and Unindexed
set1={10,17,18,21,35}
print(set1)   #The elements will be not in orderd
set2=set()   # for empty set

s1={1,2,3,4}
s2={3,4,5,6}
print(s1 | s2)   #for union use |
print(s1 & s2)   #for intersection use &

'''
# -------------------------------------------------------------------------------------
'''
Dictionaries - It is type as sets like uses flower brackets but it have key : Value
karnataka_food={
    "Mandya":"Baadu",
    "Mysuru":"Mysuru pak",
    "Dharwad":"Benne dose",
}
print(karnataka_food["Mandya"])    #To access particular use key
print(karnataka_food.get("Bengaluru","Not found"))
karnataka_food["Mangaluru"]="Neer dose"   #To add in runtime
print(karnataka_food)       #To access whole dict
print(karnataka_food.keys())
print(karnataka_food.values())
'''
# //////////////////////////////////////////////////////////////////////////////////////
'''
# Loops
x=18
if x==17:
    print("The value of X is 18")
else:
    print("The value of X is not 18")


signal='Green'
if signal=='Red':
    print("Stop")
elif signal=='Yellow':
    print('Ready')
else:
    print("Go")
'''

# Let's try the fun one ha ha  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
# Aryan-Adya,Param-Deepa , Manu- Anu
'''
character = input("Choose the character: Aryan | Param | Manu: ").strip().lower()

if character == "aryan":
    career = input("Choose the career: Director | Engineer: ").strip().lower()

    if career == "director":
        career_type = input("Choose the type: Movies | Webseries: ").strip().lower()

        if career_type == "movies":
            print("You are Aryan, you direct movies 🎬")
        elif career_type == "webseries":
            print("You are Aryan, you direct web series 📺")
        else:
            print("Invalid type. Dream unclear.")

    elif career == "engineer":
        print("You are an engineer, but you lost your dream.")

    else:
        print("You chose an invalid career.")

elif character == "param":
    career = input("Choose the career: Writer | Employee: ").strip().lower()

    if career == "writer":
        career_type = input("Choose type of writing: Cinema | Books: ").strip().lower()

        if career_type == "cinema":
            print("You are Param, a cinema writer 🎥")
        elif career_type == "books":
            print("You are Param, a book writer 📚")
        else:
            print("Invalid writing type.")

    elif career == "employee":
        print("You are an employee, but you lost your dream.")

    else:
        print("You chose an invalid career.")

elif character == "manu":
    career = input("Choose your career: Farmer | Employee | Both: ").strip().lower()

    if career == "farmer":
        print("You are a farmer 🌾")
    elif career == "employee":
        print("You are an employee 💼")
    elif career == "both":
        print("You balance farming and a job. Respect 👏")
    else:
        print("You chose an invalid option.")

else:
    print("You chose an invalid character.")

'''

'''
#for loop
for i in range(1,11,3):
    print(i,end=" ") 

person=['Aryan,Param,Deepa,Adya,Anu,Manu']
for name in person:
    print(name)

# looping over strings
name='Harsha'
for index,letter in enumerate(name):
    print(letter*(index+1))

number=[1,2,3,4,5,6]
for index,num in enumerate(number):
    print(f"{num} is in {index}th index")

# Multiplication using for 
for i in range(1,11):
    print(f"{2} X {i} = {2*i}")

for i in range(1,4):
    for j in range(2,11):
        print(f"{i} X {j} = {i*j}")

'''

# multiplication of 3 upto 30
for i in range(1,31):
    print(f"{3} X {i} = {3*i}")
# Sum of first 10 number
for i in range(1):
    print(f"Sum of first 10 numbers = {(10*(10+1))/2}")
    # OR
sum=0
for i in range(1,11):
    sum+=i
print("The sum of first 10 number is:",sum)

# count vowels in a string
text=input("Enter the text ")
count=0
for vowel in text:      #or text.lower() and only aeiou
    if vowel in "aeiouAEIOU":
        count+=1
print(f"The number of vowels: ",count)