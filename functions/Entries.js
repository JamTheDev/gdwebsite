

class Entries{

//adders

  addRadioInput(lvl){
    this.lvl_rad_name = lvl;

    this.l_radio = document.createElement("input");
    this.l_radio.setAttribute("id", "radio_" + lvl);
    this.l_radio.setAttribute("type", "radio");
    this.l_radio.setAttribute("name", "vote");
    this.l_radio.setAttribute("class", "class_Entry");
    this.l_radio.setAttribute("value", this.lvl_rad_name);
  }

  addLevelName(lvl){
    this.lvl_name = lvl;

    this.l_name = document.createElement("span");
    this.l_name.innerHTML = this.lvl_name + "<br>";
    this.l_name.setAttribute("id","id_Name");
    this.l_name.setAttribute("class", "class_Entry");

  }

  addLevelID(id){
    this.lvl_id = id;

    this.l_id = document.createElement("span");
    this.l_id.innerHTML = "ID: " + this.lvl_id + "<br>";
    this.l_id.setAttribute("id","id_id");
    this.l_id.setAttribute("class", "class_Entry");
  }

  addLevelAuthor(author){
    this.lvl_author = author;
    this.l_author = document.createElement("span");
    this.l_author.innerHTML = "Author: " + this.lvl_author + "<br>";
    this.l_author.setAttribute("id","id_author");
    this.l_author.setAttribute("class", "class_Entry");
  }

  addLevelDiffulty(diff){
    this.lvl_diff = diff;

    this.l_diff = document.createElement("span");
    this.l_diff.innerHTML = "Difficulty: " + this.lvl_diff + "<br>";
    this.l_diff.setAttribute("id","id_diff");
    this.l_diff.setAttribute("class", "class_Entry");
  }

  addDownload(dl){
    this.lvl_dl = dl;
    this.l_dl = document.createElement("span");
    this.l_dl.innerHTML = "Downloads: " + this.lvl_dl + "<br>";
    this.l_dl.setAttribute("id","id_dl");
    this.l_dl.setAttribute("class", "class_Entry");
  }

  addLikes(likes){
    this.lvl_likes = likes;
    this.l_likes = document.createElement("span");
    this.l_likes.innerHTML = "Likes: " + this.lvl_likes + "<br>";
    this.l_likes.setAttribute("id","id_likes");
    this.l_likes.setAttribute("class", "class_Entry");

  }

  addLength(length){
    this.lvl_length = length;
    this.l_length = document.createElement("span");
    this.l_length.innerHTML = "Length: " + this.lvl_length + "<br>";
    this.l_length.setAttribute("id","id_length");
    this.l_length.setAttribute("class", "class_Entry");

  }

  addStars(stars){
    this.lvl_stars = stars;
    this.l_stars = document.createElement("span");
    this.l_stars.innerHTML = "Stars: " + this.lvl_stars + "<br>";
    this.l_stars.setAttribute("id","id_stars");
    this.l_stars.setAttribute("class", "class_Entry");

  }

  //setters

  setLevelIDVisible(bool){
    this.LevelIDVisible = bool;
  }

  setLevelAuthorVisible(bool){
    this.LevelAuthorVisible = bool;
  }

  setLevelDifficultyVisible(bool){
    this.LevelDifficultyVisible = bool;
  }

  setLevelDownloadVisible(bool){
    this.LevelDownloadVisible = bool;
  }

  setLevelLikeVisible(bool){
    this.LevelLikeVisible = bool;
  }

  setLevelLengthVisible(bool){
    this.LevelLengthVisible = bool;
  }

  setLevelStarsVisible(bool){
    this.LevelStarsVisible = bool;
  }




  deploy(element_id){//deploy the div element.
    //console.log(this.lvl_name); //(Debug Purposes)

    if(this.checkConflict(this.l_name.innerText)){
      alert("This Level is already on the poll.");
      return;
    }

    this.main = document.createElement("div");
    this.main.setAttribute("id","id_" + this.lvl_name);
    this.main.setAttribute("class", "class_Div    ");
    this.main.setAttribute("for", "radio_" + this.lvl_name);

    this.addRadioInput(this.lvl_name);


    this.main.appendChild(this.l_name);

    if(this.LevelIDVisible){
      this.main.appendChild(this.l_id);
    }

    if(this.LevelDifficultyVisible)
      this.main.appendChild(this.l_diff);

    if(this.LevelAuthorVisible)
      this.main.appendChild(this.l_author);

    if(this.LevelDownloadVisible)
      this.main.appendChild(this.l_dl);

    if(this.LevelLikeVisible)
      this.main.appendChild(this.l_likes);

    if(this.LevelLengthVisible)
      this.main.appendChild(this.l_length);

    if(this.LevelStarsVisible)
      this.main.appendChild(this.l_stars);

    element_id.appendChild(this.l_radio);
    element_id.appendChild(this.main);

  }

  checkConflict(lvl){
    this.scope = document.querySelectorAll("#id_Name.class_Entry");

    for(this.i = 0; this.i < this.scope.length; this.i++){
      // console.log("comparing " + this.scope[this.i].innerText + " to " + lvl + "\n"); //(Debug Purposes)
      this.result = (this.scope[this.i].innerText.localeCompare(lvl + "\n") == 0);
      // console.log("Result: " + this.result + " Compare Result: " + this.scope[this.i].innerText.localeCompare(lvl + "\n")); //(Debug Purposes)
      if(this.result){
        return true;
      }
    }
    // console.log("No COnflict"); //(Debug Purposes)
    return false;
  }

}
