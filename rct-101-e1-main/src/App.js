import React from "react";
import AddTask from "./components/AddTask/AddTask";

function App() {
  return <div>{/* Code Here */
     
  <AddTask/>
      
      
  }</div>;
}

export default App;




// User should be able to add task from AddTask component.
// User Should not be able to add empty task.
// User Should not be able to add duplicate tasks.
// Whenever a new Task is added count value is 1 by default.
// User Should be able to mark Task as Completed in Task component.
// Every Task should have different internal Counter with values. Note - Make sure you implelement features one by one and deploy the app correctly
// General Instructions (IMPORTANT)
// Do not use Global CSS, instead use <componentName>.module.css convention for Css in that file.
// Do Not Remove data-cy="xxxx" from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
// Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
// Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks