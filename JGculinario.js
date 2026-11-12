// classeaaaa
class Receita {
  constructor(nome, ingredientes, modoDePreparo) {
    this.nome = nome;
    this.ingredientes = ingredientes;
    this.modoDePreparo = modoDePreparo;
  }

  verReceita() {
    console.log(`--- ${this.nome.toUpperCase()} ---`);
    console.log("INGREDIENTES:", this.ingredientes.join(", "));
    console.log("MODO DE PREPARO:", this.modoDePreparo);
  }
}

// lista de receitas
const listaReceitas = [
  new Receita(
    "Macarrao com salsicha",
    ["espaguete", "agua", "sal", "molho", "salsicha"],
    "ferver"
  ),
  new Receita(
    "Carbonara",
    ["espaguete", "agua", "ovos", "bacon", "queijo"],
    "cozir/ferver"
  ),
  new Receita(
    "Feijoada",
    ["feijao", "agua", "louro", "alho", "carne", "bacon", "salsicha"],
    "cozir/ferver"
  ),
  new Receita(
    "Lasanha",
    ["farinha", "ovos", "agua", "tomate", "alho", "oregano", "carne", "queijo"],
    "assar"
  ),
  new Receita("Panqueca", ["farinha", "ovos", "leite"], "fritar"),
  new Receita(
    "Stroggnoff",
    ["carne", "alho", "tomate", "creme de leite"],
    "fritar"
  ),
  new Receita(
    "Stroggnoff de frango",
    ["frango", "alho", "tomate", "creme de leite"],
    "fritar"
  ),
  new Receita(
    "Bolo de batata",
    ["batata", "agua", "ovos", "farinha", "queijo", "fermento"],
    "assar"
  ),
  new Receita(
    "Pao de queijo",
    ["farinha", "ovos", "queijo", "leite", "manteiga"],
    "assar"
  ),
  new Receita(
    "Bolinho de arroz",
    ["arroz", "agua", "ovos", "queijo", "farinha de rosca"],
    "fritar"
  ),
  new Receita("Bife acebolado", ["carne", "cebola"], "fritar"),
  new Receita(
    "Bolo de cenoura + Cobertura",
    [
      "cenouras",
      "ovos",
      "farinha",
      "leite",
      "fermento",
      "chocolate",
      "leite condensado",
      "manteiga",
    ],
    "assar"
  ),
  new Receita(
    "Bolo de chocolate",
    ["farinha", "ovos", "chocolate", "leite", "manteiga", "fermento"],
    "assar"
  ),
  new Receita(
    "Pizza",
    ["farinha", "agua", "fermento", "tomate", "queijo", "oregano"],
    "assar"
  ),
  new Receita("Omelete", ["ovos", "queijo", "tomate"], "fritar"),
  new Receita(
    "Sagu",
    ["sagu", "agua", "vinho", "canela em po"],
    "cozir/ferver"
  ),
  new Receita(
    "Bolinho de chuva",
    ["farinha", "ovos", "leite", "fermento", "canela em po"],
    "fritar"
  ),
  new Receita(
    "Brigadeiro chocolate",
    ["leite condensado", "chocolate", "manteiga"],
    "cozir/ferver"
  ),
  new Receita(
    "Brigadeiro branco",
    ["leite condensado", "creme de leite", "manteiga"],
    "cozir/ferver"
  ),
  new Receita(
    "Frango frito",
    ["frango", "alho", "ovos", "farinha de rosca"],
    "fritar"
  ),
];

// INGREDIENTES
const INGREDIENTES = [
  "espaguete",
  "feijao",
  "arroz",
  "farinha",
  "ovos",
  "queijo",
  "carne",
  "tomate",
  "oregano",
  "cenouras",
  "chocolate",
  "bacon",
  "louro",
  "alho",
  "pimentao",
  "salsicha",
  "alface",
  "maionese",
  "frango",
  "leite",
  "fermento",
  "canela em po",
  "sagu",
  "vinho",
  "leite condensado",
  "creme de leite",
  "manteiga",
  "agua",
  "farinha de rosca",
  "batata",
  "cebola",
  "sal",
];

// funcao de preparo
function preparar() {
  let falaringredientes = prompt(
    "Preparando um prato registrado! Digite os ingredientes (os separe por virgula):"
  );
  if (!falaringredientes) return;

  let ingredientesDigitados = falaringredientes
    .toLowerCase()
    .split(",")
    .map((item) => item.trim());

  let receitaEncontrada = listaReceitas.find((receita) => {
    return (
      receita.ingredientes.every((ing) =>
        ingredientesDigitados.includes(ing)
      ) && receita.ingredientes.length === ingredientesDigitados.length
    );
  });

  if (receitaEncontrada) {
    alert(`Parabens! Voce conseguiu!: ${receitaEncontrada.nome}`);
    console.log("Prato preparado:");
    receitaEncontrada.verReceita();
  } else {
    alert("Fez um x-ratao! Ou a receita nao esta cadastrada ainda.");
  }
}
// funcao de add receita
function novoPrato() {
  let nomedoPrato = prompt("Qual vai ser o nome do seu prato?:");
  let ingredientesNovoPrato = prompt(
    "Quais serao os ingredientes do seu prato?:"
  );
  let modopreparonovoprato = prompt(
    "Qual sera o modo de preparo do seu prato?:"
  );
  if (!nomedoPrato || !ingredientesNovoPrato || !modopreparonovoprato) {
    alert("Faltou digitar algo!");
    return;
  }
  let ingredientesArray = ingredientesNovoPrato
    .toLowerCase()
    .split(",")
    .map((item) => item.trim());
  let novaReceitaCriada = new Receita(
    nomedoPrato,
    ingredientesArray,
    modopreparonovoprato
  );

  listaReceitas.push(novaReceitaCriada);

  alert("Adicionou um novo prato!");
}

// INICIO DO JOGO
alert("Inicio de jogo!");
let acao = 0;
while (acao !== 4 && acao !== null) {
  acao = parseIntprompt(
    "O que deseja fazer?\n1. Iniciar (digitar ingredientes)\n2. Ver Receitas\n3. Criar receita\n4. Cancelar"
  );

  if (acao == 1) {
    preparar();
  } else if (acao == 2) {
    console.log("Receitas ja cadastradas");
    listaReceitas.forEach((receita) => receita.verReceita());
  } else if (acao == 3) {
    novoPrato();
  } else if (acao == 4 || acao === null) {
    alert("Voce encerrou o jogo! Fim!");
  } else {
    alert("Entrada invalida! Tente novamente.");
  }
}