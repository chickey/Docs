---
outline: deep
---

# Troubleshooting

## Hardware

They are designed for my hardware solution which can be found at

[https://store.eplop.co.uk/products/rs485-to-wifi-adaptor-for-home-assistant
](https://store.eplop.co.uk/products/rs485-to-wifi-adaptor-for-home-assistant)

This includes a custom PCB which then uses a Wemos D1 mini board and has two screw terminals for the A + B connections. 

- If you are attempting to get this working with a self made solution you will need to check that you have created your solution in a similar way to the way my board functions such as pins used etc.

- When first plugged in the wemos board will flash it's LED once which will let you know that you are successfully getting power across the custome cable.

- You must ensure that you do not twist the cable separate from the plug as you can easiliy snap off the soldered connections.

## Software

One of the most common issues is the ID of the device being different.  The ID is a unique identifyer which allows you to have several inverters connected and monitored.  Because of this the ID which you have set on your inverter must match the setting in your yaml file.  Typically 10 is used for Solis inverters but it may have been changed by your installed.  The number is hex so in the example below it is set to "A" and if you wanted to set ID 1 then it would be "address: 0x1"

```
modbus_controller:
  - id: solis
    ## the Modbus device addr
    address: 0xA
    modbus_id: modbus1
    setup_priority: -10
    command_throttle: 300ms
    update_interval: 30s
```

