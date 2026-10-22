
sequenciaProcurada = input("Digite a sequencia que você procura: ").upper()
DNA = "ACGTACGTTACGGAATCG"

for c in range(0, len(DNA)):
    if sequenciaProcurada[0] == DNA[c]:
        for z in range(0,len(sequenciaProcurada)):
            if sequenciaProcurada[z] == DNA[c+z]:
                continue
            else:
                break
        else:
            print(f"A sequencia foi encontrada a partir da posição {c+1} do DNA '{DNA}'")
            break
else:
    print("A sequencia não está presente.")
