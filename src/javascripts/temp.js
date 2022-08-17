/**
 * create a async function that would be completed after certain seconds
 */
function createTask(n, second) {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`finish task ${n}`);
        resolve();
      }, second * 1000);
    });
  };
}

/**
 * Run the tasks collection of functions in parallel, but runs a maximum of limit async operations at a time.
 * @param {*} coll A collection of async functions to run. Each async function can complete with any number of optional result values.
 * @param {*} limit The maximum number of async operations at a time.
 */
async function consumeTasks(tasks, limit) {
  console.log(tasks);
  const output = [];
  for (let i = 0; i < tasks.length - 1; i++) {
    await tasks[i]();
  }
  console.log(output);
}

const input = [3, 1, 3, 10, 2, 2, 1, 4].map((t, i) => createTask(i + 1, t));
consumeTasks(input, 2);

// with the given input, output should be: 2 1 3 5 6 7 4 8q
