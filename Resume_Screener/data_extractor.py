# -*- coding: utf-8 -*-

import re
from sklearn.feature_extraction.text import TfidfTransformer, CountVectorizer
import fitz  # this is pymupdf
import pickle
import predictor
from pathlib import Path
# =============================================================================
# import numpy as np
# import pandas as pd
# =============================================================================


path = r"D:\PERSONAL___DATA______________\work\ResumeScreener\resume.pdf"
model_file = r".\Resume_Screener\save_model\resume_screener.sav"
tfidf = r".\Resume_Screener\save_model\feature.pkl"
decode =  r".\Resume_Screener\save_model\Category_enc.pkl"


#extract text page by page
def extraction(path):
    with fitz.open(path) as doc:
        pymupdf_text = ""
        for page in doc:
            pymupdf_text += page.get_text()
        
    #print(pymupdf_text)
    return pymupdf_text

def cleaning(extrtacted_resume):
    #print(extrtacted_resume, "\n\n<----------------------------->\n\n")
    extrtacted_resume = re.sub(r"\[(.+)\]", ' ', extrtacted_resume)
    extrtacted_resume = re.sub(r"[&\/\\#,+()$~%!.„'\":*‚^_¤?<>|@ª{«»§}©®™]", ' ', extrtacted_resume )
    extrtacted_resume = re.sub(r"\s", ' ', extrtacted_resume)
    extrtacted_resume = re.sub(r"[^a-zA-Z0-9 ]", ' ', extrtacted_resume )
    extrtacted_resume = re.sub(r"httpS+s*", ' ', extrtacted_resume)
    extrtacted_resume = re.sub(r"@S+", ' ', extrtacted_resume)
    extrtacted_resume = re.sub(r"#S+", ' ', extrtacted_resume)
    extrtacted_resume = re.sub(r"\s+", ' ', extrtacted_resume)
    print("\n\nCleaned data ============>\n",extrtacted_resume)
    return extrtacted_resume
    
def data_transformation(extracted_resume):
    extracted_resume = [extracted_resume]
    transformer = TfidfTransformer()
    loaded_vec = CountVectorizer(vocabulary=pickle.load(open(Path(tfidf).absolute(), "rb")))
    transformed_text = transformer.fit_transform(loaded_vec.fit_transform(extracted_resume))
    return transformed_text
    
    
# x = cleaning(extraction(path))
# return_sort = predictor.predict(data_transformation(x))

# print("\n\n\n\n",return_sort)