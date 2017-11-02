module.exports = {
  apps: [{
    name: 'index',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-183-254-198.us-west-1.compute.amazonaws.com',
      key: '~/Desktop/catbotkey.pem',
      ref: 'origin/master',
      repo: 'git@github.com:uosJad/test_website',
      path: '/home/ubuntu/test_website',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
