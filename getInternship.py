from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import json

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

#{"Company": "Optiver", "Location": "Amsterdam, Netherlands", "Application": [0, "__________"],  "OA": [0, "__________"],  "Interview": [0, "__________"],  "Rejected": [0, "__________"],  "Offer": [0, "__________"]}

allData = []

driver.get("https://www.levels.fyi/internships/")
content = driver.page_source
soup = BeautifulSoup(content)

for a in soup.find('table', attrs={'class':'table internships-table table-borderless table-condensed'}):
    for b in a.find_all('div', attrs={'class':'media-body align-self-center'}):
        set = {}
        name = b.findNext('h6').text.rstrip()
        set['company'] = name
        set['application'] = None
        set['oa'] = None
        set['interview'] = None
        set['rejected'] = None
        set['offer'] = None
        set['link'] = ''
        allData.append(set)

with open("internshipData.json", "w") as outfile:
    json.dump(allData, outfile, indent=None)
    #for c in a.find_all('td', attrs={'apply-th lfont m-3 py-3 d-none d-sm-table-cell'}):
    #    for applicationLink in c.find_all('a', href=True):
    #        print(applicationLink['href'])
    #       link.append(applicationLink['href'])

driver.close()