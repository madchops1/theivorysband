<?php
if($_POST['payload']){
  shell_exec( 'sudo cd /home/theivorys1/public_html/ && sudo git reset --hard HEAD && sudo git pull origin master' );
}

?>