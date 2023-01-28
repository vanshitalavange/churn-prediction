from flask import Flask
from flask import request

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

if __name__ == "__main__":
    app.run(debug = True)

