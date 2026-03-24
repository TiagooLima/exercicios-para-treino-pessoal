const frasesMotivacionais = [
    "Acredite em si mesmo", "O sucesso é a soma de pequenos esforços", "Não pare até se orgulhar", 
    "Sua única limitação é você mesmo", "Grandes coisas nunca vêm de zonas de conforto", 
    "Sonhe grande e ouse falhar", "Fazer o impossível é divertido", "A persistência vence o talento", 
    "Seja a sua própria inspiração", "O amanhã começa agora", "Transforme seus medos em fé", 
    "A disciplina é a ponte entre metas e realizações", "Tudo o que você precisa já está dentro de você", 
    "A falha é o tempero que dá sabor ao sucesso", "Vença a si mesmo todos os dias", 
    "Mantenha o foco no objetivo", "Pequenos passos levam a grandes destinos", 
    "Onde há vontade, há um caminho", "A coragem não é a ausência do medo", 
    "Seja constante, não apenas intenso", "Sua atitude determina sua altitude", 
    "Não conte os dias, faça os dias contarem", "O sucesso não é o final, o fracasso não é fatal", 
    "Acredite que você pode e você já está no meio do caminho", "A paciência é uma forma de ação", 
    "Trabalhe em silêncio, deixe o sucesso fazer barulho", 
    "O melhor momento para plantar uma árvore foi há 20 anos, o segundo melhor é agora", 
    "Você é mais forte do que imagina", "A mente é tudo; você se torna o que pensa", 
    "Dificuldades preparam pessoas comuns para destinos extraordinários", 
    "A jornada de mil milhas começa com um passo", "Não espere por oportunidades, crie-as", 
    "O segredo do sucesso é a constância no propósito", "Seja melhor do que você foi ontem", 
    "Nada é impossível para quem acredita", "A sorte favorece os audazes", 
    "O cansaço é temporário, a vitória é eterna", "Não olhe para trás, você não está indo para lá", 
    "Mude seus pensamentos e você mudará seu mundo", 
    "A motivação faz você começar, o hábito faz você continuar", 
    "O que não te desafia não te transforma", "Foque no progresso, não na perfeição", 
    "Erros são prova de que você está tentando", "Sua energia é o seu cartão de visitas", 
    "Nunca é tarde para ser o que você poderia ter sido", "O sucesso exige sacrifício", 
    "Acredite na beleza dos seus sonhos", "Tudo o que você sempre quis está do outro lado do medo", 
    "A vida é 10% o que acontece e 90% como você reage", 
    "Seja o tipo de pessoa que você gostaria de conhecer", "Dê o seu melhor em tudo o que fizer", 
    "A inspiração existe, mas ela precisa te encontrar trabalhando", 
    "Não deixe o barulho da opinião alheia abafar sua voz interior", "Cada dia é uma nova chance", 
    "O poder está na sua mente", "O fracasso é apenas a oportunidade de começar de novo com mais inteligência", 
    "Persista, insista e nunca desista", "Grandes batalhas só são dadas a grandes guerreiros", 
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário", "Seja luz por onde passar", 
    "O destino não é questão de sorte, é questão de escolha", 
    "Comece onde você está, use o que você tem, faça o que você pode", 
    "A resiliência é a arte de florescer no caos", "Desafie-se um pouco mais a cada dia", 
    "Você não é o que te aconteceu, você é o que escolhe se tornar", 
    "A vontade de vencer é importante, mas a vontade de se preparar é vital", "Colha o dia", 
    "A vida começa onde termina a sua zona de conforto", "Seja grato pelo que tem enquanto busca o que quer", 
    "A determinação hoje é o sucesso amanhã", "Não pare quando estiver cansado, pare quando tiver terminado", 
    "A excelência não é um ato, mas um hábito", "O conhecimento é a arma mais poderosa", 
    "Sua paixão é o seu combustível", "Não diminua o sonho, aumente a sua fé", 
    "Um objetivo sem um plano é apenas um desejo", "Tudo parece impossível até que seja feito", 
    "Seja você mesmo, todos os outros já existem", 
    "Não se compare com os outros, compare-se com quem você era ontem", "O sucesso é a melhor vingança", 
    "Faça hoje o que os outros não querem para ter amanhã o que os outros não podem", 
    "A alegria está na luta e no sofrimento envolvido", 
    "O que você faz hoje pode melhorar todos os seus amanhãs", 
    "Sempre parece impossível até que seja feito", "Acredite no seu potencial infinito", 
    "Ninguém pode fazer você se sentir inferior sem o seu consentimento", 
    "A persistência é o caminho do êxito", "Siga seus sonhos, eles conhecem o caminho", 
    "A única maneira de fazer um excelente trabalho é amar o que você faz", 
    "Seja a mudança que você deseja ver no mundo", 
    "Não importa o quão devagar você vá, desde que não pare", "O sucesso é cair sete vezes e levantar oito", 
    "Aproveite cada momento", "A imaginação é mais importante que o conhecimento", 
    "Foque na solução, não no problema", "Grandes mentes discutem ideias", 
    "O segredo da felicidade é a liberdade", "A confiança é o primeiro segredo do sucesso", 
    "A vida é curta, faça valer a pena", "Você colhe o que planta"
];

const divResultado = document.querySelector(`.fraseMotivacional`)
let contador;

function clicou() {
    if (contador==undefined || contador==99){
        contador = -1
    }
    contador++
    divResultado.innerHTML = frasesMotivacionais[contador]
}