<html>
    <head>
            <title>html rocks!!</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
        <body>
              <form onsubmit="printDate()" id="myForm">
                    <p> firstName: <input type="text" id="getName" required/> </p>
                    <p> lastName: <input type="text" id="getLastName" required/> </p>
                    <p> birthDay: <input type="date" id="getDate" required/> </p>
                    <p> Email: <input type="email" id="getEmail" required/> </p>
                    <p>
                        <input type="radio" name="gender" value="male" required /> male<br>
                        <input type="radio" name="gender" value="female" /> female<br>
                    </p>
                    <select id="country">
                            <option value="Israel">Israel</option>
                            <option value="USA">USA</option>
                            <option value="Canada">Canada</option>
                            <option value="France">Farnce</option>
                         </select>
                    <p>
                        <input type="checkbox" name="Vegeterion" value="Vegeterion"> I am a Vegeterion<br>
                    </p>
                    <button type="submit">submit</button>
                </form>
              
        </body>
        <script>
            function printDate()
            {
                var x = $('input[name=gender]:checked', '#myForm').val()
                var y = $('#country option:selected').text() 
                var a = $('#getName').val()
                var b = $('#getLastName').val()
                var c = $('#getDate').val()
                var d = $('#getEmail').val()
                alert(`fisrt name : ${a} \n last name : ${b} \n birthday : ${c} \n Email : ${d} \n gender : ${x} \n country : ${y}`)
            }
        </script>
    </head>
</html>
