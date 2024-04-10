import RPi.GPIO as GPIO
import requests
import time

from config import config

GPIO.setmode(GPIO.BCM)
GPIO.setup(config.pins["LED"]["num"], GPIO.OUT)

prev_state = GPIO.input(config.pins["LED"]["num"])

try:
    while True:
        current_state = GPIO.input(config.pins["LED"]["num"])

        if current_state != prev_state:
            if current_state == GPIO.HIGH:
                requests.get("http://localhost/rest/fuelValveStatus?state=1")
            else:
                requests.get("http://localhost/rest/fuelValveStatus?state=0")

            prev_state = current_state

        time.sleep(0.1)

except KeyboardInterrupt:
    print("Exiting program...")
    GPIO.cleanup()
