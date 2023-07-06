import FromModel from "../models/formModel";

export const createForm = async (req, res) => {
    try{
        const froms = await FromModel.findAll();
        res.json(froms);
    }catch(error){
        console.log(error);{
            res.json({message: "Error en el servidor"});
        }

    }
}


export const getFrom = (req, res) => {
     try {
       const from = FromModel.findAll({

            where: {id: req.params.id}
        })
        res.json(from);
     } catch (error) {
        
     }
}