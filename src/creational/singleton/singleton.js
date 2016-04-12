const TaskRepo = (function() {
  let taskRepo;

  function createRepo() {
    let taskRepo = new Object('Task');
    return taskRepo;
  }

  return {
    getInstance() {
      if(!taskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  };
})();

let repo1 = TaskRepo.getInstance();
let repo2 = TaskRepo.getInstance();

if(repo1 === repo2) {
  console.log('Same TaskRepo');
}
