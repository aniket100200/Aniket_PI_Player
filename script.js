let currentIndex = 0;
const gdriveLinks = [
    'https://drive.google.com/file/d/1kuvXYPJ1wk9OUkQpOXDc5ue8oB5RoLFP/view?usp=drivesdk',    
    "https://drive.google.com/file/d/1CucDvxbiLEU5UsfzDKvWi_x7GD4_Wz1V/view?usp=drivesdk",
    "https://drive.google.com/file/d/1CwyQQLHeRP_M_fmFnu78wCG8NOm3V54L/view?usp=drivesdk",
    "https://drive.google.com/file/d/1D109bwYgv9jKuvYwB5uGoiT8BJi-C1UQ/view?usp=drivesdk",
    "https://drive.google.com/file/d/1D6uRAPYx4E62cp8o3GFmtQ52prHkxLfg/view?usp=drivesdk",
    "https://drive.google.com/file/d/1D7x0AmyWilyUjOA4MqSlhQ_EzQV-iF_U/view?usp=drivesdk",
    "https://drive.google.com/file/d/1D9k7nrpSvELxmyPxjqqP3IgQZwQkYEkW/view?usp=drivesdk",
    "https://drive.google.com/file/d/1DEdv7C_buuehyv0ASGU7sdwypsiR8rfh/view?usp=drivesdk",
    "https://drive.google.com/file/d/1DFWiDtWYHbaD-ByZ9vgG2Mn0HB3lXxCj/view?usp=drivesdk",
    "https://drive.google.com/file/d/1DJArgf5IvjnTu2AhtZ3IwaRHA8Y7c5IT/view?usp=drivesdk",
    "https://drive.google.com/file/d/1DJArgf5IvjnTu2AhtZ3IwaRHA8Y7c5IT/view?usp=drivesdk",
    "https://drive.google.com/file/d/1DNY-cV8l6Ox0djbd2Ki6Tm-OclNLG7yI/view?usp=drivesdk",
        "https://drive.google.com/file/d/1EzJ4t2pK_zaNOtJz6SNk01EElJPBvZlR/view?usp=drivesdk",
        "https://drive.google.com/file/d/1KiTre8abMoXcUOsuRY5JYE4SA7NyxSo7/view?usp=drivesdk",
        "https://drive.google.com/file/d/1M2kqd-_Wm7SY8R7E9Ue3EajDd-WsPhWk/view?usp=drivesdk",
        "https://drive.google.com/file/d/1H1uEu1fHQG2RzOV_xz3brhTZ4QNsprSl/view?usp=drivesdk",
        "https://drive.google.com/file/d/1MKHk6sAOlr4pNolMQSNcO7E8PBJsjVCK/view?usp=drivesdk",
        "https://drive.google.com/file/d/1H7FE5sKFQIjOdCcSQyrQGLjqyLqUrnEQ/view?usp=drivesdk",
        "https://drive.google.com/file/d/1MhqnX-5WSwkz6Z4LmFojT-xjtjeKurri/view?usp=drivesdk",
        "https://drive.google.com/file/d/1FH9wwd_ROY3TxSqj5tzCWq7ci7cjbvP2/view?usp=drivesdk",
        "https://drive.google.com/file/d/1Kf_Y5sHAb6KpvgVgd_g2pUZsaeaG-pkI/view?usp=drivesdk",
        "https://drive.google.com/file/d/1MmFz9JWY-A_UW4OgHznW4zdKo1cto3yW/view?usp=drivesdk",
        "https://drive.google.com/file/d/1L6Zg728_O154oLa92dgM69rlVIN5Igd7/view?usp=drivesdk"
    // Add more Google Drive links as needed
];

function loadMusic() {
    const gdriveLink = document.getElementById('gdriveLink').value;

    // Check if it's a Google Drive link
    if (gdriveLink.includes('drive.google.com')) {
        const fileId = gdriveLink.match(/\/d\/([^\/]+)\//)[1];
        const embedLink = `https://drive.google.com/file/d/${fileId}/preview`;

        // Replace audio container with iframe
        const audioContainer = document.getElementById('audioContainer');
        audioContainer.innerHTML = `<iframe src="${embedLink}" width="100%" height="80" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;

        // Set current index to the selected link
        currentIndex = gdriveLinks.indexOf(gdriveLink);
    } else {
        alert('Please enter a valid Google Drive link.');
    }
}

function play() {
    if (currentIndex >= 0 && currentIndex < gdriveLinks.length) {
        currentIndex= parseInt((Math.random()*100)%gdriveLinks.length);
        const embedLink = `https://drive.google.com/file/d/${gdriveLinks[currentIndex].match(/\/d\/([^\/]+)\//)[1]}/preview`;
        const audioContainer = document.getElementById('audioContainer');
        audioContainer.innerHTML = `<iframe src="${embedLink}" width="100%" height="80" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;
    } else {
        alert('No music links to play.');
    }
}

function next() {
    currentIndex++;
    if (currentIndex >= gdriveLinks.length) {
        currentIndex = 0;
    }
    play();
}

function previous() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = gdriveLinks.length - 1;
    }
    play();
}

function user() {
    let username= document.getElementById("userName").value;
   let user=document.getElementById("user");
   user.style.display= "block";
   user.innerHTML=`Aniket Welcomes You <h3 style='color: green';>${username}<span> !!</span></h3>`;
    

   setTimeout(() => {
  document.getElementById("userName").style.display="none";
    document.getElementById("login").style.display="none";
    user.innerHTML=`<h3 style='color: green';>${username}<span> !!</span></h3>`;
   }, 2000);


}