---
title: AS169 PHEMT Failure Analysis
date: 2012-11-21
thumbnail: phemt-1
categories:
  - Failure Analysis
  - Failure Analysis of Transistors
  - IC Failure Analysis (Integrated Circuit)
---

Gideon Analytical Labs received several failed AS169 PHEMT DC 2676 transistors on several PCBs (pseudomorphic high electron mobility transistor) is a field-effect transistor incorporating a junction between two materials (GaAs and AlGaAs) with different valence and conduction bands (bandgap is the difference between the two bands for the two materials) as opposed to a doped region where a MOSFET structure would be formed. The thickness of the one material is stretched such that the bandgap opens more than it normally would which allows better performance because the lattice does not bunch up when the two materials are forced together.

The AS169-73 is an IC FET SPDT switch in a SOT-6 plastic package. The AS169-73 features low insertion loss and positive voltage operation with very low DC power consumption. This general-purpose switch is often used in telecommunications applications.

A curve trace across these pins would normally produce a diode (pn junction that will conduct in one direction). The shorting indicates the junction is destroyed. The component was decapsulated and inspected. The conclusion was that this is an EDS (electrostatic discharge) which when powered produced an EOS (electrical overstress). This was demonstrated in several experiments which produced a failure almost identical to the failed PHEMTs.

![phemt-1](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/phemt-1.jpg 'Pseudo high electron mobility transistor')
![phemt-2](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/phemt-2.jpg 'Close up of the junction')
![phemt-3](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/phemt-3.jpg 'EOS on the input')
