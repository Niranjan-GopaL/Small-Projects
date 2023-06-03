def echelon_form(A, size):
    for i in range(size - 1):
        for j in range(size - 1, i, -1):
            if A[j][i] == 0:
                continue
            else:
                try:
                    req_ratio = A[j][i] / A[j - 1][i]
                    # A[j] = A[j] - req_ratio*A[j-1]
                except ZeroDivisionError:
                    # A[j], A[j-1] = A[j-1], A[j]
                    
                    for x in range(size):
                        A[j][x] , A[j-1][x] = A[j-1][x] , A[j][x]
                    continue
                
                for k in range(size):
                    A[j][k] = A[j][k] - req_ratio * A[j - 1][k]
    return A

A = []
n=int(input())
for i in range(n):
    row = list(map(int, input().split()))
    A.append(row)
print()

REF = echelon_form(A,n)

print("REF form")
for row in REF:
    [print(i, end = ' ') for i in row]
    print()
print()

DET = 1
for i in range(n):
    for j in range(n):
        if i != j:
            continue
        else:
            DET *= A[i][j]

print("The determinant therefore is :" ,DET)