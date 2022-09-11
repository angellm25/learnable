from collections import Counter


def nth_most_rate(list,n):
    list.sort()
    cnt= Counter(list)
    return(cnt.most_common()[n])

list =[ 8,8,7,6,8,8,8,3,3,6,6,4,4,6,4]
n= -2
a = nth_most_rate(list,n)
print(a)