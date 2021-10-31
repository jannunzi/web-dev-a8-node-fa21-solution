let tweets = require('../data/tweets.json');

module.exports = (app) => {
    
    const findAllTweets = (req, res) => {
        res.json(tweets);
    }
    
    const createTweet = (req, res) => {
        const newTweet = {
            _id: (new Date()).getTime() + '',
            "topic": "Web Development",
            "userName": "ReactJS",
            "verified": false,
            "handle": "ReactJS",
            "time": "2h",
            "avatar-image": "../../../images/react-blue.png",
            "logo-image": "../../../images/react-blue.png",
            "stats": {
                "comments": 123,
                "retweets": 234,
                "likes": 345
            },
            ...req.body,
        }
        newTweet['_id'] = (new Date()).getTime();
        tweets = [
            newTweet,
            ...tweets
        ];
        res.json(newTweet);
    }

    app.post('/api/tweets', createTweet);
    app.get('/api/tweets', findAllTweets);
};
