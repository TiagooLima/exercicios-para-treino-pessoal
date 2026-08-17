# 2. Faça um programa que simule o atendimento a clientes em uma padaria. A padaria possui dois tipos de senhas, a preferência P e a senha normal N. Na padaria a regra é atender primeiro todas as senhas preferencias. O programa deve receber por parâmetro a sequência de senhas. Por exemplo P1 N1 P2 P3 N2 N3 N4 N5 P6 N7 P8. E então realizar os atendimentos conforme o tipo de senha. Apresente no terminal o status da ---fila--- e a ordem de atendimento. 
senhas = ["P1", "N1", "P2", "P3", "N2", "N3", "N4", "N5", "P6", "N7", "P8"]
print(f'Fila de espera: {senhas}')

for c in range(0, len(senhas)):
    if(any('P' in p for p in senhas)):
        for x in senhas:
            if('P' in x):
                print(f'Atendimento: {x}')
                senhas.pop(senhas.index(x))
                print(f'Fila de espera: {senhas}')
                break

    else:
        c = 0 # Para que o primeiro da fila seja o primeiro a sair
        print(f'Atendimento: {senhas[c]}')
        senhas.pop(c)
        print(f'Fila de espera: {senhas}')