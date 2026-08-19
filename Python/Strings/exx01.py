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

# Leet é uma forma de se escrever o alfabeto latino usando outros símbolos em lugar das letras, como números por exemplo. A própria palavra leet admite muitas variações, como l33t ou 1337. O uso do leet reflete uma subcultura relacionada ao mundo dos jogos de computador e internet, sendo muito usada para confundir os iniciantes e afirmar-se como parte de um grupo. Pesquise sobre as principais formas de traduzir as letras. Depois, faça um programa que peça uma texto e transforme-o para a grafia leet speak.

""" print(ord('a')) #M: 65---> 4
print(ord('e')) #M: 69---> 3
print(ord('i')) #M: 73---> 1
print(ord('l')) #M: 76---> 1
print(ord('o')) #M: 79---> 0
print(ord("s")) #M: 83---> 5
print(ord("t")) #M: 84---> 7 """


def leetTranslator(string):
    stringAtualizada = ""
    for char in string:
        if(ord(char.upper()) == 65):
            stringAtualizada += '4'
        elif(ord(char.upper()) == 69):
            stringAtualizada += '3'
        elif(ord(char.upper()) == 73):
            stringAtualizada += '1'
        elif(ord(char.upper()) == 76):
            stringAtualizada += '1'
        elif(ord(char.upper()) == 79):
            stringAtualizada += '0'
        elif(ord(char.upper()) == 83):
            stringAtualizada += '5'
        elif(ord(char.upper()) == 84):
            stringAtualizada += '7'
        else:
            stringAtualizada += char
    return stringAtualizada

print(leetTranslator("Tiago"))

# Escreva um programa que, a partir de um nome informado pelo usuário, exiba suas iniciais. As iniciais são formadas pela primeira letra de cada nome, sendo que todas deverão aparecer em maiúsculas na saída do programa. Note que os conectores e, do, da, dos, das, de, di, du não são considerados nomes e, portanto, não devem ser considerados para a obtenção das iniciais. As iniciais devem ser impressas em maiúsculas, ainda que o nome seja entrado todo em minúsculas.

def initials(string):
    arrNotCount = ['do', 'de', 'da', 'dos', 'das', 'di', 'du']
    stringArr = string.split() # ['tiago', 'dos', 'anjos', 'de', 'lima']
    initialsString = ""
    for c in stringArr:
        for d in range(0,len(arrNotCount)):
            if(c == arrNotCount[d]):
                break
        else:
            initialsString += c[0].upper()
    return initialsString

print(initials('Tiago dos Anjos de Lima'))
        
# Faça um programa que peça ao usuário duas strings diferentes, verifique então se elas são anagramas, ou seja, tem o mesmo conjunto de letras.

def anagramFinder(str1, str2):
    if (len(str1) == len(str2)):
        for c in str1:
            for d in str2:
                if(c.lower() == d.lower()):
                    break
            else:
                return 'Não são anagramas'                
        return 'São anagramas'
    else:
        return 'Não são anagramas'

print(anagramFinder('banana', 'ananab'))

# Dado uma frase informada pelo usuário, converta as letras minúsculas em maiúsculas e vice-versa.

def capitalChange(string):
    finalString = ""
    for char in string:
        if(char == char.lower()):
            finalString += char.upper()
        else:
            finalString += char.lower()
    return finalString

print(capitalChange('TiAgo'))