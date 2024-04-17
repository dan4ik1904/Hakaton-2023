import asyncio
import logging
import requests
from aiogram import Bot, Dispatcher, types
from aiogram.filters.command import Command

# Включаем логирование, чтобы не пропустить важные сообщения
logging.basicConfig(level=logging.INFO)
# Объект бота
bot = Bot(token="6830389523:AAFIR3-0n4T6T8QssfMfNem3McDRR9q6jK0")
# Диспетчер
dp = Dispatcher()

@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    await message.answer(f"Привет, мои команды: \nПолучить права админа - /getAdmin userId, \nУдалить права админа - /deleteAdmin userId")

@dp.message(Command("deleteAdmin"))
async def cmd_start(message: types.Message):
    text = message.text
    textArr = text.split(' ')
    if len(textArr) == 2:
        print(textArr[1])
        userId = textArr[1]
        res = requests.get(f'http://81.94.150.112:3001/api/user/deleteAdmin/{userId}')
        mess = res.json()
        await message.answer(mess['message'])
    else:
        await message.answer('Введите корректную команду')

@dp.message(Command("getAdmin"))
async def cmd_start(message: types.Message):
    text = message.text
    textArr = text.split(' ')
    if len(textArr) == 2:
        print(textArr[1])
        userId = textArr[1]
        res = requests.get(f'http://81.94.150.112:3001/api/user/getAdmin/{userId}')
        mess = res.json()
        await message.answer(mess['message'])
    else:
        await message.answer('Введите корректную команду')

# Запуск процесса поллинга новых апдейтов
async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())