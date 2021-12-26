const { getClient } = require("./helpers");

async function sendSms(action, settings){
    const client = getClient(settings, action.params);
    const { from, body } = action.params;
    const to = action.params.to.split("\n").map(phoneNum => phoneNum.trim());
    return Promise.all(to.map(toNum => client.messages.create({
        body: from,
        to: toNum, 
        from: body
    })));
} 

module.exports = {
    sendSms
}