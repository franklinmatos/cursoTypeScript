let canal: string = 'Canal do Dev';
console.log(canal);

function soma(a: any, b: any) {
  return a + b;
}

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function saudar(isManha: boolean): string {
  let saudacao: string;
  if (isManha) {
    saudacao = 'Bom dia!';
  } else saudacao = 'Tenha uma boa vida!';

  return saudacao;
}
