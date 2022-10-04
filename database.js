require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')
var Products=[]

const loadProducts = async () => {
    Products=[]
    try{
        await connectDB(process.env.MONGO_URI)
        await (await Product.find()).forEach((data)=>
        {Products.push({name:data.Name,price:data.Price,category:data.Category})})
//        await Product.create(jsonProducts)
        
        }
    catch(err){
    console.log(err)
    
        }
    
}

const getProducts=()=>{return Products}


module.exports={getProducts,loadProducts}