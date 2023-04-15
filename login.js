
        /* connection with enter not working
        var logg=document.getElementById("button")
        logg.addEventListener("keypress", function(event) {
          console.log(event)
          if (event.key === "Enter") {
            event.preventDefault();
    document.getElementById("button").click();
          }
});*/


/*   have to see later
               1.api
               2.enter
               3. login back solve
  */
            function load() {
          var u = document.getElementById("mail").value;
          console.log(u+"+++"+typeof u)
          var p = document.getElementById("pass").value;
          console.log(u + "****" +p);
          var val=[{"l":{
                  "pass":"Vignesh123@",
                  "user":"Vignesh"
                }}]
        var pass = val[0].l.pass;
        var user = val[0].l.user;
        if(u===user && p===pass)
              {
                console.log("---------")
                alert("LogIn success");
                window.open("student.html","_self")
                return
              }
              else{
                document.getElementById("chk").style.display="block"
          }
        console.log(pass+"---"+user)
           /*     api calls
           fetch("https://randomuser.me/api/?results=5")
          .then((response) => response.json())
          .then((data) => {
            data.results.forEach((user) => {
              var username = user.login.username;
              var password = user.login.password;
              if(u==user && p==pass)
              {
                console.log("***********************************")
                alert("LogIn success");
                return
              }
            });
          });*/
        }