const workout = [
  {muscleGroups: 'Upper body push day', day: 'Monday', groupOne: 'bench press', groupTwo: 'military press', triceps: 'cable pulldowns'},
  {muscleGroups: 'Leg day', day: 'Wednesday', groupOne: 'leg press', groupTwo: 'leg curls'},
  {muscleGroups: 'Upper body pull day', day: 'Friday', groupOne: 'barbell rows', groupTwo: 'dumbbell curls'},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, workout)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

export { 
	find
}