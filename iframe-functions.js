function tmgWidgetClose(){

    var tmgFrame = document.getElementById("tmg-iframe");
      if (tmgFrame.style.display === "none"){
        tmgFrame.style.display = "block";
    } 
    else {
    tmgFrame.style.display = "none";
  }
}  

function tmgWidgetOpen(){

    var tmgFrame = document.getElementById("tmg-iframe-2");
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
