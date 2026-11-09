class Receitas {
    constructor(nome, ingredientes, mpreparo){
        this.nome = nome
        this.ingredientes = ingredientes
        this.modoDePreparo = mpreparo
    }

    verReceita(){
        console.log(this.nome)
        console.log("INGREDIENTES:")
        for(let i=0; i < this.ingredientes.length; i++){
            console.log(this.ingredientes[i])
        }
    }


}

let listaReceitas = []
listaReceitas.push(new Receitas('Ovo frito', ['ovo', 'oregano'], 'só fritar'))

listaReceitas[0].verReceita()


// MENU
const MENU = [
    `MENU
Macarrao com salsicha
Carbonara
Feijoada
Lasanha
Panqueca
Stroggnoff
Stroggnoff de frango
Bolo de batata
Pao de queijo
Bolinho de arroz
Bife acebolado
Bolo de cenoura + Cobertura 
Bolo de chocolate
Pizza
Omelete
Sagu
Bolinho de chuva
Brigadeiro chocolate
Brigadeiro branco
Frango frito`
]
const MODOSDEPREPARO = [
    'assar',
    'fritar',
    'cozir/ferver'
]

// INGREDIENTES
const INGREDIENTES = [
    'espaguete',
    'feijao',
    'arroz',
    'farinha',
    'ovos',
    'queijo',
    'carne',
    'tomate',
    'oregano',
    'cenouras',
    'chocolate',
    'bacon',
    'louro',
    'alho',
    'pimentao',
    'salsicha',
    'alface',
    'maionese',
    'frango',
    'leite',
    'fermento',
    'canela em po',
    'sagu',
    'vinho',
    'leite condensado',
    'creme de leite',
    'manteiga',
    'agua',
    'farinha de rosca',
    'batata',
    'cebola',
    'sal'];
// RECEITAS

const RECEITAS = [
    `MACARRAO COM SALSICHA
espaguete + agua + cozir/fever + salsicha = prato pronto

CARBONARA
espaguete + agua + cozir/fever + ovos + bacon + queijo = prato pronto

FEIJOADA
feijao + agua + louro + alho + cozir/ferver + carne + bacon + salsicha = prato pronto

LASANHA
farinha + ovos + agua + tomate + alho + oregano + carne + queijo + assar = prato pronto

PANQUECA
farinha + ovos + leite + fritar = panqueca

STROGGNOFF
carne + alho + fritar + tomate + creme de leite = prato pronto

STROGGNOFF DE FRANGO
frango + alho + fritar + tomate + creme de leite = prato pronto

BOLO DE BATATA
batata + agua + ovos + farinha + queijo + fermento + assar = prato pronto

PAO DE QUEIJO
farinha + ovos + queijo + leite + manteiga + assar = prato pronto

BOLINHO DE ARROZ
arroz + agua  + ovos + queijo + farinha de rosca + fritar = prato pronto

BIFE ACEBOLADO
carne + cebola + fritar = prato pronto

BOLO DE CENOURA C COBERTURA
cenouras + ovos + farinha + leite + fermento + chocolate + leite condensado + manteiga + assar = prato pronto

BOLO DE CHOCOLATE
farinha + ovos + chocolate + leite + manteiga + fermento + assar = prato pronto

PIZZA
farinha + agua + fermento + tomate + queijo + oregano + assar = prato pronto

OMELETE
ovos + queijo + tomate + fritar = prato pronto

SAGU
sagu + agua + cozir/ferver + vinho + canela em po = prato pronto

BOLINHO DE CHUVA
farinha + ovos + leite + fermento + fritar + canela em po = prato pronto

BRIGADEIRO CHOCOLATE
leite condensado + chocolate + manteiga + cozir/ferver = prato pronto

BRIGADEIRO BRANCO
leite condensado + creme de leite + manteiga + cozir/ferver = prato pronto

FRANGO FRITO
frango + alho = frango temperado
 + ovos + farinha de rosca + fritar = prato pronto`
];

// INICIO
alert(`Inicio de jogo!`);
let acao = prompt('O que deseja fazer? 1.Iniciar 2.Menu 3.Ingredientes 4.Receitas 5.Cancelar');
if(acao == 1 ){

}
else if(acao == 2){
    console.log(MENU[0])
}
else if(acao == 3){
    console.log(INGREDIENTES[0])
}
else if(acao == 4){
    console.log(RECEITAS[0])
}
else if(acao == 5){
    alert('Voce cancelou a operacao, adeus!')
}
else{alert('Entrada invalida!')}