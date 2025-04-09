function myFunction() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const ugdepartment = document.getElementById("ugdepartment").value;
    const pgdepartment = document.getElementById("pgdepartment").value;
    const ugyearofpass = document.getElementById("ugyearofpass").value;
    const pgyearofpass = document.getElementById("pgyearofpass").value;

    const maths = document.getElementById("maths").value;
    const digital = document.getElementById("digital").value;
    const dbms = document.getElementById("dbms").value;

    const maths1 = document.getElementById("maths1").value;
    const digital1 = document.getElementById("digital1").value;
    const dbms1 = document.getElementById("dbms1").value;

    const maths2 = document.getElementById("maths2").value;
    const digital2 = document.getElementById("digital2").value;
    const dbms2 = document.getElementById("dbms2").value;

    const maths3 = document.getElementById("maths3").value;
    const digital3 = document.getElementById("digital3").value;
    const dbms3 = document.getElementById("dbms3").value;

    const maths4 = document.getElementById("maths4").value;
    const digital4 = document.getElementById("digital4").value;
    const dbms4 = document.getElementById("dbms4").value;

    const maths5 = document.getElementById("maths5").value;
    const digital5 = document.getElementById("digital5").value;
    const dbms5 = document.getElementById("dbms5").value;

    const educationdetails = {
        name: name,
        email: email,
        phone: phone,
        UG: {
            department: ugdepartment,
            yearOfPassing: ugyearofpass,
            "FIRST YEAR": {
                maths: maths,
                digital: digital,
                dbms: dbms
            },
            "SECOND YEAR": {
                maths2: maths2,
                digital2: digital2,
                dbms2: dbms2
            },
            "THIRD YEAR": {
                maths4: maths4,
                digital4: digital4,
                dbms4: dbms4
            }
        },
        PG: {
            department: pgdepartment,
            yearOfPassing: pgyearofpass,
            "FIRST YEAR": {
                maths1: maths1,
                digital1: digital1,
                dbms1: dbms1
            },
            "SECOND YEAR": {
                maths3: maths3,
                digital3: digital3,
                dbms3: dbms3
            },
            "THIRD YEAR": {
                maths5: maths5,
                digital5: digital5,
                dbms5: dbms5
            }
        }
    };
 window.alert("Registered successfully!");
   console.log(educationdetails);
  
}
