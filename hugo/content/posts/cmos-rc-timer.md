---
title: CMOS RC Timer
date: 2013-04-24
thumbnail: cmos-3
categories:
  - Failure Analysis
  - IC Failure Analysis (Integrated Circuit)
  - Semiconductor Failure Analysis
  - Success Stories
---

Gideon Analytical Laboratories received two ICM7555 CMOS RC timers. Each device was pulling down the output.

The ICM7556 is a CMOS RC timer that provides a stable controller capable of producing accurate time delays or frequencies. The ICM7556 is a dual ICM7555, with the two timers operating independently of each other, sharing only V+ and GND. In the one-shot mode, the pulse width of each circuit is precisely controlled by one external resistor and capacitor. Unlike the regular bipolar 555/6 devices, the control voltage terminal need not be decoupled with a capacitor. The circuits are triggered and reset on falling (negative) waveforms, and the output inverter can source or sink currents large enough to drive TTL loads, or provide minimal offsets to drive CMOS loads.

The die was 1988 vintage die identification near pin 13. Counterfeit parts are a huge problem these days so that all identifications are made first. The curve tracer showed the output was pulled to the ground. This happened on several transistors composing the operational amplifiers to the output. The power was too great on the negative inverter of comparator A, the control voltage, which affected the flip-flop circuit and, thus, the output of the device.

This application EOS problem was corrected when the voltage input was monitored later after the failures. When the power is marginally high, it may take some time for the device to fail.

Gideon Analytical Labs can save time and can identify the problem quickly. Do not let your company be exposed to failures and designs that are not thoroughly tested and proven reliable.

![Alumina ceramic package](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/cmos-3.jpg 'Hermetic ceramic package')
![Large RC die](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/cmos-1.jpg 'Two identical RC timers on the same die')
![ICM 7556 Die](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/cmos-2.jpg 'Decapsulated ICM 7556')
![Failure Site](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/cmos-4.jpg 'EOS failure site on the ground trace to transistor')
![Melted aluminum metal](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/cmos-5.jpg 'Splattered aluminum metal under the passivation')
