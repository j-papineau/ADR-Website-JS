<?php
	
    global $wpdb; //WILL BREAK IF NOT INCLUDED
    
    $results = $wpdb->get_results("select * from Location_Data_Test Where id = '1'");
	echo $results[0]->name_long;
		//echo "hello";

    //data design ideas

    //echo into div and retrieve innerHTML
    //echo directly to script
    //store php seperately so it can be called as an API

?>