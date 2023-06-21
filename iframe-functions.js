function tmgWidgetClose(){

    var x = document.getElementById("tmg-iframe");
      if (x.style.display === "none"){
        x.style.display = "block";
    } 
    else {
    x.style.display = "none";
  }
}  

  function showTmgWidgetCloseButton() { 
    document.getElementById("tmg-widget-close-button").style.display = "inline"; 
}
  setTimeout("showTmgWidgetCloseButton()", 1800);
