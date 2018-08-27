const Launcher = require('../lib/run-whatever-launch-service.js');
const capabilities = [{}];

describe('Run Whatever service', () => {
    describe('onPrepare', () => {
        it('should return when no whatevConfig set in the config',  () => {
            const config = {}

            const service = new Launcher()
            service.onPrepare(config, capabilities)

            _runCommand = jest.fn(service._runCommand);
            _startServerCommand = jest.fn(service._startServerCommand);

            expect(_runCommand).toHaveBeenCalledTimes(0);
            expect(_startServerCommand).toHaveBeenCalledTimes(0);
        })

        
    })
})