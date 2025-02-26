document.getElementById('button').addEventListener('click', movePenguins);

let penguin1 = document.getElementById('penguin1');
let penguin2 = document.getElementById('penguin2');

let penguin1Position = 20;
let penguin2Position = 20;

function movePenguins() {
    if (penguin1Position < 40 && penguin2Position < 40) {
        penguin1Position += 5;
        penguin2Position += 5;

        penguin1.style.left = `${penguin1Position}%`;
        penguin2.style.right = `${penguin2Position}%`;
    }
    else {
        penguin2.remove();
        // penguin1.src = "https://media.tenor.com/5Ux5jcrpkHoAAAAe/a-peck-on-the-cheeks-pudgy-penguins.png";
        // penguin1.src = "https://media1.tenor.com/m/5Ux5jcrpkHoAAAAd/a-peck-on-the-cheeks-pudgy-penguins.gif";
        penguin1.src = "https://media1.tenor.com/m/0bqCKXQqhakAAAAd/hugging-pudgy-penguins.gif";

        // penguin1.style.alignItems = "center";

        penguin1.style.height = "200px";
        penguin1.style.width = "200px";
        penguin1.style.position = "absolute";
        penguin1.style.alignItems = "center";


        // penguin1.setAttribute("align", "center");
        // alert("TE DUA JASHT MASE JETA IME !");
        document.getElementById('button').innerText = "TI AMOOO!";
        document.querySelectorAll(".tooltiptext").forEach(el => el.remove());
    }


    document.getElementById('refreshButton').addEventListener('click', refreshPage);
    function refreshPage() {
        window.location.reload();
    }
}

