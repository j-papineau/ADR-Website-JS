

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
	
	$id = $_SERVER['QUERY_STRING'];
	


?>

<div id="phone">
	
	
		<?php
		echo $phone;
		?>
	
		<?php
		echo $id;
		?>
	
</div>