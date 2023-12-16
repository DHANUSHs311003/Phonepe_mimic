let loginDiv = document.getElementById("loginDiv");
let transferDiv = document.getElementById("transfer");
let payBtn = document.getElementById("submit");
let transfer = document.getElementById("transfer");
let container_2 = document.getElementById("container-2");
let processImg = document.getElementById("processImg");
let home = document.getElementById("Home");
let balance = 10000;
let userBalance = document.getElementById("userBalance");

// success text creation
let text1 = document.createElement("p");

text1.style.textAlign = "center";
text1.style.fontWeight = "bolder";
// failed text creation
let text2 = document.createElement("p");
text2.style.textAlign = "center";
text2.style.fontWeight = "bolder";


payBtn.addEventListener('click', function() {
    let userName = document.getElementById("userName");
    let userNumber = document.getElementById("userNumber");
    let userMoney = document.getElementById("userMoney");

    if (userName.value === "" || userNumber.value === "" || userMoney.value === "") {
        alert("Please enter all the details");
    } else {
        loginDiv.style.display = 'none';
        transferDiv.style.display = 'block';
        text1.innerText = `Amount of ₹${userMoney.value} transferred successfully to ${userName.value}`;
        text2.innerText = "Amount transferred failed due to insufficient balance";

        let moneyPromise = new Promise((resolve, reject) => {
            if (userMoney.value <= balance && balance > 0) {
                setTimeout(() => {
                    resolve("success");
                }, 2000);
            } else  {
                setTimeout(() => {
                    reject("failed");
                }, 2000);
            }
        });

        moneyPromise.then(() => {
            
            balance -= parseInt(userMoney.value);
            userBalance.textContent = `Your current account balance is ₹${balance}`;
            processImg.src = "https://media.tenor.com/bm8Q6yAlsPsAAAAj/verified.gif";
            container_2.append(text1);
        }).catch(() => {
            
            balance = parseInt(balance);
            userBalance.textContent = `Your current account balance is ₹${balance}`;
            processImg.src = "https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1";
            container_2.append(text2);
        });
    }
});


home.addEventListener('click', function() {
    loginDiv.style.display = 'block';
    transferDiv.style.display = 'none';
    let userName = document.getElementById("userName");
    let userNumber = document.getElementById("userNumber");
    let userMoney = document.getElementById("userMoney");
    userName.value = "";
    userMoney.value = "";
    userNumber.value = "";
});
