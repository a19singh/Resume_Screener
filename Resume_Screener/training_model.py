# -*- coding: utf-8 -*-
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
import pickle
from sklearn.multiclass import OneVsRestClassifier, OneVsOneClassifier
from sklearn.linear_model import LogisticRegression


path_data = r"D:\PERSONAL___DATA______________\Study\Dataset\UpdatedResumeDataSet.csv"
save_model_file = r".\save_model\resume_screener.sav"
tfidf = r".\save_model\feature.pkl"
encode = r".\save_model\\"

dataset = pd.read_csv(path_data)

# =============================================================================
# import matplotlib.pyplot as plt
# #iris = pd.read_csv("iris.csv")
# ax=plt.subplots(1,1,figsize=(10,8))
# dataset.Category.value_counts().plot.pie(autopct='%1.1f%%',shadow=True,figsize=(10,8))
# plt.title("Category")
# plt.show()
# =============================================================================

#print(dataset)
print(dataset.columns,"\n")

dataset.Resume.replace(r"[&\/\\#,+()$~%!.„'\":*‚^_¤?<>|@ª{«»§}©®™]", ' ', regex=True, inplace = True )
dataset.Resume.replace(r"\s", ' ', regex=True ,inplace = True )
dataset.Resume.replace(r"[^a-zA-Z0-9 ]", ' ',regex = True, inplace = True )
dataset.Resume.replace(r"httpS+s*", ' ', regex=True, inplace = True)
dataset.Resume.replace(r"@S+", ' ', regex=True, inplace = True  )
dataset.Resume.replace(r"#S+", ' ', regex=True, inplace = True  )
dataset.Resume.replace(r"\s+", ' ', regex=True, inplace = True)


#print(dataset,"\n")

x = dataset.Category.unique()

label_enc = ["Category"]
for x in label_enc:
    enc = LabelEncoder().fit(dataset[x])
    dataset[x]= enc.transform(dataset[x])
    pickle.dump(enc, open(f"{encode}{x}_enc.pkl", 'wb'), pickle.HIGHEST_PROTOCOL)
    
#print(dataset)
resume_text =  dataset["Resume"].values
categorize = dataset['Category'].values

word_vector = TfidfVectorizer(
    sublinear_tf = True,
    stop_words = "english",
    max_features = 1500
    )

#save_fit = word_vector.fit(resume_text)
#pickle.dump(tfidf, open(tfidf, "wb"))
data_features = word_vector.fit_transform(resume_text)
pickle.dump(word_vector.vocabulary_,open(tfidf,"wb"))


x_train, x_test, y_train, y_test = train_test_split(data_features, categorize, test_size=0.2, random_state=0)

#clf = OneVsRestClassifier(KNeighborsClassifier())
clf = OneVsRestClassifier(LogisticRegression())
clf.fit(x_train, y_train)

pickle.dump(clf, open(save_model_file, "wb"))
predict = clf.predict_proba(x_test)


print("Prediction =============>\n",predict[0])
print('Accuracy of Logistic Regression on training set: {:.2f}'.format(clf.score(x_train, y_train)))
print('Accuracy of Logistic Regression on test set: {:.2f}'.format(clf.score(x_test, y_test)))
#print("n Classification report for classifier %s:n%sn" % (clf, metrics.classification_report(y_test, predict)))

# =============================================================================
# #clf = OneVsOneClassifier(KNeighborsClassifier())
# clf = OneVsOneClassifier(LogisticRegression())
# clf.fit(x_train, y_train)
# 
# pickle.dump(clf, open(save_model_file, "wb"))
# predict = clf.predict(x_test)
# print("Prediction =============>\n",predict[0])
# print('Accuracy of KNeighbors Classifier on training set: {:.2f}'.format(clf.score(x_train, y_train)))
# print('Accuracy of KNeighbors Classifier on test set: {:.2f}'.format(clf.score(x_test, y_test)))
# 
# =============================================================================
