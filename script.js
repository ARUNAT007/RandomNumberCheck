 var a=document.getElementById("num")
    var result=document.getElementById("o")
    var score=document.getElementById("s")
    var n=Math.floor(Math.random()*10)+1
    var tscore=10
    function compare(){
        var en=a.value
        if(n==en){
            if(tscore>10){
                score.textContent="Your Score:10"
                alert("You Won!")
            }
            else{
             tscore=tscore+1
            score.textContent="Your Score:"+tscore}
            result.textContent="You are Right!"
        }
        else{
            if(tscore>0){
            tscore=tscore-1
            score.textContent="Your Score:"+tscore}
            else{
                score.textContent="Your Score:0"
                alert("You Lose!")
            }
            result.textContent="You are Wrong!"
        }
    }