largura = int(input("Digite a largura: "))
altura = int(input("Digite a altura: "))
print(f"{largura}x{altura}")


if largura > altura:
    while True:
        if largura <= 0:        
            print(f"Quadrado de {altura}x{altura}")
            break
        else:
            altura = altura % largura
            temp = altura
            altura = largura
            largura = temp
else:
    while True:
        if altura == 0:
            print(f"Quadrado de {largura}x{largura}")
            break
        else:
            largura = largura % altura
            temp = largura
            largura = altura
            altura = temp

