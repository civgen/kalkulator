
// luas segitiga
function triangle_area() {
    const a = parseFloat(document.getElementById("a").value);
    const t = parseFloat(document.getElementById("t").value);
    
    const result = 0.5 * a * t;
    
    document.getElementById("result-triangle-area").textContent = result;
    ;
    return false;
    }
    
function reset1(){
    document.getElementById("triangle_area").reset()
    }
// keliling segitiga
function triangle_around() {
const s1 = parseFloat(document.getElementById("s1").value);
const s2 = parseFloat(document.getElementById("s2").value);
const s3 = parseFloat(document.getElementById("s3").value);

const result = s1 + s2 + s3;

document.getElementById("result-triangle-around").textContent = result;
;
return false;
}

function reset2(){
    document.getElementById("triangle_around").reset()
}

// luas jajargenjang
function parallel_area() {
    const ap = parseFloat(document.getElementById("ap").value);
    const tp = parseFloat(document.getElementById("tp").value);
    
    const result = ap * tp;
    
    document.getElementById("result-parallel-area").textContent = result;
    ;
    return false;
    }
    
    function reset3(){
        document.getElementById("parallel_area").reset()
    }

// keliling jajargenjang
function parallel_around() {
    const ap1 = parseFloat(document.getElementById("ap1").value);
    const bp = parseFloat(document.getElementById("bp").value);
    
    const result = 2 * (ap1 + bp);
    
    document.getElementById("result-parallel-around").textContent = result;
    ;
    return false;
    }
    
    function reset4(){
        document.getElementById("parallel_around").reset()
    }

    // VOlume Tabung
function tube_volume() {
    const r = parseFloat(document.getElementById("r").value);
    const tb = parseFloat(document.getElementById("tb").value);
    
    const result = 3.14 * r * r * tb;
    
    document.getElementById("result-tube-volume").textContent = result;
    ;
    return false;
    }
    
    function reset5(){
        document.getElementById("tube_volume").reset()
    }