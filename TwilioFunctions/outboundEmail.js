
exports.handler = function(context, event, callback) {
    console.log('the email subject is ' + event.subject);
    console.log('the email body is ' + event.text);
    console.log('the email recipient is ' + event.to);
    
    const axios = require('axios')
    axios({
        auth: {
        password: 'your mailgun API key',
        username: 'api'
      },
      method:'post',
      params: {
        from: 'your mailgun domain',
        subject: event.subject,
        text: event.text,
        to: event.to
      },
      url:'your mailgun routes',

    }).then(response => {
        response.appendHeader("Access-Control-Allow-Origin", "*");
        response.appendHeader("Access-Control-Allow-Methods", "POST, GET");
        response.appendHeader(
        "Access-Control-Allow-Headers",
        "Authorization, Content-Type"
        );
        response.appendHeader("Content-Type", "application/json");
        
        callback(null, response);

            console.log(response);    
            console.log(response.data);
          })
          
   
};