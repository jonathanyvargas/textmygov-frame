

function tmgWidgetOpen(){

    var tmgFrame = document.getElementById("tmg-iframe-closed");
      if (tmgFrame.style.display === "block"){
        tmgFrame.style.display = "none";
    } 
    else {
    tmgFrame.style.display = "block";
  }
} 

  function showTmgWidgetCloseButton() { 
    document.getElementById("tmg-widget-close-button").style.display = "inline"; 
}
  setTimeout("showTmgWidgetCloseButton()", 1800);
