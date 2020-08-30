---
title: 'PWM Failure Analysis on MuRata PS Converter'
date: 2012-11-22
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/pwm-2.jpg
categories:
  - 'Failure Analysis'
  - 'PWM Failure Analysis'
description: The PWM was removed from the encapsulation and tested. Several I/O pins were either open or showed no connection to the circuitry of the IC. The PWM CS51022AG is a fixed frequency current mode controller family provides the necessary features for DC−DC primary side control.
---

Gideon Analytical Labs received pulse width modulators [PWM](http://en.wikipedia.org/wiki/Pulse-width_modulation) failing in a [MuRata Ps](http://www.murata.com/) [DC-DC converter](http://en.wikipedia.org/wiki/Dc-dc_converter). The PWM was removed from the encapsulation and tested. Several I/O pins were either open or showed no connection to the circuitry of the IC. The PWM CS51022AG is a fixed frequency current mode controller family provides the necessary features for DC−DC primary side control. In addition to low startup current (75A) and high frequency operation capability, the CS51022A includes over-voltage and under-voltage monitoring, externally programmable dual threshold over-current protection, current sense leading edge blanking, current slope compensation, accurate duty cycle control and an externally available 5.0 V reference. The CS51022A has a sleep mode with 100 A maximum IC current consumption. The CS51022A is in a 16 lead narrow body SOIC package.

The thermal crack was caused by the die receiving heat faster (current from pins 14, 15, and 16) than the silicon’s ability to dissipate it. It appears pin 14 (Vcc) received a current surge (a crater in the bond pad) and melted the gold wire. This, in turn, shorted the ground (pin 15 and the carbon ground rail) and the output power stage (pin 16). Because the gate is connected to the pin 16 circuitry, the gate on the MOSFET experienced this overcurrent as well. Overvoltage will not melt the wire. According to the literature, this wire will handle about 1.2 amps. Since the wires are melted, the PWM received a current excess of 1.2 amps. The current was coming from a transformer with the improper gauge wire for the winding.

Gideon Analytical Labs can determine where the problem is coming from and solve the problem before your customer has a failure. This saves your reputation and saves the customer from frustration. Call us with your failure. 845-255-5356

![Excessive current caused the die cracking](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/pwm-2.jpg 'Excessive current caused the die cracking')
![PWM in the DC to DC Converter](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/pwm-1.jpg 'PWM in the DC to DC Converter')
![Melting of the gold wires](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/pwm-3.jpg 'Melting of the gold wires')
![PWM IC with failure site located](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/pwm-4.jpg 'PWM IC with failure site located')
![EOS on the Vcc pin](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/pwm-5.jpg 'EOS on the Vcc pin')
