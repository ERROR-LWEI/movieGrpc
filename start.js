const shell = require('shelljs');
const path = require('path');

const   cwd  = process.cwd(),
            pm2LogPath =  path.resolve(cwd, 'pm2'),
            pm2LogError = path.resolve(pm2LogPath, 'error'),
            pm2LogOut = path.resolve(pm2LogPath, 'out');

function start() {
    let isExitLogPath = shell.find(pm2LogPath);
    if (!!isExitLogPath.code) {
        shell.mkdir(pm2LogPath);
        isExitLogPath = shell.find(pm2LogPath);
        if (!!isExitLogPath.code) process.exit(1);
    }

    isExitLogPath = shell.find(pm2LogOut);
    if (!!isExitLogPath.code) {
        shell.mkdir(pm2LogOut);
        isExitLogPath = shell.find(pm2LogOut);
        if (!!isExitLogPath.code) process.exit(1);
    }

    isExitLogPath = shell.find(pm2LogError);
    if (!!isExitLogPath.code) {
        shell.mkdir(pm2LogError);
        isExitLogPath = shell.find(pm2LogError);
        if (!!isExitLogPath.code) process.exit(1);
    }

    process.exit(0);
}

start();