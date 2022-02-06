+++
categories = []
date = 2019-11-07T05:00:00Z
featured_image = ""
pictures = ["/uploads/mosfet part 2-3.PNG", "/uploads/mosfet part 2-2.PNG", "/uploads/mosfet part 2.PNG"]
title = "Failure Analysis of Vishay SQD50P04-13L MOSFET (Part 2)"

+++
# 1 Circuit Analysis

## 1.1 Device Failures and Circuit Description

The failing units have repeatedly experienced failures of Vishay SQD50P04-13 power MOSFETs in locations Q14 and Q27. Device-level analysis performed by Gideon has indicated that the devices in location Q14 had failed due to excessive Drain-to-Source voltage avalanche condition while the devices in location Q27 had failed from excessive Drain current. Q14 and Q27 were noted as the only failed components discovered.

Location Q14 is intended to provide inrush control to a large amount of capacitance seen on the motor control board while Q27 acts as a series pass device capable of supplying full current to the motor control board once the soft start has completed.

## 1.2 Circuit Probing

A Tektronix TDS-7104 1GHz oscilloscope was used for all active circuit probing. Several tests were performed while looking for damaging conditions. A list of the non-productive tests is shown later in this document. This section will focus only on the damaging condition that was noted, which was found to be during the initial application of 24VDC battery power.

### 1.2.1 Initial Application of Battery Power

The device is primarily intended to operate from battery power. The battery supplied is a 24VDC Li-ion pack with a 4AH capacity rating. No other battery specifications were supplied. The included charger was used before testing to ensure that all batteries were at the peak charge level, as shipping regulations generally require a pack to be charged to no more than 30% capacity prior to being shipped as air freight.

Instrumentation was connected as follows:

* Channel 1 100MHz Hall-effect based AC/DC Current probe in series with battery wiring
* Channel 2 1GHz 10x single-ended probe from Drain to Source of Q27
* Channel 3 1GHz 10x single-ended probe from Gate to Source of Q27

Immediately after connecting the battery to the unit, a large current inrush was noted and shown in the plot.

The plot shows an initial inrush current of over 36A from the battery pack followed by a slow decline to 0A for roughly 150us. During this period the Drain-to-Source voltage (Vds) remained relatively high. This high Drain current, when combined with the relatively high Drain voltage, is close to the Safe Operating Area of the MOSFET, falling roughly half-way between the 1ms and 100us operating points. The test was repeated with the same results.

With this number of plug-ins, the battery electrodes caused irregular waveforms.

### 1.2.2 Simulation

After observing the initial inrush conditions above and noting nothing else out of the ordinary, a computer simulation was performed to more readily observe the behavior of other circuit nets as well as to more easily test proposed solutions. The simulation schematic is shown in the Appendix.

In order to attempt to mimic actual behavior, a representative model for the battery was created assuming a 150 milliohm output resistance and a 200 nano-Henry series inductance. Additionally, the simulation assumed a 23C operation with datasheet standard parameters for the SQD50P04-13 device.

The initial simulation run matched the physical test almost identically, with the initial inrush current being just slightly less than that of the physical test, peaking at just under 30A:

Much like the physical test, a large, instantaneous dissipation is seen upon the application of the battery. As before the Reverse Transfer Capacitance causes an immediate increase in Vgs, causing a premature enhancement of the FET.

### 1.2.3 Problem Determination

Having determined that a likely cause of the MOSFET failures was during the initial connection of the battery pack, a closer look was taken at the circuit.

It should be noted in the waveforms above that MOSFET gate voltage does not stay at zero, but instead immediately jumps to **roughly -4V** once the battery is connected. This is caused by the Reverse Transfer Capacitance of the FET allowing energy to couple from Drain to the Gate in a capacitive fashion.

The coupled energy causes the Gate voltage to exceed the threshold voltage of the device. For the SQD50P04-13 device, the **Threshold Voltage is roughly -2.5VDC**. Exceeding this voltage will result in an enhancement of the MOSFET and subsequent Drain current flow.

