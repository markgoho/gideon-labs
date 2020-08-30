---
title: 'Fairchild RFP40N10 MOSFET Failure Analysis'
date: 2012-11-26
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabssfet1.jpg
categories:
  - 'Failure Analysis'
  - 'Failure Analysis of Transistors'
  - 'FET Failure Analysis'
---

Gideon Analytical Labs received three-failed [Fairchild](http://www.fairchildsemi.com/) RFP40N10 power MOSFETs. All the terminals were shorted. A [MOSFET](http://en.wikipedia.org/wiki/MOSFET) is a voltage-controlled power device. If no positive voltage is applied between gate and source, the MOSFET will be non-conducting. If a positive voltage is applied to the gate an electrostatic field between it and the rest of the transistor will be produced. This positive gate voltage will push away the holes inside the p-type substrate and attracts the movable electrons in the n-type regions under the source and drain electrodes. This produces a layer just under the gate's insulator, silicon dioxide, through which electrons migrate and move from source to drain. This region is known as the channel. The positive gate (doped polysilicon) voltage,therefore, inverts the p-type region and creates a channel in the top layer of material between the gate oxide and p-Si. Increasing the voltage will widen the channel and thus, increase the amount of current that can flow through the channel. This is called an enhancement mode MOSFET.

The smaller wire, in the picture below, is the gate, the larger wires are the source. There is no carbonization on the source wire, no vertical cracking to the silicon, and no fusion of the silicon under the source wire. These symptoms would be indicative of a current surge. The shorting of the terminals resulted in the meltdown of the junctions near the source wire. A closer examination of the failed area reveals melted source metal. The metal has receded from the passivation layer (silicon nitride) which means heat was generated within the MOSFET. Inspection in several locations indicates this failure site did not penetrate too deeply into the silicon. The failure was located in the NPN region slightly lower than the diffusion depths.

Failure analysis on MOSFETs often involve knowing something about the circuit and how it is intended to work as opposed to how it is actually working. These MOSFETs have seen excessive power for too long a period. This can be caused by a timing issue, where the device is not switched fast enough and remains in the linear region too long. In this scenario, the drain current causes damage because of excessive heat dissipation. If the duty cycle is too high, this could cause the same phenomena.

Gideon Analytical Labs can solve circuit design issues and by performing failure analysis on MOSFETs. We perform failure analysis on components all the time. Our success is to your benefit because we can save your company money and production time.

![Decapsulated MOSFET](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabssfet1.jpg 'Decapsulated MOSFET')
![EOS near the Source Wire](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabssfet2.jpg 'EOS near the Source Wire')
![Destruction penetrated top layers](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabssfet3.jpg 'Destruction penetrated top layers')
![Termination rings had no damage](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabssfet4.jpg 'Termination rings had no damage ')
