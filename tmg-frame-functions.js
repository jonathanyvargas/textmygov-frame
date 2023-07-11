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

  function showTmgCloseButtonGreen() { 
    document.getElementById("tmg-close-button-green").style.display = "inline"; 
}
  setTimeout("showTmgCloseButtonGreen()", 1800);

  function showTmgCloseButtonGreenClosed() { 
    document.getElementById("tmg-close-button-green-closed").style.display = "inline"; 
}
  setTimeout("showTmgCloseButtonGreenClosed()", 1800);

  function showTmgCloseButtonGreenExit() { 
    document.getElementById("tmg-close-button-green-exit").style.display = "inline"; 
}
  setTimeout("showTmgCloseButtonGreenExit()", 1800);


  function showTmgCloseButtonGrey() { 
    document.getElementById("tmg-close-button-grey").style.display = "inline"; 
}
  setTimeout("showTmgCloseButtonGrey()", 1800);


  function showTmgCloseButtonWhite() { 
    document.getElementById("tmg-close-button-white").style.display = "inline"; 
}
  setTimeout("showTmgCloseButtonWhite()", 1800);


  function showTmgCloseButtonBlack() { 
    document.getElementById("tmg-close-button-black").style.display = "inline"; 
}
  setTimeout("showTmgCloseButtonBlack()", 1800);


