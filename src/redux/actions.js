export const addCar = (car) => {
 return {
  type: 'ADD_CAR',
  value: car
 }
}

export const removeCar = (index) => {
 console.log(index)
 return {
  type: 'REMOVE_CAR',
  value: index
 }
}