// let homeScoreBtnOne = document.getElementById("home-score-btn-1")
// let homeStoreEl =document.getElementById("home-score")
 let homeScore = 0
 let homeScoreBtnOne
 let guestScore = 0
 let guestScoreBtn
// function increaseHomeScoreOne(){
//     homeScore += 1
//     homeStoreEl.textContent = homeScore
// }

document.getElementById("home-score").onclick= function(){
   homeScore += 1
   document.getElementById("homeScoreBtnOne").innerHTML =homeScore
}
document.getElementById("home-score2").onclick= function(){
    homeScore += 2
    document.getElementById("homeScoreBtnOne").innerHTML =homeScore
 }
 document.getElementById("home-score3").onclick= function(){
    homeScore += 3
    document.getElementById("homeScoreBtnOne").innerHTML =homeScore
 }
 document.getElementById("guest-score1").onclick= function(){
    guestScore += 1
    document.getElementById("guestScoreBtn").innerHTML =guestScore
 }
 document.getElementById("guest-score2").onclick= function(){
    guestScore += 2
    document.getElementById("guestScoreBtn").innerHTML =guestScore
 }
 document.getElementById("guest-score3").onclick= function(){
    guestScore += 3
    document.getElementById("guestScoreBtn").innerHTML =guestScore
 }