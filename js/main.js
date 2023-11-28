$(document).ready(function(){
      $('#telefone').mask('(00) 00000-0000')

      $('form').validate({
            rules:{
                  nome:{
                        required: true
                  },
                  email:{
                        required: true
                  },
                  telefone:{
                        required: false
                  },
                  mensagem:{
                        required: true
                  }
            },
            invalidHandler: function(evento,validador){
                  let camposInvalidos= validador.numberOfInvalids();
                  if(camposInvalidos){
                        alert(`Existem ${camposInvalidos} campos invalidos!`)
                  }
            }
      })
})