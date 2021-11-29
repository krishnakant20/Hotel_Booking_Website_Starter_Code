//header
let ht1 = () => {
    let headerTemp = `<div id="modalLogin1">
    <div>
        <img src="assests/images/logo.png" alt="logo" height="60px" width="60px">
    </div>

    <button type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" 
                                data-backdrop="false" data-target="#login-modal"
                                onclick="headerLogin(event)">LOGIN</button>
            
                <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form id="login-form">
                                    <div class="login-field">
                                        <label for="username">Username: </label>
                                        <input type="text" id="username" name="username" placeholder="Enter Username" required />
                                    </div>
                                    <div class="login-field">
                                        <label for="password">Password: </label>
                                        <input type="password" id="password" name="password" placeholder="Enter Password" required />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button id="login-button" type="button" class="btn btn-primary" data-dismiss="modal" onclick="login(event)">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
</div>`;
    document.getElementById("1header").innerHTML += headerTemp;
};



//footer 
let ft1 = () => {
    let footerTemp = `<div id="footer123">
<div class="footerC1">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
        data-bs-target="#exampleModal1">
        Contact
    </button>

    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Get in Touch</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        Thank you for reaching out!!!
                    </div>
                    <div>
                        Please enter your email and we will get back to you.
                    </div>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1"
                                aria-describedby="emailHelp">
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
        </div>
    </div>
</div>

<div class="footerC1" id="footer2"  > &#169; 2021 ROOM SEARCH PRIVATE LIMITED</div>
<div class="footerC1" id="Media1">
    <a href="https://www.facebook.com" target="_blank"><img src="assests/images/facebook.png"
            alt="facebook" height="20px" width="22px"></a>
    <a href="https://www.instagram.com" target="_blank"><img src="assests/images/instagram.png"
            alt="instagram" height="20px" width="22px"></a>
    <a href="https://twitter.com" target="_blank"><img src="assests/images/twitter.png" alt="twitter"
            height="20px" width="22px"></a>
</div>
</div>`;
    document.getElementById("1footer").innerHTML += footerTemp;
};


// javascript call function
ht1();
ft1();

//body city view more cards
function viewMore(){
    let count = 0;
    if(count === 0){
        document.getElementById("contentDetails2").style.display="flex";
        document.getElementById("contentViewmore").innerHTML = "View Less";
       count++;
    }
    else{
        document.getElementById("contentViewmore").innerText = "View More";
        count--;
    }
    

}

// login
let login = (event) => {
    localStorage.setItem("username", "admin");
    localStorage.setItem("password", "admin");
    localStorage.setItem("isUserLoggedIn", "false");
    event.preventDefault();

    let userElement = document.getElementById("username");
    let passwordElement = document.getElementById("password");

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (userElement.value === storedUsername && passwordElement.value === storedPassword) {
        localStorage.setItem("isUserLoggedIn", "true");
        alert("Successfully Logged In!");
        document.getElementById("login").innerText = "LOGOUT";
        location.reload();
    } else {
        alert("Invalid Credentials!, Login Failed!");
    }
    userElement.value = "";
    passwordElement.value = "";
};

let verifyLogin = () => {
    let isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
    let loginBtn = document.getElementById("login");
    if (!isUserLoggedIn || isUserLoggedIn === "false") {
        localStorage.clear();
        loginBtn.innerText = "LOGIN";
        loginBtn.dataset.target = "#login-modal";
    } else if (isUserLoggedIn === "true") {
        loginBtn.dataset.target = "";
        loginBtn.innerText = "LOGOUT";
    }
};

verifyLogin();

let headerLogin = () => {
    if (localStorage.getItem("isUserLoggedIn") === "true") {
        localStorage.setItem("isUserLoggedIn", "false");
        alert("Logged out successfuly, Please visit again!");
        location.reload();
    }
};
