# prep-javascript-loops-quiz-notes



## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of the **condition** expression in the `for` and `while` loops?

- When is the first expression in the parentheses for a `for` loop (known as the **initialization**) evaluated?

- When is the second expression in the parentheses for a `for` loop (known as the **condition**) evaluated?

- When is the third expression in the parentheses for a `for` loop (known as the **final expression**) evaluated?

- What is the purpose of the **final expression** in a `for` loop?

- What types of data should the `for...in` loop be used on?



## Notes

All student notes should be written here.

1. The purpose of the condition expression in both for and while loops is to specify the condition that must be true in order for the loop to continue executing.

2. The first expression in the parentheses for a for loop, which is the initialization statement, is evaluated only once at the beginning of the loop, before the loop starts executing. It is used to initialize the loop control variable(s) and set up any necessary state for the loop. After the initialization statement is evaluated, the loop body is executed repeatedly until the loop termination condition is met.

3. The second expression in the parentheses for a for loop, which is the loop condition, is evaluated at the beginning of each iteration of the loop. The condition determines whether the loop body should be executed or not for the current iteration. If the condition evaluates to True or a truthy value, the loop body is executed; otherwise, the loop is terminated and control passes to the next statement after the loop. The loop condition is re-evaluated at the beginning of each iteration until it becomes False or a falsy value.

4. The third expression in the parentheses for a for loop, which is the final expression, is evaluated at the end of each iteration of the loop, after the loop body has been executed. The final expression is typically used to update the loop control variable(s) or perform any necessary cleanup after the loop body has executed. The final expression is evaluated before the loop condition is checked for the next iteration. Note that the final expression is optional and is not always needed in a for loop. If it is omitted, the loop control variable(s) will not be updated within the loop body, and some other mechanism will need to be used to terminate the loop eventually.

5. The final expression in a for loop is used to perform any necessary actions at the end of each iteration of the loop. Typically, it is used to update the loop control variable(s) so that the loop can progress towards its termination condition. For example, the final expression might increment or decrement a loop counter or modify a variable that is used in the loop condition.

6. The final expression is evaluated at the end of each iteration, after the loop body has been executed. This means that any changes made to loop control variable(s) or any other variables within the loop body will be reflected in the final expression for the next iteration of the loop. It's important to note that the final expression is optional in a for loop. If it is not provided, the loop will still execute, but it may be necessary to use other means to update the loop control variable(s) or otherwise ensure that the loop will eventually terminate.

7. In JavaScript, the for...in loop is designed to be used with objects that have enumerable properties. An enumerable property is a property that can be accessed in a specific order, such as the properties of an array or the properties of an object that have string keys.

How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
