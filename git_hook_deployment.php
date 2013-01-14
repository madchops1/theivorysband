<?php
//if(isset($_POST['payload'])){
  sleep(15);
  /* I have given the apache user on the server an ssh key pair for git
   * The .git directory in /ivorys1/public_html/ is chmoded to 0777 so 
   * the apache user should be able to pull from git!
   */

  function sendMessage($output){
    global $_POST;
    $message = "  TheIvorysBand.com Deployment Report \r\n
                  Date:".date("m/d/Y h:i:s A")."\r\n
                  --------------------------------------------------
                  ".$output."\r\n
                  \r\n";
        $message = wordwrap($message, 70, "\r\n");
    @mail('karl@webksd.com', 'TheIvorysBand.com Deployment Report '.date("m/d/Y h:i:s A").'', $message);
    @mail("6302175813@txt.att.net",$subject,$message,"From: deployment@theivorysband.com");
    die();
  }

 
  
  //$output = array();
  //exec('git pull origin master',$output,$return);
  //echo passthru('git pull origin master',$return);
  //$return = shell_exec('git pull origin master 2>&1');
  $return = shell_exec('git reset --hard HEAD && git pull origin master 2>&1');
  echo "<pre>$return</pre>";
  sendMessage($return);
 

//}
?>
