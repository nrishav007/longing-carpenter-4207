const mongoose=require("mongoose");
const wishSchema=mongoose.Schema({
    image:String,
    title:String,
    description:String,
    price:String,
    category:String,
    type:String,
    userID:String
});
const WishModel=mongoose.model("Bymewish",wishSchema);
module.exports=WishModel;