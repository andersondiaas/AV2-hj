var nome = document.querySelector("#nome");
nome.addEventListener("change",lerNome);

var nivel = document.querySelector("#nivel");
nivel.addEventListener("change", lerNivel);

var agilidade = document.querySelector("#agilidade");
agilidade.addEventListener("change", Defesa);

var armadura = document.querySelector("#armadura");
armadura.addEventListener("change", Defesa);

var forca = document.querySelector("#forca");
forca.addEventListener("change", Poder);

var defesa = document.querySelector("#defesa");
defesa.addEventListener("change", Defesa);

var poder = document.querySelector("#poder");
poder.addEventListener("change", Poder);

function lerNome() {
("Meu nome é " + nome.value)
  }

function lerNivel(){
  lerNome()
    if (nivel.value <= 5){
      console.log(nome.value + " [INICIANTE]")
      nome.value += " [INICIANTE]"
    }
    else{
    console.log(nome.value + " [VETERANO]")
      nome.value += " [VETERANO]"
  }
  nome.disabled = true
  nivel.disabled = true
}
function Defesa(){
  defesa.value = parseInt(agilidade.value) + parseInt(armadura.value);
}
function Poder() {
  poder.value = parseInt(forca.value - 10) / 2 + (parseInt(nivel.value) / 2);
}