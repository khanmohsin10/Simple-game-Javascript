const p1 = document.querySelector("h1").children[0]
const p2 = document.querySelector("h1").children[1]
const p1Score = document.querySelector("button:nth-of-type(1)")
const p2Score = document.querySelector("button:nth-of-type(2)")
const reset = document.querySelector("button:nth-of-type(3)")
const total = document.querySelector("select")


reset.style.backgroundColor = "rgba(252, 74, 74, 0.3)"
p1Score.addEventListener('click', function(){
    p1.innerText = parseInt(p1.innerText)+1
    reset.style.backgroundColor = "rgb(252, 74, 74)"
    if(p1.innerText == total.value){
                p1.style.color = "green"
                p2.style.color = "red"
                p1Score.disabled = true
                p2Score.disabled = true
                p1Score.style.backgroundColor = "rgba(63, 177, 63, 0.3)"
                p2Score.style.backgroundColor = "rgba(82, 82, 248, 0.3)"
            }
})
p2Score.addEventListener('click', function(){
    reset.style.backgroundColor = "rgb(252, 74, 74)"
    p2.innerText = parseInt(p2.innerText)+1
    if(p2.innerText == total.value){
                p2.style.color = "green"
                p1.style.color = "red"
                p2Score.disabled = true
                p1Score.disabled = true
                p1Score.style.backgroundColor = "rgba(63, 177, 63, 0.3)"
                p2Score.style.backgroundColor = "rgba(82, 82, 248, 0.3)"
            }
})
reset.addEventListener('click', function(){
    p1.innerText = '0'
    p2.innerText = '0'
    p2.style.color = "black"
    p1.style.color = "black"
    p1Score.disabled = false
    p2Score.disabled = false
    p1Score.style.backgroundColor = "rgba(63, 177, 63)"
    p2Score.style.backgroundColor = "rgba(82, 82, 248)"
    reset.style.backgroundColor = "rgba(252, 74, 74, 0.3)"
})