<?php
	
    global $wpdb; //WILL BREAK IF NOT INCLUDED
    
    $results = $wpdb->get_results("select * from Location_Data_Test Where id = '1'");
	echo $results[0]->name_long;
		//echo "hello";

    //data design ideas

    //echo into div and retrieve innerHTML
    //echo directly to script
    //store php seperately so it can be called as an API



    //general solution creating divs to be read from JS using document.getElementById("foo").innerText
/*
<?php

	//require_once('../../../wp-config.php');
	global $wpdb;

	$results = $wpdb->get_results("select * from Location_Data_Test Where id = '1'");
	//echo $results[0]->name_long;
	$id = $results[0]->id;
	$slug = $results[0]->location_slug;
	$longName = $results[0]->name_long;
	$shortName = $results[0]->name_short;
	$phone = $results[0]->phone;
	//$phone = "test"
	
?>

<div id="phone">
	
	
		<?php
		echo $phone;
		?>
	
	
</div>
*/

?>