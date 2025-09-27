
const todos = JSON.parse(localStorage.getItem('todos')) || [];

function renderTodo() {
    let todoListHTML = '';
    
    todos.forEach((todo, i) =>  {
        const { name, date } = todo;
        todoListHTML += 
        `
        <div class="name">${name}</div> 
        <div class="date">${date}</div>
        <div>
        <button class="delbtn" onclick="
        deleteTodo(${i})">Del</button>
        </div>`; 
    })

    
    
    document.querySelector('.list').innerHTML = todoListHTML

    localStorage.setItem('todos', JSON.stringify(todos));
}

function addTodo() {
    let todo = document.querySelector('.todo');
    let inputdate = document.querySelector('.dates');
    const name = todo.value
    const date = inputdate.value

    todos.push({
        name,
        date
    });

    todo.value = ' ';
    renderTodo();
}


function deleteTodo(i) {
    todos.splice(i, 1);
    renderTodo();
}

renderTodo();

/*
const nums = [10, 20,30, 90, 76]

nums[nums.length - 1] = 99

console.log(nums)
*/

/*
function getLastItem(arr) {
    console.log(arr[arr.length - 1]);
}

function swapArray(arr) {
    let copy_arr = [...arr];
    copy_arr[0] = arr[arr.length - 1];
    copy_arr[arr.length - 1] = arr[0];
    console.log(copy_arr);
}

const nums = [10, 20, 30, 90, 89];
const names = ['Edmarc', 'John', 'Mark', 'Doe'];

swapArray(nums);
swapArray(names);
*/

/*
const nums = [9, 19, 29, 39, 49];
const nums1 = [99,199,299,399,499];

let newNums = []


function addBy(arr, byNum) {
    for ( let i = 0; i < arr.length; i++) {
    
    newNums.push(arr[i] + byNum);
    }
    console.log(newNums);
}

function addArray (arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        newNums.push(arr1[i] + arr2[i]);
    }
    console.log(newNums);
}

addArray(nums, nums1);
*/

/*
const nums = [0, -1, 2 , 5, -6]

let positive = 0

function countPositive(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive += 1
        }
    }

    console.log(positive);
}

countPositive(nums)
*/

/*
const nums = [3,8,9,1,51]

let minmax = {
    min: 0,
    max: 0
}

function minMax(arr) {
    if (arr.length === 0) {
        minmax.min = null
        minmax.max = null
        console.log(minmax)
        return 
    }

    minmax.min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (minmax.min > arr[i]) {
            minmax.min = arr[i]
        } else if (minmax.max < arr[i]) {
            minmax.max = arr[i]
        } 
    }
    console.log(minmax)
}

minMax(nums)
*/

/*
const words = ['apple', 'banana', 'apple', 'banana', 'mango', 'apple']

function countWords(arr) {
    const wordCount = {};

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];

        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    }
    console.log(wordCount);
}

countWords(words)
*/