import RPi.GPIO as GPIO
from config import config
from typing import Union
from fastapi import FastAPI

app = FastAPI()
GPIO.setmode(GPIO.BCM)
GPIO.setup(config.pins["LED"]["num"], GPIO.OUT)


@app.get("/rest/fuelValve/open")
def openFuelValve():
    GPIO.output(config.pins['fuel valve']['num'], GPIO.HIGH)
    return {"message": "Fuel Valve Opened"}

@app.get("/rest/fuelValve/close")
def closeFuelValve():
    GPIO.output(config.pins['fuel valve']['num'], GPIO.LOW)
    return {"message": "Fuel Valve Closed"}