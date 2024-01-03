import fs from 'fs';
import chalk from 'chalk';



function extrairLinks(texto){
	const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
	const capturas = [...texto.matchAll(regex)];
	const resultados = capturas.map(capturas =>({[capturas[1]]:capturas[2]}))
	return resultados.length !== 0 ? resultados : 'não  há links no arquivo';
}




function trataErro(erro){
	console.log(erro);
	throw new Error(chalk.red(erro.code, 'não há arrquivo no diretório'));
}

//assync/await
async function pegaArquivo(caminhoDoArquivo){
	try{
	  const encoding = 'utf-8';
	  const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
	  return extrairLinks(texto);
	}catch(erro){
		trataErro(erro)
	}


}

//promisses com then

// function pegaArquivo(caminhoDoArquivo){
// 	const econding = 'utf-8';
// 	fs.promises
// 		.readFile(caminhoDoArquivo, econding)
// 		.then((texto)=> console.log(chalk.green(texto)))
// 		.catch(trataErro)
// }
 export default pegaArquivo;


