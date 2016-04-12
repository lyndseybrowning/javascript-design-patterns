import taskHandler from './taskHandler';
import myRepo from './Repo';

myRepo.save('fromMain');
myRepo.save('fromMain');
myRepo.save('fromMain');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();
