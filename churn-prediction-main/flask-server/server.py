from flask import Flask, jsonify
from flask import request, send_file
import pandas as pd
import pickle
from sklearn import preprocessing
from sklearn.decomposition import PCA
import plotly.figure_factory as ff
import plotly.express as px
import numpy as np
import os
from flask import session
import time
# session.secret
app = Flask(__name__)

# root directory
cwd = os.getcwd()
path = os.sep.join(cwd.split(os.sep)[:-1])

@app.route("/get_data")

def get_data():
    return {"members":["a","b","c"]}

@app.route("/add_data",methods=["POST"], strict_slashes=False)

def add_data():
    res = request.get_json()
    print("i am data from frontend",res)
    return ""


def read_file(sheetName):
    file = request.files['file_from_react']
    print("file...",file)
    df_input = pd.read_excel(file,sheet_name=sheetName)
    return df_input

def generate_peak_hour_dist():
    df_sheet2 = read_file("Sheet2")
    figg=px.line(df_sheet2[:500], x='Time of the Day', y='user count', title='Peak Hour Usage')
    figg.update_layout(plot_bgcolor='black', paper_bgcolor='black',title_font_color='rgb(255,255,255)',legend_font_color='rgb(255,255,255)',font_color='rgb(255,255,255)',xaxis=dict(
            showline=True,
            showgrid=False,
            showticklabels=True,
            linecolor='rgb(204, 204, 204)',
            linewidth=2,
            ticks='outside',
            tickfont=dict(
                family='Arial',
                size=12,
                color='rgb(255,255,255)',
            ),
        ),
        yaxis=dict(
            showgrid=False,
            zeroline=False,
            showline=False,
            showticklabels=False,
        ))
    # figg.write_html(r"{}\public\charts\peak-hour.html".format(path))
    return {"stat":"ok"}

def generate_age_based_dist():
    df_sheet1 = read_file("sheet1")
    print(df_sheet1.columns)
    fig = ff.create_distplot([df_sheet1['Age']], ['Age Distribution'], bin_size=0.5,
                         curve_type='normal',colors=['rgba(149, 102, 214,255)'], histnorm='density',show_rug=False,show_hist=True)

    # Set the layout of the plot
    fig.update_layout(title='Age Based Distribution for Users', plot_bgcolor='black', paper_bgcolor='black',
                    xaxis=dict(range=[18, 70],
            showgrid=False,
            linecolor='rgb(204, 204, 204)',
            linewidth=2,
            ticks='outside'),title_font_color='rgb(255,255,255)',legend_font_color='rgb(255,255,255)',font_color='rgb(255,255,255)')
    # fig.show
    # fig.write_html(r"{}\public\charts\age-based.html".format(path))
    return {"stat":"ok"}



@app.route("/upload_excel", methods=["POST"], strict_slashes=False)
def upload_excel():
    try:
        df_input = read_file("sheet1")
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
        print("predicted...")
        
        # logic for age
        df_sheet1 = read_file("sheet1")
        print(df_sheet1.columns)
        fig = ff.create_distplot([df_sheet1['Age']], ['Age Distribution'], bin_size=0.5,
                            curve_type='normal',colors=['rgba(149, 102, 214,255)'], histnorm='density',show_rug=False,show_hist=True)

        # Set the layout of the plot
        fig.update_layout(title='Age Based Distribution for Users', plot_bgcolor='black', paper_bgcolor='black',
                        xaxis=dict(range=[18, 70],
                showgrid=False,
                linecolor='rgb(204, 204, 204)',
                linewidth=2,
                ticks='outside'),title_font_color='rgb(255,255,255)',legend_font_color='rgb(255,255,255)',font_color='rgb(255,255,255)')

        # logic for peak hour
        df_sheet2 = read_file("Sheet2")
        figg=px.line(df_sheet2[:500], x='Time of the Day', y='user count', title='Peak Hour Usage')
        figg.update_layout(plot_bgcolor='black', paper_bgcolor='black',title_font_color='rgb(255,255,255)',legend_font_color='rgb(255,255,255)',font_color='rgb(255,255,255)',xaxis=dict(
                showline=True,
                showgrid=False,
                showticklabels=True,
                linecolor='rgb(204, 204, 204)',
                linewidth=2,
                ticks='outside',
                tickfont=dict(
                    family='Arial',
                    size=12,
                    color='rgb(255,255,255)',
                ),
            ),
            yaxis=dict(
                showgrid=False,
                zeroline=False,
                showline=False,
                showticklabels=False,
            ))
        df_input.to_excel(r"{}\public\charts\output.xlsx".format(path))
        fig.write_html(r"{}\public\charts\age-based.html".format(path))
        figg.write_html(r"{}\public\charts\peak-hour.html".format(path))
    except:
        print("upload excel's mistake")
    finally:
        # time.sleep(1)
        return {"response":"ok"}

def recommendation():
    df_sheet1 = read_file("sheet1")
    df_plan=df_sheet1[['Tenure Months', 'Phone Service', 'Internet Service',
       'Online Security', 'Online Backup', 'Device Protection', 'Tech Support',
       'Streaming TV', 'Streaming Movies', 'Contract', 'Monthly Charges', 'Total Charges']]
    df_plans=pd.get_dummies(data=df_plan,columns=["Phone Service","Internet Service","Online Security","Online Backup","Device Protection","Tech Support","Streaming TV","Streaming Movies","Contract"],drop_first=True)    
    df_plans=df_plans[df_plans['Total Charges']!=' ']
    

if __name__ == "__main__":
    app.run(debug = True)