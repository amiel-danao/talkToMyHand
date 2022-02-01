<?php 

require('./connect.php');
    $queryadmin = "SELECT * FROM admin";
    $sqladmin = mysqli_query($conn,$queryadmin);
    session_start();



    $queryuser = "SELECT * FROM capstone_user";
    $sqluser = mysqli_query($conn,$queryuser);


if (isset($_SESSION['username'])) {
}
?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">

    <link rel="stylesheet" href="adminpanel.css">

    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
  <div class="sidebar">
    <div class="logo-details">

        <div class="logo_name">Admin Panel</div>
        <i class='bx bx-menu' id="btn" ></i>
    </div>
    <ul class="nav-list">
      <li>
       <a href="usertable.php">
         <i class='bx bx-user' ></i>
         <span class="links_name">User</span>
       </a>
       <span class="tooltip">User</span>
     </li>
     <ul class="nav-list">
      <li>
       <a href="leaderbrd.php">
       <i class='bx bx-trophy' ></i>
         <span class="links_name">Leaderboards</span>
       </a>
       <span class="tooltip">Leaderboards</span>
     </li>

    <ul class="nav-list">
      <li>
      <a href="logout.php">
       <i class='bx bx-log-out' ></i>
         <span class="links_name">Log Out</span>
       </a>
       <span class="tooltip">Log Out</span>
       <a href="logout.php">
     </li>


    </ul>
  </div>
  <section class="home-section">
      <div class="text">Dashboard

</div>
  </section>
  <script>
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
  });

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }
  </script>
</body>
</html>