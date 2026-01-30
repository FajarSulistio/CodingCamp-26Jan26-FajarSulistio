
welcomeMessege();

function welcomeMessege(){
    let userResponse = prompt ("what is your name");
   
    if (userResponse === null || userResponse.trim() === ""){
        userResponse = "guest"; 
    }
    document.getElementById("welcome").innerText =`Hello, ${userResponse}! Welcome to my website`;

}

    document.getElementById("massage").addEventListener("submit",function(e){
        e.preventDefault();

        const nama = document.getElementById("input-nama").value;
        const tanggal = document.getElementById("input-tgl").value;
        const pesan = document.getElementById("input-pesan").value;
        const jk = document.querySelector("input[name='JK']:checked").value;
        
        const timeNow = new Date().toLocaleString();

        document.getElementById("currentTime").innerText = "Current time : " + timeNow;
        document.getElementById("Nama").innerText = "Nama : " + nama;
        document.getElementById("Tanggal").innerText = "Tanggal Lahir : " + tanggal;
        document.getElementById("JK").innerText = "Jenis Kelamin : " + jk;
        document.getElementById("Pesan").innerText = "Pesan : " + pesan;
    })

