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

aboutBlocks[0].getElementsByClassName("container")[0].innerHTML = innerBlock1;