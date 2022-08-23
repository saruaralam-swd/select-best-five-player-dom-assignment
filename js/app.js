const friend = [
  {btnId: "messi-btn", nameId: "messi"},
  {btnId: "neymar-btn", nameId: "neymar"},
  {btnId: "Mbappe-btn", nameId: "Mbappe"},
  {btnId: "Machado-btn", nameId: "Machado"},
  {btnId: "Ramos-btn", nameId: "Ramos"},
  {btnId: "Renato-btn", nameId: "Renato"},
];

for (const x of friend) {
  addEvent(x.btnId, x.nameId)
}

function addEvent(btnId, nameId) {
  document.getElementById(btnId).addEventListener('click', function () {
    playerSelected(nameId, btnId);
  });
}

function playerSelected(nameId, btnId) {
  const playerName = document.getElementById(nameId);
  const playerNameText = playerName.innerText;

  const ol = document.getElementById('playerList');
  const li = document.createElement('li');
  li.innerText = playerNameText;

  const selectedList = document.getElementById('playerList');
  if (selectedList.children.length + 1 > 5) {
    alert("Your team is full");
    return;
  }

  ol.appendChild(li);
  document.getElementById(btnId).setAttribute('disabled', true);
}


document.getElementById('Calculate').addEventListener('click', function () {
  const budgetFieldElement = document.getElementById('per-player-budget');
  const budgetString = budgetFieldElement.value;
  const budget = parseInt(budgetString);

  const ol = document.getElementById('playerList');

  document.getElementById('player-expenses').innerText = ol.children.length * budget;
});

document.getElementById('calculate-total').addEventListener('click', function () {
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