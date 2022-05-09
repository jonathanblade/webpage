from flask import Flask, request
from flask_cors import CORS
from telegram_bot import bot

app = Flask(__name__)
CORS(app)

@app.route('/', methods = ['POST'])
def telegram_webhook():
  req = request.get_json()

  email = req['email']
  subject = req['subject']
  message = req['message']

  text = '<b>Email</b>\n' + \
         '{}\n'.format(email) + \
         '<b>Тема</b>\n' + \
         '{}\n'.format(subject) + \
         '<b>Сообщение</b>\n' + \
         '{}'.format(message)

  return bot.send_message(text)