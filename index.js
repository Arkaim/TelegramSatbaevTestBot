const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "464264163:AAEFcJtW7HqmWXa2x_HcoNhWh80Eiu1w8vs";

// пацаны ищите бота в телеграме по @ArkaimTestBot

const bot = new TelegramBot(TOKEN, { polling: true });

const helloMessage =
	"Здравствуйте! Вас приветствует Satbaev University бот! Я здесь чтобы помочь студентам получать всю информацию, которая необходима студентам!";
const logoUrl = "satbaevLogo.jpg";

bot.onText(/\/start/, msg => {
	bot.sendPhoto(msg.chat.id, logoUrl, { caption: helloMessage });

	// Отправляем первый экран (Бакалавр, Магистрант, Докторант ...)

	bot.sendMessage(msg.chat.id, "Выберите подходяющую для вас функцию", {
		reply_markup: {
			keyboard: [
				["Я - студент бакалавр", "Я - магистрант"],
				["Я - докторант", "О кафедре НИИ"]
			]
		}
	});
});

bot.on("message", msg => {
	console.log(msg.text);
	const chatId = msg.chat.id;

	if (
		msg.text == "О кафедре НИИ" ||
		msg.text == "Назад к информации о кафедре"
	) {
		bot.sendMessage(chatId, "О кафедре НИИ", {
			reply_markup: {
				keyboard: [["Миссия", "ППС"], ["На главную"]]
			}
		});
	} else if (msg.text === "На главную") {
		bot.sendMessage(msg.chat.id, "Выберите подходяющую для вас функцию", {
			reply_markup: {
				keyboard: [
					["Я - студент бакалавр", "Я - магистрант"],
					["Я - докторант", "О кафедре НИИ"]
				]
			}
		});
	} else if (msg.text == "ППС" || msg.text == "Назад к ППС") {
		bot.sendMessage(chatId, "asd", {
			reply_markup: {
				keyboard: [
					["1", "2"],
					["3", "4"],
					["5", "6"],
					["Назад к информации о кафедре", "На главную"]
				]
			}
		});
	} else if (
		msg.text == "Я - студент бакалавр" ||
		msg.text == "Назад в меню бакалавра"
	) {
		bot.sendMessage(chatId, "Вы - студент бакалавр", {
			reply_markup: {
				keyboard: [
					["Выбор траектории обучения ИУП", "Выбор дисциплин"],
					["Академический календарь", "Регистрация"],
					["Практика", "ГАК"],
					["На главную"]
				]
			}
		});
	} else if (msg.text == "Выбор траектории обучения ИУП") {
		bot.sendDocument(chatId, "lab1.docx", {
			caption: "hello"
		});
	}
});
