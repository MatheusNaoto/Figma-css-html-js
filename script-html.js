function tochange(){
    var bin = document.getElementById('bin_inp').value  
    var str_bin = String(bin)//String
    let result = str_bin.match(/[2-9]/g)
    if (result !=null){
        window.alert('Esse número não é binário')
        document.getElementById('bin_inp').value = null
    }else{
        var l_bin = str_bin.length //number
        var i_bin = l_bin - 1 //number 
        let res = 0 
        var x = typeof z
        for (let i = 0; i <= i_bin; i++) {
            res += (2**i)*str_bin[i_bin-i] // nn_ é string / bin é object 
        document.getElementById('dec_inp').value = res
        }
    }
        
}
function tochange1(){
    var deci = document.getElementById('dec_inp').value
    var decim = Number(deci)
    result = ''
    
    while (decim/2 != 0) {
        var Resto = decim%2
        var Resto_string =  String(Resto)
        decim = Math.floor(decim/2)
        result = Resto_string.concat(result)
    }
    resultado = Number(result)
    document.getElementById('bin_inp').value = resultado
}
