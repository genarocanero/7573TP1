from flask import Flask
import time

app=Flask (__name__)
@app.route("/")
def raiz():
    return "ping Pyton"

@app.route("/Sleep/")
def getSleep():
    time.sleep(5)
    return "ping Pyton sleep"

@app.route("/BusySleep/")
def getBusySleep():
    initialTime=int(time.time())
    secondtime=initialTime
    while secondtime < (initialTime+5):
        secondtime=int(time.time())
    return "ping Pyton busy wait"
        

if (__name__ == "_name_"):
    app.run
