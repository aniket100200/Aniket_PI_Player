let currentIndex = 0;
let gdriveLinks;
const all = [
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
    { title: "Aur kuch Bair Mujhe", link: 'https://drive.google.com/file/d/1LDi_NQMeBIMFCpx3Co0V6QrBKYuiyqad/view?usp=drivesdk' },
    { title: "O Re Piya", link: 'https://drive.google.com/file/d/1FonPvSFaCX3TiqwS_c9_ZUzH0TbUVzhh/view?usp=drivesdk' },
    { title: "Desh Rangila", link: 'https://drive.google.com/file/d/1FXpR9gDg1VNvc7kxV6Xbt4yOULW8UgyL/view?usp=drivesdk' },
    { title: "Jannat Jaha", link: 'https://drive.google.com/file/d/1LMPkeTpC_EkEPZItGKNu1iOONpJzGJTn/view?usp=drivesdk' },
    { title: "Wada Raha Sanam", link: 'https://drive.google.com/file/d/1MQMXEQw6SWCs2nB6QtnNTd_O2OcCqBwH/view?usp=drivesdk' },
    { title: "Fimi Hai Tera Mera Pyar", link: 'https://drive.google.com/file/d/1G-yl4m2Vwh2YAPYpBQFi8hXjkENrehZ6/view?usp=drivesdk' },
    { title: "Tuz se Mera Deen Dharam Tuzse Meri Duhai", link: 'https://drive.google.com/file/d/1EVUiiicQ4CT2--RGQvsD-nB08fyXRlVL/view?usp=drivesdk' },
    { title: "Lambi Judai", link: 'https://drive.google.com/file/d/1L9xSrwEivSKc82byUa1XBAZldwU-IIRw/view?usp=drivesdk' },
    { title: "Papa Kahte hai Bada Naam Krega", link: 'https://drive.google.com/file/d/1MUh3YjrU5pJ7NbpXS3n1gFaZS0XEfuf-/view?usp=drivesdk' },
    { title: "Tu Jaha Main Waha", link: 'https://drive.google.com/file/d/1EKCptXDReN_r207m6s1DxUoGdo0cTo5W/view?usp=drivesdk' },
   
    { title: "Aadmi Khilona Hai", link: 'https://drive.google.com/file/d/1MOh9slW_eCK97-zO0jo9U5N4QihliH_4/view?usp=drivesdk' },
   
    { title: "Agar Tum Mil Jao", link: 'https://drive.google.com/file/d/1KegC-BZaSM7Ukw0i4nMqeMNp5LbuKfQh/view?usp=drivesdk' },
    { title: "Tum Baarsh ke mausam me", link: 'https://drive.google.com/file/d/1JbZD_5pk1M4WsTCOWt6XdCybyaB0T-7_/view?usp=drivesdk' },
    { title: "Kahin ye tere dil se chup chup ke", link: 'https://drive.google.com/file/d/1FgMmMn3MTuNCaRvXN15N8rSWSNlngGsh/view?usp=drivesdk' },
    { title: "Dil Jisk jinda hai O tum ho", link: 'https://drive.google.com/file/d/1IRdQ73XV16Njuk3RakytGRxQEoSnAfCM/view?usp=drivesdk' },
 
    { title: "Do Pal ka khwabo ka kaarwaan", link: 'https://drive.google.com/file/d/1ERG2KGpDw3ZlxLPpNlpEEsfdSBkTV5ej/view?usp=drivesdk' },
    { title: "door ankhiyonse jaye na", link: 'https://drive.google.com/file/d/1I0MAND49KAzd67AN3f1Y5klcgnZNyXfH/view?usp=drivesdk' },
   
    { title: "Gulabi Saadi", link: 'https://drive.google.com/file/d/1JzIY1VhKq-gjaqSJAY6sPkzLNPP-3PvP/view?usp=drivesdk' },
    { title: "Ha Tu Hai Ha Tu Hai", link: 'https://drive.google.com/file/d/1LQGmZva4w5CFvIuh3ab25ATBoe4ktbwf/view?usp=drivesdk' },
    { title: "halki Halki si Barsat aa gayi", link: 'https://drive.google.com/file/d/1JdLkNbpI8ayGICvrntdQt3XkkzilfHIt/view?usp=drivesdk' },
    { title: "Hole Hole", link: 'https://drive.google.com/file/d/1EulwKPmv6HjNS_FLWAj73InyPoJROEHt/view?usp=drivesdk' },
  
    { title: "Heeriyen Dil Janiye ", link: 'https://drive.google.com/file/d/1JCG5ACkkuZH3cmlKeIOMvnKdjHGXB2Ko/view?usp=drivesdk' },
    { title: "Ye Sona Ye Sona", link: 'https://drive.google.com/file/d/1EznOkh3qnxp7gK4sk1_Yz_OX7GbFuLfE/view?usp=drivesdk' },
   
    { title: "Kaisa Ye Ishq Hai Ajab sa risk hai", link: 'https://drive.google.com/file/d/1EmrZrrDHU2gZUaQOoNt5iLW9HKDy-zM3/view?usp=drivesdk' },
  
    { title: "You Are My Sonia", link: 'https://drive.google.com/file/d/1nn9xrhCF_G519pw3a0Ir9CNnLP81Q-6W/view?usp=drivesdk' }
];

