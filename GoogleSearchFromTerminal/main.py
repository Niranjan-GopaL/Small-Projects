import webbrowser
import sys

BASE_URL = 'https://www.google.com/search?q='

valid_websites =[
    'reddit.com',
    'stackoverflow.com',
    'youtube.com',
    'stackexchange.com',
    'medium.com',
]

chrome_path = 'C:/Program Files/Google/Chrome/Application/chrome.exe %s'


def create_query():
    # print(sys.argv) # prints a list of arguments that we write with python3 in terminal
    
    query = sys.argv[1:]
    return "+".join(query)


def create_filter_for_querying():
    filter  = '('
    for index, website in enumerate(valid_websites):
        filter += 'site:' + website 
        if index != len(valid_websites) - 1:
            filter += 'OR'
        else:
            filter += ')'
    return filter
        
def create_url(): 
    final_url = BASE_URL + create_query() + create_filter_for_querying()
    return final_url


webbrowser.get(chrome_path).open(create_url())

