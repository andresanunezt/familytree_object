

class User {

constructor(name,parents,children){

this.name = name;
this.parents = parents;
this.children = children;

}

childOf() {

  return `${this.name} is a child of ${this.parents[0]} and ${this.parents[1]}`
  
}

parentOf(){
  return `${this.name} is a parent to  ${this.children.name} `

}


}






const me = new User('Andrés Alejandro Nuñez Tinajero',['Karina Tinajero Rosario', 'Andrés Nuñez Betancourt'])

const mom = new User('Karina Tinajero Rosario',['Aida Rosario Rosario', 'Andrés Tinajero Castro'], me)

const dad = new User('Andrés Nuñez Betancourt',['Basilia Betancourt', 'Andrés Nuñez'], me)

console.log(me, mom, dad)
console.log(me.childOf())
console.log(dad.childOf(),"and" )
console.log(mom.parentOf())
