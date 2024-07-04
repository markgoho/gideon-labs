---
title: 'Browning Trail Camera Recon Force Failures'
date: 2024-02-15
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/GideonLabs/Figure_1.jpg
categories:
  - 'Failure Analysis'
  - 'PCB Failure Analysis'
  - 'PCB Qualification'
  - 'PCB Quality Control'
---

Gideon received several Browning BTC-7-4K-Edge cameras from the field. The cameras were dead on arrival. The objective was to find the cause of failure.

![external photo of recon force camera](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/v1720111251/GideonLabs/Figure_1.jpg 'There was no external physical damage to any cameras')

The batteries were replaced with new ones. The camera did not turn on; however, when it was disassembled, the full voltage resided at the solder joints of the printed circuit board.

![Inside cover with details](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_2.jpg 'Inside cover with details')

![The battery connection is in the lower left corner.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_3.jpg 'The battery connection is in the lower left corner.')

![This photo shows the PCB markings.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_4.jpg 'This photo shows the PCB markings.')

![Both the motherboard and this daughter board show significant corrosion.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_5.jpg 'Both the motherboard and this daughter board show significant corrosion.')

![Corrosion on the daughter board.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_6.jpg 'Corrosion on the daughter board.')

![Corrosion on the terminal causing a significant leakage path.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_7.jpg 'Corrosion on the terminal causing a significant leakage path.')

![The positive battery terminal has corrosion all around it, including the screw.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_8.jpg 'The positive battery terminal has corrosion all around it, including the screw.')

![This is incredibly sloppy soldering using the wrong flux with many IPC-610 violations of acceptability.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_9.jpg 'This is incredibly sloppy soldering using the wrong flux with many IPC-610 violations of acceptability.')

![There is so much corrosion that even their test points were corroded, as well as a bank of SM resistors from terminal to terminal.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_10.jpg 'There is so much corrosion that even their test points were corroded, as well as a bank of SM resistors from terminal to terminal.')

![This onboard battery corroded not only the electrical components but also left a residue on the board, which aided in the leakage path and caused the batteries, when the camera did work, to last two weeks.](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_11.jpg 'This onboard battery corroded not only the electrical components but also left a residue on the board, which aided in the leakage path and caused the batteries, when the camera did work, to last two weeks.')

![Corrosion](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/Figure_12.jpg 'Corrosion')

## Conclusions

- Electrical characterization showed many resistors were shorted due to corrosion across the terminals.
- The camera maker did not adequately protect the PCB by applying a conformal coating, nor did they use a proper flux such that no leakage current from component to component would flow during operation. Flux cannot have ionics or aggressive halogens.
- Because the camera maker did not take these steps, the relative humidity, coupled with a lack of standards and methods, caused these cameras to fail.
- We would not advise buying these cameras because of the manufacturer's lack of understanding, training, or planned obsolescence. Whatever it is, the cameras need to be replaced.
