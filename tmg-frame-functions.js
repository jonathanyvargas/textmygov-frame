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

  function one(callback) {
    var x = document.getElementById("tmg-close-button-green");
    x.style.display = "inline"; 
    
    setTimeout(two, 1800);
  }
    
  function two(callback) {  
    var x = document.getElementById("tmg-close-button-grey");
    x.style.display = "inline"; 
    
    setTimeout(three, 1800);
  }
    
  function three(callback) { 
    var x = document.getElementById("tmg-close-button-white");
    x.style.display = "inline"; 
        
    setTimeout(four, 1800);
  }
    
  function four(callback) { 
    var x = document.getElementById("tmg-close-button-black");
    x.style.display = "inline"; 
        
    setTimeout(one, 1800);
  }

