<template>
  <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
    <div class="carousel-inner carouselTamaño">
      <div class="carousel-item active ">
        <img src="../assets/img/imgInicio/playa6.jpeg" class="d-block w-100 " alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/imgInicio/playa10.jpeg" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/imgInicio/principal.jpeg" class="d-block w-100" alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- Finaliza carrusel de imagenes -->

  <div class="container text-center mt-4">
    <h1>La Cruz del Perdón</h1>
    <div id="miContenedor" class="mt-4">
      <a-scene embedded>

        <a-gltf-model src="monumento.gltf"></a-gltf-model>

      </a-scene>
    </div>
  </div>

  <section>
    <div class="tituloInicio">
      <h1>Elota</h1>
    </div>

    <div class="contenedorCards">
      <div class="cards">
        <div class="cardsImgs">
          <div class="cardsTitulo">
            <h2>MUSEOS</h2>
          </div>
        </div>
        <div class="cardsBack">
          <div class="cardsLink">
            <a href="#">Ver más</a>

          </div>
        </div>
      </div>

      <div class="cards">
        <div class="cardsImgs1">
          <div class="cardsTitulo">
            <h2>FOLKLORE</h2>
          </div>
        </div>
        <div class="cardsBack">
          <div class="cardsLink">
            <a href="#">Ver más</a>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="cardsImgs2">
          <div class="cardsTitulo">
            <h2>GRUPOS ÉTNICOS</h2>
          </div>
        </div>
        <div class="cardsBack">
          <div class="cardsLink">
            <a href="#">Ver más</a>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="cardsImgs3">
          <div class="cardsTitulo">
            <h2>LUGARES HISTORICOS</h2>
          </div>
        </div>
        <div class="cardsBack">
          <div class="cardsLink">
            <a href="#">Ver más</a>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="cardsImgs4">
          <div class="cardsTitulo">
            <h2>COSTAS</h2>
          </div>
        </div>
        <div class="cardsBack">
          <div class="cardsLink">
            <a href="#">Ver más</a>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="cardsImgs5">
          <div class="cardsTitulo">
            <h2>OBRAS DE ARTE</h2>
          </div>
        </div>
        <div class="cardsBack">
          <div class="cardsLink">
            <a href="#">Ver más</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
// @ is an alias to /src
</script>
