<html>
   <link rel="stylesheet" type="text/css" href="css/cssTela.css">
   <link rel="stylesheet" type="text/css" href="css/estrutura.css">
   <script type="text/javascript" src="js/jogo.js"></script>
   <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  
<body>
    <div class="tudo">
        <div class="topo">
            <a href="#1">Missão atual </a><a href="#1">Comandos SQL </a> <a href="#1">Resultados do SQL</a> <a href="#1">Guia SQL</a>

        </div>
        <div class ="conteudo"> 
            <div class="noise"></div>
            <div class="overlay"></div>
            <div class="terminal">
              <h1> <span class="errorcode">Missão 1</span></h1>
            <p class="output">Deseja descobrir todos os clientes do banco
              </p>
            <div class="output" id="codigo" style="float: left;" ></div><div style="float: right;"><img src="img/quebra.gif" width=10 height=40></div>
            </br>
              <button  onclick= "inserirValor('SELECT')" id="btn_op1">SELECT</button>
              <button onclick= "inserirValor('*')" id="btn_op2">*</button>
              <button onclick= "inserirValor('FROM')" id="btn_op3">FROM</button>
              <button onclick= "inserirValor('clientes')" id="btn_op4">clientes</button>
              <button onclick= "inserirValor(';')" id="btn_op5">;</button>
            </br>
            <button onclick= "verificarConsulta()">Verificar</button> <button onclick= "limparUltimo()">Apagar ultimo comando</button> 
            </div> 
             
                
        </div>
            
        </div>
        <div class = "rodape"><a href="#1">Como jogar? </a><a href="#1">Quem sou eu?</a> <a href="#1">Informações sobre o site</a></div>
    </div>

    
  
</body>


</html>