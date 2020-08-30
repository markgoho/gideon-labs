---
title: 'Poor Process Control Lead to Over Current Failure'
date: 2009-12-10
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/burned-integrated-circuit-on-printed-circuit-board.jpg
categories:
  - 'Diode Failure Analysis'
  - 'Failure Analysis'
  - 'Fires'
  - 'Success Stories'
---

Gideon Analytical Labs received several printed circuit boards (PCB) with fire damage on one and electrical overstress on the LTC4258CGW module when received. One good unit was provided for comparison. The objective was to find the cause and access the risk to the customer.

The LTC4258 can operate autonomously or be controlled by an I2C serial interface. Fault conditions are optionally signaled with the INT pin to eliminate software polling. External power MOSFETs, current sense resistors and diodes allow easy scaling of current and power dissipation levels and provide protection against voltage and current spikes and ESD events.

Both LTC258CGWs on both PCBs were caused by excessive heat (power) to the inside of the IC. The components were de-soldered from the PCB and decapsulated. There are two dies in the LTC4258CGW package. The side with the higher pin counts controls the sense, gate and out of the various ports. This is the side involved in the electrical overstress (EOS).

The cause of the failure may have been for several reasons. It is suspected that time-related overvoltage phenomena related to oxide breakdown and causing overheating and eventual failure in the LTC4258CGW module. The board assembly had a fast recovery diode (FA331 ES2D) in a position that was not the same as the rest of the diodes used on the second PCB. This contributed to the modules’ demise. Several of the capacitors had solder dross, which demonstrates the vendor is not cleaning the solder. Solder dross can cause shorts, grow dendrites or tin whiskers, and give unreliable solder joints.

Failure analysis performed by Gideon Analytical Laboratories can consistently identify the root causes of a variety of problems with electrical components, both in the production process and in the field application. Results from this failure analysis determined the responsible party such that corrective action could be taken. Correcting problems so that you can move forward is always the primary objective at Gideon.

![Burned integrated circuit on printed circuit board](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/burned-integrated-circuit-on-printed-circuit-board.jpg 'Burned integrated circuit on printed circuit board')
