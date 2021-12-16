const express = require("express");

const mongoose = require("mongoose")

const router = express.Router()


const ReportDetails = require("../models/report");


router.post("/", (req, res, next) => {

    console.log("htkekn")

    const newReport = {
        userID: req.body.userID,
        marketID: req.body.marketID,
        marketName: req.body.marketName,
        cmdtyID: req.body.cmdtyID,
        marketType: req.body.marketType,
        cmdtyName: req.body.cmdtyName,
        priceUnit: req.body.priceUnit,
        convFctr: req.body.convFctr,
        minPrice: req.body.minPrice,
        maxPrice: req.body.maxPrice
    }

    ReportDetails.create(newReport)
        .then((detail) => {

            res.status(200).json({ status: "success", reportID: detail._id })
        })
        .catch((err) => {
            res.status(304).json({ err: result });
        })


})

router.get("/", (req, res, next) => {


    ReportDetails.find({ cmdtyID: req.query.cmdtyID })
        .then((result) => {

            res.status(200).json({ reportDetails: result });
        })

        .catch((err) => {
            res.status(404).json({ err: result });
        })
})


module.exports = router