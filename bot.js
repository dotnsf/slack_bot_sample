
/* K.Kimura */
/* add following lines into bot.js */
controller.hears(['double (.*)'],'direct_mention',function(bot, message) {
    var matches = message.text.match(/double (.*)/i);
    var msg = matches[1];
    bot.reply(message,msg+' '+msg);
});

controller.hears(['(usd|eur|gbp|aud|nzd|cad|chf)'],'direct_mention',function(bot, message) {
    var matches = message.text.match(/(usd|eur|gbp|aud|nzd|cad|chf)/i);
    var cur = matches[0].toUpperCase() + "JPY";
    var request = require( 'request' );
    url = 'http://fx.mybluemix.net/';
    request( url, function( error, response, body ){
      if( !error && response.statusCode == 200 ){
        var json = JSON.parse( body );
        var dt = json['datetime'];
        var rate = json['rate'];
        var p = rate[cur];
        bot.reply( message, dt + ' ' + p );
      }
    });
});


