---
outline: deep
---

# USBKeepAlive adjustable

The Adjustable USBKeepAlives is a new variant with a USB-A connector, if there is demand we may look at a USB-C variant.  

The keep alive circuit is almost identical to the non adjustable version but now the strength of the pulse to be adjusted by selecting the required pulse on the slide switch.  We have created this new version to be try and have greater compatibilty with a wider range of USB powerbanks so if your not sure if it shall work then the adjustable version is the best choice.

<img src="/KeepAlive-ADJ.png" alt="drawing" width="500"/>

## Usage

The Keep alive works by periodically doing a small pulse which when combined with another device plugged into it drawing a small amount of power is usually enough to keep a powerbank from shutting down.  By default we would recommend you start on low and only try medium or high if your powerbank does not stay powered on.  Below are the approx draws for each of the settings.

LOW|MEDIUM|HIGH
:-------------------------:|:-------------------------:|:-------------------------:
100ma | 145ma | 170ma

### *** Please NOTE ***
Be aware that in the highest setting a small amount of heat will be generated and be able to be felt on the board, please ensure that you do not cover the unit with fabric or similar and air is allowed to flow around the device when in use.

## Use Cases

There have been many use cases that people have relayed back to myself.  It's great to hear any examples where it's worked really well or in a unique situation.

- Charging Hearing Aids
- Charging earbuds
- Timelapse photography

## Troubleshooting

### Will it work with X powerbank

As you may appreciate there are thousands of powerbanks out there which means it's impossible to be able to test and verify with every powerbank.  We have chosen a middle ground regarding how much power the device draws to balance out keeping a powerbank alive while not affecting battery life too much.  If people can send in examples of where it has worked it would be greatly appreciated and we can expand this list.

[Working Powerbank 1](https://amzn.to/3ZApauE})

[Working Powerbank 2](https://thepihut.com/products/ansmann-pb212-10-000mah-power-bank_)

### Can it keep a powerbank alive on it's own

***NO*** the keep alive device is designed to work in conjunction with another small powersource.

### Can it work with power delivery / QC

***NO*** the keep alive is only designed to work at 5v and so can only keep alive 5v devices and if you try to plug it into a PD powersupply you risk damaging the keepalive and other hardware.

