import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';


const token = process.env.TELEGRAM_TOKEN!;;
const webAppUrl = 'https://ya.ru'

const bot = new TelegramBot(token, { polling: true });

bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text
	if (text === '/start') {
		// создаём кнопку клавиатуры 
		await bot.sendMessage(chatId, 'Заполните форму', {
			reply_markup: {
				keyboard: [
					[{ text: 'Заполните форму', web_app: { url: webAppUrl } }]
				]
			}
		})
		// создаём кнопку инлайн клавиатуры 
		await bot.sendMessage(chatId, 'Сделать заказ', {
			reply_markup: {
				inline_keyboard: [
					[{ text: 'Сделать заказ', web_app: { url: webAppUrl } }]
				]
			}
		})
	}
})
