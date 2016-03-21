import taskRepo from './taskRepository';
import userRepo from './userRepository';
import projectRepo from './projectRepository';

const repoFactory = function() {
  return {
    task: taskRepo,
    user: userRepo,
    project: projectRepo
  }
};

export default repoFactory();
