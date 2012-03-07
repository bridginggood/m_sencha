<?
$postdata = http_build_query(
    array(
        'UserEmail' => $_POST['email'],
        'UserPassword' => $_POST['password'],
		'DeviceId' => 'abc',
		'DeviceType' => 'ANDRO'
		//'DeviceId' => $_POST['DeviceId'],
		//'DeviceType' => $_POST['DeviceType']
    )
);
 
$opts = array('http' =>
    array(
        'method'  => 'POST',
        'header'  => 'Content-type: application/x-www-form-urlencoded',
        'content' => $postdata
    )
);
 
$context  = stream_context_create($opts);
 
$result = file_get_contents('http://api.bridginggood.com:8080/auth/LoginByUserFromMobile.json', false, $context);

//Convert $result to JSON
$items = explode(',', str_replace('"', '', $result));
$array = array();
foreach($items as $item) {
  list($key, $value) = explode(':', $item, 2);
  $array[$key] = $value;
}

if($array['resultCode'][0] == 'S')
	echo '{success: true}';
else
	echo '{failure: true}';
?>