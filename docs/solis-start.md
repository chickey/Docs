---
outline: deep
---
# Getting Started

## Hardware
The configurations shown are designed for my hardware solution which can be found at

[https://store.eplop.co.uk/products/solis-rs485-to-wifi-adaptor
](https://store.eplop.co.uk/products/solis-rs485-to-wifi-adaptor)

This includes a custom PCB which then uses a Wemos D1 mini board and then combined with a custom made cable which allows the board to get both the data from the inverter but also be powered from the inverter itself so no external power is required.

Board            |  Cable
:-------------------------:|:-------------------------:
![](https://github.com/chickey/RS485-WiFi-EPEver/blob/master/images/Board-Image.PNG?raw=true)  |  ![](/IMG_1996.png)



## Software

Esphome is used as the sotware choice which integrates seamlessly with Home Assistant.  the configuration is held in yaml files which can then be easily modifed as necessary.  I have provided a breakdown of the yaml configuration here [Solis ESPHOME](solis-ESPHOME.md)

### Examples

The files here are provided as examples but even if they are not for your exact model they should still work so long as the physical connections are the same and it's a case of reading different registers.

[Solis-RAI-3K-48ES-5G](https://github.com/chickey/Solis-ESPHome/blob/c064fc8cfec04d8102c3a689832b18e850fd3f8f/Solis-RAI-3K-48ES-5G-ESPHome.yaml)

[Solis-S6](https://vitepress.dev/reference/runtime-api#us)
