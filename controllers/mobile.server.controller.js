let Mobile = require('mongoose').model('Mobile');

async function getMobileList(req, res){
    try{
        console.log("calling getMobileList - start")
        let mobileList = await Mobile.find({status: "active"})
        res.status(200).send({items: mobileList});
    }
    catch(e){
        console.log("Error in getMobileList : ",e)
        res.status(500).send("Internal server error")
    }
}

async function saveMobileData(req, res){
    try{
        console.log("calling saveMobileData - start")
        let mobileData = req.body;
        let mobileModel = new Mobile();
    
        mobileModel.brand_name = mobileData.brand_name,
        mobileModel.variant= mobileData.variant,
        mobileModel.internal_storage = mobileData.internal_storage,
        mobileModel.external_storage = mobileData.external_storage,
        mobileModel.ram_size = mobileData.ram_size,
        mobileModel.pic = "",
        mobileModel.front_cam_spec = mobileData.front_cam_spec,
        mobileModel.back_cam_spec = mobileData.back_cam_spec,
        mobileModel.status = "active",
        mobileModel.price = mobileData.price,
        mobileModel.battery_power = mobileData.battery_power
        
        await mobileModel.save();

        res.status(200).send(mobileModel);
    }
    catch(e){
        console.log("Error in saveMobileData : ",e)
        res.status(500).send("Internal server error")
    }
}

async function updateMobileData(req, res){
    try{
        console.log("calling updateMobileData - start")
        let mobileData = req.body;
        let mobileModel = {};
    
        mobileModel.brand_name = mobileData.brand_name,
        mobileModel.variant= mobileData.variant,
        mobileModel.internal_storage = mobileData.internal_storage,
        mobileModel.external_storage = mobileData.external_storage,
        mobileModel.ram_size = mobileData.ram_size,
        mobileModel.pic = mobileData.pic || "",
        mobileModel.front_cam_spec = mobileData.front_cam_spec,
        mobileModel.back_cam_spec = mobileData.back_cam_spec,
        mobileModel.status = mobileData.status,
        mobileModel.price = mobileData.price,
        mobileModel.battery_power = mobileData.battery_power

        let updatedMobile = await Mobile.findOneAndUpdate({_id: mobileData._id}, {$set: mobileModel}, {new: true});

        res.status(200).send(updatedMobile)
    }
    catch(e){
        console.log("Error in updateMobileData : ",e)
        res.status(500).send("Internal server error")
    }
}

async function getMobileDataById(req, res){
    try{
        console.log("calling getMobileDataById - start");
        let id = req.param.id;
        if(!id){
            console.log("Missing parameter in deleteMobileDataById");
            return res.status(400).send("Bad Request");
        }
        let mobileData = await Mobile.findOne({_id: id});
        res.status(200).send(mobileData);
    }
    catch(e){
        console.log("Error in getMobileDataById : ",e)
        res.status(500).send("Internal server error")
    }
}

async function deleteMobileDataById(req, res){
    try{
        console.log("calling deleteMobileDataById - start");
        let id = req.param.id;
        if(!id){
            console.log("Missing parameter in deleteMobileDataById");
            return res.status(400).send("Bad Request");
        }
        let mobileData = await Mobile.findOneAndUpdate({_id: id}, {$set: {status: "deleted"}}, {new: true});
        res.status(200).send(mobileData);
    }
    catch(e){
        console.log("Error in deleteMobileDataById : ",e)
        res.status(500).send("Internal server error")
    }
}

module.exports.getMobileList = getMobileList;
module.exports.saveMobileData = saveMobileData;
module.exports.updateMobileData = updateMobileData;
module.exports.getMobileDataById = getMobileDataById;
module.exports.deleteMobileDataById = deleteMobileDataById;