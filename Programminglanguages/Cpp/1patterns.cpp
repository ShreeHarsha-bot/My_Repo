#include<iostream>
using namespace std;

int main(){
int n=5;

/*
Q1) for 1 then 12 then 123 then 1234 in next next rows
    for (int i = 1; i <=n; i++){
        for (int j = 1; j <= i; j++){
            cout<<j;
        }
        cout<<endl;
    }
*/

 /*Q2) for 1 then 22 then 333 then 4444 etc   
for (int i = 1; i <=n; i++){
        for (int j = 1; j <= i; j++){
            cout<<i;
        }
        cout<<endl;
    }
*/

/* Q3) for
 *
 **
 ***
 ****            

for(int i=1;i<=n;i++){
    for(int j=1;j<=i;j++){
        cout<<"*";
    }
    cout<<endl;
}
*/

/* Q4) for inverted stars with decrementing from n number of stars
for (int i = 1; i<n; i++)
{
    //  cout<<i;
    for (int j = n; j >i; j--)
    {
       cout<<"*";
    }
    cout<<endl;
}
*/

/* Q5) Print a triangle where the numbers keep counting up continuously across rows, instead of resetting to 1.
int counter=1;
for (int i = 0; i <n; i++)
{
    for (int j = 1; j <=i+1; j++)
    {
        cout<<counter;
        counter++;
    }
    cout<<endl;
}
*/

/* Q)Print a 3x3 grid where each number is the product of its row number multiplied by its column number (like a mini multiplication table).
for (int i = 1; i <=n; i++)   
    {
        for (int j = 1; j <= n; j++)
        {
            cout<<j*i<<" ";
        }
        cout<<endl;
    }
*/

/* Q) printing characters
 for (int i = 1; i <=n; i++)   
    { char ch='A';
        for (int j = 1; j <= n; j++)
        {
            cout<<ch++<<" ";
        }
       
        cout<<endl;
    }
*/


    return 0;
}
