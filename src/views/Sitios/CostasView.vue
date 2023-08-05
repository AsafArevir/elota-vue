<template>
    <!-- Inicia carrusel de imagenes -->
    <header>
        <div class="contenedorHeaderVideo mb-5">
            <video autoplay muted loop>
                <source src="../../assets/img/videos/videoPlaya.mp4" type="video/mp4">
                <!-- También puedes agregar fuentes en otros formatos para mayor compatibilidad -->
                <!-- <source src="../../assets/videos/nombre_del_video.webm" type="video/webm"> -->
                <!-- <source src="../../assets/videos/nombre_del_video.ogv" type="video/ogg"> -->
                Tu navegador no soporta el elemento video.
            </video>
            <h1>Playas</h1>
        </div>
    </header>
    <!-- Finaliza carrusel de imagenes -->

    <main>
        <section class="sectionDescripcion">
            <h2 class="text-center mb-4">Campamento Tortuguero</h2>
            <div class="container text-center contenedorDescripcion mb-4">
                <div class="row">
                    <div class="col contenedorTexto">
                        <p>El campamento Tortuguero de playa Ceuta cuenta con un museo de la tortuga donde podemos observar
                            réplicas de distintas especies.</p>
                    </div>
                    <div class="col contenedorImagen wow fadeInLeftBig ">
                        <img src="../../assets/img/imgElota/tortuguero1.jpg" alt="">
                    </div>
                </div>
            </div>

        </section>

        <section class="sectionDescripcion mb-4">
            <h2 class="text-center mb-4">Playa Ceuta</h2>
            <div class="container text-center contenedorDescripcion mb-4">
                <div class="row">
                    <div class="col contenedorImagen wow fadeInRight ">
                        <img src="../../assets/img/imgElota/playaCeuta1.png" alt="">
                    </div>
                    <div class="col contenedorTexto">
                        <p>La playa cuenta con un malecón de 9 km para recorrer, también cuenta con empresas de alojamiento
                            y establecimientos de alimentos y bebidas.</p>
                        <p>Dado al huracán “Kay” el 9 de sep. del 2022 que hubo en la región la infraestructura del malecón
                            colapsó y se dañó la estructura turística. </p>
                    </div>
                </div>
                <div class="contenedorTexto mb-5">
                    <h2 class="mb-4">Actividades</h2>
                    <p>Algunas de las actividades que se pueden realizar en la playa es el avistamiento de aves y como
                        balneario, así como también compra y venta de productos del mar, así como también caminatas
                        deportivas y ciclista, observación de bioluminiscencia (febrero y marzo). </p>
                </div>
                <div class="contenedorVideo wow fadeInRight d-flex justify-content-center">
                    <div class="embed-responsive embed-responsive-16by9">
                        <video class="embed-responsive-item" src="../../assets/img/videos/videoPlaya3.mp4" autoplay loop
                            muted>
                            Tu navegador no admite el elemento de video.
                        </video>
                    </div>
                </div>

            </div>


            <!-- Inicia 2da sección de 2 columnas de info y imagenes -->
            <!-- Termina 2da sección de 2 columnas de info y imagenes -->

            <!-- Inicia 3ra section de descripcion -->
        </section>
        <!-- Inicia 4ta section  -->

        <section class="mt-4">
            <h2 class="text-center mb-3">Galeria</h2>
            <div id="carouselExampleCaptions" class="carousel slide mb-5">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../../assets/img/imgSitios/playas/playa1.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/imgSitios/playas/playa2.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/imgSitios/playas/playa3.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/imgSitios/playas/playa4.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fourth slide label</h5>
                            <p>Some representative placeholder content for the slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="../../assets/img/imgSitios/playas/playa5.jpeg" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Fifth slide label</h5>
                            <p>Some representative placeholder content for the slide.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <!-- Termina 4ta section  -->
        <section class="mt-5 textoJustificado mb-5">
            <h3 class="text-center">Hoteles</h3>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-md-3 mt-2">
                        <h2 class="text-center">Hotel Playa Ceuta</h2>
                        <p>El hotel playa Ceuta cuenta con 7 habitaciones equipadas con camas dobles, cuenta con área de
                            alberca y comedor. </p>
                    </div>
                    <div class="col-md-3">
                        <img src="../../assets/img/imgHoteles/hotelplayaCeuta.jpg" alt="Imagen 1" class="imgDatos">
                    </div>
                    <div class="col-md-3 mt-2">
                        <h2 class="text-center">Hotel Playa Esperanza</h2>
                        <p>El Hotel Playa Esperanza cuenta con un total de 13 habitaciones, las cuales cuentan con dos camas
                            individuales, comedor, cocineta, baño y closset.
                            Cuenta con área grande para eventos al aire libre.
                        </p>
                    </div>
                    <div class="col-md-3">
                        <img src="../../assets/img/imgHoteles/hotelplayaEsperanza.jpg" alt="Imagen 2" class=" imgDatos">
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-3 mt-2">
                        <h2 class="text-center">Motel campestre celestino </h2>
                        <p>El hotel se encuentra en la entrada de la localidad de Celestino, excelente lugar para descansar.
                            El hotel-motel no cuenta con restaurante, sin embargo, puedes ingresar alimentos y bebidas al
                            lugar. </p>
                    </div>
                    <div class="col-md-3 ">
                        <img src="../../assets/img/imgHoteles/motelcampestreCelestino.jpg" alt="Imagen 1" class="imgDatos">
                    </div>
                    <div class="col-md-3 mt-2">
                        <h2 class="text-center">Hotel Villas Tortuga</h2>
                        <p>El hotel villas tortugas de celestino Gazca es una zona de relajamiento, te ofrece servicios de
                            terapia y masajes relajante, cuenta con un restaurante de platillos de la región y snacks,
                            alberca y distintas actividades para realizar en el destino (caminatas en la playa, voleibol,
                            surf…) además puedes vivir la experiencia de formar parte de la liberación de tortuga golfina en
                            la temporada de septiembre- octubre. </p>
                    </div>
                    <div class="col-md-3">
                        <img src="../../assets/img/imgHoteles/hotelvillaTortuga.jpg" alt="Imagen 2" class=" imgDatos">
                    </div>
                </div>
            </div>

        </section>
        <!-- Termina 7ma sección de embarcaciones-->
        <!-- Inicia 5ta sección de flora y fauna -->
        
  <div class="mb-4 text-center">
    <img :src="mapUrl" alt="Google Map">
  </div>


    </main>
