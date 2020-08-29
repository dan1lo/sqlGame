

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
            for (let i = arrayResposta.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arrayResposta[i], arrayResposta[j]] = [arrayResposta[j], arrayResposta[i]];
            }
     
            //preciso refatorar para criar os botões de respostas de acordo com a consulta e nao fixo   
     
           document.getElementById('btn_op1').innerHTML = arrayResposta[0];
           document.getElementById('btn_op2').innerHTML = arrayResposta[1];
           document.getElementById('btn_op3').innerHTML = arrayResposta[2];
           document.getElementById('btn_op4').innerHTML = arrayResposta[3];
           document.getElementById('btn_op5').innerHTML = arrayResposta[4];
           document.getElementById('btn_op6').innerHTML = arrayResposta[5];
     
           

           });
    
        
       
    

    });

}


