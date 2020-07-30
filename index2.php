<!DOCTYPE html>
<html lang="en">
<head>
    <title>GD thing website</title>
	
	<meta charset="UTF-8" />
	
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="keywords" content="" />
	
	<!-- CSS Links -->

	<link rel="stylesheet" href="./index.css" />
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" />
  
	<!-- JS Scripts (start) -->
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <div id="navbar">
        <div class="topnav">
            <a class="active" href=""> Home </a>
            <a href="./html/creators.html"> Pinoy Creators </a>
            <a href="./html/demonlist.html"> PH Demonlist </a>
            <a href="./html/about.html"> About </a>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h3 class="mid" id="col">Vote Now!</h3>
            </div>
        </div>
	</div>
	
	
	
	<?php if ($_SERVER['REQUEST_METHOD'] == "POST"): ?>
	
		<?php
			$levelid = (int)(htmlspecialchars($_POST["poll_levelid"]));
			
			echo "ID: " . $levelid . "<br/>";
			
			//---
			
			# Client URL
			
			$curl_GD = curl_init();
			
			//set fetch url to be the gdbrowser url using the received level ID
			curl_setopt($curl_GD, CURLOPT_URL, "https://gdbrowser.com/api/level/" . $levelid);
			//get response as the string itself, instead of TRUE or FALSE from if a response is successfully received
			curl_setopt($curl_GD, CURLOPT_RETURNTRANSFER, true);
			
			$response_GD = curl_exec($curl_GD);
			curl_close($curl_GD);
			
			//---
			
			if ($response_GD === -1) {
				echo "Invalid Level ID.";
				
				//todo: add a message for an invalid level ID, which can only be caused by tampering with client-side code
			} else {
				//convert JSON string to PHP variable (array/object?);
				$leveldata_GD = json_decode($response_GD);
				
				//(temp) this is to demonstrate accessing object keys in PHP
				echo $leveldata_GD->name . " by " . $leveldata_GD->author . "<br/>";
				
				//---
				
				if ($leveldata_GD->featured) {
					echo "Level is featured.<br/>";
					
					$url_DB = "https://gdwebsite-1628b.firebaseio.com/" . $levelid . ".json";
					
					//--- Get current level vote data from database
					
					$curl_DB = curl_init();
					
					curl_setopt($curl_DB, CURLOPT_URL, $url_DB);
					curl_setopt($curl_DB, CURLOPT_RETURNTRANSFER, true);
					
					$response_DB = curl_exec($curl_DB);
					
					//--- Add 1 vote
					
					$current_leveldata_DB = json_decode($response_DB);
					
					if (($current_leveldata_DB != null) && (array_key_exists("vote", $current_leveldata_DB))) {
						$current_votes = (int)($current_leveldata_DB->vote);
						$new_votes = $current_votes + 1;
						
						echo "Votes: " . $new_votes . "<br/>";
					} else {
						$current_votes = 0;
						$new_votes = $current_votes + 1;
						
						echo "Level has not been voted previously.<br />";;
					}

					$new_leveldata_DB = array(
						"vote" => ($new_votes)
					);
					
					//--- Send new level vote data to database
					
					$leveldata_to_put_DB = json_encode($new_leveldata_DB);
					
					// request to "PUT" JSON data into database
					curl_setopt($curl_DB, CURLOPT_CUSTOMREQUEST, "PUT");
					curl_setopt($curl_DB, CURLOPT_POSTFIELDS, $leveldata_to_put_DB);

					curl_setopt($curl_DB, CURLOPT_HTTPHEADER, array(
						"Content-Type: application/json",
						"Content-Length: " . strlen($leveldata_to_put_DB)
						
						// might be necessary for authentication in the future
						//"Authorization: key=" . "AIzaSyC4frRn2JKi3RJr62_oyW8ZcL4pG-Hw3Bw"
					));
					
					$response2_DB = curl_exec($curl_DB);			
					curl_close($curl_DB);
				} else {
					echo "Level is not featured.<br/>";
					
					//todo: add a message for a failed vote, which is always due to tampering with code
					
					/*
						an entry other than a featured level ID can only be submitted if
						the client-side level ID validation fails to work
					*/
				}
			}
			
			header("Location: ./php/receive.php" , true, 303);
			exit();
		?>
	
	<?php else: ?>
	
		<div class="main">
			<input type="text" placeholder="Level ID here." id="textentry" />
			
			<br /> <br />
			
			<button id="add_btn">Submit Entry</button>
			<button id="clear">Clear</button>
		</div>
		
			<hr />
			
	<?php endif ?>
	
	<!-- JS Scripts (end) -->
	
    <script src="./index2.js"></script>
	<script src="./functions/Entries.js"></script>
</body>
</html>
