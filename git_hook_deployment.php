<?php
//if(isset($_POST['payload'])){
  
  $output = array();
  exec('sudo cd /home/theivorys1/public_html/ && sudo git reset --hard HEAD && sudo git pull origin master',$output);
  
  // The message
  $message = "  Codebase deployed to TheIvorysBand.com \r\n
                Date:".date("m/d/Y h:i:s A")."\r\n
                Status: Successfull\r\n
                \r\n
                --------------------------------------------------
                \r\n
                ".$POST['payload']."\r\n
                \r\n";

  // In case any of our lines are larger than 70 characters, we should use wordwrap()
  $message = wordwrap($message, 70, "\r\n");
  
  // Send
  mail('karl@webksd.com', 'TheIvorysBand.com Deployed Successfully '.date("m/d/Y h:i:s A").'', $message);
  
  echo "<pre>";
  echo var_dump($output);
  echo "</pre>";
  
//}
?>