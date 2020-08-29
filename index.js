const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

var a = 0;

var b = 1;

var first = '';

var second = '';

var third = '';

var fourth = '';

var fifth = '';

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === '/롤 할분') {
    message.reply('선착순 4명 (채팅에 "/롤 예약" 적으면 예약됨)');
    first = message.member;
  }});

client.on('message', (message) => {
  if(message.content === '/롤 예약') {
    if (a < 5){
      a = (a + b);
      if (a < 5){
        message.reply(`예약완료 남은 인원${4 - a}명`);
        if ( !second ){
          second = message.member;
        }
        if ( !third ){
          if ( second ){
            third = message.member;
          }
        }
        if ( !fourth ){
          if ( second ){
            if ( third ){
              fourth = message.member;
            }
          }
        }
        if ( !fifth ){
          if ( second ){
            if ( third ){
              if ( fourth ){
                fifth = message.member;
              }
            }
          }
        }
      }
    }
    if (a > 4) {
      message.reply(`예약끝남 다시 모으려면 "/초기화" 적기`);
    }
}});

client.on('message', (message) => {
  if(message.content === '/초기화') {
    a = 0;
    first = '';

    second = '';

    third = '';

    fourth = '';

    fifth = '';
  }});

client.login(token);