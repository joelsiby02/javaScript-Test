 const transactionEl = document.querySelector('.transactions');
 const numincomeEl = document.querySelector('.number--income');
 const numexpensesEl = document.querySelector('.number--expenses');
 const balancenumEl = document.querySelector('.balance-number');
 const formEl = document.querySelector('.form');
 const inputDescriptionEl = document.querySelector('.input--description');
 const inputAmountEl = document.querySelector('.input--amount');



// submit event listener
 formEl.addEventListener('submit', function(event){
    // removing  render default annoying
    event.preventDefault();
    const description = inputDescriptionEl.value;
    const amount = inputAmountEl.value;



    const transactionItemHtml = `
        <li class="transaction transaction--income">
            <span class="transaction__text">${description}</span>
            <span class="transaction__amount">+${amount}</span>
            <button class="transaction__btn">X</button>
        </li> `;

        // inputting in one by one last in format
        transactionEl.insertAdjacentHTML('beforeend', transactionItemHtml);

        //clear form inputs
        inputDescriptionEl.value = '';
        inputAmountEl.value = '';

        //blur from inputs
        inputDescriptionEl.blur();
        inputAmountEl.blur();
        

        //issue here!!!!!!!!!!!

        // if (amount > 0){
        //     const current_income = numincomeEl.textContent;
        //     const updated_income = current_income + amount;
        //     numincomeEl.textContent = updated_income;
        //     console.log(numincomeEl)
        // }else{
        //     const current_expense = numexpensesEl.textContent;
        //     const updated_expense = current_expense + (amount) * -1;
        //     numexpensesEl.textContent = updated_expense;
        //     // console.log("Negative number");
        // }

//  });


    const clickHandler = (event) => {
        const clickedEl = event.target.parentNode
        // console.log(clickedEl)
        clickedEl.remove();

        //update income and expenses information
        const amountEl = clickedEl.querySelector('.transaction__amount')
        const amount = +amountEl.textContent;

        if (amount > 0){
            const current_income = +numincomeEl.textContent;
            const updated_income = current_income - amount;
            numincomeEl.textContent = updated_income;
        }else{
            const current_expense = +numexpensesEl.textContent;
            const updated_expense = current_expense - (amount) * -1;
            numexpensesEl.textContent = updated_expense;
            // console.log("Negative number");
        }
        //update balance
            const incomes = +numincomeEl.textContent;
            const expenses = +numexpensesEl.textContent;
            balancenumEl.textContent = incomes - expenses;
            // console.log(balancenumEl)

            balancenumEl.style.color = incomes - expenses < 0 ? 'red' : '';
    }
    //  remove transaction list one by one

    transactionEl.addEventListener('click', clickHandler);








