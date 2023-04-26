let btn = document.getElementById("btn").addEventListener('click', function () {
    function numberGenerator(){
        let outputNumber = document.getElementById("outputNumber")
        outputNumber.innerText = Math.random()
    }
    setTimeout(numberGenerator, 3000);

    const startTime = Date.now();
    
    const intervalId = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.ceil((3000 - elapsedTime) / 1000);
        
        if (remainingTime >= 0) {
            let showTime = document.getElementById("showTime")
            showTime.innerHTML = `${remainingTime} second `
        } else {
            clearInterval(intervalId);
        }
    }, 1000);


})
