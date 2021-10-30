const tweets = require('../data/tweets.json');

module.exports = (app) => {
    
    const findAllTweets = (req, res) => {
        res.json(tweets);
    }
    
    app.get('/api/tweets', findAllTweets);
};
