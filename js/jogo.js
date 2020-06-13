function inserirValor(op)
{   
     var linhaAlterar = document.getElementById("codigo");
     var valorAntigo = linhaAlterar.innerHTML;
     if (valorAntigo == ''){
         linhaAlterar.innerHTML = op;
     }else {
            linhaAlterar.innerHTML = valorAntigo+' '+op;
     }
     
}

function verificarConsulta(){
    var linhaConsulta = document.getElementById("codigo");
    var consulta = linhaConsulta.innerHTML;

    var result = consulta.localeCompare("SELECT * FROM clientes ;");
    if (result == 0){
       alert("Acertou miseravi!!");
       //this.nextLevel();
       var array = ['SELECT', '*', 'FROM', 'pessoas', ';', 'oi'];
       var m = array.length;
       var i;
       var t;
       while(m){
        i = Math.floor(Math.random() * m--);
        t= array[m];
        array[m] = array[i];
        array[i] =t;

       } 


      document.getElementById('btn_op1').innerHTML = array[0];
      document.getElementById('btn_op2').innerHTML = array[1];
      document.getElementById('btn_op3').innerHTML = array[2];
      document.getElementById('btn_op4').innerHTML = array[3];
      document.getElementById('btn_op5').innerHTML = array[4];

     

        }else {
         alert("Errrrrrouuuuu");  
        }



}
function limparUltimo()
{
    var linhaAlterar = document.getElementById("codigo");
    var valorAntigo = linhaAlterar.innerHTML;
    var arrayString = valorAntigo.split(" ");
    var valorNovo= "";
    var tamanho = arrayString.length;
    tamanho = tamanho -1;
    for (var i=0; i < tamanho; i++){

       if (i==0){
         //  alert("entrei");
        valorNovo = arrayString[i];
       } else {
        valorNovo = valorNovo+" "+arrayString[i];
       }
        
    }
    linhaAlterar.innerHTML = valorNovo;

}


function nextLevel(){
    $.getJSON( "../sqlGame/app/model/ajaxQuestao.php", function( data ) {
  
    
            $.each(data, function( key, val ) {
                items.push( "<li name='" + key + "'>" + val + "</li>" );
            });
    
            $('#minha_lista').html(items.join(''));
       
    

    });

}


