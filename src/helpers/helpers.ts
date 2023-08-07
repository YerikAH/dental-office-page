export function descountPrice(price: number, descount: number){
  return price - ((descount / 100) * price)
}
export function numberToPrice(price:number){
  let numberToArray = `${price}`.split("").reverse()
  const newPrice = []
  if(numberToArray.length < 4) return `${price}`
  for (let i = 0; i < numberToArray.length; i++){
    const element = numberToArray[i]
    if((i + 1) % 3 === 0){
      newPrice.push(`${element}`) 
      newPrice.push(",")
      continue
    }
    newPrice.push(`${element}`) 
  }
  
  if(numberToArray.length % 3 === 0){
    newPrice.pop()
    return newPrice.reverse().join("")
  }
  return newPrice.reverse().join("") 
}
