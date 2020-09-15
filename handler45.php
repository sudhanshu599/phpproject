<?php
header("Content-Type: application/json; charset=UTF-8");
require 'database45.php';
require 'customer45.php';

$req=$_GET['req'] ?? null;
$db=new database();
$customer= new customer($db->connect());

switch($req){
    case 'insert':
        $obj=$_GET['object'];
        $temp=json_decode($obj);
        echo $customer->insertcustomerdetail($temp);
        break;

    case 'list':
        echo $customer->getcutomerdetails();
        break;

    default:
        echo json_encode(["In-valid request"]);
        break;
}
?>
