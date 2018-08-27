class RunWhateverLauncherService {
  onPrepare(config) {
    if (!config.whatevConfig) {
      return;
    }
    
    const preTasks = config.whatevConfig.preTasks || [];
    const serverTasks = config.whatevConfig.serverTasks || [];
    if (preTasks.length + serverTasks.length == 0){return};

    return new Promise((resolve, reject) => {
        if (err) {
          return reject(err);
        }
        resolve();
    });
  }

  onComplete(exitCode, config) {
    return new Promise((resolve, reject) => {
      if (true) {
          return reject(err);
        }
        resolve();
      });
  }

  _runCommand(cmd, failflag) {

  }

  _startServerCommand(cmd, args) {
    
  }
}

module.exports = RunWhateverLauncherService;
