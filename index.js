// gets all main components from the HTML
var g = document.getElementsByClassName("main")
var add_btn = document.getElementById("add_btn")
var clear = document.getElementById("clear")

// Since add_btn is a button, we can add a onclick function
add_btn.onclick = function(){
    //we getr the level id value
    var txt = document.getElementById("textentry").value;
    // we create a radio element
    var el = document.createElement("Input")
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
                var level_name = JSON.stringify(obj.name);
                var isFeatured = obj.featured;

                if(isFeatured){

                  //If the main div does not exist, this lines of code will be executed.
                    if(document.getElementById("main_poll") == null){
                      var div_poll = document.createElement("div"); // This is the div: the main element for voting form
                      div_poll.setAttribute("id", "main_poll");

                      var form_poll = document.createElement("form"); //This is the form: where the entries will be appended
                      form_poll.setAttribute("id", "poll");

                      div_poll.appendChild(form_poll);
                      document.body.appendChild(div_poll);
                  }

                    // el.setAttribute("id", level_name);
                    // el.setAttribute("type", "radio");
                    // el.setAttribute("name", "poll");
                    // el.setAttribute("value", level_name);
                    // el.innerHTML = "<type='radio' name='poll' id='"+ level_name + "'>"
                    // document.getElementById("poll").appendChild(el);


                    delta = new Entries(); // IDK WHAT TO NAME TO THIS SH*T...; Class for adding entries

                    //setters
                    delta.addLevelName(level_name);
                    delta.addLevelID(obj.id);
                    delta.addLevelAuthor(obj.author);
                    delta.addLevelDiffulty(obj.difficulty);
                    delta.addDownload(obj.downloads);
                    delta.addLikes(obj.likes);
                    delta.addLength(obj.length);
                    delta.addStars(obj.stars);

                    //getters
                    delta.setLevelIDVisible(true);
                    delta.setLevelAuthorVisible(true);
                    delta.setLevelDifficultyVisible(true);
                    delta.setLevelDownloadVisible(true);
                    delta.setLevelLikeVisible(true);
                    delta.setLevelLengthVisible(true);
                    delta.setLevelStarsVisible(true);

                    //Implementation
                    delta.deploy(document.getElementById('poll'));

                }else{
                    alert("level: '" + level_name + "' is not featured.")
                }

            }

        })

    }


}

// this is just to delete a unnecessary item.
clear.onclick = function(){
  //I need to use JQuery here to make job easier
    var r = $('.class_Entry'); //document.getElementsByClassName
    var s = $('.class_Div');

    console.log(r);
    if(r.length != 0 && s.length != 0){
        console.log(1);
        r.remove();
        s.remove();
    }else{
        alert("There are no entries to be cleared.");
    }

}
