---
outline: deep
---

# USB Keep Alive Kit

I made this device for working with small devices to keep powerbanks/power supplies alive as they can frequently auto shutoff if they believe the device is not on as it is drawing so little power.  Once assembled the device shall look as per below (resistor colours may vary and also the case colour may vary if you’ve ordered one)
The 3D case design is on [Thingiverse](https://www.thingiverse.com/thing:4557971)


<p align="center" width="100%">
<img src="/2020-07-03T14_05_12.967Z-P1020019.jpg" alt="I sell on Tindie" width="1000" height="1000">
</p>


Once inside the case the assembled unit shall look as per below


<p align="center" width="100%">
<img src="/2020-07-03T14_05_12.967Z-P1020023.jpg" alt="I sell on Tindie" width="1000" height="1000">
</p>


So enough of the end product, lets look at what the kit shall look like


<p align="center" width="100%">
<img src="/overview.png" alt="I sell on Tindie" width="1000" height="1000">
</p>

I have where possible labelled the parts in the packaging but the current shipping parts are coloured as above which makes identification easier.  

## Assembly notes
The resistors have no polarity so can be placed in either direction.
The capacitors have a polarity which can be identified in two ways.  The longest leg is the positive side and also the negative side has a white strip down that side.  On the PCB the positive is labelled and also the negative is shows with a white section on the circle to designate the negative.
When placing the usb connectors particularly the male ensure then are pressed into the board and level.  I recommend soldering one pin and then checking which will allow easy adjustment.
Take care and try not to apply the heat in one location too long.


<p align="center" width="100%">
<img src="/components.png" alt="I sell on Tindie" width="500" height="500">
</p>


Above is a diagram showing which resistors and capacitors match up to the corresponding markings on the pcb.

## Troubleshooting

### Will it work with X powerbank

As you may appreciate there are thousands of powerbanks out there which means it's impossible to be able to test and verify with every powerbank.  We have chosen a middle ground regarding how much power the device draws to balance out keeping a powerbank alive while not affecting battery life too much.  If people can send in examples of where it has worked it would be greatly appreciated and we can expand this list.

[Working Powerbank 1](https://amzn.to/3ZApauE})

### Can it keep a powerbank alive on it's own

***NO*** the keep alive device is designed to work in conjunction with another small powersource.

### Can it work with power delivery / QC

***NO*** the keep alive is only designed to work at 5v and so can only keep alive 5v devices and if you try to plug it into a PD powersupply you risk damaging the keepalive and other hardware.

### Can the power of the pulse be adjusted ?
Yes by modifying the resistor R1 you can change the power of the pulse.  The default is 33r which gives a pulse of around 100ma.  By lowering the value of this resistor you can increase the power of the pulse and by raising it you can lower the power usage.