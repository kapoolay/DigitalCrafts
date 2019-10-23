function renderTweets(tweets) {
    var tweetsHTML = tweets.map(function(tweet){
        return `
            <div class="bg-white p-2 m-2 w-50">
                <div class="d-flex align-items-center">
                    <img width="50" src="${tweet.user.profilePic}" />
                    <div class="mt-4 ml-2">
                        <b>${tweet.user.username}</b>
                        ${tweet.user.isVerified ? '<img width="15" src="twitterIcons/check-circle.svg" />' : ''}
                        <p>${tweet.user.handle}</p>
                        
                    </div>
                </div>
                <h3>${tweet.text}</h3>
                <hr />
                <div class="d-flex text-secondary">
                    <img style="opacity: 0.62" src="twitterIcons/message-circle.svg" />
                    <b class="mr-3 ml-1">${tweet.replies}</b>
                    <img style="opacity: 0.62" src="twitterIcons/repeat.svg" />
                    <b class="mr-3 ml-1">${tweet.retweets}</b>
                    <img style="opacity: 0.62" src="twitterIcons/heart.svg" />
                    <b class="mr-3 ml-1">${tweet.likes}</b>
                </div>
            </div>
        `
    });

    return `
        <div class="d-flex flex-column justify-content-start align-items-center mt-5">
            ${tweetsHTML.join('')}
        </div>
    `
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