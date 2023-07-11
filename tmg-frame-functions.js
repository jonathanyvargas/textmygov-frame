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


  function showTmgCloseButton() { 
    document.getElementById("tmg-close-button-green").style.display = "inline"; 
}
  setTimeout("showTmgCloseButton()", 1800);

  function showTmgCloseButton() { 
    document.getElementById("tmg-close-button-grey").style.display = "inline"; 
}
  setTimeout("showTmgCloseButton()", 1800);
