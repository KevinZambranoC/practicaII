
// profe aqui te dejo mi logica de programación 

//En este apartado profe, yo realizo la equivalencia de un numero decimal entero, a un numero glifico, tal cual como lo decia en el archivo
//de la practica II
const GLIFOS: { simboloGlifo: string; valorNumerico: number } [] = 
[
  { simboloGlifo: 'Ξ', valorNumerico: 1000 },    
  { simboloGlifo: 'ΦΞ', valorNumerico: 900 },     
  { simboloGlifo: 'Ψ', valorNumerico: 500 },      
  { simboloGlifo: 'ΦΨ', valorNumerico: 400 },     
  { simboloGlifo: 'Φ', valorNumerico: 100 },      
  { simboloGlifo: 'ΩΦ', valorNumerico: 90 },      
  { simboloGlifo: 'Δ', valorNumerico: 50 },       
  { simboloGlifo: 'ΩΔ', valorNumerico: 40 },      
  { simboloGlifo: 'Ω', valorNumerico: 10 },       
  { simboloGlifo: 'ΣΩ', valorNumerico: 9 },       
  { simboloGlifo: 'Λ', valorNumerico: 5 },       
  { simboloGlifo: 'ΣΛ', valorNumerico: 4 },       
  { simboloGlifo: 'Σ', valorNumerico: 1 },        
];


//Profe aqui ya empieza lo bonito, aqui en esta funcion convierto el numero decimal entero a un glifo

export function convertToGlifos(numero: number): string 
{

  // Siguiendo la logica aqui es donde separo si esta en el rango o no
  if (!Number.isInteger(numero) || numero < 1 || numero > 3999) {
    throw new Error('Número fuera de rango (1-3999)');
  }

  let n = numero;
  let resultado = '';

  // y aqui recorro cada los simbolos de mayor a menor
  for (const { simboloGlifo, valorNumerico } of GLIFOS) {

    // aqui resto el valor al numero y voy sumando el simbolo
    while (n >= valorNumerico) {
      resultado += simboloGlifo;
      n -= valorNumerico;
    }
    // y aqui es donde rompo el ciclo cuando se cumpla las condiciones
    if (n === 0) break;
  }

  return resultado;
}

// profe aqui proceso todo lo archivos o escrito que se introdusca en el input
// lo bonito de esto es que al momento de realizarse hice que se dividisese en lineas, hice que validara, 
// y que convierta o marque el error, y devuelva la salida ya perfecta
export function processLines(input: string): string[] {
  const lines = input.split(/\r?\n/);
  const output: string[] = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();
    
    // aqui valido si es un digito
    if (!/^[0-9]+$/.test(line)) {
      output.push(`${line} ERROR: Formato de entrada inválido. No es un número.`);
      continue;
    }

    // parseo y valido el rango
    const x = parseInt(line, 10);
    if (x < 1 || x > 3999) {
      output.push(`${line} ERROR: Número fuera de rango (1-3999).`);
      continue;
    }

    // y si sigue convierto y agrego de una ves el resultado con esto de aqui
    const gl = convertToGlifos(x);
    output.push(`${x} ${gl}`);

    // aqui rompo ciclo si es 0, que es cuando ya no tenga mas entradas
    if (line === '0') break;

  }

  return output;
}
