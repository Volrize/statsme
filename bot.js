const client = global.client;

client.on('ready', async () => {
  client.user.setActivity(`Căthēdrăl ❤️ `)
  client.user.setStatus('dnd');
  });

client.on("ready", () => {
    client.channels.cache.get("831209546352951300").join();
  })
  
client.login(global.Settings.Token);

