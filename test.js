class Pet {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  bark(){
    console.log(`${this.name} is barking`)
  }
}

let coco = new Pet(coco, 35)


class Cat extends Pet {
  meow(){
    console.log(`${this.name} meows`)
  }
}

class Dog extends Pet {
  
  constructor(name,age,location){
    super(name, age)
    this.location = location;
  }
}

