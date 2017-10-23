

var roller = document.getElementById("epic");
            var picArray = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
            var index = 0;
            
            function slidePic()
            
            {
                roller.setAttribute("src", picArray[index]);
                index++;
                
                if (index == picArray.length)
                    
                    {
                        index = 0;
                    }
                    
            }
            
            setInterval(slidePic, 3000);

function myFunction() {
    document.getElementById("toggle").style.display = "block";
    document.getElementById("toggle-down").style.display = "none";
    document.getElementById("toggle-up").style.display = "block";
}

function myFunction2() {
    document.getElementById("toggle").style.display = "none";
    document.getElementById("toggle-down").style.display = "block";
    document.getElementById("toggle-up").style.display = "none";
}