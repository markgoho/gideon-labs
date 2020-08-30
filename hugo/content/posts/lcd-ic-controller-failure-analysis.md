---
title: 'LCD Sitronix ST7528 IC Controller Failure Analysis'
date: 2012-11-21
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/sitronix-1.jpg
categories:
  - 'Failure Analysis'
  - 'Semiconductor Failure Analysis'
---

Gideon Analytical Labs received three failed and three operating Sitronix ST7528 LCD controller/drivers mounted directly on glass and connected via a 24 pad polyimide flex circuit to an FRU controller card. The failed units had a date code 06114A\*C3 on a white label, version 1.6.

These are the test point pads on NG1. These are output pads. There is an EOS (electrical overstress) under the glass just below the second rail.

There is a direct correlation between the failures and the EOS found on the die at the test point pads. The good die had no EOS on any of the test point pads with the same date code. Since these test points are output pins, this would imply the circuitry associated with these test pads have seen too much power also. This would inherently raise a concern over reliability and latent damage on the die prior to use. Since these test pins are not connected in any way to the application and a connection must have been made to make them fail, then the testing must have occurred at the manufacturer, Sitronix.

Through failure analysis, Gideon Analytical Labscan solve many complicated problems that impact product application and reliability. If your application has failures, then check us out we could solve your problem.

![Interconnect to the Sitronix Chip](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/sitronix-1.jpg 'Interconnect to the Sitronix Chip')
![Sitronix chip with a blown I/O](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/sitronix-2.jpg 'Sitronix chip with a blown I/O')
