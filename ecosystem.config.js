module.exports = {
    apps: [{
        name: "ts-pm2-template",
        script: "./build/index.js",
        exec_mode: "fork_mode",
        node_args: "-r dotenv/config",
        cron_restart: '0 0 * * *'
    }]
}
