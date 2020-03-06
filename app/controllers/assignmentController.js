let db = require('../models');

module.exports = {
 
        findAll:    async (req, res) => {
            try{
                let tarefas = await db.Tarefa.findAll({})
                res.send(tarefas);
                res.status(200);
            }catch{
                res.status(400);
            }
        },
        create:  async (req, res) => {
            try{
                let tarefas = await db.Tarefa.create(req.body);
                console.log(req.body);
                res.send(tarefas);
                res.status(200);
            }catch{
                res.status(400);
            }
        },
        update: async(req,res)=>{
            try{
                let tarefas = await db.Tarefa.update(req.body,{where: {id: req.params.id}})
                res.sendStatus(204)
    
            }catch(error){
                res.sendStatus(400)
    
            }
        },
        findByPk: async(req, res) => {
            try{
                let tarefas = await db.Tarefa.findByPk(req.params.id)
                res.send(tarefas);

            }catch(error){
                console.log(error)
                res.send(error);
            }
        }, 
        delete: async(req, res) =>{
            try{
                lettarefas = await db.Tarefa.destroy({where: {id: req.params.id}})
                res.sendStatus(200);
            }catch(error){
                res.send(error)
            }
        }
}

