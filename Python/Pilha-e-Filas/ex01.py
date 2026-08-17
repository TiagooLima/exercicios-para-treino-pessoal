# 1. Faça um programa que simule o jogo da Batata-Quente. A cada rodada o programa deve gerar um valor aleatório para simular a passagem da batata quente entre os participantes. Quem ficar com a batata na mâo deve ser removido. O jogo deve continuar até ficar apenas um participante. O programa deve receber a quantidade de participantes e utilizar uma fila.
import random

participantes = [1, 2, 3, 4, 5]

for c in range(0, len(participantes)): #Também em range porque se for baseado no array, ele nao vai parar no final
    if(len(participantes) == 1):
        print(f'O participante {participantes[0]} ganhou!')
        break

    escolhido = random.choice(participantes)
    print(f'O escolhido foi o {escolhido}')
    for c in range(0,len(participantes)): #Range pra descobrir o index do array que bate com o escolhido
        if(participantes[c] == escolhido):
            participantes.pop(c)
            print(f'Participantes: {participantes}')
            break 
