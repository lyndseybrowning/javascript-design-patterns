const repo = function() {

  const db = {}; // private

  const get = function(id) {
    console.log(`getting user ${id}`);
    return {
      name: 'Jon Mills'
    }
  };

  const save = function(user) {
    console.log(`saving ${user.name} to the db`);
  };

  // revealing module pattern
  return {
    get: get,
    save: save
  };
};

export default repo();
