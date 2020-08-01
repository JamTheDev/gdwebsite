class Entries{
	
  //--- ----- Adders

  addLevelDifficultyFace(diffFace){
	this.lvl_diffFace = diffFace;
	
	this.l_diffFace = document.createElement("img");
    this.l_diffFace.setAttribute("class", "class_diffFace");
    this.l_diffFace.setAttribute("src", "http://gdbrowser.com/difficulty/" + this.lvl_diffFace + ".png");
    this.l_diffFace.setAttribute("height", "80px");
  }
  
  addLevelID(id){
    this.lvl_id = id;

    this.l_id = document.createElement("div");
    this.l_id.innerHTML = "ID: " + this.lvl_id;
    this.l_id.setAttribute("class", "class_id");
  }
  
  addLevelDifficulty(diff){
    this.lvl_diff = diff;

    this.l_diff = document.createElement("div");
    this.l_diff.innerHTML = this.lvl_diff;
    this.l_diff.setAttribute("class", "class_diff");
  }
  
  addStars(stars){
    this.lvl_stars = stars;
    this.l_stars = document.createElement("div");
    this.l_stars.innerHTML = "Stars: " + this.lvl_stars;
    this.l_stars.setAttribute("class", "class_stars");
  }

  addDownload(dl){
    this.lvl_dl = dl;
    this.l_dl = document.createElement("div");
    this.l_dl.innerHTML = "Downloads: " + this.lvl_dl;

    this.l_dl.setAttribute("class", "class_dl");
  }

  addLikes(likes){
    this.lvl_likes = likes;
    this.l_likes = document.createElement("div");
    this.l_likes.innerHTML = "Likes: " + this.lvl_likes;

    this.l_likes.setAttribute("class", "class_likes");
  }

  addLength(length){
    this.lvl_length = length;
    this.l_length = document.createElement("div");
    this.l_length.innerHTML = "Length: " + this.lvl_length;
    this.l_length.setAttribute("class", "class_length");
  }

  
  //---
  
  addLevelName(lvl){
    this.lvl_name = lvl;

    this.l_name = document.createElement("div");
    this.l_name.innerHTML = this.lvl_name;
    this.l_name.setAttribute("class", "class_Name");
  }
  
  addLevelAuthor(author){
    this.lvl_author = author;

    this.l_author = document.createElement("div");
    this.l_author.innerHTML = "by " + this.lvl_author;
    this.l_author.setAttribute("class", "class_author");
  }
  
  //---

  addLevelDescription(desc){
    this.lvl_desc = desc;

    this.l_desc = document.createElement("div");
    this.l_desc.innerHTML = this.lvl_desc;
    this.l_desc.setAttribute("class", "class_desc");
  }
  
  //--- ----- Setters

  setLevelDifficultyFaceVisible(bool){
    this.LevelDifficultyFaceVisible = bool;
  }
  
  setLevelIDVisible(bool){
    this.LevelIDVisible = bool;
  }

  setLevelDifficultyVisible(bool){
    this.LevelDifficultyVisible = bool;
  }
  
  setLevelStarsVisible(bool){
    this.LevelStarsVisible = bool;
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

  //---

  setLevelAuthorVisible(bool){
    this.LevelAuthorVisible = bool;
  }
  
  //--- -----

  preloadMain(){//deploy the div element.
    //console.log(this.lvl_name); //(Debug Purposes)

	//--- -----

	// main div for the whole entry
    this.main = document.createElement("div");
    this.main.setAttribute("id", "id_" + this.lvl_name);
    this.main.setAttribute("class", "class_Entry");

	//--- -----

	// left div, contains difficulty icon and stats
   	this.l_statsdiv = document.createElement("div");
	this.l_statsdiv.setAttribute("class", "class_statsdiv");
	this.main.appendChild(this.l_statsdiv);

		if(this.LevelDifficultyFaceVisible)
		  this.l_statsdiv.appendChild(this.l_diffFace);

		if(this.LevelIDVisible)
		  this.l_statsdiv.appendChild(this.l_id);

		if(this.LevelDifficultyVisible)
		  this.l_statsdiv.appendChild(this.l_diff);

		if(this.LevelStarsVisible)
		  this.l_statsdiv.appendChild(this.l_stars);

		if(this.LevelDownloadVisible)
		  this.l_statsdiv.appendChild(this.l_dl);

		if(this.LevelLikeVisible)
		  this.l_statsdiv.appendChild(this.l_likes);

		if(this.LevelLengthVisible)
		  this.l_statsdiv.appendChild(this.l_length);

	//---

	// top right div, contains level name and uploader/author
	this.l_textdiv = document.createElement("div");
	this.l_textdiv.setAttribute("class", "class_textdiv");
	this.main.appendChild(this.l_textdiv);

		this.l_textdiv.appendChild(this.l_name);

		if(this.LevelAuthorVisible)
		  this.l_textdiv.appendChild(this.l_author);

	//---

	// bottom right div, contains the description
	this.main.appendChild(this.l_desc);

	//---

	// adds a cleared blank line in order to fix the floated divs
	this.l_floatclear = document.createElement("br");
	this.l_floatclear.setAttribute("clear", "both");
	this.main.appendChild(this.l_floatclear);
  }
  
  addMain(element_id) {
	element_id.appendChild(this.main);
  }
}
