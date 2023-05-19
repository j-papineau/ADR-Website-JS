

<?php

	//require_once('../../../wp-config.php');
	global $wpdb;

	//$results = $wpdb->get_results("select * from Location_Data_Test Where id = '2'");
	

	//get id from ?id=foo in URL, default is 1

	if(isset($_GET['id'])){
		$id = $_GET['id'];
	}else{
		$id = "1";
	}
	

	$results = $wpdb->get_results('select * from Location_Data_Test Where id = '.$id);


	//echo $results[0]->name_long;
	$id = $results[0]->id;
	$slug = $results[0]->location_slug;
	$longName = $results[0]->name_long;
	$shortName = $results[0]->name_short;
	$phone = $results[0]->phone;
	//$phone = "test"
	
	//$id = parse_url($url, PHP_URL_QUERY);

	if(isset($_GET['id'])){
		$id = $_GET['id'];
	}else{
		$id = "1";
	}
	


?>

<div id="values">
	
	
		<?php
		echo $phone, "+", $slug,"+",$longName,"+",$shortName;
		?>
	
		<?php
	
		echo $id
		//echo $params;
		?>
	
</div>