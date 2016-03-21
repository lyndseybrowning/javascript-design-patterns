const repo = function() {

  const db = {}; // private

  const get = function(id) {
    console.log(`getting project ${id}`);
    return {
      name: 'New project'
    }
  };

  const save = function(project) {
    console.log(`saving ${project.name} to the db`);
  };

  // revealing module pattern
  return {
    get: get,
    save: save
  };
};

export default repo();
