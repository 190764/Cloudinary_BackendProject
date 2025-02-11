const express = require("express");
const router = express.Router();

const {localFileUpload, imageUpload,videoUpload, imageSizeReducer, getAllImage} = require("../controllers/fileUpload");

//api route
router.post("/localFileUpload",localFileUpload );
router.post("/imageUpload",imageUpload );
router.post("/videoUpload",videoUpload );
router.post("/imageSizeReducer", imageSizeReducer);
router.get("/getAllFiles/:email", getAllImage);

module.exports = router;