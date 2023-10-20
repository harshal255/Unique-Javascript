let totalExpense = 0;

function addExpense() {
    const expense = document.getElementById('expense').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (expense && !isNaN(amount) && amount > 0) {
        totalExpense += amount;

        const expenseList = document.getElementById('expenseList');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${expense}</span><span>$${amount.toFixed(2)}</span>`;
        expenseList.appendChild(listItem);

        document.getElementById('totalExpense').textContent = `$${totalExpense.toFixed(2)}`;

        // Reset input fields
        document.getElementById('expense').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please enter a valid expense and amount.');
    }
}
