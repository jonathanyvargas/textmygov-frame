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
    document.querySelectorAll("#tmg-close-button-green[type="checkbox"], #tmg-close-button-green-closed[type="checkbox"], #tmg-close-button-green-exit[type="checkbox"]").style.display = "inline"; 
}
  setTimeout("showTmgCloseButton()", 1800); 

