var n = 10;
var videoLink = [
    ["https://www.youtube.com/embed/fr-5MKeRfVU", "https://www.youtube.com/embed/lLBGxM4LnMA", "https://www.youtube.com/embed/YzWEJPcHilE"],
    ["https://www.youtube.com/embed/OXp0ERVdyy4", "https://www.youtube.com/embed/SlWeQqJfOfs", "https://www.youtube.com/embed/qCcQGPgwnt8"],
    ["https://www.youtube.com/embed/UqlUZFZgczk", "https://www.youtube.com/embed/MxrdZrt6uQM", "https://www.youtube.com/embed/_is-VfJW44Y"],
    ["https://www.youtube.com/embed/l264dpfJv70", "https://www.youtube.com/embed/SmxvbUXT4_Q", "https://www.youtube.com/embed/KgMVNg-1gU8"],
    ["https://www.youtube.com/embed/PjGcOP-TQPE", "https://www.youtube.com/embed/SKCEpgEucFM", "https://www.youtube.com/embed/s2pkdUiCRTM"],
    ["https://www.youtube.com/embed/J5r9Y79APc8", "https://www.youtube.com/embed/hJuO1AUqLUc", "https://www.youtube.com/embed/zyulZbZCyzo"],
    ["https://www.youtube.com/embed/8UNMmdc0Lzw", "https://www.youtube.com/embed/bLs3U6XRxDk", "https://www.youtube.com/embed/aFfX3DVv6L4"],
    ["https://www.youtube.com/embed/Z_9WKzbQdyw", "https://www.youtube.com/embed/Kymv9On2-VA", "https://www.youtube.com/embed/IGFmpppz3dE"],
    ["https://www.youtube.com/embed/NqSfpsJn8M8", "https://www.youtube.com/embed/CbCT5TNCDDg", "https://www.youtube.com/embed/9FWYdsOtoIs"],
    ["https://www.youtube.com/embed/8MUJl1kGPwU", "https://www.youtube.com/embed/l1x14PamFOc", "https://www.youtube.com/embed/7M5wR2lB2c8"]
];

function explanation(name) {
    document.getElementById("muscleName").innerHTML = name;
    n = name;
    document.getElementById("ytVideo").setAttribute("src", videoLink[n][0]);
    document.getElementById("bookmarkTarget").value = videoLink[n][0];

    if (name == 0) {
        document.getElementById("muscleName").innerHTML = "어깨";
        document.getElementById("muscleExp").innerHTML = "어깨의 근육에는 삼각근이 있으며 측면 삼각근, 후면 삼각근, 전면 삼각근 등으로 나눌 수 있다. 어깨의 근육은 근육량이 많지 않고 근비대가 어려워 저중량으로 고반복 세트를 진행하는 것을 권장한다.";
    }
    else if (name == 1) {
        document.getElementById("muscleName").innerHTML = "승모근";
        document.getElementById("muscleExp").innerHTML = "승모근은 등에 있는 근육 중 광배근, 척추기립근과 함께 대표적인 근육 중에 하나이며 면적이 매우 넓어 상부, 중부와 하부로 구성되어 있다. 넓은 프레임을 위해 반드시 단련해야할 부위이다.";
    }
    else if (name == 2) {
        document.getElementById("muscleName").innerHTML = "가슴";
        document.getElementById("muscleExp").innerHTML = "가슴 근육은 크게 대흉근, 소흉근 등으로 구성되어 있으며, 팔을 안쪽으로 모으는 기능을 하며, 무언가를 밀거나 던지거나 안으로 모아서 압축시킬 때, 어깨와 함께 큰 역할을 한다.";
    }
    else if (name == 3) {
        document.getElementById("muscleName").innerHTML = "광배근";
        document.getElementById("muscleExp").innerHTML = "우리 몸에서 가장 큰 세가지 근육 중 하나이며 기본적으로 광배근은 팔을 당기는 가장 강한 힘을 낸다. 매달려 올라가거나 무거운 물건을 들어올리거나 당기는 경우에는 광배근의 역할이 크다. 인체를 당겨내는 만큼, 팔과 연관된 근육 중에서는 가장 강하다.";
    }
    else if (name == 4) {
        document.getElementById("muscleName").innerHTML = "복근";
        document.getElementById("muscleExp").innerHTML = "복근은 복직근, 외복사근, 내복사근, 복횡근으로 구성된다. 복근은 매우 얇고 넓은 근육이라서, 웨이트 트레이닝을 해도 다른 대근육들과는 달리 근성장을 시키기가 어려운 부위에 속한다.";
    }
    else if (name == 5) {
        document.getElementById("muscleName").innerHTML = "코어";
        document.getElementById("muscleExp").innerHTML = "코어 근육은 보통 허리와 배를 합쳐서 부르며 말 그대로 중심 근육이다. 직립보행을 하게 된 인간의 중요한 힘은 척추기립근의 힘이기에 이곳의 근육을 말하기도 한다. 인체의 가장 중요한 근육 부위, 다른 근육군의 강화보다 이곳이 기초 중의 기초이며 또 잘 단련해야 하는 부위이다. ";
    }
    else if (name == 6) {
        document.getElementById("muscleName").innerHTML = "허벅지";
        document.getElementById("muscleExp").innerHTML = "허벅지 근육은 신체에서 가장 많은 비율의 근육이 분포하고 있으며 일반적으로 인간의 체중의 두배를 지탱할 수 있다. 근육이 큰만큼 칼로리 소모도 크므로 다이어트 운동시 하체 근력운동이 효과적이다.";
    }
    else if (name == 7) {
        document.getElementById("muscleName").innerHTML = "엉덩이";
        document.getElementById("muscleExp").innerHTML = "엉덩이 근육은 크게 대둔근, 중둔근, 소둔근 등으로 구성되며 상반신과 하반신을 연결하고 상반신(허리,척추)을 지탱하고 몸의 균형을 잡아주며 스포츠 퍼포먼스적인 측면에서 매우 중요한 역할을 한다.";
    }
    else if (name == 8) {
        document.getElementById("muscleName").innerHTML = "팔";
        document.getElementById("muscleExp").innerHTML = "팔 근육은 이두근, 삼두근, 전완근 등으로 구성되며 팔꿈치부터 어꺠까지를 상박, 팔꿈치부터 손목까지를 하박이라고 부른다. 다양한 운동에 개입되는 근육으로 다른 부위 근육운동을 위해 중요한 역할을 한다.";
    }
    else if (name == 9) {
        document.getElementById("muscleName").innerHTML = "종아리";
        document.getElementById("muscleExp").innerHTML = "종아리 근육은 운동능력에 매우 중요한 역할을 한다. 종아리 근육은 선천적인 요소가 많이 있지만 꾸준한 운동을 통해 성장이 가능한 근육이다.";
    }
}

