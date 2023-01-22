const fs = require("fs");
var cloudinary = require("cloudinary");
const converter = async (req, res, next) => {
  console.log("body", req.files);
  console.log("body", req.body);

  if (!req.files || !req.files.image) {
    return res.status(400).json({ error: "Image file is required" });
  }
  cloudinary.config({
    cloud_name: "dy5cxcpv1",
    api_key: "688439182555579",
    api_secret: "DYdOe9Xao56lLsiKrpjD_LH5wAs",
    secure: true,
  });
  try {
    const filePath = req.files.image.tempFilePath;
    let imageUrl = await cloudinary.uploader.upload(filePath, {
      folder: "nem-111-project",
    });
    console.log("image after upload", imageUrl);
    req.body.image = imageUrl.url;
    fs.unlinkSync(filePath);
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Failed to upload image" });
  }
};
module.exports = {
  converter,
};
