const db = connect("mongodb://localhost:27017/foodApp")

db.User.drop()
db.Meal.drop()

db.User.insertMany([
    { email: "hello@hotmail.com", username: "test", password: "test", diet_req: ['vegan'], meal_plan_meals:[1,2,3,4,5]},
   
])

db.Meal.insertMany([
    {title: "Pasta", description:"Cool pasta", ingredients:"pasta", instructions: 'put pasta in pot', diet_req:["gluten"], reactions:1}
])