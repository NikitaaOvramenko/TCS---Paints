const sequelize = require('../db')
const {DataTypes} = require("sequelize")

const BeforeAfterPic = sequelize.define('before-after-pic',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING},
    type:{type:DataTypes.STRING},
    beforePic:{type:DataTypes.STRING},
    afterPic:{type:DataTypes.STRING}
})

const Pic = sequelize.define('pic',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
     type:{type:DataTypes.STRING},
    beforePic:{type:DataTypes.STRING},
    afterPic:{type:DataTypes.STRING}
})

module.exports = {BeforeAfterPic,Pic}