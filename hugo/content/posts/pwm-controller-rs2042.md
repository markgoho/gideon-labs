---
title: 'Orister PWM Controller RS2042'
date: 2017-01-26
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/failed-sight-1.jpg
categories:
  - 'PWM Failure Analysis'
  - 'Success Stories'
---

The RS2042 is a low startup current, current mode PWM controller with Green-Power & burst-mode power-saving operation. It has integrated functions such as the leading-edge blanking of the current sensing, internal slope compensation, low external component counts, and easily fits in with AC/DC power applications. The Green-Power function provides off-time modulation to linearly decrease the switching frequency under light-load conditions. And under zero-load conditions, the power supply enters burst-mode to further reduce power consumption by shutting off PWM output. When the output of the power supply is short or overloaded, the FB voltage will increase, and if the FB voltage is higher than 5.2V for longer than 56msec, the PWM output will be turned off. Pulse by pulse current limit ensures a constant output current even under short circuit. PWM output will be disabled as long as VDD exceeds a threshold. When an internal latch circuit is used to latch-off the controller, the latch will be reset when the power supply VDD is disabled.

This component is used on a TDK-Lambda KPSA1015 power supply. Several of these supplies have arrived DOA. The reason was this PWM Controller. The component exhibited a gate to ground and VDD to ground leakage with no functionality.

After decapsulation and circuit analysis, the device was found to have a step coverage leakage on several traces lines shorting several transistors.

Gideon can help your company to solve power supply problems, component problems, or PCB problems.

![A burn out spot shows up at the step coverage shorting out several](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/failed-sight-1.jpg 'A burn out spot shows up at the step coverage shorting out several transistors.')
![PWM](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/51898.jpg '8 leaded PWM Controller')
![2042 die](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/51867.jpg '2042 die')
![Step coverage failure](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/failed-sight-2.jpg 'DOA RS2042 failure on step coverage. ')
![Ground rail cracking](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/grd-1.jpg 'Dicing process has cracked the ground trace.')
