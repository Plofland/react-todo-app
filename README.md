**ReVamp the App**
[]git rid of all the code that I had used when following along with the tutorial (constructor function, 'this' functionality, )
[x]rewrite the App function so that it is only returning the components TodoList and TaskOnboarding
[]have the TodoList component mapping over the todoData and returning a TodoItem

**_Functionality_**
[x] get text to be striked through when task is completed
[] add a input form that will add an object to the todoData array when a button is clicked ("Add Task")
[] add a clear all button to empty out the todoData array ("Clear All Tasks")
[] add a button that will clear all completed tasks from the todoData array ("Clear All Completed Tasks")
[] put the "Add Task" input and the "Clear All Completed Tasks" button in an accordion menu at the top, it should only be visible when you want to edit the ToDo list
[] add little 'x' icon that when clicked, the task will be deleted from the todoData array

**_Styling_**
[] make app resonsive for when it is scaled above 800px (add some media queries to the style.css file)

**_Improvements_**
[] **Persist your data** in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.
[]- **Search Functionality** Add a input bar that allows you to search through your tasks and only show the ones that match the search input.
