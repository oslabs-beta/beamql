gqlController = {}

gqlController.makeSchema = async function (req, res, next) {
  try{
    const { allTables, primaryKeys, foreignKeys } = res.body.data
    const final = mutationDaddy(info)
    res.locals.info = info
    return next()
  } catch (err) {

  }

}

gqlController.makeResolver = function() {

}


const { primaryKeys } = res.locals
