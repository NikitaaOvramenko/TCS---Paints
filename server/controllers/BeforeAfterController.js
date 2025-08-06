
const path = require('path')
const fs = require('fs')
const uuid = require('uuid')

const {BeforeAfterPic} = require('../models/models')


class BeforeAfterController{

    async getAll(req,res){
       const all =  await BeforeAfterPic.findAll({where:{}})
       return res.json(all)
    }

    async create(req,res){

        try {
        const {name,type} = req.body
        const {beforePic,afterPic} = req.files

        let before = uuid.v4() + ".jpg"
        let after = uuid.v4() + ".jpg"


        // const staicBeforePath = path.resolve(__dirname,'..',"media","beforePics")
        // const staicAfterPath = path.resolve(__dirname,'..',"media","afterPics")

        beforePic.mv(path.resolve(__dirname,'..',"media","beforePics",before))
        afterPic.mv(path.resolve(__dirname,'..',"media","afterPics",after))    


       const newPic = await BeforeAfterPic.create({
        name:name,
        type:type,
        beforePic:before,
        afterPic:after
       })

      return res.json(newPic)    
        } catch (error) {

            return res.json(error)
            
        }
        
    }
}

module.exports = new BeforeAfterController()