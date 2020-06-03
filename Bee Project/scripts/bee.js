  function beeFunction(){
                        let beePickerNumber = document.getElementById("beepickernum").value;
                        
                        //if beepicker is 0
                        if (beePickerNumber == 0){
                        alert("Stop! Go back and pick a number!");
                        window.open("///Bee Project/assets/stop.png"); 
                        }
                        if(beePickerNumber ==1){
                        alert("Here comes 1 bee!");
                        window.open("D:/Documents/Practice Projects/Practice_Projects/Bee Project/assets/bee.png");
                        }
                         if(beePickerNumber ==2){
                            alert("Here comes 2 bees!");
                           window.open("D:/Documents/Practice Projects/Practice_Projects/Bee Project/assets/bee2.png");
                            }
                          if(beePickerNumber ==3){
                                alert("Here comes 3 bees!");
                                window.open("D:/Documents/Practice Projects/Practice_Projects/Bee Project/assets/bee3.png");
                                }    
                                if(beePickerNumber ==4){
                                  alert("Here comes 4 bees!");
                                  window.open("D:/Documents/Practice Projects/Practice_Projects/Bee Project/assets/bee4.png");
                                    }         
                                   if(beePickerNumber ==5){
                                       alert("Here comes 5 bees");
                                       window.open("D:/Documents/Practice Projects/Practice_Projects/Bee Project/assets/bee5.png");
                                        } 
                                        return false;
                                    }
                                    function init(){
                                        document.getElementById('beeform').onsubmit = beeFunction;
                                    }
                                    window.onload = init;