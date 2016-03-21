import taskRepo from './taskRepository';
import userRepo from './userRepository';
import projectRepo from './projectRepository';

const repoFactory = function() {
  return {
    getRepo: function(repoType) {
      let repo = null;

      switch(repoType) {
      case 'task':
        console.log('retrieving task from cache...');
        repo = (this.taskRepo) ? this.taskRepo : taskRepo;
        break;
      case 'user':
        repo = (this.userRepo) ? this.userRepo : userRepo;
        break;
      case 'project':
        repo = (this.projectRepo) ? this.projectRepo : projectRepo;
        break;
      }

      return repo;
    }
  }
};

export default repoFactory();
