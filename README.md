# Todo Applicaton

> Simple Todo App that takes on new tasks, clears completed tasks and clears all tasks.

---

## ReVamp the App

- [x] Get rid of all the code that I had used when following along with the tutorial (constructor function, 'this' functionality, etc.)
  - if I don't understand it, get rid of it
- [x] Rewrite the App function so that it is only returning the components TodoList and TaskOnboarding
- [x] Have the TodoList component mapping over the todoData and returning a TodoItem
- [x] Change out text fields and buttons for materia-ui form

---

## Functionality

- [x] Get text to be striked through when task is completed
- [x] Add a input form that will add an object to the todoData array when a button is clicked ("Add Task")
- [x] Add a clear all button to empty out the todoData array ("Clear All Tasks")
- [x] Add a button that will clear all completed tasks from the todoData array ("Clear All Completed Tasks")
- [] Send out an error alert when the text field is left blank and the "Add" button is clicked
- [] Pressing enter while in the text input will click the "Add" button

---

## Styling/Design

- [x] Make app resonsive for when it is scaled above 800px (add some media queries to the style.css file)
- [] Styled the button to look more natural when scaled down for mobile
- [] When there are no tasks on the list, have a type and [delete animation](https://codepen.io/gschier/pen/jkivt)
- [] Add [this animation](https://youtu.be/KYOYVZcZYAI?list=PL2B-ghQCJHsq1oqe0AJ9QX4tuIl1OPSZx&t=80) when checking off an item from the list
- [] When the above ⬆ animation finishes, markdown the text with a strike-through
- [] Put the "Add Task" input and the "Clear All Completed Tasks" button in an accordion menu at the top, it should only be visible when you want to edit the ToDo list
- [] Add little 'x' icon that when clicked, the task will be deleted from the todoData array
- [] Get long tasks to word-wrap (this is especially broken on mobile)
- [x] Style the scrollbar

---

## Improvements

- [x] **Persist your data** in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist past the page refresh.
- [] Use Context API to keep todoData state and event handlers all in one place
- [] **Search Functionality** Add a input bar that allows you to search through your tasks and only show the ones that match the search input.
