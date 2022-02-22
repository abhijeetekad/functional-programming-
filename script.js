// const numArr = [1,3,5,2,22,11,9,12];

// // const incrementByTwo = num => num+2;
// // let newArr = numArr.map(incrementByTwo)

// const newArr = numArr.reduce((acc,curr)=>{
//   // console.log(curr)
//   console.log(acc.even+curr)
//   if(curr%2==0){
//     return {...acc,even:acc.even+curr}
//   }else{
//     return {...acc,odd:acc.odd+curr};
//   }
// },{even:0,odd:0})
// console.log(newArr);

// const newArr = numArr.reduce((acc, curr)=>curr%2===0?{...acc,even:acc.even+curr}:{...acc,odd:acc.odd+curr},{even:0,odd:0});
// console.log(newArr);

//  const takeName = (name) =>{
//   //  console.log(name)
//    return addMsg(name);
//  }
//  const addMsg = (name) =>{
//    return `${name} says hello`;
//  }
//   const nameLogger = (name) => msg => console.log(`${name} says ${msg}`)
//   //  return addMsg(name);
//   const abhijeetLogger = nameLogger("Abhijeet")
//   // console.log(nameLogger)
// abhijeetLogger("hello says")

// nameLogger("raj")

// const takeName = (name) => msg => console.log(`${name} says ${msg}`);
// const nameLogger = takeName("abhijeet");
// nameLogger("hello") 

const textWithName = (msg) =>{
  return 
}