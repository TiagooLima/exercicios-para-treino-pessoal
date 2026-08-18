#Faça um programa que permita ao usuário digitar o seu nome e em seguida imprima o nome do usuário de trás para frente utilizando somente letras maiúsculas. Dica: lembre−se que ao informar o nome o usuário pode digitar letras maiúsculas ou minúsculas.

def nomeInvertido(nome):
    nomeAlterado = ""
    for c in range(1, len(nome)+1):
        nomeAlterado += nome[len(nome)-c].upper()
    
    return nomeAlterado

print(nomeInvertido('tiago'))

""" Dado uma string com uma frase informada pelo usuário (incluindo espaços em branco), conte:

quantos espaços em branco existem na frase.
quantas vezes aparecem as vogais a, e, i, o, u. """

def qntdStr(valor):
    valorVazio = 0
    valorVogal = 0
    for c in valor:
        if(c == " "):
            valorVazio += 1
        elif(c.upper() == "A" or c.upper() == "E" or c.upper() == "I" or c.upper() == "O" or c.upper() == "U" ):
            valorVogal += 1
    
    return f"A str '{valor}' tem {valorVazio} caracteres vazios e {valorVogal} vogais"

print(qntdStr(' Tiago '))

""" Leia um código de cinco algarismos (variável Codigo) e gere o digito verificador (DigitoV) módulo 7 para o mesmo. Supondo que os cinco algarismos do código são ABCDE, uma forma de calcular o dígito desejado, com módulo 7 é:

DigitoV = resto da divisão de S por 7, onde S = 6A + 5B + 4C + 3D + 2E """

def digitoVerificador(char):
    valorUnicode = []
    caractereAtual = 0
    if (len(char) == 5):
        for c in char:
            caractereAtual = ord(c)
            valorUnicode.append(caractereAtual)
        
        S = valorUnicode[0]*6 + valorUnicode[1]*5 + valorUnicode[2]*4 + valorUnicode[3]*3 + valorUnicode[4]*2
        DigitoV = S % 7

        return DigitoV
    else:
        raise ValueError("O código precisa ter 5 algarismos")
    
print(f"A string 'tiago' tem o codigo verificador {digitoVerificador('tiago')}")
        
""" Escreva um programa que dado um valor numérico digitado pelo usuário (armazenado em uma variável inteira), imprima cada um dos seus dígitos por extenso. Exemplo:

Entre o número: 4571
Resultado: quatro, cinco, sete, um """

def valorPorExtenso(num):
    arr = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'] #9 indices
    stringNum = str(num)
    valorRetornado = ""
    for c in range(0, len(str(num))):
        if(c > 0):
            valorRetornado += ', '
        valorRetornado += arr[int(stringNum[c])]

    return valorRetornado


print(valorPorExtenso(23448932))