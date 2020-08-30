---
title: 'Optocoupler Fairchild QTC H11N1 Failure Analysis'
date: 2012-11-23
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/opto1.jpg
categories:
  - 'Diode Failure Analysis'
  - 'Failure Analysis'
  - 'Failure Analysis of Transistors'
  - 'Optical Coupler Failure Analysis'
---

Gideon Analytical Labs received several [Fairchild](http://octopart.com/h11n1-fairchild%2Bsemiconductor-1375969) QTC H11N1s, a high-speed logic optocoupler, in 6-pin plastic DIPs. The devices were reported as some good, some intermittent and some not working in the application.

The main function of an opto-isolator is to block high voltages and voltage transients, so that a surge in one part of the system will not disrupt or destroy another part of the circuit. Opto-couplers allow a signal to be sent in digital (some analog) between circuits. This isolation used to take place using isolation transformers via inductive coupling between input and out sides separated by a dielectric. Four of the date codes were 9607E and one 9942K. All the optocouplers were tested under conditions that corresponded to the application; these failed, however, when the current was increased, the output received the signal. Several of the failed devices had reverse leakage current on the diode (input) as measured on a curve tracer.

The phototransistor was tested independently after the package was opened. All five transistors turned on and off. The die was also inspected and no defects were found. The red arrows are pointing to a corroded semicircle surrounding the gold ball bond. The blue arrow is pointing to what remains of the top passivation, which is, suppose to be magnesium oxide, MgO. Silicone is hygroscopic and retains moisture. This moisture will contact the facet of the AlGaAs diode. Moisture causes oxidation, which decreases the optical intensity over time. Current density, light (from within the crystal when it is activated) and crystal defects accelerate this failure mechanism.

Facet oxidation was evident by appearance and porosity of the protective layer (MgO) on the diode surface. This is a known wear out mechanism; it diminishes optical output over time by reacting moisture with the AlGaAs. This oxidation also affects reverse leakage current and happens on the surface on the die.

Gideon Analytical Labs solved this failure analysis using curve tracer, [SEM-EDS,](/analytical-services/scanning-electron-microscopy/) and several experiments run to determine whether the failure could be reversed. Gideon Analytical Labs can determine why your components failed or perform routine analysis for QC.

![6 Pin Optocoupler](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/opto1.jpg '6 Pin Optocoupler')
![Reverse leakage on the diode](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/opto2.jpg 'Reverse leakage on the diode')
![Opto layout within package](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/opto3.jpg 'Opto layout within package')
![Input Diode](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/opto4.jpg 'Input Diode')
![Area of corrosion near the arrows](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/opto5.jpg 'Area of corrosion near the arrows')
