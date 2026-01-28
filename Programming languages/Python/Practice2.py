'''
l =[1,22,43,445,43]
dl=[]
for num in l:
    dl.append(num*2)
    print(dl)


# accessing in dictionaries
stud_details={"Harsha":98 ,"Guru":100,"Harish":98 }
for marks in stud_details.items():    #when we use keys it returns keys,if we use values it returnsn values
    print(marks)

# Or we can do like this
for student,marks in stud_details.items():
    print(f"{student} --- {marks}")

'''
l=[1,2,41,23,10]
dl=[item*2 for item in l]
print(dl)
