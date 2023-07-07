function tmgWidgetClose(){

    var tmgFrame = document.getElementById("tmg-iframe");
      if (tmgFrame.style.display === "none"){
        tmgFrame.style.display = "block";
    } 
    else {
    tmgFrame.style.display = "none";
  }
}  

  function showTmgWidgetCloseButton() { 
    document.getElementById("tmg-widget-close-button").style.display = "inline"; 
}
  setTimeout("showTmgWidgetCloseButton()", 1800);
