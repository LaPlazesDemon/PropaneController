import RPi.GPIO as GPIO

from config import config

def togglePin(PIN):
    GPIO.output(PIN, not GPIO.input())


def setup():
    for label, pin in config.pins:
        if pin['type'] == "output":
            GPIO.setup(pin['num'], GPIO.OUT)
        else:
            GPIO.setup(pin['num'], GPIO.IN)


setup()