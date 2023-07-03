//Faça um programa para receber modelo, marca e valor de 5 smartphones utilizando de uma classe Celular. Depois inclua na classe método que mostre os dados de cada um nesse formato: Modelo: [modelo] | Marca: [marca] | Valor: [valor]. Chame o método para cada smartphone.

const io = require("../io")

class Celular {
    constructor(modelo, marca, valor) {
      this.modelo = modelo;
      this.marca = marca;
      this.valor = valor;
    }
  
    mostrarDados() {
      console.log(`Modelo: ${this.modelo} | Marca: ${this.marca} | Valor: R$ ${this.valor}`);
    }
  }
  
  const smartphone1 = new Celular("Modelo1", "Marca1", 1000);
  const smartphone2 = new Celular("Modelo2", "Marca2", 1500);
  const smartphone3 = new Celular("Modelo3", "Marca3", 2000);
  const smartphone4 = new Celular("Modelo4", "Marca4", 1200);
  const smartphone5 = new Celular("Modelo5", "Marca5", 1800);
  
  smartphone1.mostrarDados();
  smartphone2.mostrarDados();
  smartphone3.mostrarDados();
  smartphone4.mostrarDados();
  smartphone5.mostrarDados();  