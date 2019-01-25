var aboutBlocks = document.body.getElementsByClassName("about-block");

var innerBlock1 = '<div class="about-inner"><img src="img/aboutBlocks/rewards/eliteBadge.png" alt="eliteBadge">' +
                  '<div class="about-block-description"><h2 class="about-title">We reward the Elites!</h2>' +
                  '<p class="about-text">Are you an Elite author in the Envato Marketplaces? If so we are proud of you! We want to give our thanks in<br>' +
                  'achieving great success in the marketplace and we want to make known to the people of our country that<br>' +
                  'you are amazing! Our Elite gifting program includes giving you special merchandize from our community and<br>' +
                  'also promote your works in our community.<br><br>' +
                  'All you have to do is contact us by clicking the button here and then its just going to the event, saying<br>' +
                  'something motivational and taking that swag while looking amazing infront of thousands of other<br>' +
                  'community members.<br><br>*Be advised, we will only give you Elite thank you swag for each level of elite you cross.<br>' +
                  'That means if you do not cross to the next elite level before the next event, you cannot claim your prizes.</p>' +
                  '<button class="about-button">Bring on the swag!</button></div><div>';

var innerBlock2 = '<div class="about-inner sponsors-inner" id="sponsors"><h2 class="about-title sponsors-title">Sponsor Our Event!</h2>' +
                  '<p class="about-text sponsors-text">If you want to help us making this event lively and successful,' +
                  'help us by sponsoring our event!<br>This will help us bring in more people, have better livestreaming' +
                  'equipment, maybe even our own chef!<br>You can also sponsor us by giving away free swag at the event!<br><br>' +
                  'Here’s who have sponsored us already:</p><div class="sponsors-logo"><div class="mountains-img">'+
                  '<img src="img/aboutBlocks/sponsors/mountains.png" alt="mountains"><img src="img/aboutBlocks/sponsors/mountainsHouse.png" alt="house">' +
                  '</div><img height="75px" src="img/aboutBlocks/sponsors/snake.png" alt="snake"><img height="28px" src="img/aboutBlocks/sponsors/evanto.png" alt="evanto">' + 
                  '</div><button class="about-button sponsors-button">Sponsor Us!</button></div>'

aboutBlocks[0].getElementsByClassName("container")[0].innerHTML = innerBlock1;

aboutBlocks[1].getElementsByClassName("container")[0].innerHTML = innerBlock2;
aboutBlocks[1].getElementsByClassName("container")[0].setAttribute('class', 'sponsors-container container');