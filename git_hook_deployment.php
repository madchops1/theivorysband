<?php
//if(isset($_POST['payload'])){
  
  /* I have given the apache user on the server an ssh key pair for git
   * The .git directory in /ivorys1/public_html/ is chmoded to 0777 so 
   * the apache user should be able to pull from git!
   */

  function sendSuccessMessage(){
    global $_POST;
    $message = "  Codebase deployed to TheIvorysBand.com \r\n
                  Date:".date("m/d/Y h:i:s A")."\r\n
                  Status: Successfull\r\n
                  --------------------------------------------------
                  ".$_POST['payload']."\r\n
                  \r\n";
        $message = wordwrap($message, 70, "\r\n");
    @mail('karl@webksd.com', 'TheIvorysBand.com Deployed Successfully '.date("m/d/Y h:i:s A").'', $message);
    die();
  }

  function sendFailureMessage(){
    global $_POST;
    $message = "  Codebase not Deployed \r\n
                  Date:".date("m/d/Y h:i:s A")."\r\n
                  Status: Failure\r\n
                  --------------------------------------------------
                  ".$_POST['payload']."\r\n
                  \r\n";
    $message = wordwrap($message, 70, "\r\n");
    @mail('karl@webksd.com', 'TheIvorysBand.com Deployment Failure '.date("m/d/Y h:i:s A").'', $message);
    die();
  }
  
  //$output = array();
  //exec('git pull origin master',$output,$return);
  //echo passthru('git pull origin master',$return);
  $return = shell_exec('git pull');
  echo "<pre>$return</pre>";
  //$output = shell_exec('git pull origin master');
  
  //exec('cd /home/ivorys1/public_html/ && git pull origin master',$output,$return) or sendFailureMessage();
  //sendSuccessMessage();
  //`sudo cd /home/ivorys1/public_html/ && sudo git reset --hard HEAD && sudo git pull origin master`;
  

  //echo $message;
  //echo "<br><br>";
  
  //echo "RETURN: ".$return."";
  //echo "<br><br>";
  
  //echo "<pre>";
  //echo var_dump($output);
  //echo "</pre>";

//}
?>