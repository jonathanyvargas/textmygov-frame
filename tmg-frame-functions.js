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

        setTimeout(function () {
    document.getElementById("tmg-close-button-green").style.display = "inline"; 
                document.getElementById("tmg-close-button-green").style.display = "inline"; 
        }, 1800;

