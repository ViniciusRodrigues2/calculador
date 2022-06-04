

function receberNumeros(){
    var res = document.querySelector('.res');
    function calc(){
        var somar = document.getElementById('somar');

        function somarNumero(){
            var n1 = document.querySelector('#n1').value;
            var n2 = document.querySelector('#n2').value;
            n1 = parseFloat(n1);
            n2 = parseFloat(n2);
            if(!(isNaN(n1)) && !(isNaN(n2))){
                var soma = n1 += n2;
                res.innerHTML = `${soma}`
                clear()
                
            }
           else{
               alert('só numeros')
           }
        }
        somar.addEventListener('click',somarNumero);

        var sub = document.getElementById('sub');

        function subNumero(){
            var n1 = document.querySelector('#n1').value;
            var n2 = document.querySelector('#n2').value;
            n1 = parseFloat(n1);
            n2 = parseFloat(n2);
            if(!(isNaN(n1)) && !(isNaN(n2))){
                var sub = n1 -= n2;
                res.innerHTML = `${sub}`
                clear()
                
            }else{
               alert('só numeros')
           }
        }
        sub.addEventListener('click',subNumero);

        var multiplicar = document.getElementById('multiplicar');
        const multiplicarNumero = ()=>{
            var n1 = document.querySelector('#n1').value;
            var n2 = document.querySelector('#n2').value;
            n1 = parseFloat(n1);
            n2 = parseFloat(n2);
            if(!(isNaN(n1)) && !(isNaN(n2))){
                var multi = n1 *= n2;
                res.innerHTML = `${multi}`
                clear()
                
            }else{
               alert('só numeros')
           }
        }
        multiplicar.addEventListener('click',multiplicarNumero)
        const dividirNumero = ()=>{
            var n1 = document.querySelector('#n1').value;
            var n2 = document.querySelector('#n2').value;
            n1 = parseFloat(n1);
            n2 = parseFloat(n2);
            if(!(isNaN(n1)) && !(isNaN(n2))){
                var divi = n1 /= n2;
                res.innerHTML = `${divi}`
                clear();
                
            }else{
               alert('só numeros')
           }
        }
        dividir.addEventListener('click',dividirNumero)
    }
    calc();

    function clear(){
        var n1 = document.querySelector('#n1').value = '';
        var n2 = document.querySelector('#n2').value = '';
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
        n1.focus();
    }
}
receberNumeros()