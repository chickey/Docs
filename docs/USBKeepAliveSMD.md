---
outline: deep
---

# USB Keep Alive SMD

The USBKeep Alives come in two variants a USB-A connector model and a USB-C connector model.  The keep alive circuit is almost identical in both models but the connectivity is different, the only difference being two 5k resistors on the USB-C model which ensures that it negotiates 5v.

USB-C|USB-A
:-------------------------:|:-------------------------:
<img src="/KeepAlive-USBC.jpg" alt="drawing" width="400"/>  | <img src="/KeepAlive-SMD.jpg" alt="drawing" width="400"/>

The SMD version was developed from my Through Hole kit version for those who could not or did not want to assemble it and just wanted a ready to go product.

[Keep Alive Kit](https://store.eplop.co.uk/products/th-keepalive-kit?utm_source=copyToPasteBoard&utm_medium=product-links&utm_content=web)


The Keep alive works by periodically doing a small 100ma pulse which when combined with another device plugged into it drawing a small amount of power is usually enough to keep a powerbank from shutting down.

The USB-C variant has the advantage in that it is reversible since there is no specific direction required.

## Use Cases

There have been many use cases that people have relayed back to myself.  It's great to hear any examples where it's worked really well or in a unique situation.

- Charging Hearing Aids
- Charging earbuds
- Timelapse photography

## Troubleshooting

### Will it work with X powerbank

As you may appreciate there are thousands of powerbanks out there which means it's impossible to be able to test and verify with every powerbank.  We have chosen a middle ground regarding how much power the device draws to balance out keeping a powerbank alive while not affecting battery life too much.  If people can send in examples of where it has worked it would be greatly appreciated and we can expand this list.

[Working Powerbank 1](https://amzn.to/3ZApauE})

### Can it keep a powerbank alive on it's own

***NO*** the keep alive device is designed to work in conjunction with another small powersource.

### Can it work with power delivery / QC

***NO*** the keep alive is only designed to work at 5v and so can only keep alive 5v devices and if you try to plug it into a PD powersupply you risk damaging the keepalive and other hardware.

### Can the power of the pulse be adjusted ?
Yes by modifying the resistor R1 you can change the power of the pulse.  The default is 33r which gives a pulse of around 100ma.  By lowering the value of this resistor you can increase the power of the pulse and by raising it you can lower the power usage.  As this is an SMD product it shall however take some care and proper tools (hot air recommended).

