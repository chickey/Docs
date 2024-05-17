---
outline: deep
---

Our solar products are designed to allow you to monitor your solar charge controller/Inverter.  Where possible we draw power directly from the charge controller itself so only one cable is required.

The boards are based on the ESP8266 modules and there are two options for software which can run on these modules.

The first option is a custom software which is available on github and can be easily flashed onto a board via a web browser.  This software allows you to see values via a webpage but can also send this data to Home Assistant via MQTT or to influxDB which could then be displayed via Graphana.

The second option is to use ESPHome for a more native integration with Home Assistant.  For v1.6 and earlier boards a hardware modification is required but for v1.7 onwards it is nateively supported.

The first manufacturer we supported was the EPEver range of products, specificially their charge controllers.  As epever have expanded into Inverters these are now supported via ESPHome integration.

The second manufacturer we have supported is Solis.  To work with solis Inverters we have developed a custom cable which allows the standard epever board to be used as a base.  This is done as the Solis connector does not have a PCB mount variant so some kind of cable is always going to be required and using the base EPEver board allows the used of a standard/known robust connector.

As a sort of catch all option we have also designed the 2pin version which allows any RS485 board to be connected and read via ESPHome using modbus.  This does not just apply to Solar products but any RS485 based device.