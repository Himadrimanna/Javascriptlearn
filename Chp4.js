/**Javascript Poppup Boxes
 *JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

ALERT BOX
An alert box is often used if you want to make sure information comes through to the user.
When an alert box pops up, the user will have to click "OK" to proceed.
 */
alert('I am an alert box!');

/**
 * CONFIRM BOX
 *A confirm box is often used if you want the user to verify or accept something.
When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
 */
confirm('Hello');

if (confirm('Press a button!')) {
  console.log((txt = 'You pressed OK!'));
} else {
  console.log((txt = 'You pressed Cancel!'));
}

/**
 * PROMPT BOX
 *
 *A prompt box is often used if you want the user to input a value before entering a page.
When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.
 */

let name = prompt('Enter your name');
console.log(name);
