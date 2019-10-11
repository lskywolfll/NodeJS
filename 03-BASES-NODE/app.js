let base = 3;

function multiplicacion(base, limite) {
    
    for(let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}`);
    }
}

multiplicacion(base, 10);