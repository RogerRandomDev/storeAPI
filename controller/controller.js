const {getProducts}=require("../database")


const buildProduct=(product)=>{
    return `<div class="border rounded text-bg-secondary col-sm" style="margin:0 0 0 0;"><h1>${product.name}</h1><h6>${product.category}</h6><h3>$${product.price}</h3></div>`
}



const getProductList=(filterType="",category="",search="")=>{
    let out=getProducts();
    search=search.toLowerCase()
    category=category.toLocaleLowerCase()
    filterType=filterType.toLowerCase()
    out=out.filter(product=>(product.category.toLowerCase()==category||category.toLowerCase()=="all")&&product.name.toLowerCase().includes(search))
    switch(filterType.toLowerCase()){
        case "ascending":out.sort((a,b)=>a.price-b.price);break
        case "descending":out.sort((a,b)=>b.price-a.price);break
        case "a to z":out.sort((a,b)=>{
            if (a.name < b.name) {
                return -1;
              }
              if (a.name > b.name) {
                return 1;
              }
              return 0;
        });break
        case "z to a":out.sort((a,b)=>{
            if (a.name < b.name) {
                return 1;
              }
              if (a.name > b.name) {
                return -1;
              }
              return 0;
        });break
        default:break
    }
    console.log(filterType=="a to z")
    var id=0;
    return "<div>"+out.map(product=>{
        var out=""
        if(id%3==0){out="</div><div class='row'>"}
        id+=1
        return out+buildProduct(product)})+"</div>"
}




module.exports={getProductList}