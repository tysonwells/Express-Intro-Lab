const workout = [
  {text: 'Upper body push day', day: 'Monday', chest: 'bench press', shoulders: 'military press', triceps: 'cable pulldowns'},
  {text: 'Leg day', day: 'Wednesday', quads: 'leg press', hams: 'leg curls'},
  {text: 'Upper body pull day', day: 'Friday', back: 'barbell rows', biceps: 'dumbbell curls'},
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