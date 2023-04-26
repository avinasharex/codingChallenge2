let reverseBtn = document.getElementById("reverseBtn").addEventListener("click", function(){
    function reverseString (){
        let input = document.getElementById("input").value;
        let reverseStr =  input.split("").reverse().join("")
        
        let outputString = document.getElementById("outputString")
        outputString.innerText = "Reverse String is: " + reverseStr
    }

    setTimeout(reverseString, 2000);
})

