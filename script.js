let currentIndex = 0;
const gdriveLinks = [
    { title: "Masakali", link: 'https://drive.google.com/file/d/1kuvXYPJ1wk9OUkQpOXDc5ue8oB5RoLFP/view?usp=drivesdk' },
    { title: "Brown Rang", link: 'https://drive.google.com/file/d/1CucDvxbiLEU5UsfzDKvWi_x7GD4_Wz1V/view?usp=drivesdk' },
    { title: "Ek Tera Naam Hai Saaza", link: 'https://drive.google.com/file/d/1CwyQQLHeRP_M_fmFnu78wCG8NOm3V54L/view?usp=drivesdk' },
    { title: "Nashe shi Chad Gyi", link: 'https://drive.google.com/file/d/1D109bwYgv9jKuvYwB5uGoiT8BJi-C1UQ/view?usp=drivesdk' },
    { title: "Saiyara Main Saiyara", link: 'https://drive.google.com/file/d/1D6uRAPYx4E62cp8o3GFmtQ52prHkxLfg/view?usp=drivesdk' },
    { title: "Mere Haath me Tera Haath Ho Fanah", link: 'https://drive.google.com/file/d/1D7x0AmyWilyUjOA4MqSlhQ_EzQV-iF_U/view?usp=drivesdk' },
    { title: "Moh Moh Ke Daage", link: 'https://drive.google.com/file/d/1D9k7nrpSvELxmyPxjqqP3IgQZwQkYEkW/view?usp=drivesdk' },
    { title: "Pushpa 2 - Ambarsa Lagta Hai Mera Saami", link: 'https://drive.google.com/file/d/1DEdv7C_buuehyv0ASGU7sdwypsiR8rfh/view?usp=drivesdk' },
    { title: "Bol Halke Halke", link: 'https://drive.google.com/file/d/1DFWiDtWYHbaD-ByZ9vgG2Mn0HB3lXxCj/view?usp=drivesdk' },
    { title: "Pushpa- More Saami Saami", link: 'https://drive.google.com/file/d/1DJArgf5IvjnTu2AhtZ3IwaRHA8Y7c5IT/view?usp=drivesdk' },
    
    { title: "Haan Hasi Ban Gaye", link: 'https://drive.google.com/file/d/1DNY-cV8l6Ox0djbd2Ki6Tm-OclNLG7yI/view?usp=drivesdk' },
    { title: "Hum Ko Hamise Chura Lo", link: 'https://drive.google.com/file/d/1EzJ4t2pK_zaNOtJz6SNk01EElJPBvZlR/view?usp=drivesdk' },
    { title: "Hamari Adhuri Kahani", link: 'https://drive.google.com/file/d/1KiTre8abMoXcUOsuRY5JYE4SA7NyxSo7/view?usp=drivesdk' },
    { title: "Kahin Pyar Na Ho jaye", link: 'https://drive.google.com/file/d/1M2kqd-_Wm7SY8R7E9Ue3EajDd-WsPhWk/view?usp=drivesdk' },
    { title: "Lekin Muskaan Ho aiesi", link: 'https://drive.google.com/file/d/1H1uEu1fHQG2RzOV_xz3brhTZ4QNsprSl/view?usp=drivesdk' },
    { title: "Chura Ke Dil Mera", link: 'https://drive.google.com/file/d/1MKHk6sAOlr4pNolMQSNcO7E8PBJsjVCK/view?usp=drivesdk' },
    { title: "Dil Diya Galla", link: 'https://drive.google.com/file/d/1H7FE5sKFQIjOdCcSQyrQGLjqyLqUrnEQ/view?usp=drivesdk' },
    { title: "Ae Mere Hamsafar", link: 'https://drive.google.com/file/d/1MhqnX-5WSwkz6Z4LmFojT-xjtjeKurri/view?usp=drivesdk' },
    { title: "Chand Se Sifaarish Jo Karta Hamari - Fanah", link: 'https://drive.google.com/file/d/1FH9wwd_ROY3TxSqj5tzCWq7ci7cjbvP2/view?usp=drivesdk' },
    { title: "Dil Ibaadat Kr raha Hai", link: 'https://drive.google.com/file/d/1Kf_Y5sHAb6KpvgVgd_g2pUZsaeaG-pkI/view?usp=drivesdk' },
    { title: "Dil Ne Ye Kaha Hai Dil Se", link: 'https://drive.google.com/file/d/1MmFz9JWY-A_UW4OgHznW4zdKo1cto3yW/view?usp=drivesdk' },
    { title: "Lambi Judai", link: 'https://drive.google.com/file/d/1L6Zg728_O154oLa92dgM69rlVIN5Igd7/view?usp=drivesdk' },
    { title: "AAya vhi tera seriya wala", link: 'https://drive.google.com/file/d/1L1FnjXJ-sJrSkcQMFvpGnmBH_QrxmBJE/view?usp=drivesdk' },
    { title: "Haan Hasi Ban Gaye (Male)", link: 'https://drive.google.com/file/d/1Kag1f9lW0Mt6IhCj7gpIHZHKW89JQTbs/view?usp=drivesdk' },
    { title: "Ek din app Humko Mil Jayenge Socha na tha", link: 'https://drive.google.com/file/d/1MRiMtAnIz8Q-X7ZI5B31imzsGg7kBVjQ/view?usp=drivesdk' },
    { title: "Na Kajre ki Dhaar ", link: 'https://drive.google.com/file/d/1MOR4I9Qworq_bM_uUWVUI9jXaglEh8k-/view?usp=drivesdk' },
    { title: "Khamakha Kwab Bunta Raha", link: 'https://drive.google.com/file/d/1ELzKGjydXidCtWik8f3eKNA8wmAO3ths/view?usp=drivesdk' },
    { title: "Aaila Re aaila", link: 'https://drive.google.com/file/d/1K8mZ4FTDYfQlG2ND4bUordKBUPPUaw2z/view?usp=drivesdk' },
    { title: "Rim zim Rim Zim", link: 'https://drive.google.com/file/d/1FcAM0oa5AgsXX4r0SJhN1To5boRo357I/view?usp=drivesdk' },
    { title: "Song 31", link: 'https://drive.google.com/file/d/1LDi_NQMeBIMFCpx3Co0V6QrBKYuiyqad/view?usp=drivesdk' },
    { title: "Song 32", link: 'https://drive.google.com/file/d/1FonPvSFaCX3TiqwS_c9_ZUzH0TbUVzhh/view?usp=drivesdk' },
    { title: "Song 33", link: 'https://drive.google.com/file/d/1FXpR9gDg1VNvc7kxV6Xbt4yOULW8UgyL/view?usp=drivesdk' },
    { title: "Song 34", link: 'https://drive.google.com/file/d/1LMPkeTpC_EkEPZItGKNu1iOONpJzGJTn/view?usp=drivesdk' },
    { title: "Song 35", link: 'https://drive.google.com/file/d/1MQMXEQw6SWCs2nB6QtnNTd_O2OcCqBwH/view?usp=drivesdk' },
    { title: "Song 36", link: 'https://drive.google.com/file/d/1G-yl4m2Vwh2YAPYpBQFi8hXjkENrehZ6/view?usp=drivesdk' },
    { title: "Song 37", link: 'https://drive.google.com/file/d/1EVUiiicQ4CT2--RGQvsD-nB08fyXRlVL/view?usp=drivesdk' },
    { title: "Song 38", link: 'https://drive.google.com/file/d/1L9xSrwEivSKc82byUa1XBAZldwU-IIRw/view?usp=drivesdk' },
    { title: "Song 39", link: 'https://drive.google.com/file/d/1MUh3YjrU5pJ7NbpXS3n1gFaZS0XEfuf-/view?usp=drivesdk' },
    { title: "Song 40", link: 'https://drive.google.com/file/d/1EKCptXDReN_r207m6s1DxUoGdo0cTo5W/view?usp=drivesdk' },
    { title: "Song 41", link: 'https://drive.google.com/file/d/1MqL0fHtCpPH1W52bHLO7dos7GQ7iP_OB/view?usp=drivesdk' },
    { title: "Song 42", link: 'https://drive.google.com/file/d/1ISFbYwuI_YPN3M0vpwNhQsVXB2-ZErln/view?usp=drivesdk' },
    { title: "Song 43", link: 'https://drive.google.com/file/d/1G3riKv7w5QI7dj1xfB2dpRMFGotPCwDq/view?usp=drivesdk' },
    { title: "Song 44", link: 'https://drive.google.com/file/d/1MOh9slW_eCK97-zO0jo9U5N4QihliH_4/view?usp=drivesdk' },
    { title: "Song 45", link: 'https://drive.google.com/file/d/1I5Us0N6oDRYIZ0jpd2aCKjTW2AFUuNWu/view?usp=drivesdk' },
    { title: "Song 46", link: 'https://drive.google.com/file/d/1LWOb9TQbJ3EUNtJp7iYMuZ-KdbGfqjDG/view?usp=drivesdk' },
    { title: "Song 47", link: 'https://drive.google.com/file/d/1KegC-BZaSM7Ukw0i4nMqeMNp5LbuKfQh/view?usp=drivesdk' },
    { title: "Song 48", link: 'https://drive.google.com/file/d/1JbZD_5pk1M4WsTCOWt6XdCybyaB0T-7_/view?usp=drivesdk' },
    { title: "Song 49", link: 'https://drive.google.com/file/d/1FgMmMn3MTuNCaRvXN15N8rSWSNlngGsh/view?usp=drivesdk' },
    { title: "Song 50", link: 'https://drive.google.com/file/d/1IRdQ73XV16Njuk3RakytGRxQEoSnAfCM/view?usp=drivesdk' },
    { title: "Song 51", link: 'https://drive.google.com/file/d/1Kwb6z1Kmz64tCHWvAhieHavAZ8cSCN44/view?usp=drivesdk' },
    { title: "Song 52", link: 'https://drive.google.com/file/d/1ERG2KGpDw3ZlxLPpNlpEEsfdSBkTV5ej/view?usp=drivesdk' },
    { title: "Song 53", link: 'https://drive.google.com/file/d/1I0MAND49KAzd67AN3f1Y5klcgnZNyXfH/view?usp=drivesdk' },
    { title: "Song 54", link: 'https://drive.google.com/file/d/1N-rwXgMc1iv8ZrE3l32ETKf6Lp1Ts47f/view?usp=drivesdk' },
    { title: "Song 55", link: 'https://drive.google.com/file/d/1JzIY1VhKq-gjaqSJAY6sPkzLNPP-3PvP/view?usp=drivesdk' },
    { title: "Song 56", link: 'https://drive.google.com/file/d/1LQGmZva4w5CFvIuh3ab25ATBoe4ktbwf/view?usp=drivesdk' },
    { title: "Song 57", link: 'https://drive.google.com/file/d/1JdLkNbpI8ayGICvrntdQt3XkkzilfHIt/view?usp=drivesdk' },
    { title: "Song 58", link: 'https://drive.google.com/file/d/1EulwKPmv6HjNS_FLWAj73InyPoJROEHt/view?usp=drivesdk' },
    { title: "Song 59", link: 'https://drive.google.com/file/d/1FBe0e1eXmjyJZvmbm4W7vEu-UEmaWa2t/view?usp=drivesdk' },
    { title: "Song 60", link: 'https://drive.google.com/file/d/1JCG5ACkkuZH3cmlKeIOMvnKdjHGXB2Ko/view?usp=drivesdk' },
    { title: "Song 61", link: 'https://drive.google.com/file/d/1EznOkh3qnxp7gK4sk1_Yz_OX7GbFuLfE/view?usp=drivesdk' },
    { title: "Song 62", link: 'https://drive.google.com/file/d/1GlJupr82uaoW5V5Me2mnf0bhwtOJv9MM/view?usp=drivesdk' },
    { title: "Song 63", link: 'https://drive.google.com/file/d/1FzvkSVqK7LwaEqE_whF4VTNv8oabSMX_/view?usp=drivesdk' },
    { title: "Song 64", link: 'https://drive.google.com/file/d/1EmrZrrDHU2gZUaQOoNt5iLW9HKDy-zM3/view?usp=drivesdk' },
    { title: "Song 65", link: 'https://drive.google.com/file/d/1IJhkQGkoB14ItR--s7D33fDYlOXwNPn8/view?usp=drivesdk' },
    { title: "Song 66", link: 'https://drive.google.com/file/d/1nn9xrhCF_G519pw3a0Ir9CNnLP81Q-6W/view?usp=drivesdk' }
];

