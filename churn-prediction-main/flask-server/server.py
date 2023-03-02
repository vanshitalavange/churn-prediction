from flask import Flask
from flask import request, send_file
import pandas as pd
import pickle
from sklearn import preprocessing
from sklearn.decomposition import PCA

app = Flask(__name__)
print("I am the start of server.py")
@app.route("/get_data")

def get_data():
    return {"members":["a","b","c"]}

@app.route("/add_data",methods=["POST"], strict_slashes=False)

def add_data():
    res = request.get_json()
    print("i am data from frontend",res)
    return ""

@app.route("/upload_excel", methods=["POST"], strict_slashes=False)

def upload_excel():
    file = request.files['file_from_react']
    filename = file.filename
    print("name of file",filename)
    df_input = pd.read_excel(file)
    df = df_input
    columns=['City', 'Zip Code', 'Gender', 'Senior Citizen', 'Partner',
       'Dependents', 'Tenure Months', 'Phone Service', 'Multiple Lines',
       'Internet Service', 'Online Security', 'Online Backup',
       'Device Protection', 'Tech Support', 'Streaming TV', 'Streaming Movies',
       'Contract', 'Paperless Billing', 'Payment Method', 'Monthly Charges',
       'Total Charges', 'Churn Score', 'CLTV']
    df=df[columns]
    label_encoder = preprocessing.LabelEncoder()
    df['City']= label_encoder.fit_transform(df['City'])
    df=pd.get_dummies(data=df,columns=['Gender', 'Senior Citizen', 'Partner',
       'Dependents', 'Phone Service', 'Multiple Lines',
       'Internet Service', 'Online Security', 'Online Backup',
       'Device Protection', 'Tech Support', 'Streaming TV', 'Streaming Movies',
       'Contract', 'Paperless Billing', 'Payment Method'],drop_first=True)
    
    df = df.replace({"Total Charges": {" ": "0"}})
    df['Total Charges'] = pd.to_numeric(df['Total Charges'])
    
    print(df)
    
    pickeled_model = pickle.load(open('churn_model.pkl','rb'))
    predictions=pickeled_model.predict(df)
    print(predictions)
    df_input["predictions"] = predictions
    df_input.to_excel("output.xlsx")
    return send_file('output.xlsx',as_attachment=True)

if __name__ == "__main__":
    app.run(debug = True)
