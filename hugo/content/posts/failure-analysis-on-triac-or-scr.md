---
title: 'ST Microelectronics BTA06 Triac Failure Analysis'
date: 2012-11-27
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/triac1.jpg
categories:
  - 'Failure Analysis'
  - 'IC Failure Analysis (Integrated Circuit)'
  - 'Rectifier Failure Analysis'
  - 'Triac Failure Analysis'
---

Gideon Analytical Labs received one failed ST Microelectronics BTA06 [Triac](http://en.wikipedia.org/wiki/TRIAC) a TO-220AB package. The device was reported to have failed post-burn-in.

This  Triac is suitable for general purpose AC switching according to ST Micro. They can be used as an ON/OFF function in applications such as static relays, heating regulation, induction motor starting circuits or for phase control operation in light dimmers, motor speed controllers. The specially recommended for use on inductive loads, thanks to their high commutation performances. By using an internal ceramic pad, the BTA series provides voltage insulated tab (rated at 2500 VRMS) complying with UL standards.

The triac was electrically tested on a curve tracer to find the A1 to A2 leads has a leakage current of 110 ua at 600V. This would suggest a blown diode or a fracture in one of the diodes. After decapsulation, the die revealed a fractured die which leads to higher leakage current. This design is vulnerable to manufacturing processes which could and do fracture the die and the sandwiched [SCRs](http://en.wikipedia.org/wiki/Silicon-controlled_rectifier) (back to back parallel configured silicon controlled rectifiers)  is left hanging in mid-air.

Gideon Analytical Labs can determine how the device failed. By knowing this, a corrective action can be taken. Whether your failure is coming from the application, design, manufacturing, processing, or the inherent flaw in the component. If your company experiences component failures, check out Gideon.

![TO-220AB package](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/triac1.jpg 'Triac in plastic package')
![Decapsulated Triac Die](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/triac2.jpg 'Decapsulated Triac Die')
![Triac Die](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/triac3.jpg 'Triac Die')
![Die fracture](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/triac4.jpg 'Die fracture at the die corner')
