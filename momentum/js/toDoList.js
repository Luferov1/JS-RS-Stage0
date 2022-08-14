const addGoalButton = document.querySelector('.goal-adder');
const toDoContainer = document.querySelector('.to-do-container');
const goalBlocks = document.querySelectorAll('.goal-block');

let goalsCounter = 0;
let goalsArr;

const addGoal = () => {
    if (goalsCounter === 4) return
    if (goalsCounter === 3) addGoalButton.style.display = 'none';
    const goal = document.createElement('div');
    goal.innerHTML = '<div class="goal-block"><input type="text" class="goal-input"><button class="input-delete"></button></div>';
    addGoalButton.before(goal);
    goal.addEventListener('click', () => {
        console.log(1);
    })
    goalsCounter++;
}

const saveGoals = () => {

}

addGoalButton.addEventListener('click', addGoal);

document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('input-delete')) return
    event.target.closest('div.goal-block').remove();
    for (let i = 0; i < toDoContainer.children.length; i++) {
        if (toDoContainer.children[i].tagName === 'DIV' && toDoContainer.children[i].innerHTML === '') {
            toDoContainer.children[i].remove();
            console.log(toDoContainer.children);
            i--;
        };
    }
    if (goalsCounter === 4) addGoalButton.style.display = 'block';
    goalsCounter--;
})
