const repo = () => {
  let called = 0;
  let save = (task) => {
    called++;
    console.log(`Saving ${task} Called ${called} times`);
  };

  console.log('Newing up task repo');

  return { save };
};

export default repo;
