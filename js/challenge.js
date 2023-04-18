document.addEventListener("DOMContentLoaded", () => {
    let interval = setInterval(incrementCounter, 1000)

    const plus = document.getElementById("plus")
    plus.addEventListener("click", incrementCounter)

    const minus = document.getElementById("minus")
    minus.addEventListener("click", decrementCounter)

    const likes = document.getElementById("heart")
    let likedObj = {}
    let li = document.createElement("li")
    likes.addEventListener("click", () => {
        let counterValue = document.getElementById("counter").textContent
        if (likedObj[counterValue]) {
            likedObj[counterValue] += 1
        } else {
            likedObj[counterValue] = 1
            let likesUL = document.querySelector(".likes")
            likesUL.appendChild(li)
            li.innerText = `${counterValue} has been liked ${likedObj[counterValue]}`
        }
    })

    const submit = document.getElementById("submit")


    const pause = document.getElementById("pause")
    pause.addEventListener("click", () => {
        if (pause.innerText === "resume") {
            pause.innerText = "pause"
            interval = setInterval(incrementCounter, 1000)
        } else {
            pause.innerText = "resume"
            clearInterval(interval)
        }
        minus.disabled = !minus.disabled
        plus.disabled = !plus.disabled
        likes.disabled = !likes.disabled
        submit.disabled = !submit.disabled



    })

    let commentForm = document.querySelector("#comment-form")
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const list = document.getElementById("list")
        let li = document.createElement("li")
        li.innerText = e.target[0].value
        list.appendChild(li)
        commentForm.reset()


    })
})


function incrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) + 1
}

function decrementCounter() {
    let count = document.getElementById("counter")
    count.textContent = parseInt(count.textContent, 10) - 1
}