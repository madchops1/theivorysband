<?php
//if(isset($_POST['payload'])){
  
  /* I have given the apache user on the server an ssh key pair for git
   * The .git directory in /ivorys1/public_html/ is chmoded to 0777 so 
   * the apache user should be able to pull from git!
   */

  $output = array();
  exec('cd /home/ivorys1/public_html/ && git pull origin master',$output,$return);
  //`sudo cd /home/ivorys1/public_html/ && sudo git reset --hard HEAD && sudo git pull origin master`;
  // The message
  $message = "  Codebase deployed to TheIvorysBand.com \r\n
                Date:".date("m/d/Y h:i:s A")."\r\n
                Status: Successfull\r\n
                --------------------------------------------------
                ".$POST['payload']."\r\n
                \r\n";

  // In case any of our lines are larger than 70 characters, we should use wordwrap()
  $message = wordwrap($message, 70, "\r\n");
  
  // Send
  @mail('karl@webksd.com', 'TheIvorysBand.com Deployed Successfully '.date("m/d/Y h:i:s A").'', $message);
  
  echo $message;
  echo "<br><br>";
  
  echo "RETURN: ".$return."";
  echo "<br><br>";
  
  echo "<pre>";
  echo var_dump($output);
  echo "</pre>";
  
//}
?>