---
title: 'Triac Failures'
date: 2009-12-02
featured_image: https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_250/v1/GideonLabs/dual-scrs-connected-as-triacs.jpg
categories:
  - 'Failure Analysis'
  - 'Rectifier Failure Analysis'
  - 'Success Stories'
  - 'Triac Failure Analysis'
---

Gideon Analytical Laboratories received one failed optocoupler, along with two optocouplers for comparison. As a type of isolator favored by manufacturers, photocouplers

serve as noise protectors in many electronic devices. This optocoupler has a minimum isolation voltage of 5300 Vrms, a typical input voltage of 1.16 V, and a peak output voltage of 600V. The goal was to identify the cause of the failure.

The optocoupler was electrically tested. The input functioned normally with VF 1.2 Vat 10 mA. The IR was .08 uA. There were no mechanical marks on the part, and it had a normal curve trace. However, a short was confirmed from pin 5 to both pins 4 and 6. When 15 V was applied to either pin 4 or 6 and measured at pin 5, a 42-ua leakage current resulted. The failure was baked out 125C for two hours. The part was re-measured to find no connection between any of the pins 4, 5, or 6. As seen in the picture at the top left, the 6-pin dip is constructed by having an epoxy encapsulation over a plastic sarcophagus housing two identical inverse parallel-connected photosensitive triacs. The triacs are further encapsulated with an optical plasticizer.

The two triacs were tested after removing the encapsulation; the diode after removal of encapsulation is pictured at the top right. They tested normal, as did a good device. There was no open or bridging caused by EOS, EDS or mechanical marks on the die. Gideon Analytical Laboratories concluded that the cause of this failure was caused by an ionic bridging to the lead frame to produce the leakage current. How this occurred would involve voltage and leaching ionics from either the plasticizer or moisture and silver migration under the plasticizer. In either case, elimination of the moisture stops the ionic migration and no short occurs. This was very likely an error in the manufacturing process.

Gideon Analytical Laboratories provides failure analysis to electronics companies in search of important answers. Knowing how, why, and when a device fails can be invaluable information to companies planning for the future. It is the goal of Gideon Analytical Laboratories to provide accurate analytical results that help companies solve their problems and better prepare for future business.

![Dual SCRs as triacs](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/dual-scrs-connected-as-triacs.jpg 'Dual SCRs as triacs')
![Silicon controlled rectifier with no visual flaws in metal](https://res.cloudinary.com/dy3wlzuye/image/upload/f_auto,c_scale,w_300/GideonLabs/silicon-controlled-rectifier-with-no-visual-flaws-in-the-metal.jpg 'Silicon controlled rectifier with no visual flaws in metal')
