
class Login {


    constructor() {

    }

    login() {
        const usernameInput = document.getElementById('username');       
        const passwordInput = document.getElementById('password');

        let username = usernameInput.value;
        let password = passwordInput.Value;

        
        username = usernameInput.value;
      

        if(username === 'lphan' && passsword === 'acb123') {
            this.goToHome();
        }    else {
                this.displayError();
            }
        }

        displayError() {
            const errorBox = document.getElementById('error-box');
            errorBox.innerHTML = 'User not found!';
            errorBox.style = "display: block;";
            const interval = setInterval(() => {
                errorBox.style = "display: none;";
                clearInterval(interval);
            }, 5000)
        
        }

    goToHome() {
        window.location.href = 'index.html'
    }
}

const login = new Login();