</template>

<script>
export default {
    data() {
      return {
        mapUrl: ""
      };
    },
    mounted() {
      this.getMapUrl();
    },
    methods: {
      getMapUrl() {
        // Configurar los parámetros de acuerdo a tus necesidades
        const center = "New York, NY";
        const zoom = 14;
        const size = "600x400";
        const mapType = "roadmap";
        const apiKey = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";
  
        // Generar la URL del mapa estático
        const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
        const mapUrl = `${baseUrl}?center=${center}&zoom=${zoom}&size=${size}&maptype=${mapType}&key=${apiKey}`;
  
        // Asignar la URL del mapa estático a la propiedad src del elemento img
        this.mapUrl = mapUrl;
      }
    }
  };

/*
<div>
            <GoogleMap :api-key="apikey" style="width: 100%; heigth: 500px" :center="{lat: lat, lng: lng}" :zoom="15">
                <Marker :options="{position: {lat: lat, lng: lng}, label}" />
            </GoogleMap>
        </div>
import { GoogleMap, Marker } from 'vue3-google-map';
export default {
    components:{
        GoogleMap,
        Marker
    },
    data(){
        return{
            label: "Ubication",
            apikey:"AIzaSyAYsy9eed29DnJBUh5FpD6dS3kNSkd5HcU",
            lat: null,
            lng: null,
        }
    },
    created() {
        this.$getLocation()
            .then((coordinates) => {
                this.lat = coordinates.lat;
                this.lng = coordinates.lng;
            })
            .catch((error) => {
                console.log(error);
            });
    }
}*/

</script>

<style>
#map {
  height: 500px;
  width: 100%;
}

header {
    position: relative;
    text-align: center;
}

.contenedorHeaderVideo {
    position: relative;
    width: 100%;
    height: 500px;
    overflow: hidden;
}

.contenedorHeaderVideo video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.contenedorHeaderVideo h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 3rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.row {
    display: flex;
    align-items: center;
    /* Centra verticalmente los elementos dentro de la fila */
}

.contenedorTexto {
    flex: 1;
    /* El contenedor de texto tomará el espacio restante en la fila */
}

.contenedorImagen img {
    max-width: 100%;
    /* La imagen se ajustará al 100% del ancho del contenedor */
    height: auto;
    /* La altura se ajustará automáticamente manteniendo la relación de aspecto */
}

.contenedorVideo {
    max-width: 100vw; /* El 100vw asegura que el contenedor ocupe todo el ancho de la pantalla */
    height: auto;
    overflow: hidden; /* Ocultar cualquier contenido adicional que pueda sobresalir del contenedor */
}
</style>