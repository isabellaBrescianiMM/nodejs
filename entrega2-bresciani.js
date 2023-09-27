const fs = require('fs')

class ProductManager{

    constructor(path){
        this.path = path
    }

    getNextID = (list) =>{
        return (list.length>0) ? list[list.length-1].id + 1 : 1
    }
    read = async () =>{
        if(fs.existsSync(this.path)){
            return fs.promises.readFile(this.path, 'utf-8').then(r => JSON.parse(r))
        }
        
    }
    write = list =>{
        fs.promises.writeFile(this.path, JSON.stringify(list))
    }

    getProducts = async () =>{
        const data = await this.read()
        return data
    }

    addProduct = async (obj) =>{
        const list = await this.read()
        const getNextID = this.getNextID(list)
        obj.id = NextID
        list.push(obj)
        await this.write(list)
        return obj
    }

    updateProduct = async (id,obj) => {
        obj.id = id
        const list = await this.read()
        for(let i=0; i<list.length; i++){
            if(list[i].id == id){
                list[i]=obj
                break
            }
        }
        await this.write(list)
    }
    updateProductIdx = async (id,obj) => {
        obj.id = id
        const list = await this.read()
        const idx = list.findIndex(e => e.id == id)
        if(idx<1)return
        list[idx] = obj
        
        await this.write(list)
    }
    getElementById = (id)=>{
        let elem
        this.list.forEach(element => {
            if(element.id == id){
                elem = element
            }else{
                console.log("El elemento no fue encontrado")
            }
        })
        return elem
    }


}


module.exports = ProductManager