const form = document.getElementById("form");
const total = document.getElementById("total");
const amount = document.getElementById("amount");
const list = document.getElementById("list");
const text = document.getElementById("text");


const Expenses = [];

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const expense = {
        description : text.value,
        money: Number(amount.value)
    };

    Expenses.push(expense);
    updateUI();

    text.value = "";
    amount.value = "";

});


function updateUI(){
    list.innerHTML ="";
    let sum =0;
    Expenses.forEach((item, index) =>{
        sum += item.money;

        const li = document.createElement("li");
        li.innerHTML = `${item.description} - ${item.money} <button onclick="deleteExpense(${index})">0</button>`;
        list.appendChild(li);
    });
    total.innerText = sum;
};


function deleteExpense(index){
    Expenses.splice(index, 1);
    updateUI();
};