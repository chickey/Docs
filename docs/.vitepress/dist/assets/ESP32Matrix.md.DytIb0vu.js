import{_ as e,c as t,o as i,a3 as o,a4 as a,a5 as r,a6 as n,a7 as s,a8 as h,a9 as l}from"./chunks/framework.DtbQHX8Y.js";const P=JSON.parse('{"title":"ESP32 Matrix Shield (Mini 32)","description":"","frontmatter":{},"headers":[],"relativePath":"ESP32Matrix.md","filePath":"ESP32Matrix.md"}'),p={name:"ESP32Matrix.md"},c=o('<h1 id="esp32-matrix-shield-mini-32" tabindex="-1">ESP32 Matrix Shield (Mini 32) <a class="header-anchor" href="#esp32-matrix-shield-mini-32" aria-label="Permalink to &quot;ESP32 Matrix Shield (Mini 32)&quot;">​</a></h1><p>The ESP32 Matrix shield is a kit for the Mini 32 ESP32 Development board for connecting into RGB LED panels. It&#39;s a much quicker and tidier way of connecting up these displays.</p><p align="center" width="100%"><img src="'+a+'"></p><h2 id="additional-parts-required" tabindex="-1">ADDITIONAL PARTS REQUIRED <a class="header-anchor" href="#additional-parts-required" aria-label="Permalink to &quot;ADDITIONAL PARTS REQUIRED&quot;">​</a></h2><p>As well as the ESP32 Matrix Shield, you will need the following items.</p><ul><li><a href="http://s.click.aliexpress.com/e/cXMKIHVm" target="_blank" rel="noreferrer">RGB LED Matrix Panel*</a> - $20 from Aliexpress</li><li><a href="http://s.click.aliexpress.com/e/bZitNXIg" target="_blank" rel="noreferrer">Laptop Style 5V 8A power supply*</a> - $10 from Aliexpress (might be possible to get cheaper than this one, 8A might be overkill too)</li><li><a href="http://s.click.aliexpress.com/e/_s4fXSx" target="_blank" rel="noreferrer">Mini32 ESP32 Development Board*</a> - ~ $7 on Aliexpress</li></ul><p><strong>&#39;*&#39; Affiliate Links</strong></p><h2 id="board-assembly" tabindex="-1">BOARD ASSEMBLY <a class="header-anchor" href="#board-assembly" aria-label="Permalink to &quot;BOARD ASSEMBLY&quot;">​</a></h2><p><img src="'+r+'" alt="alt text"></p><p><img src="'+n+'" alt="alt text"></p><p><strong>NOTE: Please pay attention to the direction you are soldering the connectors!</strong></p><ul><li><p>To assemble the boards, place the parts on the PCB as indicated by the markings on the PCB. All parts are places on the top of the PCB other than the connector marked &quot;Pin&quot; (As seen in the photos above). Pay attention to the polarity of the capacitor and the diode when assembling.</p></li><li><p>The green screw terminal and the P-out connector are quite close together, but they should fit in.</p></li><li><p>Place the jumper block on the right two pins of JP1 (Read below for more details on this)</p></li></ul><h2 id="connecting-the-shield-to-the-rgb-led-matrix" tabindex="-1">CONNECTING THE SHIELD TO THE RGB LED MATRIX <a class="header-anchor" href="#connecting-the-shield-to-the-rgb-led-matrix" aria-label="Permalink to &quot;CONNECTING THE SHIELD TO THE RGB LED MATRIX&quot;">​</a></h2><p><img src="'+s+'" alt="alt text"></p><p>To connect the shield, insert the &quot;Pin&quot; connector of the ESP32 Matrix shield into the &quot;Input&quot; connector of the panel (make sure the arrows on the shield match up with the ones on the display)</p><p>Insert the ribbon cable that came with the display into the &quot;Pout&quot; connector on the shield, insert the other end into the &quot;Output&quot; connector of the panel</p><p>Plug the power wire that came with the display into the power pins of the panel. Attach the power wires to the Green screw terminals on the shield (Pay close attention to the polarity!)</p><p>There is a section on the Tindie listing about important measurements that is worth reading before buying to ensure the PCB will fit the display</p><h2 id="configuring-the-dip-switches" tabindex="-1">CONFIGURING THE DIP SWITCHES <a class="header-anchor" href="#configuring-the-dip-switches" aria-label="Permalink to &quot;CONFIGURING THE DIP SWITCHES&quot;">​</a></h2><p>Some displays do not use all the pins that are connected to the ESP32. These optional pins are marked below as C, D and E. You can test if your display uses these pins by checking if they have continuity with ground.</p><p>If they have continuity to ground, you can switch the dip switch off.</p><p><img src="'+h+'" alt="alt text"></p><p>The pins you need to check on the ESP32 are 15 (E), 5 (D) and 18(C).</p><h2 id="powering-the-esp32-matrix-shield" tabindex="-1">POWERING THE ESP32 MATRIX SHIELD <a class="header-anchor" href="#powering-the-esp32-matrix-shield" aria-label="Permalink to &quot;POWERING THE ESP32 MATRIX SHIELD&quot;">​</a></h2><p>These displays require a 5V power supply capable of doing roughly 4A of current</p><p>My recommended way of powering this board is using the 2.1mm DC jack (center positive), but you can also use the optional screw terminals (Red and black in the above photo) instead if you choose.</p><p>The jumper block at &quot;JP1&quot; is controlling power going to the ESP32:</p><ul><li><strong>Occupying the two pins on the right</strong> (as shown in the photo above), the ESP32 will receive 5V power from the panels power supply, but the ESP32 will not power the display as it is going through a diode. <strong>This is the one to use if you are not sure what to do!</strong></li><li><strong>Occupying the two pins on the left</strong> (marked &quot;Diode bypass&quot;), will bypass the diode so the display will now receive power from the ESP32&#39;s 5v pin. In theory, if your are only illuminating a limited number of LEDs at a time you could power the display from the ESP32&#39;s Micro USB port, <strong>but I do not recommend this!</strong></li><li><strong>Removing the block</strong> separates the ESP32&#39;s power supply from the matrix panel, I&#39;m not sure the use case where you would want to do this but it is available if needed!</li></ul><h2 id="using-the-display" tabindex="-1">Using the display <a class="header-anchor" href="#using-the-display" aria-label="Permalink to &quot;Using the display&quot;">​</a></h2><p align="center" width="100%"><img src="'+l+'"></p><p>To use the display you will need to install the following libraries</p><p><a href="https://github.com/adafruit/Adafruit-GFX-Library" target="_blank" rel="noreferrer">Adafruit GFX library</a> from the Arduino library manager.</p><p><a href="https://github.com/2dom/PxMatrix_" target="_blank" rel="noreferrer">PXMatrix</a> by 2Dom. Is the library for controlling the Matrix. It can be installed from the Arduino library manager.</p><p><a href="https://github.com/witnessmenow/WiFi-Tetris-Clock" target="_blank" rel="noreferrer">Example sketch of using the board can be found here</a>, it is the WiFi Tetris clock as seen below</p><p>The Tetris clocks are multiplying <a href="https://pic.twitter.com/wFd73TEDbT" target="_blank" rel="noreferrer">pic.twitter.com/wFd73TEDbT</a></p>',35),d=[c];function u(m,g,b,f,y,w){return i(),t("div",null,d)}const S=e(p,[["render",u]]);export{P as __pageData,S as default};
