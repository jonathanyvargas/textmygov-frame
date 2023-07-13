function tmgWidgetClose(){
  var tmgFrameOpen = document.getElementById("tmg-iframe");
  if (tmgFrameOpen.style.display === "none"){
      tmgFrameOpen.style.display = "block";
  } 
  else {
  tmgFrameOpen.style.display = "none";
  }
}  

function tmgWidgetOpen(){
  var tmgFrameClosed = document.getElementById("tmg-iframe-closed");
  if (tmgFrameClosed.style.display === "block"){
      tmgFrameClosed.style.display = "none";
  } 
  else {
  tmgFrameClosed.style.display = "block";
  }
} 

    // buttons load delay

function showTmgCloseButtonGreen() {
  var openGreen = document.getElementById("tmg-close-button-green");
  if (openGreen) {
      openGreen.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonGreen()", 1800);

function showTmgCloseButtonGreenClosed() {
  var openGreenClosed = document.getElementById("tmg-close-button-green-closed");
  if (openGreenClosed) {
      openGreenClosed.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonGreenClosed()", 1800);

function showTmgCloseButtonGreenExit() {
  var openGreenExit = document.getElementById("tmg-close-button-green-exit");
  if (openGreenExit) {
      openGreenExit.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonGreenExit()", 1800);

function showTmgCloseButtonGrey() {
  var openGrey = document.getElementById("tmg-close-button-grey");
  if (openGrey) {
      openGrey.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonGrey()", 1800);
    
function showTmgCloseButtonGreyClosed() { 
  var openGreyClosed = document.getElementById("tmg-close-button-grey-closed");
  if (openGreyClosed) {
      openGreyClosed.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonGreyClosed()", 1800);

function showTmgCloseButtonGreyExit() { 
  var openGreyExit = document.getElementById("tmg-close-button-grey-exit");
  if (openGreyExit) {
      openGreyExit.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonGreyExit()", 1800);

function showTmgCloseButtonWhite() { 
  var openWhite = document.getElementById("tmg-close-button-white");
  if (openWhite) {
      openWhite.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonWhite()", 1800);

function showTmgCloseButtonWhiteClosed() {
  var openWhiteClosed = document.getElementById("tmg-close-button-white-closed");
  if (openWhiteClosed) {
      openWhiteClosed.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonWhiteClosed()", 1800);
  
function showTmgCloseButtonWhiteExit() { 
  var openWhiteExit = document.getElementById("tmg-close-button-white-exit");
  if (openWhiteExit) {
      openWhiteExit.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonWhiteExit()", 1800);
    
function showTmgCloseButtonBlack() {
  var openBlack = document.getElementById("tmg-close-button-black");
  if (openBlack) {
      openBlack.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonBlack()", 1800);

function showTmgCloseButtonBlackClosed() {
  var openBlackClosed = document.getElementById("tmg-close-button-black-closed");
  if (openBlackClosed) {
      openBlackClosed.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonBlackClosed()", 1800);

function showTmgCloseButtonBlackExit() {
  var openBlackExit = document.getElementById("tmg-close-button-black-exit");
  if (openBlackExit) {
      openBlackExit.style.display = "inline";
  }
}
setTimeout("showTmgCloseButtonBlackExit()", 1800);
