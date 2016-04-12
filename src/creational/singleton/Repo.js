const repo = () => {
  let called = 0;
  let save = (task) => {
    called++;
    console.log(`Saving ${task} Called ${called} times`);
  };

  console.log('Newing up task repo');

  return { save };
};

// by calling the function at export,
// we create a singleton and only one instance of the
// repo exists due to caching of the module
export default repo();
