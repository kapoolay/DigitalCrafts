# React Counter without Redux

Your task is to implement a simple counter, this time without using Redux for state management.

1) Implement a Counter component (as a class, not a functional component)
2) Get the Counter component to render a button and a number to the screen
3) Implement the constructor so that it initialized your Counter state
4) Implement an onClick handler for the rendered button
5) Trigger a call to setState() within the click handler. HINT: If you get an error saying "can't call setState of undefined", try adding `.bind(this)` to the handler call in render()