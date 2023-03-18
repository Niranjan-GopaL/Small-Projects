import webbrowser
import sys

url = 'http://docs.python.org/'

# Windows
chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe %s'

webbrowser.get(chrome_path).open(url)

print(sys.argv)