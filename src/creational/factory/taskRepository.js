const repo = function() {

  const db = {}; // private

  const get = function(id) {
    console.log(`getting task ${id}`);
    return {
      name: 'New task from db'
    }
  };

  const save = function(task) {
    console.log(`saving ${task.name} to the db`);
  };

  console.log('newing up task repo');

  return {
    get: get,
    save: save
  };

};

export default repo();
