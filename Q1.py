# Tour of king
T=int(input())
for i in range(T):
    N,M=map(int,input().split())
    print(N*5+M*7)
    
# Minimum number of ones
T=int(input())
for i in range(T):
    N=int(input())
    print(N//2)
    
# Counting problem
T=int(input())
for i in range(T):
    N=int(input())
    Arr=list(map(int,input().split()))
    s1=0
    s2=0
    for j in range(len(Arr)):
        if Arr[j]%2==0:
            s1+=Arr[j]
        else:
            s2+=Arr[j]
    s=s1*s2
    if s%2==0:
        print("NO")
    else:
        print("YES")
        
T=int(input())
for i in range(T):
    N=int(input())
    Arr=list(map(int,input().split()))
    if sum(Arr)%2==0 and sum(x for x in Arr):
        print("YES")
    else:
        print("NO")
        
# Expensive steps
T=int(input())
for i in range(T):
    N,x1,y1,x2,y2=map(int,input().split())
    ans=min(abs(x1-x2)+abs(y1-y2),min(x1,y1,N+1-x1,N+1-y1)+min(x2,y2,N+1-x2,N+1-y2))
    print(ans)
    

            