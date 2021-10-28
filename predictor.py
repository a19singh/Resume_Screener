# -*- coding: utf-8 -*-
"""
Created on Thu Oct 28 09:04:19 2021

@author: astit
"""
import pickle
model_file = r"D:\PERSONAL___DATA______________\work\ResumeScreener\resume_screener.sav"
decode =  r"D:\PERSONAL___DATA______________\work\ResumeScreener\Category_enc.pkl"

def predict(transformed_data):
    return_sort = {}
    model_load = pickle.load(open(model_file, 'rb'))
    predicted_list = model_load.predict_proba(transformed_data)
    sort = sorted(zip(predicted_list[0].tolist(), model_load.classes_.tolist()), reverse=True)

    enc = pickle.load(open(decode, 'rb'))
    for x in range(len(sort)):
        return_sort[sort[x][0]] = enc.inverse_transform([sort[x][1]]).tolist()[0]
    
    print("\n\n\n\n",return_sort)