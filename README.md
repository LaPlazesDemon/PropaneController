# PropaneController
 
This is my first project in IoT devices, it's designed to let me control my propane firepit from a web app on my phone

The frontend and front-to-back communication is handled by a Node.JS application while all the GPIO and controller logic is handled by Python and sent back to the Node.JS server, as a safety there is a completely separate python process checking for the status of Node.JS application and the status of various safety mechanisms. In the case of any uncertainty of the situation the watchdog script will shut off the propane valve.

I am running all of this off a RPi Zero 2 W