import taskRepo from './taskRepository';
import userRepo from './userRepository';
import projectRepo from './projectRepository';

const repoFactory = function() {
  return {
    getRepo: function(repoType) {
      let repo = null;

      switch(repoType) {
        case 'task':
          repo = taskRepo;
          break;
        case 'user':
          repo = userRepo;
          break;
        case 'project':
          repo = projectRepo;
          break;
      }

      return repo;
    }
  }
};

export default repoFactory();
