# -*- coding: utf-8 -*-
"""
Created on Thu Oct 28 09:04:19 2021

@author: astit
"""
import pickle
from pathlib import Path

model_file = r".\Resume_Screener\save_model\resume_screener.sav"
decode =  r".\Resume_Screener\save_model\Category_enc.pkl"

def predict(transformed_data):
    return_sort = {}
    model_load = pickle.load(open(Path(model_file).absolute(), 'rb'))
    predicted_list = model_load.predict_proba(transformed_data)
    sort = sorted(zip(predicted_list[0].tolist(), model_load.classes_.tolist()), reverse=True)

    enc = pickle.load(open(Path(decode).absolute(), 'rb'))
    for x in range(len(sort)):
        return_sort[sort[x][0]] = enc.inverse_transform([sort[x][1]]).tolist()[0]

    print("\nPredictions =========>",return_sort)

    return get_top_predictions_percent(return_sort)

def get_top_predictions_percent(prediction):
    n=5
    top_prediction = dict(list(prediction.items())[0: n])
    total_probab = 0
    for x in range(len(top_prediction)):
        total_probab += list(top_prediction.keys())[x]
    top_prediction = {y:"{:.2f}".format((x/total_probab)*100) for x,y in top_prediction.items()}
    print("\n Top_predictions ===========> ",top_prediction)
    return top_prediction

