// gets all main components from the HTML
var g = document.getElementsByClassName("main")
var add_btn = document.getElementById("add_btn")
var clear = document.getElementById("clear")

// Since add_btn is a button, we can add a onclick function
add_btn.onclick = function(){
    //we get the level id value
    var txt = document.getElementById("textentry").value;

    // this is obsolete code pog
    if(txt == null){
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

                  //If the main div does not exist, this lines of code will be executed.
                    if(document.getElementById("poll_div") == null){
                      var poll_div = document.createElement("div"); // This is the div: the main element for voting form
                      poll_div.setAttribute("id", "poll_div");

                      var poll_form = document.createElement("form"); //This is the form: where the entries will be appended
                      poll_form.setAttribute("id", "poll");
					  poll_form.setAttribute("onsubmit", "return submitVote()");
                      poll_form.setAttribute("action", "./php/checklevel.php");
                      poll_form.setAttribute("method", "post");

					  var poll_levelid = document.createElement("input");
					  poll_levelid.setAttribute("id", "poll_levelid");
					  poll_levelid.setAttribute("name", "poll_levelid");
					  poll_levelid.setAttribute("type", "hidden");
					  poll_levelid.setAttribute("value", txt); //replace all instances of " with &quot;, so that the HTML code doesn't get messed up

					  var poll_submit = document.createElement("button");
					  poll_submit.innerHTML = "Send Vote";
					  poll_submit.setAttribute("id", "poll_submit");
					  poll_submit.setAttribute("type", "submit");
					  poll_submit.setAttribute("form", "poll");
					  
					  document.body.appendChild(poll_div);
					  poll_div.appendChild(poll_form);
					  poll_form.appendChild(poll_levelid);
					  poll_div.appendChild(poll_submit);
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
                    
					delta.addLevelDifficultyFace(obj.difficultyFace);
                    delta.addLevelAuthor(obj.author);
                    delta.addLevelDifficulty(obj.difficulty);
                    delta.addLevelDescription(obj.description);
                    delta.addDownload(obj.downloads);
                    delta.addLikes(obj.likes);
                    delta.addLength(obj.length);
                    delta.addStars(obj.stars);
                    
                    //getters
                    delta.setLevelDifficultyFaceVisible(true);
                    delta.setLevelIDVisible(true);
                    delta.setLevelAuthorVisible(true);
                    delta.setLevelDifficultyVisible(true);
                    delta.setLevelDownloadVisible(true);
                    delta.setLevelLikeVisible(true);
                    delta.setLevelLengthVisible(true);
                    delta.setLevelStarsVisible(true);
                                      
                    //Implementation
					delta.preloadMain();

					if($(".class_Entry").length != 0) {
						//there can only be at most 1 "entry"
						clearAllEntries();
					}
					
					delta.addMain(document.getElementById('poll'));
					
                }else{
                    alert("level: '" + level_name + "' is not featured.")
                }
            }
        })
    }
}

clear.onclick = clearAllEntries;

// this is just to delete a unnecessary item.
function clearAllEntries(){
  //I need to use JQuery here to make job easier
    var r = $('.class_Entry'); //document.getElementsByClassName

    //console.log(r);
	
    if(r.length != 0){
        console.log(1);
        r.remove();
    }else{
        alert("There are no entries to be cleared.");
    }
}

function submitVote() {
	var choice = document.getElementById("poll_levelid").value;
	
	if(choice != null) {
        //ins = new insert();
        //ins.writeData(choice_json.id, 1)
		alert("Vote for level " + choice_json.name + " has been received.");
		return true;
	} else{
        alert("Select a level first!");
    }
	
	return false;
}