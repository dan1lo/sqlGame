

var resposta = "SELECT * FROM clientes ;";

var arrayQuestão = [];
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

    var result = consulta.localeCompare(resposta);
    if (result == 0){
       alert("Acertou miseravi!!");
     /*  var array = ['SELECT', '*', 'FROM', 'pessoas', ';', 'oi'];
       var m = array.length;
       var i;
       var t;
       while(m){
        i = Math.floor(Math.random() * m--);
        t= array[m];
        array[m] = array[i];
        array[i] =t;
       } 

 */
    
     /* document.getElementById('btn_op2').innerHTML = array[1];
      document.getElementById('btn_op3').innerHTML = array[2];
      document.getElementById('btn_op4').innerHTML = array[3];
      document.getElementById('btn_op5').innerHTML = array[4];
     */
     
      this.nextLevel();
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
        valorNovo = arrayString[i];
       } else {
        valorNovo = valorNovo+" "+arrayString[i];
       }
        
    }
    linhaAlterar.innerHTML = valorNovo;

}


function nextLevel(){
    $.getJSON( "../sqlGame/app/model/ajaxQuestao.php", function( data ) {
        //var teste = JSON.stringify(data);
        //alert(teste);
        $.each(data,function(idx,obj){
            var linhaMissao = document.getElementById("missao");
            
            linhaMissao.innerHTML = "Missao "+ JSON.stringify(obj.nivel);
            var linhaPergunta = document.getElementById("pergunta");
            linhaPergunta.innerHTML = JSON.stringify(obj.pergunta);
            
           this.resposta = JSON.stringify(obj.resposta); 
            var arrayResposta =[];
            arrayResposta = resposta.split(" ");
            arrayResposta.push(JSON.stringify(obj.errada) );
            alert(arrayResposta);
            var array = [];
            var m = arrayResposta.length;
            var i;
            var t;
            while(m){
             i = Math.floor(Math.random() * m--);
             t = arrayResposta[m];
             array[i] =t;
     
            } 
     
     
           document.getElementById('btn_op1').innerHTML = array[0];
           document.getElementById('btn_op2').innerHTML = array[1];
           document.getElementById('btn_op3').innerHTML = array[2];
           document.getElementById('btn_op4').innerHTML = array[3];
           document.getElementById('btn_op5').innerHTML = array[4];
           document.getElementById('btn_op6').innerHTML = array[5];
     
           

           });
    
        
       
    

    });

}


