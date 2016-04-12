import myRepo from './Repo';

const taskHandler = () => {
  return {
    save() {
      myRepo.save('Hi from taskHandler');
    }
  };
};

export default taskHandler();
