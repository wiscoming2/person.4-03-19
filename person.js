
<html>
    <head>
            <title>html rocks!!</title>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"> </script> 
    </head>
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
                        <input type="checkbox" name="Vegeterion" id="getanser" value="Vegeterion"> I am a Vegeterion<br>
                    </p>
                    <button type="submit">submit</button>
                </form>
                <button onclick="Fill()">Fill</button>
              
        </body>
        <script>
            function Fill()
            {
                var pers2={
                    name : "matan",
                    last : "levi",
                    email : "matanlevi558@gmail.com"

                }
                $('#getName').val(pers2.name)
            }
            function printDate()
            {
                var person = {
                firstname : $('#getName').val(),
                lastname : $('#getLastName').val(),
                birthDay : $('#getDate').val(),
                Email : $('#getEmail').val(),
                Vegeterion : $('#getanser').is(':checked'),
                gender : $("#myForm input[type='radio']:checked").val(),
                country : $("#country option:selected").text()
                }
                printalert(person)

            }

            function printalert(person)
            {
                alert
                {`
                firstname : ${person.firstname}
                lastname : ${person.lastname}
                birthDay : ${person.birthDay}
                Email : ${person.Email}
                Vegeterion : ${person.Vegeterion}
                gender : ${person.gender}
                country : ${person.country}
                `}
            }
        </script>
</html>
