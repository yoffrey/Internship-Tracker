from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd
import json

driver = webdriver.Chrome('C:/bin/chromedriver')

#{"Company": "Optiver", "Location": "Amsterdam, Netherlands", "Application": [0, "__________"],  "OA": [0, "__________"],  "Interview": [0, "__________"],  "Rejected": [0, "__________"],  "Offer": [0, "__________"]}

allData = []
company = []
location = []

driver.get("https://www.levels.fyi/internships/")
content = driver.page_source
soup = BeautifulSoup(content)

def seasonRemover(time):
    while time and time[-1] != '-':
        time=time[:-1:]
    time=time[:-2:]
    return time

for a in soup.find('table', attrs={'class':'table internships-table table-borderless table-condensed'}):
    for b in a.find_all('div', attrs={'class':'media-body align-self-center'}):
        set = {}
        name = b.findNext('h6').text.rstrip()
        place = b.findNext('p').text
        place = seasonRemover(place)
        company.append(name)
        location.append(place)
        set['Company'] = name
        set['Location'] = place
        set['Application'] = ['0', '__________']
        set['OA'] = ['0', '__________']
        set['Interview'] = ['0', '__________']
        set['Rejected'] = ['0', '__________']
        set['Offer'] = ['0', '__________']
        allData.append(set)


with open("internshipData.json", "w") as outfile:
    json.dump(allData, outfile, indent=None)
    #for c in a.find_all('td', attrs={'apply-th lfont m-3 py-3 d-none d-sm-table-cell'}):
    #    for applicationLink in c.find_all('a', href=True):
    #        print(applicationLink['href'])
    #       link.append(applicationLink['href'])

df = pd.DataFrame(({'Company':company, 'Location':location}))
df.to_csv('internships.csv', index=False, encoding='utf-8')

driver.close()