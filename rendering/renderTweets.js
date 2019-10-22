
function renderTweets(tweets) {
    let tweetHTML = '';

    for (let i = 0; i < tweets.length; i++) {
        tweetHTML = `
        <div class = 'tweet-box'>
            <img class='profile-pic' src="${tweets[i].user.profilePic}" style="width: 50px; height: 50px;"/>
            <div class = 'twitter-top>
                <div class='name'>
                    <h4>${tweets[i].user.username}</h4>`
                    
                    `if (${tweets[i].user.isVerified}) {
                        tweetHTML += '<img src="https://ubisafe.org/images/twitter-transparent-badge-3.png" style="width:10px; height:10px;">'
                    }`

                    renTweets +=  '</div>'
                <h6>${tweets[i].user.handle}</h6>
                </div>

            </div>
        </div>
        `
    }

    return tweetHTML;
}

function tweets() {

    var tweetsAbstraction = [
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "The Moment That Truth Is Organized It Becomes A Lie",
            likes: 231,
            retweets: 12,
            replies: 21
        },
        {
            user: {
                handle: "@officialjaden",
                username: "Jaden Smith",
                isVerified: true,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "How Can Mirrors Be Real If Our Eyes Aren't Real",
            likes: 112,
            retweets: 2,
            replies: 24
        },
        {
            user: {
                handle: "@DigitalCrafts",
                username: "DigitalCrafts Bootcamp",
                isVerified: false,
                profilePic: "https://image.freepik.com/free-icon/user-image-with-black-background_318-34564.jpg"
            },
            text: "Sign up for our next course plz!",
            likes: 11,
            retweets: 3,
            replies: 14
        }
    ]

    var content = document.getElementById('content');
    content.innerHTML = renderTweets(tweetsAbstraction);

}