let myFavorite=[
  { title: "Jag ghumia", link: "https://drive.google.com/file/d/1GNBE80geq1_fAjfHUwyRpquHKJsERvN0/view?usp=drivesdk" },
  { title: "Zihal-e-miskin", link: "https://drive.google.com/file/d/1NAydqbYDLwqQsszBuqrhssKcMuV3oO4q/view?usp=drivesdk" },
  { title: "Jita tha jiske liye", link: "https://drive.google.com/file/d/1MPhTS-LtJSJW1ZClxdnNsrihByXdoMSz/view?usp=drivesdk" },
  { title: "Kamaria dole bhojpuri", link: "https://drive.google.com/file/d/1Jjci3NqpV9XTCgtD7OZQV7UH3dexhHnj/view?usp=drivesdk" },
  { title: "Kya hua Tera Wada", link: "https://drive.google.com/file/d/1JPbpprfUYJqlhSGIg2el9FUZrHGZzsiU/view?usp=drivesdk" },
  { title: "Meri Aashiqui", link: "https://drive.google.com/file/d/1HGjot5BLXuHvO-kaJo8xALIot1kAYwFL/view?usp=drivesdk" },
  { title: "Mirchi Divine", link: "https://drive.google.com/file/d/1LouS0sTX6_ZoZcih14mazbcvZpoASVnq/view?usp=drivesdk" },
  { title: "Param Sundari", link: "https://drive.google.com/file/d/1KHUu0IxsN7b8_1JaREvw7ycgmH-JCJUV/view?usp=drivesdk" },
  { title: "Peen Loo", link: "https://drive.google.com/file/d/1KlJ4WyrMpePrasxdEbDcm_XwBqByykCY/view?usp=drivesdk" },
  { title: "Peena Chod Denge", link: "https://drive.google.com/file/d/1Hdrq4NfqhtSEk7Nov5-oeZLPeZK9h--a/view?usp=drivesdk" },
  { title: "Dil Shambhala Ja Jara", link: "https://drive.google.com/file/d/1KeFZzrvvceYp4_0KCLtQ6SlKOXf50aqS/view?usp=drivesdk" },
  { title: "Rabba Mai to Mar Gaya vhe", link: "https://drive.google.com/file/d/1KupKZFF292fekiPNsLaWhIbAfPvqiY0W/view?usp=drivesdk" },
  { title: "Saans", link: "https://drive.google.com/file/d/1G41VdpYNwpDFll2EhYiPZfZh-ab78YT3/view?usp=drivesdk" },
  { title: "Saawan me Lag gayi aag", link: "https://drive.google.com/file/d/1LsTj4f2-HZy0JLUp1KghYzKV-rfmbVv1/view?usp=drivesdk" },
  { title: "Tere bin X sajni Re", link: "https://drive.google.com/file/d/1K8KUmtKpZjI_WP5ptjdcr4jk73NGuwfi/view?usp=drivesdk" },
  { title: "Tere Liye", link: "https://drive.google.com/file/d/1GvF-iLwdffG8kUeKQQErKu-cc-5Hbz_M/view?usp=drivesdk" },
  { title: "Tujh mein rab dikhta Hai", link: "https://drive.google.com/file/d/1H4hedryo8p6wCYNXFCYnRg45NoJgJ2sS/view?usp=drivesdk" },
  { title: "Woh Ladki Bahut Yaad Aati hai", link: "https://drive.google.com/file/d/1MmxasNaBFpk7KRz8BlQ2yc5ZDXtmeC_7/view?usp=drivesdk" },
  { title: "Zara sa", link: "https://drive.google.com/file/d/1LRGDjipaJJ_eQdPinuStpK4jYpfbl9v0/view?usp=drivesdk" },
  { title: "Urvashi", link: "https://drive.google.com/file/d/1fgPyw9aKXIXmYDCHwbbkKOx5_jqVjFR1/view?usp=drivesdk" },
  { title: "You are my sonia", link: "https://drive.google.com/file/d/1fm6qYH57QledA3QjhT_8Ffd_l5_LB-3R/view?usp=drivesdk" }
];

