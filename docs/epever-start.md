---
outline: deep
---

# How to get started with your RS485 to Wifi adaptor

First off thank you for your purchase! the latest version is an evolution of the previous adaptor with a different take with regards to the connectivity and posting data to logging platforms.

<p align="center" width="100%">
<img src="https://github.com/chickey/RS485-WiFi-EPEver/blob/master/images/Board-Image.PNG?raw=true" alt="I sell on Tindie" width="50%" height="50%">
</p>


## Connecting

You shall need to use a standard RJ45 network cable, make sure it’s not a crossover.

<p align="center" width="100%">
<img src="/IMG_2989.jpeg" alt="I sell on Tindie" >
</p>

Once it’s connected you shall need to connect and configure your WiFi so the adaptor can connect to your network.  I am using my phone and on searching for networks you shall see a new network called RS485-Wifi : –

<p align="center" width="100%">
<img src="/Screenshot_20200918_100724.jpg" alt="I sell on Tindie" >
</p>

On connecting the next step shall depend on the phone/laptop OS your using to connect. On an android phone it should prompt that the connection needs to be configured and will take you straight to the wifi configuration page. If this does not happen you can go to the confiugration page by opening a browser and manually enter the ip address http:/192.168.4.1 note on most devices you won’t need to enter the http://

Once connected you shall see the connection screen which details the Wifi configuration manager page. You can select “Configure WiFi” to enter your credentials details.

<p align="center" width="100%">
<img src="/Screenshot_20200918_100807_com.android.chrome-479x1024.jpg" alt="I sell on Tindie" >
</p>

Here you shall be presented with a list of networks it has found

<p align="center" width="100%">
<img src="/Screenshot_20200918_100818_com.android.chrome-479x1024.jpg" alt="I sell on Tindie" >
</p>

To configure your network you shall need to select your network and then input your WiFi password. The device then shall try connecting to the WiFi network you selected, if it is unable to do so it shall once again go back to the default configuration and you can re-enter your password if you made a tying mistake. Once it is successfully connected you shall need to find the IP address it has selected (this can be found on your home router)

You can then browse to the ip address and shall be presented with the following page showing the current live statistics of the charge controller

<p align="center" width="100%">
<img src="/image-1024x506.png" alt="I sell on Tindie" >
</p>

If you wish to have the device post the data to either an MQTT server or influxDB server you can do this via the settings tab.

<p align="center" width="100%">
<img src="/image-1-1024x505.png" alt="I sell on Tindie" >
</p>

Here you can enter the details and enable the relevant service. The device will post the change controller statistics every 60 seconds.

From here you can also control the load on the device .