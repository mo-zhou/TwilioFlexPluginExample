exports.handler = function (context, event, callback) {
    var got = require('got');

    const email = {
        "To": event.recipient,
        "From": event.sender,
        "subject": event.subject,
        "Body": event["body-plain"]
    };
    console.log(email);

    got.post('https://{{your-runtime-domain}}/inboundmessage',
        {
            body: email,
            headers: {
                'accept': 'application/json',
                'X-Twilio-Signature': ''
            },
            json: true
        }).then(function (response) {
            console.log(response.body)
            callback(null);

        }).catch(function (error) {
            callback(error)
        });
};