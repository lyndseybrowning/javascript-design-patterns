const Promise = function() {
  let completed = [];
  let failed = [];
  let status = 'progress';
  let data = null;

  const promise = {
    done(fn) {
      completed.push(fn);

      if(status === 'done') {
        fn(data);
      }

      return this;
    },

    failed(fn) {
      failed.push(fn);

      if(status === 'failed') {
        fn(data);
      }

      return this;
    },

    resolve(result) {
      if(status !== 'progress') {
        throw `Promise has already completed with a status of ${status}`;
      }

      status = 'done';
      data = result;

      completed.forEach(function(fn) {
        fn(data);
      });
    },

    fail(reason) {
      if(status !== 'progress') {
        throw `Promise has already completed with a status of ${status}`;
      }

      status = 'failed';
      data = reason;

      failed.forEach(function(fn) {
        fn(data);
      });

      return this;
    }
  };

  return promise;

};

export default Promise;
