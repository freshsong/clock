
nt()

setInterval(nt, 1000);

function nt(){
    const date = new Date();

    const hour = date.getHours()%12;
    const min = date.getMinutes();
    const sec =date.getSeconds();

    const hDeg = hour*(360/12) + min*(360/12/60);
    const mDeg = min*(360/60);
    const sDeg = sec*(360/60);

    const hourElemnet = document.querySelector('#hr');
    const minElemnet = document.querySelector('#mn');
    const secElemnet = document.querySelector('#sc');

    hourElemnet.style.transform = `rotate(${hDeg}deg)`;
    minElemnet.style.transform = `rotate(${mDeg}deg)`;
    secElemnet.style.transform = `rotate(${sDeg}deg)`;
}

let str = document.getElementById('change');
function btn(n){

    if(n==0){
        str.href=("clock"+n+".css"); // href="css/clock0.css"
    }
    if(n==1){
        str.href=("clock"+n+".css");
    }
}



/*


setInterval(() => {
    //현재시간 가져오기
    const now = new Date();

    //시간을 단위로 추출
    const h = now.getHours(); //시간(0-23)
    const m = now.getMinutes(); //분(0-59)
    const s = now.getSeconds(); //초(0-59)

    //객체 선택
    const hh = document.getElementById('h');
    const mm = document.getElementById('m');
    const ss = document.getElementById('s');

    //각도
    if(hour >= 12){
        const degH = (hour - 12) * 30 + m * (360 / 12 /60) //분을 고려해 시침이 한번에 움직이지 않게 하기 위함
        const degM = (min * 6)
        const degS = (sec * 6)

        hh.style.transform = `rotate(${degH}deg)`;
        mm.style.transform = `rotate(${degM}deg)`;
        ss.style.transform = `rotate(${degS}deg)`;
    }else{
        const degH = (hour - 12) * 30 + m * (360 / 12 /60) //0.5 곱해 60분기준 30도 추가 
        const degM = (min * 6)
        const degS = (sec * 6)

        hh.style.transform = `rotate(${degH}deg)`;
        mm.style.transform = `rotate(${degM}deg)`;
        ss.style.transform = `rotate(${degS}deg)`;
    }, 1000)





    //시계바늘 각도 반영

    //시침
    const degH = h * (360 / 12) + m * (360 / 12 / 60);
    
    //분침
    const degM = m * (360 / 60);
    
    //초침
    const degS = s * (360 / 60);

    const e
   
    
}

//javascript

  */ 
  