# 📋 Test Plan – “Fitt Lábak Szilvitől” Pedicure Website

This document is created to manually test the main functionalities of the website. The table contains the test cases.

| ID | Function | Test Steps | Expected Result | Actual Result |
|----|----------|------------|-----------------|---------------|
| TC01 | Navigation menu | Click on the 'Bemutatkozás' menu item | Page smoothly scrolls to the 'Bemutatkozás' section | pass |
| TC02 | Navigation menu | Click on the 'Kapcsolat' menu item | Page smoothly scrolls to the 'Kapcsolat' section | pass |
| TC03 | Smooth scrolling | Click on a menu item | Scrolling is animated, not a sudden jump | pass |
| TC04 | Contact links | Click on the phone link on mobile | Call initiation is offered |
| TC05 | Contact links | Click on the Facebook link | Link opens in a new tab | pass |
| TC06 | Gallery | Click on a gallery image | Modal opens, image is displayed enlarged | pass |
| TC07 | Gallery | Press ESC while modal is open | Modal closes | pass |
| TC08 | Gallery | Click on the background while modal open | Modal closes | pass |
| TC09 | Scroll-to-top | Scroll page down more than 100px | Button appears | pass |
| TC10 | Scroll-to-top | Click on the button | Page smoothly scrolls back to the top | pass |
| TC11 | Responsiveness | Open site on desktop | Menu centered, well readable | pass |
| TC12 | Responsiveness | Open site on tablet (~768px) | Menu with smaller padding, still readable | pass |
| TC13 | Responsiveness | Open site on mobile (~375px) | Menu horizontally scrollable, readable | pass |
| TC14 | Animations | Scroll down the page | Sections appear with fade-in animation | pass |
| TC15 | Animations | Hover over a menu item | Green underline and color change occur | pass |
| TC16 | Images and links | Load the page | All images and links load correctly | pass
| TC17 | Load time under slow 4G | Open devtools/network/slow 4G | Page loads under 3 s | pass
