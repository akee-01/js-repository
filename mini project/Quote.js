console.log('Welcome');
var quote =[`If you want to be happy, Be Happy..!!!`,`Whoever is happy is make others happy.`,`“Be happy with what you have. Be excited about what you want.” `,`“Be happy. It’s one way of being wise.`,`“The best way to cheer yourself up is to try to cheer somebody else up.”`,`“Be happy for this moment. This moment is your life.”`];

function mutliQuote () {
    const QuoteLength = quote.length;
    console.log(QuoteLength);
    let random = Math.floor(Math.random()*(QuoteLength));
    // console.log(quote[random]);
    document.getElementById('QuoteDisplay').innerHTML= quote[random];
    {                          //Dark Mode
        QQ.classList.toggle('bg');
    }
    //  setInterval(mutliQuote,10000000000000 );
}