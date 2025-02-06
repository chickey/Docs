import{_ as e,c as s,o as a,a3 as n}from"./chunks/framework.BX0JK_lV.js";const m=JSON.parse('{"title":"Epever ESPHome","description":"","frontmatter":{},"headers":[],"relativePath":"epever-ESPHOME.md","filePath":"epever-ESPHOME.md"}'),i={name:"epever-ESPHOME.md"},t=n(`<h1 id="epever-esphome" tabindex="-1">Epever ESPHome <a class="header-anchor" href="#epever-esphome" aria-label="Permalink to &quot;Epever ESPHome&quot;">​</a></h1><h2 id="hardware" tabindex="-1">Hardware <a class="header-anchor" href="#hardware" aria-label="Permalink to &quot;Hardware&quot;">​</a></h2><p>The current (v1.7) version of the board works natively with ESPHome but if you have an older version of the board then a hardware modification will be required. This is bridging D1 and D2, this needs to be done as DE and RE were originally configured to be used independly but ESPHome can only have one configured flow control pin.</p><h2 id="software" tabindex="-1">Software <a class="header-anchor" href="#software" aria-label="Permalink to &quot;Software&quot;">​</a></h2><p>An example yaml configuration file is available at <a href="https://github.com/chickey/RS485-WiFi-EPEver/blob/441866bb0d11743ace54229ebb18a21bdd3c3f84/epever.yaml" target="_blank" rel="noreferrer">Link</a></p><p>The following is breakdown of the sections of the example configuration files to allow you to create the setup that you require.</p><h3 id="configuration-file" tabindex="-1">Configuration file <a class="header-anchor" href="#configuration-file" aria-label="Permalink to &quot;Configuration file&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>modbus:</span></span>
<span class="line"><span>  flow_control_pin: D1</span></span>
<span class="line"><span>  id: modbus1</span></span>
<span class="line"><span>  send_wait_time: 200ms  </span></span>
<span class="line"><span>uart:</span></span>
<span class="line"><span>  id: mod_bus</span></span>
<span class="line"><span>  tx_pin: TX</span></span>
<span class="line"><span>  rx_pin: RX</span></span>
<span class="line"><span>  baud_rate: 9600</span></span>
<span class="line"><span>  stop_bits: 1</span></span></code></pre></div><p>These two sections tell ESPHOME that we are going to be using modbus for communicating with the Inverter and the pins we shall be using for sending / receiving and also the flow control pin which controls when the device will be sending or receiving data.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>modbus_controller:</span></span>
<span class="line"><span>  - id: solis</span></span>
<span class="line"><span>    ## the Modbus device addr</span></span>
<span class="line"><span>    address: 0xA</span></span>
<span class="line"><span>    modbus_id: modbus1</span></span>
<span class="line"><span>    setup_priority: -10</span></span>
<span class="line"><span>    command_throttle: 300ms</span></span>
<span class="line"><span>    update_interval: 30s</span></span></code></pre></div><p>the next important configuration is to define a modbus controller which uses the id which created earlier. One important setting here is the</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>address: 0x1</span></span></code></pre></div><p>this tells esphome what id the inverter is configured for, by default most epever charge controllers use an ID of 1. Please note that the value is in hex so for example the value for 10 would be 0xA. If you have modified your inverter to use something different then you shall need to update the value accordingly.</p><p>For reading information you must configure every value you which to read/write. Here we refer to the modbus controller which we have setup in the modbus_controller_id.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sensor:</span></span>
<span class="line"><span>  - platform: modbus_controller</span></span>
<span class="line"><span>    modbus_controller_id: solis</span></span>
<span class="line"><span>    id: inverter_tempterature</span></span>
<span class="line"><span>    name: &quot;Inverter Temperature&quot;</span></span>
<span class="line"><span>    address: 33093</span></span>
<span class="line"><span>    unit_of_measurement: &quot;°C&quot; </span></span>
<span class="line"><span>    register_type: read</span></span>
<span class="line"><span>    value_type: U_WORD</span></span>
<span class="line"><span>    accuracy_decimals: 1</span></span>
<span class="line"><span>    filters:</span></span>
<span class="line"><span>      - multiply: 0.1</span></span></code></pre></div><p>To breakdown each item</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    id: inverter_tempterature</span></span></code></pre></div><p>This is an ID which you assign to the device which will be used within Home Assistant.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    name: &quot;Inverter Temperature&quot;</span></span></code></pre></div><p>This is a friendly name which we shall be assigned and used within Home Assistant.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    address: 33093</span></span></code></pre></div><p>This part is very important as it is the address which ESPHOME will use for reading. This is unique for every item you wish to read and you should be able to find a list of what registers are available for your inverter from Solis.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    unit_of_measurement: &quot;°C&quot;</span></span></code></pre></div><p>As per the name this defines the unit of measurement be it degree in this example of V for voltage.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    register_type: read</span></span></code></pre></div><p>This defines if the registers is a read or write type. Typically most registers are read only.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    value_type: U_WORD</span></span></code></pre></div><p>This defines the length of the data being read, typically this is a UWORD for a single item.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    accuracy_decimals: 1</span></span></code></pre></div><p>This tells ESPHOME how you wish to present the data, you can have 1 decimal place as in this example or 2 or even 0 for no decimal places and just whole numbers.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>    filters:</span></span>
<span class="line"><span>      - multiply: 0.1</span></span></code></pre></div><p>Lastly this defines the multiplying factor. Registers show a larger number than is shown so a multiplying factor must be set so that it returns a valid figure.</p>`,32),p=[t];function o(l,r,d,c,h,u){return a(),s("div",null,p)}const v=e(i,[["render",o]]);export{m as __pageData,v as default};
