
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "dr7ajbbkm",
  api_key: "933395872964698",
  api_secret: "6c3zHDLwbklx9_5nS2chR4nUXpA",
});

const uploadToCloudinary = (path , folder ) =>{
    return cloudinary.v2.uploader.upload(path , {
        folder,
        resource_type:"auto"
    }).then((data)=>{
        return {url: data.url , public_id: data.public_id }
    }).catch((err)=>{
        console.log(err);
    })
}

const removeFromCloudinary = async(public_id)=>{
    await cloudinary.v2.uploader.destroy(public_id , (err , result) =>{
        console.log(result , err);
    })
};

module.exports = {uploadToCloudinary }