const bhakti=[
    {title: "Hai Katha Sangram Ki ", link :"https://drive.google.com/file/d/1qJ2H41yyp1ysqEubCbh6Cl7uGfUuVVDw/view?usp=drivesdk"},
    {title:"Namo Namo He Shankara ", link :"https://youtu.be/dx4Teh-nv3A?si=dMFBVvvenMuvWZbx"},
	{title:"Mauli Mauli", link : "https://drive.google.com/file/d/10gGEhV7a2jyXX7ohOYwYbu55szUd0p43/view?usp=drivesdk"},
	{title:"Mere Baba",link:"https://drive.google.com/file/d/10cPa_6WNM2Cc_crtE-0QWL44xIBFY62O/view?usp=drivesdk"},
	{title:"Kal Ratri Hey Kalyani",link:"https://drive.google.com/file/d/10dVpHqWf-VEoV9rNqtlUJahqtEAjEIWZ/view?usp=drivesdk"},
	{title:"Kee Jo Keshri ke laal",link:"https://drive.google.com/file/d/10m-m1sx69jsS9eeBKoeXv2dkL35UM-1n/view?usp=drivesdk"},
	{title:"Mere Shankara",link:"https://drive.google.com/file/d/10qGkE85BXM1AiCmWyGZMPlbmMeW018uw/view?usp=drivesdk"},
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
    if (currentIndex >= 0 && currentIndex < gdriveLinks.length) {
        console.log(gdriveLinks[currentIndex].link);
        const embedLink = `https://drive.google.com/file/d/${gdriveLinks[currentIndex].link.match(/\/d\/([^\/]+)\//)[1]}/preview`;
        const audioContainer = document.getElementById('audioContainer');
        audioContainer.innerHTML = `<iframe id="audioPlayer" src="${embedLink}" width="100%" height="80" frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>`;

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

function randomFunction() {
    currentIndex = parseInt((Math.random() * 100000) % gdriveLinks.length);
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

window.onload = () => {
    let username = sessionStorage.getItem("user");
    if (username) {
        document.getElementById("userName").value = username;
        setTimeout(() => {
            document.getElementById("login").click();
            play();
        }, 300);
    }
};

const audioContainer = document.getElementById("audioContainer");

function createList(index) {
    if(index==2){gdriveLinks=myFavorite;}
    else if(index==4){
        alert("If you are really wanted to create your own Playlist you can contact me through Social Media. Links are in the footer");
        return;
    }else if(index==3){
        gdriveLinks=bhakti;
    }
    else {
        gdriveLinks= all;
    }
    const list = document.getElementById("list");
    list.innerHTML="";
    let orderedList = document.createElement("ul");
    for (let i = 0; i < gdriveLinks.length; i++) {
        let currSong = document.createElement("li");
        currSong.addEventListener('click', () => {
            let prev = document.querySelector(".curSong");
            if (prev) prev.classList.remove('curSong');
            currSong.classList.add("curSong");
            playFromList(i);
        });
        currSong.innerText = gdriveLinks[i].title;
        orderedList.appendChild(currSong);
    }
    list.appendChild(orderedList);
}

function playFromList(index) {
    currentIndex = index;
    play();
}

createList();


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    setTimeout(()=>{
        darkModeToggle.checked = ture;
    },300);

    // Check for saved user preference, if any, on load of the website
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('dark-mode');
    if (savedTheme === 'true' || (!savedTheme && userPrefersDark)) {
        document.body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'false');
        }
    });
});

let ele = document.getElementById("love");
ele.addEventListener('change',(e)=>{
   createList(e.target.value);
})

