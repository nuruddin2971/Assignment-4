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

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?