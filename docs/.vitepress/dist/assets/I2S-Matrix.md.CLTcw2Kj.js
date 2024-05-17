import{_ as e,c as a,o as t,a3 as r}from"./chunks/framework.DtbQHX8Y.js";const m=JSON.parse('{"title":"ESP32-i2s-Matrix-Shield","description":"","frontmatter":{},"headers":[],"relativePath":"I2S-Matrix.md","filePath":"I2S-Matrix.md"}'),o={name:"I2S-Matrix.md"},i=r('<h1 id="esp32-i2s-matrix-shield" tabindex="-1">ESP32-i2s-Matrix-Shield <a class="header-anchor" href="#esp32-i2s-matrix-shield" aria-label="Permalink to &quot;ESP32-i2s-Matrix-Shield&quot;">​</a></h1><p>Info, instructions and examples for the ESP32 i2s Matrix Shield, a shield for controlling HUB75 matrix panels with an ESP32 dev board.</p><p><img src="https://cdn.tindiemedia.com/images/resize/0KEMu_q8ZZl2meIWinbTlUCxH8M=/p/fit-in/1370x912/filters:fill(fff)/i/528221/products/2020-07-11T16%3A30%3A52.947Z-IMG_20200711_151941.jpg" alt="img"></p><h2 id="aditional-hardware-required" tabindex="-1">Aditional Hardware Required <a class="header-anchor" href="#aditional-hardware-required" aria-label="Permalink to &quot;Aditional Hardware Required&quot;">​</a></h2><p>To use this shield you will need the following additional things</p><ul><li>ESP32 Mini32 Development board (ESP32 D1 Mini) - NOTE: Get the CP2104 version, there is a CH9102 version that does not seem to program <ul><li><a href="https://s.click.aliexpress.com/e/_AYPehO" target="_blank" rel="noreferrer">Aliexpress*</a> (pick the <strong>CP2104 Drive</strong> version)</li><li><a href="https://amzn.to/3gArkAY" target="_blank" rel="noreferrer">Amazon.com*</a></li><li>Also available as an add-on on the Tindie listing</li></ul></li><li>RGB LED Matrix. Please note that I can not gaurantee the following displays will defintly work with the library/board, They are ones I have bought in the past and work, but sellers have changed stock before. <ul><li>64x32 P3 Matrix display - <a href="https://s.click.aliexpress.com/e/_dYz5DLt" target="_blank" rel="noreferrer">Aliexpress*</a></li><li>64x64 P3 Matrix display - <a href="https://s.click.aliexpress.com/e/_BfjY0wfp" target="_blank" rel="noreferrer">Aliexpress*</a></li></ul></li><li><a href="https://s.click.aliexpress.com/e/_d7uVLXt" target="_blank" rel="noreferrer">5V 8A laptop style power supply*</a> - How much power the display uses varies based on how many LEDs are on, but this should cover you for anything you want to draw.</li></ul><ul><li>= affiliate link</li></ul><h2 id="assembly-instructions" tabindex="-1">Assembly Instructions <a class="header-anchor" href="#assembly-instructions" aria-label="Permalink to &quot;Assembly Instructions&quot;">​</a></h2><p>I created a video of me soldering up a board to use as instructions - <a href="https://www.youtube.com/watch?v=ZiR93TmSyE0&amp;feature=youtu.be" target="_blank" rel="noreferrer">Link</a></p><p><strong>TL;DW (aka steps for Bitluni)</strong></p><ul><li>All components sit on the top of the board other than the P-in connector and 3no. 1K resistors for C,D and E connections.</li><li><strong>NOTE:</strong> As the P-in connector and 1k resistors are underneath the ESP32 board, make sure that you solder them before blocking those pads. This is essential if you choose to solder the ESP32 directly to the board, but makes it easier even if you choose to use the header stand-offs</li><li>Ground is a plane across the whole board, so you may need to increase the heat of your iron to solder Ground pads.</li></ul><h2 id="setup-and-configuration-options" tabindex="-1">Setup and Configuration options <a class="header-anchor" href="#setup-and-configuration-options" aria-label="Permalink to &quot;Setup and Configuration options&quot;">​</a></h2><h4 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h4><ul><li>On most displays, there are two connectors. There are arrows on the PCB of the display, the connector that the arrows are moving away from is the input. Insert the shield into this connector (there are arrows on the shield that should match the direction of the arrows on the display&#39;s PCB)</li><li>When inserting into this connector, make sure that it is inserted into the center of the connector as it is possible to insert it offset to one side.</li><li>Most display&#39;s come with a power cable, connect that to the display and also to the green screw terminals of the shield. (Red = 5V, black = GND)</li></ul><h4 id="powering-the-board" tabindex="-1">Powering the board <a class="header-anchor" href="#powering-the-board" aria-label="Permalink to &quot;Powering the board&quot;">​</a></h4><ul><li><strong>The board and display take only 5V!</strong>.</li><li>The recomended way of powering the board is either using the 2.1mm barel jack or using the add-on screw terminals.</li><li>The amount of amps needed depends on how many LEDs your project uses, but I recomend roughly 3A for a 64x32 display to cover all scenarios. Double it for a 64x64. I would also recomend allowing some head room, expecially if you are getting a cheaper supply.</li><li>It is possible to power the display through the micro-usb of the ESP32, but I would be very cautious about doing this, as it is probably not designed to handle high amounts of current.</li></ul><h4 id="power-configuration" tabindex="-1">Power Configuration <a class="header-anchor" href="#power-configuration" aria-label="Permalink to &quot;Power Configuration&quot;">​</a></h4><p>There is a 3pin connector with a jumper pin on the shield, this is for configuring the power setup:</p><ul><li><strong>Jumper on the bottom two pins</strong> - This should be the position you use unless you want to do something else specific. This mode allows power from your barel jack/screw terminals to power your ESP32, but will block the ESP32 from powering the display if you only have USB connected.</li><li><strong>Jumper on the top two pins &quot;diode bypass&quot;</strong> - This allows you to power the display using the USB power of the ESP32. I would be very cautious about doing this, as it is probably not designed to handle high amounts of current.</li><li><strong>Removing Jumper</strong> - If you want to power the ESP32 and the display seperately you can, removing the jumpers disconnects the 5V from the shield from the ESP32 5V pin. GND remains connected.</li></ul><h2 id="software-setup" tabindex="-1">Software Setup <a class="header-anchor" href="#software-setup" aria-label="Permalink to &quot;Software Setup&quot;">​</a></h2><h4 id="board-definition" tabindex="-1">Board definition <a class="header-anchor" href="#board-definition" aria-label="Permalink to &quot;Board definition&quot;">​</a></h4><p>You will need to have the ESP32 setup for your Arduino IDE, <a href="https://github.com/espressif/arduino-esp32/blob/master/docs/arduino-ide/boards_manager.md" target="_blank" rel="noreferrer">instructions can be found here</a>.</p><h4 id="library-dependancies" tabindex="-1">Library dependancies <a class="header-anchor" href="#library-dependancies" aria-label="Permalink to &quot;Library dependancies&quot;">​</a></h4><ul><li><a href="https://github.com/mrfaptastic/ESP32-RGB64x32MatrixPanel-I2S-DMA" target="_blank" rel="noreferrer">ESP32-RGB64x32MatrixPanel-I2S-DMA</a> - the library this shield is designed to be used with. This is what interacts with the matrix panel. You can install this from the Arduino Library manager by searching for &quot;ESP32 64x32 LED MATRIX&quot;</li><li><a href="https://github.com/adafruit/Adafruit-GFX-Library" target="_blank" rel="noreferrer">Adafruit GFX</a> - is a dependacy of the matrix library. This can also be installed from the library manager by searching for &quot;Adafruit GFX&quot;</li><li><a href="https://github.com/FastLED/FastLED" target="_blank" rel="noreferrer">FastLED</a> - It is not a dependancy of the matrix library, but some of the cooler examples are built using the FastLED library, so it is worth installing that too. Again you can use the library manager and search for &quot;FastLED&quot;.</li></ul><h4 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h4><p>This board is designed to use the default pins of the <a href="https://github.com/mrfaptastic/ESP32-RGB64x32MatrixPanel-I2S-DMA" target="_blank" rel="noreferrer">ESP32-RGB64x32MatrixPanel-I2S-DMA library</a> where possible, so you can use <code>dma_display.begin();</code> instead of passing in the custom pins.</p><h4 id="using-a-64x64-display" tabindex="-1">Using a 64x64 display <a class="header-anchor" href="#using-a-64x64-display" aria-label="Permalink to &quot;Using a 64x64 display&quot;">​</a></h4><p>If you are using a 64x64 display you will need to edit the <a href="https://github.com/mrfaptastic/ESP32-RGB64x32MatrixPanel-I2S-DMA/blob/master/ESP32-RGB64x32MatrixPanel-I2S-DMA.h" target="_blank" rel="noreferrer">ESP32-RGB64x32MatrixPanel-I2S-DMA.h file</a> that comes with the library. There are two changes required:</p><ul><li>Change <code>#define MATRIX_HEIGHT 32</code> to be <strong>64</strong>. It should be possible to do this from the Arduino sketch by defining it before you import the library, but I have not found this reliable at all.</li><li>Change <code>#define E_PIN_DEFAULT -1</code> to be <strong>18</strong>.</li></ul><h4 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h4><p><a href="https://github.com/mrfaptastic/ESP32-RGB64x32MatrixPanel-I2S-DMA" target="_blank" rel="noreferrer">ESP32-RGB64x32MatrixPanel-I2S-DMA</a> comes with a few examples that should help get you started.</p><ul><li><a href="https://github.com/mrfaptastic/ESP32-RGB64x32MatrixPanel-I2S-DMA/blob/master/examples/testshapes_32x64/testshapes_32x64.ino" target="_blank" rel="noreferrer">Test Shapes</a> - This is a fairly basic example that will draw some shapes onto the dsiplay then show some text. This is a good example of seeing how to do basics with the display.</li><li>Pattern Plasma - <a href="https://github.com/mrfaptastic/ESP32-RGB64x32MatrixPanel-I2S-DMA/tree/master/examples/PatternPlasma" target="_blank" rel="noreferrer">Code</a> - This is a really nice looking pattern that really shows off what the display can do</li></ul><p><a href="https://gfycat.com/nearajarermine-electronics-arduino-esp32" target="_blank" rel="noreferrer">Click here for larger</a></p><p><img src="https://thumbs.gfycat.com/NearAjarErmine-small.gif" alt="Pattern Plasma" title="Pattern Plasma"></p><ul><li>Aurora Demo - <a href="https://github.com/mrfaptastic/ESP32-RGB64x32MatrixPanel-I2S-DMA/blob/master/examples/AuroraDemo/AuroraDemo.ino" target="_blank" rel="noreferrer">Code</a> - A range of different patterns displayed on screen. Some of them are really cool. The example needs to slightly modified to work as by deafult it uses custom pins. Use <code>dma_display.begin();</code> and it should work</li></ul><p><a href="https://gfycat.com/blankfancyballoonfish" target="_blank" rel="noreferrer">Click here for larger</a></p><p><img src="https://thumbs.gfycat.com/BlankFancyBalloonfish-small.gif" alt="Aurora" title="Aurora"></p>',37),s=[i];function n(l,h,d,u,p,c){return t(),a("div",null,s)}const b=e(o,[["render",n]]);export{m as __pageData,b as default};