import RPi.GPIO as GPIO
from config import config
from typing import Union
from fastapi import FastAPI

app = FastAPI()
GPIO.setmode(GPIO.BCM)
GPIO.setup(config.pins["LED"]["num"], GPIO.OUT)

@app.get("/gpio/{pin_num}/on")
def turn_on_gpio(pin_num: int):
    # Turn on GPIO pin
    GPIO.output(pin_num, GPIO.HIGH)
    return {"message": "GPIO turned on"}

@app.get("/gpio/{pin_num}/off")
def turn_on_gpio(pin_num: int):
    # Turn on GPIO pin
    GPIO.output(pin_num, GPIO.LOW)
    return {"message": "GPIO turned off"}