const {Client, Intents} = require('discord.js');
const robot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const fs = require('fs');
let config = require('./config.json');
let token = config.token;

const SERVER = config.server;
const VOICE_CHANNEL = config.voice_channels  //нужны чтобы посчитать там members
const TEXT_CHANNEL = config.text_channel;    //нужен чтобы отправить туда инфу
const PERIOD = 60000;                        //60000ms = опрос каналов раз в минуту
const ALERT_HOUR = 23;
const ALERT_MINUTE = 55;

robot.on("ready", function(){
    console.log(robot.user.username + " запустился!");
})

robot.login(token);

async function timemembercount() {
    robot.login(token);
    
    let online = 0;
    let text_channel = robot.channels.cache.get(TEXT_CHANNEL);

    VOICE_CHANNEL.forEach(element => {
         online = online + get_online_members(element);
     });

    //console.log(online); //local debug
    write_to_file(online+"\n");  //todo: запись кол-ва котиков в БД sqllite в формате дата - время - кол-во котиков онлайн
    
    if ( time_to_say() )
    {
        let max = read_max_from_file();     //todo: выбирать из БД
        text_channel.send(`В голосовых каналах сегодня было максимум: ${max} человек`)
    }
  }
  
/**
 * 
 * @param {int} channel 
 */
function get_online_members(channel)
{
    let server = robot.guilds.cache.get(SERVER);
    let voice_channel = robot.channels.cache.get(channel);
    //let members = server.memberCount;
    let online = voice_channel.members.size;

    return online;
}

function write_to_file(number)
{

    let filename = current_date();
    try {
        const data = fs.writeFileSync(filename, number, { flag: 'a+' })
        //файл записан успешно
      } catch (err) {
        console.error(err)
        return false;
      }

    return true;
}

function read_max_from_file()
{
    let filename = current_date();

     let  array = fs.readFileSync(filename, "utf8").toString().split("\n");
     let max = parseInt(0);
     for(i in array) {
        if (parseInt(array[i]) > max )
        {
            max = array[i];
        }
    }

    return max;
}

/**
 * Текущая дата в формате ГГГГ-ММ-ДД
 * 
 * @returns string
 */
function current_date()
{
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let current_date = year + "-" + month + "-" + date;
    return current_date;
}

/**
 * Пришло ли время написать в канал?
 * 
 * @returns boolean
 */
function time_to_say()
{
    let date_ob = new Date();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();

    if (hours == ALERT_HOUR && minutes==ALERT_MINUTE)
    {
        return true
    }

    return false;
} 


//запускаем подсчёт
var interval = setInterval(function () { timemembercount(); }, PERIOD);
