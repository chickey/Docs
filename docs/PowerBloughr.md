# PowerBloughR
The simplest way of stripping 5V from a USB cable. Useful for 3D printers used with Octoprint.

<img src="/powerbloughr.jpg" alt="drawing" width="500"/>

# What is it?
This is a basically a pass through device for USB Type A connectors that doesn't connect the 5V line. it has a Male connector and one end and a Female connector at the other.  This product was designed by Brian Lough and the below description is from his Tindie listing.

# How is that useful?
Well basically it is simple, non-intrusive way of solving a problem that 3D-printers connected to Octoprint machines have, their screen stays on, even when their PSU is off because they are still receiving 5V via USB.

The new version of the PCB now breaks out the pins from the female USB connector (can be seen in the third image above), I've found this useful for adding 5V back into a USB device that is power hungry (such as an external hard drive), especially if using an extension cable.

# How does it work?
Plug the Power BLough-R directly into a USB port of the computer running Octoprint and plug the printer's USB cable into the Power BLough-R. Your Octoprint machine will be able to communicate with your printer as normal once your printer's PSU is on.

# Why did you make it?
This has been a little bug bear of mine for a while and wanted to come up with a simple solution for it. Up to this I was plugging out the USB cable every time I turned off my printer.

I also wanted to make a PCB and this is my first ever one, as you might be able to tell. It's certainly not the most complicated device, but it achieves what I set out to do!

Is this the only way to solve this problem?
There are other solutions to this problem, some people have taken to cutting traces on boards, others have modified the USB cable (either by cutting the 5V line or placing tape over the connector), but I thought this would be a nice, non intrusive way to achieve the goal.

# Usage
Plug the male port into your Octoprint machine’s USB port
Plug printers USB cable into the female port

# What is in included?
1 assembled Power BLoughR with clear heatshrink