from requests import post

class TelegramBot(object):

  def __init__(self, proxies = None):
    self.api_url = 'https://api.telegram.org/bot'
    self.token = 
    self.chat_id = 
    self.proxies = proxies

  def request(self, method_name, **payload):
    req_url = '{}{}/{}'.format(self.api_url, self.token, method_name)

    if self.proxies == None:
        resp = post(req_url, json = payload).json()
    else:
        resp = post(req_url, proxies = self.proxies, json = payload).json()

    return resp['result']

  def set_webhook(self, url):
    method_name = 'getWebhookInfo'
    payload = {
        'url': url
    }
    return self.request(method_name, **payload)

  def send_message(self, text):
    method_name = 'sendMessage'
    payload = {
        'chat_id': self.chat_id,
        'text': text,
        'parse_mode': 'html'
    }
    return self.request(method_name, **payload)

bot = TelegramBot()
bot.set_webhook('https://gipakop384.pythonanywhere.com')