function videoSelect(index) {
    document.getElementById("ytVideo").setAttribute("src", videoLink[n][index]);
    document.getElementById("bookmarkTarget").value = videoLink[n][index];
}

function rotate() {
    var img = document.getElementById("body");
    if (img.getAttribute("src") == "./front.jpg") {
        img.setAttribute("src", "./back.jpg");
        
        // 후면 버튼 로케이션 설정
        document.getElementById("nameIndex0").innerHTML = "승모";
        document.getElementById("infoIndex0").style.left = '350px';
        document.getElementById("infoIndex0").style.top = '110px';
        document.getElementById("infoIndex0").setAttribute("onclick", "explanation(1)")

        document.getElementById("nameIndex1").innerHTML = "광배";
        document.getElementById("infoIndex1").style.left = '370px';
        document.getElementById("infoIndex1").style.top = '200px';
        document.getElementById("infoIndex1").setAttribute("onclick", "explanation(3)");

        document.getElementById("nameIndex2").innerHTML = "코어";
        document.getElementById("infoIndex2").style.left = '330px';
        document.getElementById("infoIndex2").style.top = '250px';
        document.getElementById("infoIndex2").setAttribute("onclick", "explanation(5)");

        document.getElementById("nameIndex3").innerHTML = "엉덩이";
        document.getElementById("infoIndex3").style.left = '355px';
        document.getElementById("infoIndex3").style.top = '350px';
        document.getElementById("infoIndex3").setAttribute("onclick", "explanation(7)");

        document.getElementById("nameIndex4").innerHTML = "종아리";
        document.getElementById("infoIndex4").style.left = '360px';
        document.getElementById("infoIndex4").style.top = '550px';
        document.getElementById("infoIndex4").setAttribute("onclick", "explanation(9)");
    }
    
    else {
        img.setAttribute("src", "./front.jpg");
        
        // 전면 버튼 로케이션 설정
        document.getElementById("nameIndex0").innerHTML = "어깨";
        document.getElementById("infoIndex0").style.left = "400px";
        document.getElementById("infoIndex0").style.top = "130px";
        document.getElementById("infoIndex0").setAttribute("onclick", "explanation(0)")

        document.getElementById("nameIndex1").innerHTML = "가슴";
        document.getElementById("infoIndex1").style.left = "350px";
        document.getElementById("infoIndex1").style.top = "180px";
        document.getElementById("infoIndex1").setAttribute("onclick", "explanation(2)");

        document.getElementById("nameIndex2").innerHTML = "복근";
        document.getElementById("infoIndex2").style.left = "330px";
        document.getElementById("infoIndex2").style.top = "250px";
        document.getElementById("infoIndex2").setAttribute("onclick", "explanation(4)");

        document.getElementById("nameIndex3").innerHTML = "허벅지";
        document.getElementById("infoIndex3").style.left = "355px";
        document.getElementById("infoIndex3").style.top = "400px";
        document.getElementById("infoIndex3").setAttribute("onclick", "explanation(6)");

        document.getElementById("nameIndex4").innerHTML = "팔";
        document.getElementById("infoIndex4").style.left = "400px";
        document.getElementById("infoIndex4").style.top = "220px";
        document.getElementById("infoIndex4").setAttribute("onclick", "explanation(8)");
    }
}