function loadMusic() {
    const gdriveLink = document.getElementById('gdriveLink').value;

    if (gdriveLink.includes('drive.google.com')) {
        const fileId = gdriveLink.match(/\/d\/([^\/]+)\//)[1];
        const embedLink = `https://drive.google.com/file/d/${fileId}/preview`;

        const audioContainer = document.getElementById('audioContainer');
        audioContainer.innerHTML = `<iframe id="audioPlayer" src="${embedLink}" width="100%" height="80" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;

        currentIndex = gdriveLinks.indexOf(gdriveLink);
        setupIframeListener();
    } else {
        alert('Please enter a valid Google Drive link.');
    }
}

function play() {

    let username=localStorage.getItem("user");
    if(!username){
        alert("please Login!!");
        return;
    }
    if (currentIndex >= 0 && currentIndex < gdriveLinks.length) {
        console.log(gdriveLinks[currentIndex]["link"]);
        const embedLink = `https://drive.google.com/file/d/${gdriveLinks[currentIndex]["link"].match(/\/d\/([^\/]+)\//)[1]}/preview`;
        const audioContainer = document.getElementById('audioContainer');
        audioContainer.innerHTML = `<iframe id="audioPlayer" src="${embedLink}" width="100%" height="80" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;

        // Add event listener for the iframe content load
        const audioPlayer = document.getElementById('audioPlayer');
        audioPlayer.onload = () => {
            const innerDoc = audioPlayer.contentDocument || audioPlayer.contentWindow.document;
            const audioElement = innerDoc.querySelector('audio');
            if (audioElement) {
                audioElement.addEventListener('ended', next);
            }
        };
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

function randomFunction(params) {
    currentIndex = parseInt((Math.random()*100000)%gdriveLinks.length);
    play();
    
}

function user() {

    let username = document.getElementById("userName").value;
    let user = document.getElementById("user");
    localStorage.setItem("user",username);
    user.style.display = "block";
    user.innerHTML = `Aniket Welcomes You <h3 style='color: green';>${username}<span> !!</span></h3>`;

    setTimeout(() => {
        document.getElementById("userName").style.display = "none";
        document.getElementById("login").style.display = "none";
        user.innerHTML = `<h3 style='color: green';>${username}<span> !!</span></h3>`;
    }, 2000);
    play();
}

function setupIframeListener() {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.onload = () => {
        const innerDoc = audioPlayer.contentDocument || audioPlayer.contentWindow.document;
        const audioElement = innerDoc.querySelector('audio');
        if (audioElement) {
            audioElement.addEventListener('ended', next);
            audioElement.play();
        } else {
            console.warn('No audio element found inside the iframe.');
        }
    };
}

window.onload = ()=>{
    let username=sessionStorage.getItem("user");
    if(username){
        document.getElementById("userName").value=username;
        setTimeout(()=>{          
           document.getElementById("login").click();
           play();
        },300);
    }
}

const audioContainer=document.getElementById("audioContainer");

function createList() {
    
    const list= document.getElementById("list");
    let orderedList= document.createElement("ul");
    for(let i=0;i<gdriveLinks.length;i++){
        
        let currSong = document.createElement("li");
        currSong.addEventListener('click',()=>{
            let prev= document.querySelector(".curSong");
            if(prev)prev.classList.remove('curSong');            
            currSong.classList.add("curSong");
            playFromList(i);
        });
        currSong.innerText=gdriveLinks[i]["title"];
        orderedList.appendChild(currSong);
    }
    list.appendChild(orderedList);
}
createList();

function playFromList(index) {
    currentIndex = index;
    play();
}

