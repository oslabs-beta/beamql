const terrified = (nonJoinTables, fktObj, nullable) => {
  const typeObj = {};
  
  //initial type creator
  for (const key in nonJoinTables) { // key: people / starship spec
    //add non foreign key value pairs to type obj
    if (!fktObj[key]) { //
      typeObj[key] = nonJoinTables[key]; //no touch after this step
    } else {
      // if foreign key, create an object, to be filled with its column names
      typeObj[key] = {};
      
      for (const prop in nonJoinTables[key]) {//prop: key within the people obj / hyperdrive
        // loop through each table for column data and add column info
        if (prop in fktObj[key] === false) {
          typeObj[key][prop] = nonJoinTables[key][prop];
        } else {
          // but if it's in the foreign key object, it adds the type as a connection to a different table.
          const temp = fktObj[key][prop]
          typeObj[key][temp] = '['+capFirstLet(singular(temp))+']';
        }
      }
    }
  }
  
  //Add Foreign Types to Type obj
  for(let key in typeObj) { // key is people
    // look through values OF values OF fktasObj
    for(let fktObjKey in fktObj) {
      const arrFK = Object.values(fktObj[fktObjKey]) //values of objects in fktasobject as an array
      if (arrFK.includes(key)) {
        const valsToInput = arrFK.filter(elem => elem !== key)
        valsToInput.forEach(val => {
          // console.log(val)
          typeObj[key][val] = '['+capFirstLet(singular(val))+']'
        })
      }
    }
  }
  // is currently adding join tables, but we don't like that
  //Add Missing Foreign Keys/Types
  for (const njtCol in nonJoinTables) { //type object name i.e. planets, species, films
    for (const fktCol in fktObj) { //iterate through fktObj fktCol i.e. people, peope_in_films
      // console.log(`1082`)
      for (const col in fktObj[fktCol]) { //iterate through nested obj
        // console.log(`1083`)
        if (fktObj[fktCol][col] === njtCol) {
          if (Object.keys(typeObj[njtCol]).includes(fktCol)) {
              typeObj[njtCol][fktCol] = '['+capFirstLet(singular(fktCol))+']'
            }
      }
      }
    }
  }

  //convert typeObj values to GraphQL values 
  for (const table in typeObj) {
    for (const column in typeObj[table]) {
      switch (typeObj[table][column]) {
        case 'bigint':
          typeObj[table][column] = 'ID'
          break;
        case 'integer':
          typeObj[table][column] = 'Int'
          break;
        case 'character varying':
          typeObj[table][column] = 'String'
          break;
        case 'date':
          typeObj[table][column] = 'ID'
          break;
      }
      if (column === '_id') {
        typeObj[table][column] = 'ID'
      }
    }
  }

  //Signifies which fields are nullable
  for (const tbl in typeObj) {
    for (const column in nullable[tbl]) {
      let temp = typeObj[tbl][column]
      if(temp) typeObj[tbl][column] = temp + '!'
      }
  }



  
  return typeObj
  
}

console.log('terrified!!', terrified(nonJoinTable, fKeysObj, nullableObj));


