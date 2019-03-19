/****************/
function getPieTypes(req, res) {
   const pieResults = [
      {id: 12, type: "peach"},
      {id: 13, type: "cherry"},
      {id: 14, type: "pecan"},
      {id: 15, type: "pizza"}
   ]

   res.json(pieResults)
}

/****************/
function getPie(req, res) {
   const id = req.params.id

   console.log(`Request for pie id: ${id}`)

   const result = { 
      id: id,
      type: "blackberry",
      calories: 150,
      quantity: 3
   }

   res.json(result)
}

/****************/
function createPie(req, res){
   console.log("creating a pie...")

   const type = req.body.type
   const quantity = req.body.quantity
   const calories = req.body.calories
   const result = {type:type, quantity:quantity, calories:calories}
   console.log(`type: ${type}, quantity: ${quantity}, calories: ${calories}`)
   res.json(result)
}

module.exports = {
   createPie: createPie,
   getPie: getPie,
   getPieTypes: getPieTypes
   
}