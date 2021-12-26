# kaholo-plugin-twilio
Kaholo plugin for integration with Twilio API.

##  Settings
1. Account SID (String) **Required If Not In Action** - The SID of the default Twilio account to authenticate to.
2. Auth Token (Vault) **Required If Not In Action** - The authentication token for the default Twilio account.

## Method: Send SMS
Send SMS

## Parameters
1. Account SID (String) **Required If Not In Settings** - The SID of the Twilio account to authenticate to.
2. Auth Token (Vault) **Required If Not In Settings** - The authentication token for the Twilio account.
3. From (String) **Required** - The phone number to send the SMS from. Must be registered in Twilio.
4. To (Text) **Required** - Phone numbers to send the SMS to. Can enter multiple phone numbers by seperating each with a new line.
5. SMS Body (Text) **Required** - The content of the message sent in the SMS.
