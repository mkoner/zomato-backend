const mongoose = require('mongoose');

const schema= mongoose.Schema;



const OrderSchema=  new schema({
    amount: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required : true
    },
    mobileNo: {
        type: String,
        required: true
    },
    paymentSuccess: {
        type: Boolean,
        required: true
    }

})

module.exports= mongoose.model('Orders',OrderSchema,'order');