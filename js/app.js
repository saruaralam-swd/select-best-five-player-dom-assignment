// Total Players
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

// team create of selected players
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

// input field: string to number
function getValueById(id) {
  const element = document.getElementById(id);
  const valueString = element.value;
  const valueNumber = parseInt(valueString);
  return valueNumber;
}

// calculate selected total player expenses
document.getElementById('Calculate').addEventListener('click', function () {
  const perPlayerBudget = getValueById('per-player-budget');

  const ol = document.getElementById('playerList');
  const selectPlayerList = ol.children;
  const totalSelectedPlayer =  selectPlayerList.length;

  document.getElementById('player-expenses').innerText = totalSelectedPlayer * perPlayerBudget;
});

// calculate total salary
document.getElementById('calculate-total').addEventListener('click', function () {
  const managerSalary = getValueById('manager-salary');

  const coachSalary = getValueById('coach-salary');

  const playerExpensesValue = document.getElementById('player-expenses').innerText;
  const selectedTotalPlayerSalary = parseInt(playerExpensesValue);

  document.getElementById('total-salary').innerText = managerSalary + coachSalary + selectedTotalPlayerSalary;
});