let todoList = [
    {
      item: 'Buy Milk',
      dueDate: '4/10/2023',
      onTime: '8:40'
    },
    {
      item: 'Go to College',
      dueDate: '4/10/2023',
      onTime: '8:40'
    }
  ];
  
  displayItems();
  
  function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let timeElement = document.querySelector('#todo-time');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    let todoTime = timeElement.value;
    todoList.push({item: todoItem, dueDate: todoDate,onTime:todoTime});
    inputElement.value = '';
    dateElement.value = '';
    timeElement.value = '';
    displayItems();
  }
  
  function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
      let {item, dueDate,onTime} = todoList[i];
      newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <span>${onTime}</span>
        <button class='btn-delete' onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
      `;
    }
    containerElement.innerHTML = newHtml;
  }