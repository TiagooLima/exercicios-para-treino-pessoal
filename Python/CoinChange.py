print('Moedas: [1, 3 e 4]')
troco = int(input("Digite o valor do troco: "))

moedas = []
while troco > 0:
    if troco >=4 and troco%4==0:
        troco -= 4
        print('4', end="") if troco == 0  else print('4 + ', end="")
    elif troco >= 3 and troco%3==0:
        troco -= 3
        print('3', end="") if troco == 0  else print('3 + ', end="")
    elif troco >= 4:
        troco -= 4
        print('4', end="") if troco == 0  else print('4 + ', end="")
    elif troco >= 3:
        troco -= 3
        print('4', end="") if troco == 0  else print('4 + ', end="")
    else:
        troco -= 1
        print('1', end="") if troco == 0 else print('1 + ', end="")
