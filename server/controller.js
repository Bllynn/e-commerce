module.exports={
    getProducts: async (req, res) => {
        try{
            const db = req.app.get('db')
            let products = await db.get_Products()
            return res.status(200).send(products)
            
        }catch(err){
            console.log(err)
        }
    },
    deleteProduct: async(req,res)=>{
        try{
            const db= req.app.get('db')
            let newCart = await db.delete_Product(+req.params.id)
            return res.status(200).send(newCart)
        }catch(err){
            res.status(500).send(err)
                console.log(err)
            }
    },
    deleteCart: async (req,res)=>{
        try{
            const db = req.app.get('db')
            let item = await db.delete_Cart()
            return res.status(200).send(item)
        }catch(err){
            res.status(500).send(err)
                console.log(err)
            }
    },
    deleteItem: async (req,res)=>{
        try{
            let {id} = req.body
            const db = req.app.get('db')
                 let item = await db.delete_Item([id])
                 if(item[0].quantity<=0){
                    let checkedItem = await db.delete_Product([id])
                    return res.status(200).send(checkedItem)
                 }else{
                     return res.status(200).send(item)
                 }
                }catch(err){
                    res.status(500).send(err)
                        console.log(err)
                    }
    },
    addToCart: async(req,res)=>{
        try{
            const db = req.app.get('db')
            let {id}=req.body
            
            const  item= await db.check_Cart([id]);
            
                if(item.length == 0){
                    const newItem = await db.add_To_Cart([id])
                    
                    return res.status(200).send(newItem);
                }else{
                    const updatedItem = await db.update_Quantity([id])
                    
                    return res.status(200).send(updatedItem);
                }
        }catch(err){
            res.status(500).send(err)
                console.log(err)
            }
    },
    getCart: async(req,res)=>{
        try{
            const db = req.app.get('db')
            let cart = await db.get_Cart()
            return res.status(200).send(cart)
            }catch(err){res.sendStatus(500)
                console.log(err)
            }
        },
    cartDetails: async(req,res)=>{
        try{
            const db=req.app.get('db')
            let details = await db.cart_Details()
            
            return res.status(200).send(details)
        }catch(err){
            res.status(500).send(err)
                console.log(err)
            }
    }
};
