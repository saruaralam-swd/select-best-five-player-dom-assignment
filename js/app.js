document.getElementById('messi-btn').addEventListener('click', function() {
  const playerName = document.getElementById('messi');
  const playerNameText = playerName.innerText;
  
  const ol = document.getElementById('playerList');
  const li = document.createElement('li');
  li.innerText = playerNameText;
  ol.appendChild(li);

  document.getElementById('messi-btn').setAttribute('disabled', true);
});


document.getElementById('Calculate').addEventListener('click', function() {
  const budgetFieldElement = document.getElementById('per-player-budget');
  const budgetString = budgetFieldElement.value;
  const budget = parseInt(budgetString);

  const ol = document.getElementById('playerList');

  document.getElementById('player-expenses').innerText = ol.children.length * budget;
});

document.getElementById('calculate-total').addEventListener('click', function() {
  const managerInputField = document.getElementById('manager-salary');
  const managerInputString = managerInputField.value;
  const managerSalary = parseInt(managerInputString);

  const coachInputField = document.getElementById('coach-salary');
  const coachInputString = coachInputField.value;
  const coachSalary = parseInt(coachInputString);

  const playerExpensesValue = document.getElementById('player-expenses').innerText;
  const playerExpenses = parseInt(playerExpensesValue)


  document.getElementById('total-salary').innerText = managerSalary + coachSalary + playerExpenses;
});