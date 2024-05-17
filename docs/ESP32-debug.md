# ESP32 Debug Shields
## A really easy way to use the ESP-Prog to Debug your ESP32 sketches.
A simple breakout board for making using the ESP-Prog easier. For use with Platform.io debugging functionality

**Available versions**
There are multiple versions of this board available, they are the same other than they work with different ESP32 based boards

## ESP32 MiniKit:

- [Debug Shield from my Tindie](https://www.tindie.com/products/brianlough/esp32-minikit-debug-shield/)
- [ESP32 MiniKit from Aliexpress](http://s.click.aliexpress.com/e/C6ds4my)

## Adafruit Feather Huzzah32:

- [Debug Shield/FeatherWing](https://www.tindie.com/products/brianlough/feather-huzzah-32-debug-shield/)
- [Adafruit Feather Huzzah32](https://www.adafruit.com/product/3405)

Note: The Built-in LED of the Huzzah32 board is on pin 13, which the Debug Shield requires, so it can not be used.



# Required Additional Parts:

[ESP-Prog from Aliexpress](http://s.click.aliexpress.com/e/LOP8RTw)


**Info**
Please note, I could not program the ESP32 (via it's own USB cable) while the ESP-Prog was connected to it. Disconnecting the ribbon cable worked.


Andreas Spiess Video on setting up the debugger
- [Instructions for installing Platform.io](https://docs.platformio.org/en/latest/ide/vscode.html#installation)
- [Platform.io ESP-Prog page (Drivers etc)](https://docs.platformio.org/en/latest/plus/debug-tools/esp-prog.html)