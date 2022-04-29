/////////////////////////////////////
// object shorthand assignment
/////////////////////////////////////
// let name="noona"
// let age=17

// let person={
//   name,  // name과 name이 같을 경우에만 name으로 줄이기 가능
//   age    // age: age
// }

// console.log(person)




/////////////////////////////////////
// Destucturing
/////////////////////////////////////
// let person ={
//     name:"noona",
//     age:20
// }

// // let name = person.name
// // let age = person['age']
// let {name,age} = person // 위 두줄을 줄여서 사용가능

// console.log(name, age)


// // 배열도 가능
// let array = [1,2,3,4]
// let [a,b,...rest]=array

// console.log(a,b,rest)


/////////////////////////////////////
// spread
/////////////////////////////////////
// let person={name:"noona",age:12}

// let person2 = {...person}   // 깊은 복사
// let person3 = person        // 포인터

// console.log(person2)
// console.log(person3)

// console.log(person == person2)
// console.log(person == person3)

// // 깊은 복사하면서 변수 추가
// let person4 = {...person, address:"Vancouver"}
// console.log(person4)

// // 깊은 복사하면서 변수 변경
// let person5 = {...person, name:"jimin"}
// console.log(person5)

// 배열도 가능
// let a = [1,2]
// let b = [...a,3]

// console.log(b)

// let c=[...a,...b]
// console.log(c)


/////////////////////////////////////
// 삼항연산자
/////////////////////////////////////
let person ={name:"noona", age:17}

if(person){
    console.log(person.name)
}else{
    console.log("there is no person")
}

console.log(person?person.name:"there is no person")