
var container = document.querySelector(".container");
// debugger
function AddCard(card) {
    container.append(card);
    // console.log(card.CreateCard());
    // console.log(container);
}

class Card {
    constructor() {
        this.Title = "Title";
        this.Amount = "Amount";
        this.Balance = "Balance";
        this.Recieved = "Recieved";

    }

    CreateCard(_Title = "title", _Amount = "amount", _Balance = "balance", _Recieved = "Recieved") {
            var CardBorday = `
    <div class="card-body">
        <h4 class="card-title">${_Title}</h4>
        <div class="card-items">
            <p class="d-block  shadow p-2">Total Amount <span class="float-end badge text-bg-info">${_Amount}</span></p>
            <p class="d-block shadow p-2">Total Recieved <span class="float-end badge text-bg-info">${_Recieved}</span></p>
            <p class="d-block shadow p-2">Total Balance <span class="float-end badge text-bg-info">${_Balance}</span></p>
        </div>
    </div>
`
        var card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col");
        card.classList.add("col-xs-12");
        card.innerHTML = CardBorday;
        return card;



    }
}
var Titles = [];
Titles.push(" Factory Bond Total");
Titles.push(" Factory Grout Total");
Titles.push(" Employee Expense Total");
Titles.push(" Total Rent Calculation");
Titles.push(" Vehicle Expense Total");
Titles.push(" Total Earnings");
Titles.push("Overall Earnings Total");
Titles.push("Overall Expenses Total");
Titles.push("Overall Profit Total");
Titles.push("Muhammad Shahid");
Titles.push("Noor Khan");

Titles.forEach((T) => {
    var newCard = new Card();
    // newCard.CreateCard(T,500,30,20);
    AddCard(newCard.CreateCard(T, 529, 96, 200));
});
console.log("hi");
console.log("hi form dashboard");
