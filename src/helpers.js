const twilio = require('twilio');

function getClient(settings, params){
    const accountSid = params.accountSid || settings.accountSid;
    const authToken = params.authToken || settings.authToken;
    if (!accountSid || !authToken) {
        throw "Didn't provide authentication credentials";
    }
    return new twilio(settings.accountSid, settings.authToken);
}

module.exports = {
    getClient
}