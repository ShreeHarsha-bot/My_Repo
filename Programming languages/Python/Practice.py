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

