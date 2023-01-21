const fs = require("fs");
var cloudinary = require("cloudinary").v2;

const converter = async (req, res, next) => {
  console.log("req from top", req.files);
  cloudinary.config({
    cloud_name: "dy5cxcpv1",
    api_key: "688439182555579",
    api_secret: "DYdOe9Xao56lLsiKrpjD_LH5wAs",
    secure: true,
  });
  if (req.files.tempFilePath) {
    try {
      const filePath = req.files.tempFilePath;
      console.log("file path", filePath);
      await cloudinary.uploader.upload(filePath, (err, response) => {
        if (err) {
          console.log("error on cloudinary", err);
        } else {
          console.log("res of cloudinary", response);
          req.body.image = response.url;
          fs.unlinkSync(req.files.image.tempFilePath);
          next();
        }
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    next();
  }
};
module.exports = {
  converter,
};
