import RPi.GPIO as GPIO
from config import config
from typing import Union
from fastapi import FastAPI

app = FastAPI()
GPIO.setmode(GPIO.BCM)
GPIO.setup(config.pins["LED"]["num"], GPIO.OUT)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/pins/led/on")
def read_item():
    GPIO.output(config.pins["LED"]["num"], GPIO.HIGH)
    return {True}

@app.put("/gpio/{pin_num}/on")
def turn_on_gpio(pin_num: int):
    # Turn on GPIO pin
    GPIO.output(pin_num, GPIO.HIGH)
    return {"message": "GPIO turned on"}

@app.put("/gpio/{pin_num}/off")
def turn_on_gpio(pin_num: int):
    # Turn on GPIO pin
    GPIO.output(pin_num, GPIO.LOW)
    return {"message": "GPIO turned off"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id", item_id, "q", q}