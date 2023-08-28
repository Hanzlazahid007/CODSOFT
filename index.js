var display = document.getElementById("screen");
var buttons = document.querySelectorAll('button');
// var buttontext;
for (item of buttons) {
    item.addEventListener("click", e => {
        var buttontext = e.target.innerText;
        console.log(buttontext);
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case 'X':
                display.innerText += "*";
                e.target = "*";
                break;
            case '=':
                try {
                    display.innerHTML = eval(display.innerText);
                    break;
                } catch {
                    display.innerText = "Error!";
                    break;
                }
            default:
                // display.innerText = '0';
                display.innerText += e.target.innerText;
        }
    })
}