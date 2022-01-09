function generatefizzBuzz(number) {
    var listid = document.getElementById("list")
    listid.innerHTML = "";
    for (let i = 1; i <= number; i++) {
        var listElement = document.createElement("li");
        if (i % 3 === 0 && i % 5 === 0) {
            listElement.innerText = "FizzBuzz";
        }
        else if (i % 3 === 0) {
            listElement.innerText = "Fizz";
        }
        else if (i % 5 === 0) {
            listElement.innerText = "Buzz";
        }
        else {
            listElement.innerText = i;
        }
           
        listid.appendChild(listElement);
    }
}


function btn() {
    var val = document.getElementById("num").value;

    generatefizzBuzz(val);



}