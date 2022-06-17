function validate() {
    var matricno=document.getElementById("matricno").value;
    var password=document.getElementById("password").value;

    
    

    if (matricno=="200753" && password=="light"){
        alert("Welcome dear, Ogunyemi Albert Anu");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
        
        return false;
    }

    else if (matricno=="guest" && password=="guest"){
        alert("Welcome guest");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200453" && password=="taiwo"){
        alert("Welcome dear, Taiwo");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200046" && password=="paschal"){
        alert("Welcome dear, Odife Paschal Ezekiel");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200690" && password=="marian"){
        alert("Welcome dear, Ekeh Marian Gift");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200574" && password=="ruth"){
        alert("Welcome dear, Babalola Ruth");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200232" && password=="segun"){
        alert("Welcome dear, Akinyemi Oluwasegun");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200561" && password=="Fatimah"){
        alert("Welcome dear, Adebowale Adetayo Fatimah");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }

    else if (matricno=="200109" && password=="bolu"){
        alert("Welcome dear, Ayanladun Boluwatife Faith");
        window.open('home.html', 'homepage')
        window.open(url, 'homepage');
    }



















    else {
        alert("Wrong credentials");
    }








}