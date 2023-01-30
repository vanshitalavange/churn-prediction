from flask import Flask
from flask import request
import pandas as pd

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
    df = pd.read_excel(file)
    print(df)
    return ""

if __name__ == "__main__":
    app.run(debug = True)

