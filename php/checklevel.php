<?php
	$levelid = htmlspecialchars($_POST["poll_levelid"]);
	
	echo "ID: " . $levelid . "<br/>";
	
	//---
	
    if ($levelid == null) {
	    echo "Add a choice!";
    } else {
		# Client URL
		
		$curl_GD = curl_init();
		
		//set fetch url to be the gdbrowser url using the received level ID
		curl_setopt($curl_GD, CURLOPT_URL, "https://gdbrowser.com/api/level/" . $levelid);
		//get response as the string itself, instead of TRUE or FALSE from if a response is successfully received
		curl_setopt($curl_GD, CURLOPT_RETURNTRANSFER, true);
		$response = curl_exec($curl_GD);
		
		curl_close($curl_GD);
		
		//---
		
		//convert JSON string to PHP variable (array/object?);
		$leveldata = json_decode($response);
		
		//(temp) this is to demonstrate accessing object keys in PHP
		echo $leveldata->name . " by " . $leveldata->author . "<br/>";
		
		//---
		
		if ($leveldata->featured) {
			echo "yes <br/>";
			
			//todo: port the voting system along Firebase to PHP code
			
			/*
			$curl_DB = curl_init();
			
			curl_setopt($curl_DB, CURLOPT_URL, "https://gdwebsite-1628b.firebaseio.com");
			curl_setopt($curl_DB, CURLOPT_RETURNTRANSFER, true);
			*/
		} else {
			echo "no <br/>";
			
			//todo: add a message for a failed vote, which is probably always due to tampering with code
			
			/*
				an entry other than a featured level ID can only be submitted if
				the client-side level ID validation fails to work
			*/
		}
	}
?>