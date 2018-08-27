WebdriverIO Service For Running Whatevers
==========

> A WebdriverIO service that manages things that need to be running during e2e tests.

## Installation

Simply run:

```bash
npm install --save-dev wdio-run-whatever-service
```

## Configuration

This is intended to be extensible. I'm assuming that there are things that should happen before tests run, things that should happen during tests running and things that should happen after. 

```js
// wdio.conf.js
export.config = {
  // ...
  services: ['run-whatever'],
  whatevConfig: {
    preTasks: [{cmd: 'echo word', mustPass: true}], // shell commands to execute before. mustPass = false to ignore the result
    serverTasks: [{cmd:'dev', args: ['start', 'test_core']}],
    postTasks: [{cmd: 'echo word', mustPass: true}], // shell commands to execute after. mustPass = false to ignore the result
  }
  
};
```

## Options



----

