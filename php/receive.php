<?php session_start() ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>GD thing website</title>
	
	<meta charset="UTF-8" />
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="keywords" content="" />
	
	<!-- CSS Links -->

	<link rel="stylesheet" href="../index.css" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" />
  
	<!-- JS Scripts (start) -->
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <div id="navbar">
        <div class="topnav">
            <a class="active" href="../index2.php">Home</a>
            <a href="../html/creators.html">Pinoy Creators</a>
            <a href="../html/demonlist.html">PH Demonlist</a>
            <a href="../html/about.html">About</a>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="mid" id="col">Vote Now!</h3>
            </div>
        </div>
	</div>
	
	<?php
		if (isset($_SESSION['levelid'])) {
			$levelid = $_SESSION['levelid'];
			
			//---
			
			$GD_doesLevelExist = $_SESSION['GD_doesLevelExist'];
			
			if ($GD_doesLevelExist) {
				echo "ID: " . $levelid . "<br/>";
				
				$leveldata_GD = $_SESSION['leveldata_GD'];
				
				//(temp) this is to demonstrate accessing object keys in PHP
				echo $leveldata_GD->name . " by " . $leveldata_GD->author . "<br/>";
				
				//---
				
				$GD_isLevelFeatured = $_SESSION['GD_isLevelFeatured'];
				
				if ($GD_isLevelFeatured) {
					echo "Level is featured.<br/>";

					if (isset($_SESSION['hasPersonVoted']) && $_SESSION['hasPersonVoted'] == true) {
						echo "You have already voted for this level.<br/>";
					} else {
						echo "Vote has been received.<br/>";
						$_SESSION['hasPersonVoted'] = true;
					}
				} else {
					echo "Level is not featured.<br/>";
					echo "Cannot send vote for a non-featured level.<br/>";
				}
			} else {
				echo "Invalid Level ID.";
			}
		} else {
			echo "You have not voted for a level yet.";
		}
	?>
</body>
</html>
