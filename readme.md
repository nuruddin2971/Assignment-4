## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    The difference between getElementById and getElementsByClassName is that getElementById for a single element with specific ID, whereas getElementsByClassName selects all elements based on a specific class name.
    Only get first element from matching elements through the querySelector. This is super specific. On the other hand, we can find any class or id by querySelectorAll.


### 2. How do you create and insert a new element into the DOM?

    const newChild = document.createElement("li")
    newChild.innerText = "sohoj sorol simple assignment-4"
    const parent = document.getElementById("parent")
    parent.appendChild(newChild)


### 3. What is Event Bubbling? And how does it work?
    Event Bubbling is a process where an event start at the most specific element. After that, it gradually spread to parent element. Then, parent's of parent and until it reaches the top level of DOM.

### 4. What is Event Delegation in JavaScript? Why is it useful?
    Event Delegation means addEventListener to the parent instead of each child element. It is useful because need less addEventListener, fast performance.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
    preventDefault() method stops default action of an element. On the other hand, stopPropagation() method stops from going to the upper levels.