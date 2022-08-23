// Total Players
const friend = [
  {btnId: "messi-btn", nameId: "messi"},
  {btnId: "neymar-btn", nameId: "neymar"},
  {btnId: "Mbappe-btn", nameId: "Mbappe"},
  {btnId: "Machado-btn", nameId: "Machado"},
  {btnId: "Ramos-btn", nameId: "Ramos"},
  {btnId: "Renato-btn", nameId: "Renato"},
  {btnId: "Mesut-btn", nameId: "Mesut"},
  {btnId: "Karim-btn", nameId: "Karim"},
  {btnId: "Mohammed-btn", nameId: "Mohammed"},
];

for (const x of friend) {
  addEvent(x.btnId, x.nameId)
}

function addEvent(btnId, nameId) {
  document.getElementById(btnId).addEventListener('click', function () {
    playerSelected(nameId, btnId);
  });
}

// team create
function playerSelected(nameId, btnId) {
  const playerName = document.getElementById(nameId);
  const playerNameText = playerName.innerText;

  const ol = document.getElementById('playerList');
  const li = document.createElement('li');
  li.innerText = playerNameText;

  const selectedList = document.getElementById('playerList');
  if (selectedList.children.length > 4) {
    alert("Your team is full");
    return;
  }

  ol.appendChild(li);
  document.getElementById(btnId).setAttribute('disabled', true);
  document.getElementById(btnId).style.backgroundColor = 'gray';
}

// input field value validation
function getValueById(id) {
  const element = document.getElementById(id);
  const valueString = element.value;
  if (valueString === '') {
    alert('Please enter a number');
    return false;
  }
  if(isNaN(valueString) || valueString < 0){
    alert("please type valid number")
    return false;
  }
  const valueNumber = parseInt(valueString);
  return valueNumber;
}

// calculate selected total player expenses
document.getElementById('Calculate').addEventListener('click', function () {
  const perPlayerBudget = getValueById('per-player-budget');
  
  const totalSelectedPlayer = document.getElementById('playerList').children.length;

  document.getElementById('player-expenses').innerText = totalSelectedPlayer * perPlayerBudget;
});

// calculate total salary
document.getElementById('calculate-total').addEventListener('click', function () {
  const managerSalary = getValueById('manager-salary');

  const coachSalary = getValueById('coach-salary');

  const playerExpensesValue = document.getElementById('player-expenses').innerText;
  const playerExpenses = parseInt(playerExpensesValue);

  document.getElementById('total-salary').innerText = managerSalary + coachSalary + playerExpenses;
});