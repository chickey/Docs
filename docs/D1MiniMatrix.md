# A shield for a D1 mini ESP8266 board that connects to a RGB LED Matrix panel.

What is it?
This kit is a shield for easily controlling RGB LED Matrix using a D1 Mini ESP8266 board. This board takes advantages of the cables that come included with most displays.

This board is designed to work with the awesome PX Matrix arduino library by 2dom

## Why did you make it?
The RGB LED matrix panels are one of the coolest displays you can use with an Arduino, but there is quite a bit of wiring to connect them up and also they are a little awkward to power. The panels are only about $20 from aliexpress/eBay

This board makes wiring them really simple! The board just slots directly onto the input header pin, uses the ribbon cable that comes provided with most of these panels to connect the pins of the output header and has screw terminals to connect the power cable that comes with most panels.

What makes it special?
This really makes using the display as simple as possible. Making use of the cables that comes with the display allows the board to be smaller and less expensive.

## Examples sketches for using these displays.
Here are some Github Repos with examples of things that can be done using the board. - Some images and a peanut butter jelly time dancing banana

Dance

A sketch and a webpage for drawing on the matrix in real-time (WIP, need to move webpage onto to the ESP)
Draw

YouTube Subscriber count display

Tetris text animation, a library for displaying text and numbers being made up of tetris shapes (WIP library)

YT Tetris

## What is included?
Each D1 Mini Matrix Shield is a kit and comes with the following:

D1 Mini Matrix Shield PCB
220uF 25V Capacitor
220k Ohm Resistor for discharging the Cap
Schottky Diode (1N5817)
3 pin male header
1 Jumper block
16 pin female header (2x8)
16 pin right angle male header (2x8)
Large Green screw terminals (KF8500-2P-8.4MM)
1 Barrel Jack (5 x 2.0mm)
3 Line Dip Switch (VDG-03HG-R)
2 x standard screw terminals (one red and one black)
What is NOT included?
The following components are not provided, but are required to use this board.

D1 Mini ESP8266 Board (These can be bought on Aliexpress/Ebay for around $2.50)
RGB LED Matrix Panel that is compatible with the PXMatrix library wiring (Described Here)
Most (all?) panels come with a ribbon cable and a power cable, this board requires these.
A 5V PSU cable of running the display (roughly 5A for a 64x32 model). The barrel jack is standard 2.1mm Jack, but you can also use the optional screw terminals to power the board.
LDR and 10K resistor if you want to try automatic brightness adjustment. Sample sketch here
Documentation and assembly instructions
I created a post on my website that has some basic instructions for assembly and setup

Please note that I do not send any documentation with the board. There is a sticker with a link and QR code to the above URL. I feel it's wasteful to send on documentation when I can provide much better documentation on the web page than I could in a small sheet of paper.

Important Size limitations
While this board is was physical dimensions are designed to work with a P3 64x32 display, it should be compatible with most displays. There are a couple of areas where you could get caught up and ways to work around them.

The Ribbon cable being too short - on some larger displays, the provided ribbon cable can be too short to go from the D1 Mini Matrix PCB to the P-Out connector. The ribbon cable needs to be longer than roughly 4cm shorter than the distance between the two connectors of the Display. E.g. on my P3 display, the distance between the two connectors is 13.5cm so my cable needs to be 9.5cm or longer or it will not work
The PCB does not clear the power connectors - On some smaller displays it is possible that the PCB will be too wide and will hit the power connectors. There needs to be roughly a 5cm gap between the P-in connector and the power connector. Probably the easiest way around this is is to add male jumper headers to the P-in connector and use another ribbon cable to connect this to the input of the display as shown in the image below:
Image of using the ribbon cable breakout
Image hitting power connectors

Stand-Off Screws
Some of these displays come with magnetic screws for mounting them on a metal surface. The assembled PCB is taller than the screws but I have added the option of stand-offs that will extend the screws long enough to work. I have unfortunately not found a good supplier of the magnetic screws themselves yet.

There are two sizes available, M3 and M2.5. All my displays are M3 but in Bitluni's video he mentioned he used M2.5 screws so you will need to check which are the appropriate size for you.

Stand-Offs

Other Notes
I have tested this board on a 64x32 1/16th display, but it should work with other displays that are wired as per the documentation of the PXMatrix Arduino Library
Some displays do not use all the pins that are connected to the D1 Mini, you can test if your display uses these pins by checking if they have continuity with ground. If they do, use the red dip switch to turn disconnect these pins from the D1 mini or the ESP8266 may not boot!
Imgur

Change log of versions
V1.4 (Current Version)
Increased 5V trace width
V1.3
Added space for an LDR
Rounded the corners of the PCB and added mounting holes
V1.2
Updated Silk screen to aid with assembly
V1.1
Addition of the dip switch so it can be used with all types of displays
Added cutout for under the USB port of the D1 mini so cables could be plugged in even if soldered directly to the board.