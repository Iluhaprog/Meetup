function getTimeRemaining(e){var n=Date.parse(e)-Date.parse(new Date),o=Math.floor(n/1e3%60),t=Math.floor(n/1e3/60%60),a=Math.floor(n/36e5%24);return{total:n,days:Math.floor(n/864e5),hours:a,minutes:t,seconds:o}}function initializeClock(e,n){var o=document.getElementById(e),t=o.querySelector(".count-down-clock__days"),a=o.querySelector(".count-down-clock__hours"),c=o.querySelector(".count-down-clock__minutes"),r=o.querySelector(".count-down-clock__seconds");function i(){var e=getTimeRemaining(n);t.innerHTML=e.days,a.innerHTML=("0"+e.hours).slice(-2),c.innerHTML=("0"+e.minutes).slice(-2),r.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(l)}i();var l=setInterval(i,1e3)}var deadline=new Date(Date.parse(new Date)+1728e6);initializeClock("count-down-clock",deadline);