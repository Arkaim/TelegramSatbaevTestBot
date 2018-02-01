const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "526171456:AAFEfRrca58fkhuWi-DoODjczz2MlUOxNlo";

// пацаны ищите бота в телеграме по @ArkaimTestBot

const bot = new TelegramBot(TOKEN, { polling: true });

const helloMessage =
	"Здравствуйте! Вас приветствует Satbaev University бот! Я здесь чтобы помочь студентам получать всю информацию, которая необходима студентам!";
const logoUrl = "satbaevLogo.jpg";

bot.onText(/\/start/, msg => {
	const { id } = msg.chat;
	bot.sendPhoto(id, logoUrl, { caption: helloMessage });

	// Отправляем первый экран (Бакалавр, Магистрант, Докторант ...)

	bot.sendMessage(id, "Выберите подходящую функцию", {
		reply_markup: {
			keyboard: [["Я - студент бакалавр"], []]
		}
	});
});
