<?php
$server='localhost';
$user_name='root';
$password=' ';
$dbname='snack_shop';

$con=mysqli_connect($server,$user_name,$password,$dbname);
 $fname=$_POST["fname"];
 $lname=$_POST["lname"];
 $email=$_POST["email"];
 $phone_no=$_POST["phone"];
 $password=$_POST["password"];
 $query="insert into signup(email_id,fname,lname,phone_no,password)values('$email','$fname','$lname','$phone_no','$pwd')";
 $run=mysqli_query($con,query);
 echo "Form submitted successifuly";
?>