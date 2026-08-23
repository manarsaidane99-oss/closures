function ex1(){
  let c=0
  function compteur(){
    return c+=1
  }
  return compteur
}
let counter=ex1()
console.log(counter())
console.log(counter())
console.log(counter())

function ex2(x){
 
  function compteur1(){
    return x+=1
  }
  return compteur1
}
let counter1=ex2(100)
console.log(counter1())
console.log(counter1())
console.log(counter1())


function pow(exponent) {
  function x(nombre){
    return nombre**exponent
  }
  return x
}

let square = pow(2)
let cube = pow(3)
let power4 = pow(4)
console.log(square(5))
console.log(cube(3))
console.log(power4(4))