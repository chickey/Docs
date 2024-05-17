---
outline: deep
---
::: danger
Before flashing ensure the device is unplugged from the charge controller.
:::

## Web Flashing

To flash connect the ESP device to your computer using a USB cable

I have hosted the webflashing on a dedicated site which can be accessed at the link below

[WebFlashing website](https://flash.eplop.co.uk/)

Once installed it, will create a WiFi access point called “RS485-Wifi”. From there you can follow the Getting Started instructions. If web flashing fails please use the manual flash guide.

NOTE: Make sure to close anything using your devices com port (e.g. Serial monitor)

Powered by [ESP Web Tools](https://esphome.github.io/esp-web-tools/)

::: info
I really recommend using the webflashing method as this is far simpler and you will always get the latest compiled version without a need to install 3rd party applications and also works on any OS.
:::

## Manually Compiling

The current version of the custom code is held on github so the latest version is always available.

[Github repository](https://github.com/chickey/RS485-WiFi-EPEver)

If you have purchased the RS485-WiFi adaptor with a wemos D1 mini it shall be pre-flashed, if however you are using your own Wemos D1 mini or wish to upgrade to the latest version you shell need to download the latest firmware and flashing tool.  You can compile the code yourself to produce the .bin file by loading up the code repository into VS Code or alternatively i provide a compiled binary as part of the github page.

The latest firmware is available [here](https://github.com/chickey/RS485-WiFi-EPEver/blob/master/RS485-WiFi-EPEver.ino.d1_mini.bin)

The flashing tool is available [here](https://github.com/esphome/esphome-flasher/releases)

The flashing tool is provided by ESP-home team and is a great utility for flashing binary files to ESP devices. Select the version which is appropriate for your Operating System.

<p align="center" width="100%">
<img src="/ESPHome-flasher-download-1024x500.png" alt="I sell on Tindie" >
</p>

The software does not need to be installed and you just need to launch the program.

<p align="center" width="100%">
<img src="/Flashing-1024x925.png" alt="I sell on Tindie" >
</p>

Once launched select the serial port which was created when the Wemos was plugged into your computer and then browse to the update file which you have downloaded. Once the software is configured select “Flash ESP” which shall upload the code to the wemos and output a successful message to the Console window.