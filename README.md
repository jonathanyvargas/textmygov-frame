# textmygov-iframe



Custom iframe with TextMyGov branding, built to be used in conjunction with the Brizy (https://www.brizy.io/cloud) TextMyGov widget.

This iframe will house the Brizy popup window, which can be grabbed from within the Brizy script after making and publishing the widget in Brizy. 

This process is meant to be used with websites that rely on older JQuery libraries such as Municode and CivicPlus, which are not compatible with the Brizy widget.

The code consists of two elements contained within a div, the iframe which will contain the Brizy popup window, and a stylized button to be used to close and/or retrieve the widget.

The functions and the style options are housed within their respective JS/CSS files, but some of the style options were left in the html code, sice these can depend on website layout. 

These html styles are meant to be adjusted during the widget screenshare meeting with each agency, or presented as pre-made options, in which case we only need to insert the Brizy popup window link.



iframe html style options:
 
- Different color options which can easily be used by changing the id of the button/logo input in the code (simply change color name).
     - <input id="tmg-close-button-green"… (Green) - Default
     - <input id="tmg-close-button-grey"… (Grey)
     - <input id="tmg-close-button-white"… (White)
     - <input id="tmg-close-button-black"… (black)
 
- Option for the widget to close without leaving a TextMyGov logo behind. Done by changing the input id (add "-exit" after the color name).
     - <input id="tmg-close-button-green-exit"… (Green)
     - <input id="tmg-close-button-grey-exit"… (Grey)
     - <input id="tmg-close-button-white-exit"… (White)
     - <input id="tmg-close-button-black-exit"… (Black)
 
- Option to load the logo first and then load the widget when the logo is clicked. Done by changing the input id (add "-closed" after the color name).
  Needs to also change: iframe id="tmg-iframe"… to id="tmg-iframe-closed"…, and onclick="tmgWidgetClose();"… to onclick="tmgWidgetOpen();"….
     - <input id="tmg-close-button-green-closed"… (Green)
     - <input id="tmg-close-button-grey-closed"… (Grey)
     - <input id="tmg-close-button-white-closed"… (White)
     - <input id="tmg-close-button-black-closed"… (Black)

- Option to change the location of the widget button (within the iframe). Done by changing the button id to the respective location name.
     - <button class="tmg-close-button-top-right"… (Top right) - Default
     - <button class="tmg-close-button-bottom-right"… (Bottom right)
     - <button class="tmg-close-button-top-left"… (Top left
     - <button class="tmg-close-button-bottom-left"… (Bottom left)



Instructions: After making widget in Brizy, confirm iframe style options.
    1. Confirm button/logo color (match with brizy widget).
    2. Confirm if they want the widget to exit or leave the logo behind, or if they want the logo to load first.
    1. Widget position: fixed (scroll with page), or absolute (to remain static).
    2. iframe location: default is bottom right.
    3. Button location (within iframe): default is top right.
(These can all be pre-made options and presented as such. In which case we only need to insert the Brizy popup window link.)



Contact: Jonathan Vargas - jvargas@iworq.com
Github repository link: https://github.com/jonathanyvargas/textmygov-frame
Preview can be found at Codepen: https://codepen.io/jvargas1/pen/abQmVmd 
