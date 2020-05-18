// gets all main components from the HTML 
var g = document.getElementsByClassName("main")
var add_btn = document.getElementById("add_btn")
var clear = document.getElementById("clear")

// Since add_btn is a button, we can add a onclick function
add_btn.onclick = function(){
    //we getr the level id value
    var txt = document.getElementById("textentry").value;
    // we create a radio element
    var el = document.createElement("radio")
    // this is obsolete code pog
    if(txt === null){
        alert("Add a choice!")
    }else{
        // this is where the fun starts, its handling HTTP response time.
        // url is v v v v v v v v v v v v v v v and we add the level id the user put in
        fetch("https://gdbrowser.com/api/level/" + txt).then(function(response){
            // return the data to a json format
            return response.json()
            // now all of the data is in "obj" variable.
            //          v v v
        }).then(function(obj){
            // robtop is a stupid boomer, so if you put wrong level id it will return 1, so if level doesnt exist
            // link will return -1.
            // if response is -1, say level id invalid
            if(obj == -1){
                alert("Invalid Level ID.")
            }else{
                // you get the point here lol
                var level_name = obj.name;
                var isFeatured = obj.featured;
                if(isFeatured){
                    el.setAttribute("id", "jam")
                    el.innerHTML = "<input type='radio' name='poll' id='"+ level_name + "'>"+ level_name + "<br>"
                    document.body.appendChild(el);
                }else{
                    alert("level: '" + level_name + "' is not featured.")
                }
                
            }
            
        })
        
    }
    
    
}

// this is just to delete a unnecessary item.
clear.onclick = function(){
    var r = document.getElementById("jam")
    if(r != null){
        r.remove();
    }else{
        alert("Oops! Add a element to delete!")
    }
    
}