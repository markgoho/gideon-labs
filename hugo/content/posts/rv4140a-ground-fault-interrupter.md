---
title: 'RV4140A Ground Fault Interrupter'
date: 2013-05-31
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/G1/GideonLabs/FCS-8.jpg
categories:
  - 'Semiconductor Failure Analysis'
  - 'Success Stories'
---

Gideon Analytical Labs received two failed [RV4140A](http://www.alldatasheet.com/datasheet-pdf/pdf/54476/FAIRCHILD/RV4140.html) ground fault interrupter controllers. The devices had far different impedance values than a new one did on several of the input pins. The RV4140A is a low power controller for AC outlet appliance leakage circuit interrupters. These devices detect hazardous current paths to ground such as an appliance falling into the water. The interrupter then opens circuits line before a harmful or lethal shock occurs.

Internally, the RV4140A has a diode bridge rectiﬁer, zener shunt regulator, op-amp, current reference, time delay circuit, latch and SCR driver. In addition, an external sense transformer, SCR, relay, two resistors and three capacitors need to be added to complete the design of the circuit interrupter. The layout can be obtained from the data sheet.

The device failed because of an overcurrent across two of the PNP transistors which rendered the base shorted to the emitter. The device was undersized for the application and current tunneling through the diffusion emerged as the outcome.

Gideon Analytical Labs can solve many problems relating to forensic engineering, reliability, reverse engineering, process improvement, design improvement and component selection, unique applications, resigned components, etc.

![RV4140 AM Ground Fault Interrupter](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/FCS-8.jpg 'RV4140 AM Ground Fault Interrupter')
![RV4140AM Die Circuitry](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/FCS-9.jpg 'RV4140AM Die Circuitry ')
![EOS on NPN transistor](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/FCS-7.jpg 'EOS on NPN transistor')
![GFI monolithic circuitry](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/FCS-10.jpg 'RV4140 AM GFI')
