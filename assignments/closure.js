// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function kingdom() {
  const queen = "Queen Ruby";
  console.log(`Long live ${queen}`);

  function city() {
    console.log(`The city says: Long live ${queen}`);

    function town() {
      console.log(`I am in the town!`);
    }//town

    town();
  }//city

city();
}//kingdom

kingdom();

// const queen is our closure and can be used by functions later within the head function (kingdom)



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
