---
title: 'Op-Amp Failure Analysis'
date: 2012-12-02
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/op-amp2.jpg
categories:
  - 'Failure Analysis'
  - 'Failure Analysis of Op-Amp'
  - 'IC Failure Analysis (Integrated Circuit)'
---

Gideon Analytical Labs received four [Maxim](http://www.maximintegrated.com/products/) 4252EUA dual op-amps for failure analysis. [Operational](http://en.wikipedia.org/wiki/Operational_amplifier) Amplifiers or Op-amps are one of the basic building blocks of analog electronic circuits. Operational amplifiers are linear devices that have all the properties required for nearly ideal DC amplification and are therefore used extensively in signal conditioning, filtering or to perform mathematical operations such as add, subtract, integration and differentiation. It was reported the fails indicated no output. Five devices were supplied to help in the layout and electrical testing.

There was no external mechanical damage to these parts. Since no schematics were supplied, the op-amps were tested with a negative feedback loop with a gain ratio R2/R1 of 10 and find out whether the output would produce 10 times the non-inverting input. No identified failures responded and the output was dead. This was not performed on every op-amp. One device had the lower op-amp (1-3) working and the upper (pins 5-7) one failed. The pins 1 and 7 are outputs, pins 2 and 6 are the inverting inputs, and pins 3 and 5 are the non-inverting inputs. The V<sub>dd</sub>, pin 8, rail follows the die perimeter. V<sub>ss</sub>, the ground, rail is down the middle of the die.

Keep in mind that all diffusions are on the silicon surface. This includes the transistors, capacitors, and resistors. The circuitry is suspended in glass on several layers (TEOS, SiO<sub>2</sub>, and Si<sub>3</sub>N<sub>4</sub>) which separate the trace lines and allow the necessary connections. If the glass is removed all the trace lines collapse making the connection a jumbo mess of metal (aluminum interconnects). The arrow in this picture is pointing to melted metal. This spot is an indication that something has occurred which is beyond the tolerance of this device. The impedance on this ground rail was half of that of a new device. Both op-amps had non-functional outputs. The failed transistors are on the inverting input of both op-amps. Low impedance measurements on both op-amps suggest a problem with the inverting input with the ground (V<sub>ss</sub>). Two transistors were shorted because of a voltage spike coming in the inverting input. Gideon Analytical Labs can determine why the IC has failed. Call Gideon the next time you need IC failure analysis.

![Dual op-amp die](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/op-amp2.jpg 'Dual op-amp die ')
![Maxim Op-Amp](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/op-amp1.jpg 'Maxim Op-Amp')
![failure site](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/op-amp3.jpg 'failure site on op amp')
![voltage spike](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/op-amp4.jpg 'The silver spot is an EOS')
