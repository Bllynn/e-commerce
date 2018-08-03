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
    deleteItem: async (req,res)=>{
        try{
            const db = req.app.get('db')
            let item = await db.delete_Item([+req.params.id])
            return res.status(200).send(item)
        }catch(err){
            console.log(err)
        }
    },
    addToCart: async(req,res)=>{
        try{
            const db = req.app.get('db')
            let {id}=req.body
            console.log(id)
            let  newItem= await db.add_To_Cart([id]);
                return res.status(200).send(newItem)
        }catch(err){
                console.log(err)
            }
        }
};
