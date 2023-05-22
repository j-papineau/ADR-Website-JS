

<?php

	//require_once('../../../wp-config.php');
	global $wpdb;

	//$results = $wpdb->get_results("select * from Location_Data_Test Where id = '2'");
	

	//get id from ?id=foo in URL, default is 1

	if(isset($_GET['id'])){
		$id = $_GET['id'];
	}else{
		$id = "-1";
	}
	

	$results = $wpdb->get_results('select * from Location_Data_Test Where id = '.$id);


	//echo $results[0]->name_long;
	$id = $results[0]->id;
	$slug = $results[0]->location_slug;
	$longName = $results[0]->name_long;
	$shortName = $results[0]->name_short;
	$phone = $results[0]->phone;
	$regionID = $results[0]->regionID;
	//$phone = "test"
	
	//$id = parse_url($url, PHP_URL_QUERY);

	if(isset($_GET['id'])){
		$id = $_GET['id'];
		$validID = TRUE;
	}else{
		$id = "-1";
		$validID = FALSE;
		
	}
	


?>


<input type="hidden" id="phone" value="<?php echo $phone?>"/>
<input type="hidden" id="slug" value="<?php echo $slug?>"/>
<input type="hidden" id="longName" value="<?php echo $longName?>"/>
<input type="hidden" id="shortName" value="<?php echo $shortName?>"/>
<input type="hidden" id="validID" value="<?php echo $validID?>"/>
<input type="hidden" id="regionID" value="<?php echo $regionID?>"/>





