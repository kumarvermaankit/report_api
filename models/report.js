const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const ReportSchema = new Schema({


    userID: {
        default: "none",
        type: "String"
    },
    marketID: {
        default: "none",
        type: "String"
    },

    marketName: {
        default: "none",
        type: "String"
    },
    cmdtyID: {
        default: "none",
        type: "String"
    },
    marketType: {
        default: "none",
        type: "String"
    },
    cmdtyName: {
        default: "none",
        type: "String"
    },
    priceUnit: {
        default: "none",
        type: "String"
    },
    convFctr: {
        default: 0,
        type: "Number"
    },
    minPrice: {
        default: 0,
        type: "Number"
    },
    maxPrice: {
        default: 0,
        type: "Number"
    },

}, { timestamps: true })

const ReportDetails = mongoose.model("ReportDetails", ReportSchema);

module.exports = ReportDetails