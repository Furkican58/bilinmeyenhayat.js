let allah = require('./config.json');

let botcuk = [
      {
        name: `${allah.GuildName}_Moderation`,
        namespace: `${allah.GuildName}`,
        script: 'ancient.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Bots/Executive/Distributors"
      },
      {
        name: `${allah.GuildName}_Voucher`,
        namespace: `${allah.GuildName}`,
        script: 'ancient.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Bots/Executive/Voucher"
      },
      {
        name: `${allah.GuildName}_Statistics`,
        namespace: `${allah.GuildName}`,
        script: 'ancient.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Bots/Executive/Statistics"
      },
      {
        name: `${allah.GuildName}_Guard_I`,
        namespace: `${allah.GuildName}`,
        script: 'ancient.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Bots/Protection/Guard_I"
      },
      {
        name: `${allah.GuildName}_Guard_II`,
        namespace: `${allah.GuildName}`,
        script: 'ancient.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Bots/Protection/Guard_II"
      },
      {
        name: `${allah.GuildName}_Guard_III`,
        namespace: `${allah.GuildName}`,
        script: 'ancient.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Bots/Protection/Guard_III"
      },
   {
        name: `${allah.GuildName}_Welcomes`,
        namespace: `${allah.GuildName}`,
        script: 'Start.js',
        watch: false,
        exec_mode: "cluster",
        max_memory_restart: "2G",
        cwd: "./Bots/Welcome"
      }
    ]


  module.exports = {
    apps: botcuk
  };