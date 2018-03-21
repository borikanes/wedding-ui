var AWS = require('aws-sdk');
var s3 = new AWS.S3();
exports.handler = function(event, context, callback) {
    console.log('PRINTING EVENT HEADER'+ JSON.stringify(event))
    console.log(event.LocationCode);
    console.log(process.env.LOCATION_CODE)
    if (event.LocationCode === process.env.LOCATION_CODE){
        var params = { Bucket: process.env.S3_BUCKET, Key: process.env.S3_KEY };
        s3.getObject(params, function (err, data) {
            if (!err) {
                callback(null, data.Body.toString());
            } else {
                console.log(err);
                callback(err, 'error');
            }
        });
    } else {
        callback(new Error('Wrong Location Code'), 'Wrong location code passed in '+event.LocationCode);
    }
};