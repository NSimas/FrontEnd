var nome= "'He-Men'";
var frase= "Eu tenho a força";
var imp= nome + ': ' + frase;
console.log(imp);
console.log(typeof imp);

var arr = [2,3,4,5,6];
arr[1] = 'Testando<br>';
document.write(arr[1]+'<br>');
document.write("Opa<br>Tudobem?"+'<br>');
document.write(arr+'<br>');

var a1 = 2;
var b1 = 3;

document.write(a1+b1+'<br>');
document.write(a1-b1+'<br>');
document.write(a1*b1+'<br>');
document.write(a1/b1+'<br>');

var horario = 8.01;

if(horario >= 9 && horario<=12) {
    document.write("Aula do Filipe"+'<br>') ;
} else if(horario>12 && horario<=13.05) {
    document.write("Hora do almoço"+'<br>');
} else if(horario> 13.05 && horario <=18) {
    document.write("Agora é o Nana"+'<br>');
} else {
    document.write("Fora do horário de aula"+'<br>');
}
var txt1 = prompt('Digite koké string');
document.write(txt1 +'<br>' );

var txt2 = parseInt(prompt('Digite um número inteiro!'));
document.write(txt2+'<br>' );

var txt3 = parseFloat(prompt('Digite um número real.'));
document.write(txt3 +'<br>' );