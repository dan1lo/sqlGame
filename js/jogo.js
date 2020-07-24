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
       var n = m;
       var i;
       var t;
       while(m){
        i = Math.floor(Math.random() * m--);
        t= array[m];
        array[m] = array[i];
        array[i] =t;

       } 
       i=0
       while (n != 1){
           n--;
           var local = document.getElementById("botoesRespostas");
           var button = document.createElement('button');
           button.setAttribute('type','button');
           button.setAttribute('name','btn_op'+i+'');
           button.setAttribute('value', array[i]);
           button.setAttribute('text', array[i]);
           button.setAttribute('onclick', "inserirValor('"+array[i]+"')" );
           button.textContent = array[i];
           i++;
           local.appendChild(button);

       }

       var missao = document.getElementById("missaoNumero");
       var pergunta = document.getElementById("pergunta");
       missao.innerHTML = "2";
       pergunta.innerHTML ="Segunda pergunta"; 

      
     

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


