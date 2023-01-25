var btns = document.querySelectorAll('.listaDeUnidades-slider-item');

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    btns.forEach(function(btnRemoveClass) {
      btnRemoveClass.classList.remove('listaDeUnidades-slider-item--ativo')
    })

    this.classList.add('listaDeUnidades-slider-item--ativo')
  })
})