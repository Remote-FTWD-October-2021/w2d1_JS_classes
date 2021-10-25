

// NOMBRES
// Santi
// Nacho
// Jose Gutierrez
// Nerea
//Aarón
// Federico Altava
// Federico Gómez
//Guillem
//Tatiana
//Rocio
//Raquel 
//Fernando
// Nando 😬
//José Luis

class MyFirstClass {


  //Atributos: funciones aparte, son cualquier tipo de dato dentro de las clases

  //El metodo constructor nos lo da JavaScript por defeceto y es necesario para poder crear atributos dentro de mi clase. Todos los atributos que quiera crear para esta clase tienen que ir dentro de las llaves del constructor.
  constructor(){
    this.name = 'Jaime',
    this.color = 'coral',
    this.age = 27
  }

  //Metodos: son funciones dentro de clases
  saludar(){
    console.log('Hola Ironhack!')
  }

}


// const myFirstObject = new MyFirstClass()
// const other = new MyFirstClass()

// console.log(myFirstObject)
// console.log(other)

// class Person {
//   //Atributos
//   constructor(){
//     this.health = 100;
//     this.food = 3;
//     this.weapons = [];
//     this.weight = this.weapons.length;
//     this.base = {
//       city: 'XXX',
//       street: 'XXX',
//       number: 0
//     };
//   }

//   //Metodos
//   eat(){
//     if(this.health === 100){
//       return 'No puedes comer, tienes la vida llena'
//     } else {
//       this.food--
//       if(this.health < 90){
//         this.health += 10
//       } else if(this.health >= 90){
//         this.health = 100
//     }
//   } 
// }













class Person {
  //Atributos
  constructor(health, food, base){
    this.maxHealth = health;
    this.health = health;
    this.food = food;
    this.weapons = [];
    this.weight = this.weapons.length;
    this.base = base
  }

  //Metodos
  eat(){
    if(this.health === this.maxHealth){
      return 'No puedes comer, tienes la vida llena'
    } else {
      this.food--
      if(this.health < (this.maxHealth - 10)){
        this.health += 10
      } else if(this.health >= (this.maxHealth - 10)){
        this.health = this.maxHealth
      }
    }
  } 
}

class Elf extends Person{
  constructor(health, food, weapons){
    super(health, food) //Con el super() accedo al constructor de la clase que estoy extendiendo
    this.base = {
      city: 'XXX',
      street: 'XXX',
      number: 0
    };
  }
}

const other = new Person(20, 20, {
  city: 'XXX',
  street: 'XXX',
  number: 0
})

const prueba = new Elf(200, 50)
console.log(prueba)


// valores fijos
// OOP

// const animals = ['dog', 'cat', 'jaguar']

const animals = new Array('dog', 'cat', 'jaguar')

