var btnFichas = document.querySelectorAll("#tablero button")
var tablero = [];
var turno = 0;
var jugar = true;
var cambio=true;
var radios=document.querySelectorAll("input")
     radios.forEach( r=> {
        r.addEventListener('click',(e)=>{
                 console.log(e.target.value)
                 if(e.target.value==='cruz'){
                    cambio=true;
                 }else if(e.target.value==='circulo'){
                    cambio=false
                 }
        })
     });

btnFichas.forEach((btnF, index) => {
    btnF.addEventListener('click', (e) => {
        turno++
        console.log(e.target.id)
        var color;
        if(cambio){
            color = turno % 2 ? btnF.innerHTML = '<img width="100%" height="100%" src="https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png">' : btnF.innerHTML = '<img width="100%" height="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU">'
         
        }else if(!cambio){
            color = turno % 2 ? btnF.innerHTML = '<img width="100%" height="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU">':btnF.innerHTML='<img width="100%" height="100%" src="https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png">'
        }
        
        btnF.style.backgroundColor = color
        btnF.setAttribute('disabled',true)
        tablero[index] = color;
        if (tablero[0] === tablero[1] && tablero[0] === tablero[2] && tablero[0]) {

            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()

            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }


        } else if (tablero[3] === tablero[4] && tablero[3] === tablero[5] && tablero[3]) {
            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()

            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }

        } else if (tablero[6] === tablero[7] && tablero[6] === tablero[8] && tablero[6]) {
            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()

            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }
        } else if (tablero[0] === tablero[3] && tablero[0] === tablero[6] && tablero[0]) {
            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()

            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }
        } else if (tablero[1] === tablero[4] && tablero[1] === tablero[7] && tablero[1]) {
            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()

            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }
        } else if (tablero[2] === tablero[5] && tablero[2] === tablero[8] && tablero[2]) {
            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()

            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }
        } else if (tablero[0] === tablero[4] && tablero[0] === tablero[8] && tablero[0]) {
            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()

            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }
        } else if (tablero[2] === tablero[4] && tablero[2] === tablero[6] && tablero[2]) {
            var ganador = btnF.querySelector("img").getAttribute('src')
            console.log(ganador)
            if (ganador === "https://e7.pngegg.com/pngimages/699/67/png-clipart-computer-icons-red-x-chin-miscellaneous-angle.png") {
                vaciarTablero()
                ganoRojo()
            } else if (ganador === "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDIHGNE_udVWuDAuMq98S3sfwBkibCkM109fmtqzMT9XYdZX1LK-BNGrxuKnQ7t9_hIYA&usqp=CAU") {
                vaciarTablero()
                ganoAzul()
            }
        }
    })
});



const ganoRojo = () => {
    setTimeout(() => {
        Swal.fire({
            text: `Ha ganado CRUZ!!!`,
            width: '200px',
            background: 'red',
            color: 'white',
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false
        })
    }, 1000);
}

const ganoAzul = () => {
    setTimeout(() => {
        Swal.fire({
            text: `Ha ganado CIRCULO!!!`,
            width: '200px',
            background: 'blue',
            color: 'white',
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false
        })
    }, 1000);
}

const vaciarTablero=()=>{
    setTimeout(() => {
        var casilleros=document.querySelectorAll("#tablero button")

        casilleros.forEach(c => {
            c.innerHTML=""
            c.removeAttribute('disabled')
        
        });
    
      document.querySelector("#cruz").checked=false
      document.querySelector("#circulo").checked=false
        
       return (turno=0,color="",tablero.length=0,cambio=true)
    }, 2000);
    
}
const vaciarTablero2=()=>{
   
        var casilleros=document.querySelectorAll("#tablero button")

        casilleros.forEach(c => {
            c.innerHTML=""
            c.removeAttribute('disabled')
          
        });
        document.querySelector("#cruz").checked=false
        document.querySelector("#circulo").checked=false
        
       return (turno=0,color="",tablero.length=0,cambio=true)
   
    
}