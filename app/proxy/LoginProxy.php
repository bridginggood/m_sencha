<?
$requestURL = 'http://api.bridginggood.com:8080/auth/LoginByUserFromMobile.json';

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
 
$result = file_get_contents($requestURL, false, $context);

$result = str_replace('{','',$result);
$result = str_replace('}','',$result);
$result = str_replace('"','',$result);

$items = explode(',', $result);
$array = array();
foreach($items as $item) {
  list($key, $value) = explode(':', $item, 2);
  $array[$key] = $value;
}

if($array['resultCode'][0] == 'S')
	$array['success'] = true;
else
	$array['success'] = false;
	
echo json_encode($array);
?>