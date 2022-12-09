import pandas as pd
sheet = pd.read_excel('Summer 2023 Internship Tracker.xlsx')
sheetDF = pd.DataFrame(sheet, columns=['Company', 'Last Edit', 'Application', 'OA', 'Interview', 'Rejected', 'Offer', 'Link'])

for i in sheetDF.index:
    dataSet = {}
    lastEdit= ''
    if sheetDF['Last Edit'][i] != pd.NaT:
         lastEdit = sheetDF['Last Edit'][i]
    dataSet['company'] = sheetDF['Company'][i]
    if sheetDF['Application'][i] == True:
        print('True')
    # dataSet['application'] = lastEdit
    # dataSet['oa'] = lastEdit
    # dataSet['application'] = lastEdit
    # dataSet['application'] = lastEdit
    # dataSet['application'] = lastEdit
    