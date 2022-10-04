const express=require('express');
const FS=require('fs');
const app=express();
const index=FS.readFileSync("./public/index.html",()=>{})
const port = 3000;
const {getProductList} = require('./controller/controller.js');
const {getProducts,loadProducts}=require("./database")
app.use(express.urlencoded());
loadProducts()
//static assets

app.get("/",(req,res)=>{
    const {query}=req
    if(query.search==undefined){query.search=""}
    if(query.category==undefined){query.category=""}
    if(query.filter==undefined){query.filter="A To Z"}
    let productList =query.search.replaceAll("%20"," ")
    let curProduct = query.category.replaceAll("%20"," ")
    let filterBy=query.filter.replaceAll("%20"," ")
    
    res.send(index.toString().replace("PRODUCTLISTBLOCK",getProductList(filterBy,curProduct,productList)));
})
app.use(express.static("./public"))
//parse json




//server
app.listen(port,()=>{
    console.log(`Server listening on ${port}`)
})
