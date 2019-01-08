<!-- echo "<pre>";
    print_r var_dump($_POST);
    print_r var_dump($_FILES);
    echo "</pre>"; -->
    if($_POST['q1'] == 'a'){
    echo "Правильный ответ";
  }else{
    echo "Неправильный ответ";
  }