<?php

$dir = "../page/quizzes/";

$names = Array();
$num = 0;

// Open a directory, and read its contents
if (is_dir($dir)){
  if ($dh = opendir($dir)){
    while (($file = readdir($dh)) !== false){
    	if($file != "." && $file != ".."){
    		$names[] = $file;
    		$num++;
    	}
    }
    closedir($dh);
  }

  $return['page'] = $names[rand(0,$num-1)];
} else {
	$return['page'] = "error.php";
}

echo json_encode($return);

?>