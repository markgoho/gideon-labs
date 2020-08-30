---
categories: ['Success Stories', 'MOSFETs', 'PCB FA', 'Design']
date: 2019-11-04T05:00:00Z
pictures:
  [
    '/uploads/stryker-2.jpg',
    '/uploads/Stryker-1.jpg',
    '/uploads/Q13-2.jpg',
    '/uploads/Q22-2.jpg',
    '/uploads/Q13-14.jpg',
  ]
title: 'Failure Analysis of Vishay SQD50P04-13L MOSFET (Part 1)'
---

Gideon was asked to perform a failure analysis on two [Vishay SQD50P04-13L](http://www.vishay.com/docs/65157/sqd50p04-13l.pdf 'Vishay MOSFET') MOSFETs in TO-252 packages. The failed MOSFETs arrived on two PCBs.

There was no external damage to the package on either Q27 or Q14.

Since MOSFETs typically fail with all terminals shorted, it is imperative to examine the remainder of the die for evidence that may or may not be present to determine a cause for the EOS.

The first thing is that both the gate and source wires are intact with no damage. Generally, nothing ever happens to the gate wire unless destruction has occurred. The source wire, however, is many times involved in current surges which concentrates current under the wedge bonds of the source wires. There was no evidence of excessive current under or around the source wire bonds. Had there been so, the aluminum metal would either change color or reflow. Also, the silicon underneath would fuse into an amorphous mass together with the aluminum and silicon oxide. This did not happen.

The first [MOSFET](https://en.wikipedia.org/wiki/MOSFET 'MOSFET') failure Q27 was decapsulated and found to have an EOS (electrical overstress) which is indicative of an avalanche failure. This type of failure is found in an active MOSFET cell. The burn-mark is usually round, indicating a central failure site and subsequent thermal damage and is the hottest location on the die.

The die was examined for heat damage indicating either excessive duty cycle or gate/source topography change or color changes in metal deposits and grain structure distinction. Also, the metal under the passivation would recede and would be out of an optical plane with normal metal. The green-colored oxide is covering the gate polysilicon. There were no defects along the gate/source perimeter region.

This is the only spot visibly wrong with the surface of the die. This avalanche event melted the underlying silicon, collapsed the passivation and burnt the metal where the center of the event took place.

If this avalanche were in the milliseconds, then there should be more than one spot randomly distributed, on the die where avalanche took place.

The purple arrow is pointing to the above failure site. The other two arrows are pointing to two other avalanche sites that could not be seen with the source metal still on.

Along with many other pictures, curve trace, delayering, and some PCB testing, these are the conclusions drawn from this analysis.

· The report that was sent over from the independent lab is relatively thorough, especially considering the complexity of the product. They have some concerns about the initial inrush of Q27 along with some concerns regarding the stability of the walk-in loop involving Q14. Their recommendations regarding the circuit stability have been addressed, but it appears that the surge related to Q27 may not have been sufficiently addressed because we see the overcurrent still present on Q27.

· The thermal dissipation in Q14 during the soft-start may also remain a concern. We did a simulation but would have to do more testing, waveforms and perhaps a different MOSFET to simulate with harnessing what is happening electrically on the PCB. At this time, we do not have sufficient information to firmly address the Q14 issue on the PCB although it is an avalanche issue.

· Originally, we were anticipating a massive inrush when CH_ACTIVE is asserted, as indicated by the failure mode, which is the main control for the soft switch. Our initial concerns were that it was causing massive inrush through Q27 which was exciting the LC filter comprised primarily of C81, L12, and C77 (these are the components of greatest energy). However, after changing the simulation a bit, the issue may be more the initial application of 24V to the soft-start network rather than the assertion of the enable line, indicating that it's more of a time-zero issue when the unit initially gets power. The simulation shows >60A through Q27, but not a whole lot of voltage on Q14. However, we do not know what the startup waveform looks like, only that this is an avenue for future exploration.

· Also, it appears that the buck/boost converter output is also connected to the battery through some low-value shunt resistors. We are not too familiar with the structure of the product and how the battery is connected. It is a bit difficult to tell, but VBAT is connected to the 24V bus on the control card through a substantial LC filter, which may ring during the initial application of power. If this is the same VBAT that the charger buck/boost converter, then it's possible that hot-plugging the battery could cause ringing on this filter. It is impossible to determine which of the bulk voltages are present in which order with the documentation. There are many corners to this problem, including the timing of the buck/boost startup, the presence or lack of a battery, hot plugging the battery connections, potential excitation of networks by the motor itself, stability of the [buck/boost converter](https://en.wikipedia.org/wiki/Buck%E2%80%93boost_converter 'Buck /Boost') control loop, etc. Component drift and parasitics in the soft-start network likely continue to play a role here, as the prior report also pointed out.

**·** We do not believe the following plot to be sufficiently accurate. However, they mostly resemble a large half-sine of current in the 50\~180-amp range for roughly one millisecond, with a sustained 15V across D-S, well outside of the SOA. Here's an example. In this plot, a 24V potential was applied through a 0.1-ohm resistor and a 100nH inductor at 10us in. Once the net hit 15V, Q27 took off uncontrolled. The small step near the end is when the CH_ACTIVE line was asserted. Green is current, red is Vds.

Gideon can reverse engineer the PCB with your schematics, what we know from the failure analysis, and testing the board to find out the waveforms, voltage, current, loads, spacing requirements etc. This is another reason Gideon is first in the electronic failure analysis business. There will be several follow-ups on this analysis. Call us with your failures.
