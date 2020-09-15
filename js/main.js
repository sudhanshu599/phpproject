let base_url = "handler45.php";

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var eventList = document.getElementById("event");
var myEventList = document.getElementById("myregistration");
var data = document.getElementById("data");
var nodata = document.getElementById("ini");

myEventList.style.display = "none";
eventList.style.display = "block";


function events() {
    if(eventList.style.display === "none"){
        eventList.style.display = "block";
        myEventList.style.display = "none";
    }
}


function myreg() {
    if(myEventList.style.display === "none"){
        myEventList.style.display = "block";
        eventList.style.display = "none";
		showdata();
    }
}


let successbut = document.querySelector(".checkk");
successbut.addEventListener("click", validation);

function validation(ev) {
  ev.preventDefault();
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var phno = document.getElementById("phno").value;
  var email = document.getElementById("email").value;

  var e = document.getElementById("eventname");
  var strUser = e.options[e.selectedIndex].value;
  var strUser1 = e.options[e.selectedIndex].text;
  
  // console.log(strUser1);
  if (strUser === 0) {
    document.getElementById("eventname1").innerHTML = "Please Select a Event";
    // alert("Please select a Contest");
    return false;
  }
  setTimeout(() => {
    document.getElementById("eventname1").innerHTML = " ";
  }, 2000);

  if (fname === "") {
    document.getElementById("fname1").innerHTML =
      "Please fill the Frist Name";
    setTimeout(() => {
      document.getElementById("fname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (fname.length <= 2 || fname.length > 20) {
    document.getElementById("fname1").innerHTML =
      "Please enter a valid name";
    setTimeout(() => {
      document.getElementById("fname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (!isNaN(fname)) {
    document.getElementById("fname1").innerHTML =
      "only characters are allowed";
    setTimeout(() => {
      document.getElementById("fname1").innerHTML = " ";
    }, 2000);
    return false;
  }

  if (lname === "") {
    document.getElementById("lname1").innerHTML =
      "Please fill the Last Name";
    setTimeout(() => {
      document.getElementById("lname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (fname.length <= 2 || fname.length > 20) {
    document.getElementById("lname1").innerHTML =
      "Please enter a valid name";
    setTimeout(() => {
      document.getElementById("lname1").innerHTML = " ";
    }, 2000);
    return false;
  }
  if (!isNaN(fname)) {
    document.getElementById("lname1").innerHTML =
      "only characters are allowed";
    setTimeout(() => {
      document.getElementById("lname1").innerHTML = " ";
    }, 2000);
    return false;
  }


  if (phno === "") {
    document.getElementById("phno1").innerHTML =
      "Please fill the mobile Number field";
    setTimeout(() => {
      document.getElementById("phno1").innerHTML = " ";
    }, 2000);

    return false;
  }
  if (isNaN(phno)) {
    document.getElementById("phno1").innerHTML =
      "User must write digits only not characters";
    setTimeout(() => {
      document.getElementById("phno1").innerHTML = " ";
    }, 2000);

    return false;
  }
  if (phno.length != 10) {
    document.getElementById("phno1").innerHTML =
      "Mobile Number must be 10 digits only";
    setTimeout(() => {
      document.getElementById("phno1").innerHTML = " ";
    }, 2000);

    return false;
  }

  if (email === "") {
    document.getElementById("email1").innerHTML =
      "Please fill the email field";
    setTimeout(() => {
      document.getElementById("email1").innerHTML = " ";
    }, 2000);

    return false;
  }
  if (email.indexOf("@") <= 0) {
    document.getElementById("email1").innerHTML = "@ Invalid Position";
    setTimeout(() => {
      document.getElementById("email1").innerHTML = " ";
    }, 2000);

    return false;
  }

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("email1").innerHTML = " . Invalid Email";
    setTimeout(() => {
      document.getElementById("email1").innerHTML = "";
    }, 2000);

    return false;
  }
  let today = new Date();
  let timestamp = today.getHours() + " " + "Hr" + ":" + today.getMinutes() + " " + "Min";
  
  var k={fname: fname, lname: lname,pno : phno, email: email, event1 : strUser1 ,timestamp: timestamp};
    getthedata(k);
  document.getElementById("form_register").reset();
}

function getthedata(k){
	var k = JSON.stringify(k);
	let url = base_url + "?req=insert&object="+k; 
	$.get(url,function(data,success){
		if(data=="Form successfully submitted"){
			alert(data);
		}
		else{
			alert(data);
		}
		
	});
}

function showdata(){
	let url = base_url + "?req=list";
	$.get(url,function(data,success){
		if(data.length == 0){
			document.getElementById("data").innerHTML="<h3><div class='container text-center'>None registered till now. Be the first one to register.</div></h3>";
		}
		else{
			var text;
			text= "<table class='table table-striped mt-5 co'><thead class='thread-dark'>";
			text=text + "<tr><th scope='col'>Name</th><th scope='col'>Phone Number</th><th scope='col'>Email</th><th scope='col'>Event Name</th><th scope='col'>TimeStamp</th></tr></thead>";
			for(i=0;i<data.length;i++)
			{
				text= text + "<tr><td>" + data[i].fname+" "+data[i].lname + "</td><td>" + data[i].pno + "</td><td>" + data[i].email + "</td><td>" + data[i].event1 + "</td><td>" + data[i].timestamp + "</td></tr>";
			}
			text += "<tbody class='values'></tbody></table>";
			document.getElementById("data").innerHTML=text;         
			}   
	});
}