Physical deconstruction of device Q14, also a Vishay SQD50P04-13, indicated that the device was likely damaged due to excessive drain-to-source voltage application. During testing, there was no evidence seen of excessive voltage stress.

At this point, it was suspected that the failure of Q14 might have been caused by the failure of Q27. To investigate this, the simulation was modified to include time-switched resistors that might model the impact of Q27 failing shorted. The simulator was instructed to switch in bypass resistances at an elapsed time that would likely match the time at which Q27 may have failed shorted. It was noted that a significant reduction of the Gate-to-Source impedance of Q27 could cause a destabilization of the Q9/Q14 control network. This was seen to cause a significant oscillation across Q14, exacerbated by the presence of large L-C filter networks. A simulation plot of this condition is shown below:

The green trace is the input current to the soft-start network, while the red trace is the Drain-to-Source Voltage across Q14. Note that this voltage causes an avalanche of the device over its 40VDC rating with a roughly 30A applied current. It is difficult to determine exactly how Q27 will physically fail, which makes it difficult to postulate the exact waveforms which might damage Q14.

### 1.2.4 Potential Corrective Action

The phenomenon that damaged Q27 is often seen in power electronics and is generally exacerbated by high dV/dt events on power rails. The situation is generally avoided by placing a resistor from Gate to Source as a means of bleeding down the energy coupled through the internal capacitances, as well as helping to ensure that the FET remains in the ‘off’ state when not actively driven. In the case of this circuit, resistor R95 (R96 for Q14) was likely intended to perform this function but is valued at 100k Ohms, which is too high of an impedance to bleed the Gate charge down in a timely fashion. Using too much resistance in this location will increase the time required for Vgs to bleed back down to zero, allowing the MOSFET to spend too much time in the Ohmic region, thus increasing the chances of thermal damage. In order to reduce the impacts of unwanted turn-on, **this resistor is generally sized in 5k to 10k range**. Additionally, **placing a capacitor across the Gate to Source will help to reduce the initial voltage seen on the gate**, as it reduces the impact of the capacitive voltage divider formed by the Gate capacitance and Reverse Transfer capacitance. _It should be noted that the provided schematics already have a placeholder for this part at location C49_.

The waveform below illustrates the impact of changing R95 and R96 to 10k ohms. Note that **both R95 and R96 must be the same value** to prevent asymmetrical operation during high dV/dt events.

After a number of plots and manipulation of the circuit, there were still more things we needed to have to fix and reverse engineer this complex PCB.

The **failure of Q27** appears to be related to high dV/dt induced turn-on as a result of excessively high external Gate-to-Source impedance. This excessive impedance allows for the device’s internal Reverse Transfer Capacitance to couple significant energy to the Gate terminal, exceeding the devices turn-on threshold voltage, thus causing device Q27 to conduct significant current and potentially exceed the Safe Operating Area of the device during initial connection of the battery pack.

It is recommended the gate pulldown resistors R95 and R96 be reduced from 100k ohms to 10k ohms to reduce the impact of the initial turn on. Additionally, it is recommended an additional Gate capacitance be added to Q27 to reduce the initial Gate voltage, thus directly reducing the magnitude of the initial inrush current.

The **failure of device Q14** is likely a sympathetic failure to that of the failure of Q27. Computer simulation indicates that a sudden low-impedance produced at the Q27 Gate-to-Source juncture during the peak of the input inrush will cause a sudden destabilization of the Q9/Q14 control network. This destabilization will result in a large current oscillation between the battery pack and the soft-start network output capacitance, ultimately resulting in a destructive over-voltage avalanche of Q14.

Many circuit issues are complicated requiring waveform testing, design, and component selection, failure analysis and pulling all the information together to give the corrective action. This job required more information which we got and the ultimate fix is in part 3.

Call Gideon when you have failed PCB, components, or design issues. We are very good.