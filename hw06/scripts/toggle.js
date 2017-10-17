// ------------------------------------
// PART 1
// ------------------------------------
// Write a function called toggleLike. It takes no parameters
// toggleLike should find the DOM element with the id 'like'
// Now, write a conditional statement. It should check to see if the classList
// on the element contains the 'active' class
// If it does, remove the 'active' class. If it doesn't add the 'active' class.

const toggleLike = () => {
  if (document.getElementById('like1').classList.contains('active')) {
    document.getElementById('like1').classList.remove('active')
    console.log('remove the active class')
  } else {
  console.log ('add the active class')
  }
}
// ------------------------------------
// PART 2
// ------------------------------------
// Write a function called toggle that takes no parameters
// It should find a DOM element with the id 'like'
// Without writing a conditional statement,
// use the classList to toggle the 'active class'
