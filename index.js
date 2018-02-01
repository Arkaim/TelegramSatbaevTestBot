const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "526171456:AAFEfRrca58fkhuWi-DoODjczz2MlUOxNlo";

// пацаны ищите бота в телеграме по @ArkaimTestBot

const bot = new TelegramBot(TOKEN, { polling: true });

const helloMessage =
	"Здравствуйте! Вас приветствует Satbaev University бот! Я здесь чтобы помочь студентам получать всю информацию, которая необходима студентам!";
const logoUrl = "satbaevLogo.jpg";

bot.onText(/\/start/, msg => {
	bot.sendPhoto(msg.chat.id, logoUrl, { caption: helloMessage });

	// Отправляем первый экран (Бакалавр, Магистрант, Докторант ...)

	bot.sendMessage(msg.chat.id, "", {
		reply_markup: {
			keyboard: [
				["Я - студент бакалавр", "Я - магистрант"],
				["Я - докторант", "О кафедре НИИ"]
			]
		}
	});
});

// bot.on("message", msg => {
// 	console.log(msg.text);
// 	const chatId = msg.chat.id;
// 	if (msg.text) {
// 		if (msg.text == "О кафедре НИИ") {
// 			bot.sendMessage(chatId, "asd", {
// 				reply_markup: {
// 					keyboard: [["Миссия", "ППС"], ["Назад", "На главную"]]
// 				}
// 			});
// 		} else if (msg.text === "Я - студент бакалавр") {
// 			bot.sendMessage(msg.chat.id, "", {
// 				reply_markup: {
// 					keyboard: [
// 						["Выбор траектории обучения ИУП", "Выбор дисциплин"],
// 						["Академический календарь", "Регистрация"],
// 						["Практика", "ГАК"],
// 						["Назад", "На главную"]
// 					]
// 				}
// 			});
// 		} else {
// 		}
// 	}
// });
