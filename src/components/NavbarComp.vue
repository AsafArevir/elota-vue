<template>
    <nav class="navbar navbar-expand-lg navBar">
        <div class="container-fluid">
            <router-link to="/" class="navbar-brand"><img class="navLogo" src="../assets/img/logo.png"
                    alt="" />
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                <ul class="navbar-nav navColorLetras">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sitios naturales
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><router-link to="/mountain" class="dropdown-item">Montañas</router-link></li>
                            <li><router-link to="/planicies" class="dropdown-item">Planicies</router-link></li>
                            <li><router-link to="/costas" class="dropdown-item">Playas</router-link></li>
                            <li><router-link to="/lagos" class="dropdown-item">Lagos, Lagunas y Esteros</router-link></li>
                            <li><router-link to="/rios" class="dropdown-item">Rios</router-link></li>
                            <li><router-link to="/cascadas" class="dropdown-item">Caidas de agua</router-link></li>
                            <li><router-link to="/grutascavernas" class="dropdown-item">Grutas y Cavernas</router-link></li>
                            <li><router-link to="/florafauna" class="dropdown-item">Lugares de Observacion de Flora y Fauna</router-link></li>
                            <li><router-link to="/cazapesca" class="dropdown-item">Lugares de Caza y Pesca</router-link></li>
                            <li><router-link to="/caminos" class="dropdown-item">Caminos Pintorescos</router-link></li>
                            <li><router-link to="/termas" class="dropdown-item">Termas</router-link></li>
                            <li><router-link to="/parques" class="dropdown-item">Parques Nacionales</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Museos
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><router-link to="/museos" class="dropdown-item">Museos</router-link></li>
                            <li><router-link to="/arte" class="dropdown-item">Obras de Arte</router-link></li>
                            <li><router-link to="/lhistoricos" class="dropdown-item">Lugares Historicos</router-link></li>
                            <li><router-link to="/ruinas" class="dropdown-item">Ruinas y Lugares Arqueologicos</router-link></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Folklore
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><router-link to="/manifestaciones" class="dropdown-item">Manifestaciones Religiosas</router-link></li>
                            <li><router-link to="/ferias" class="dropdown-item"> Ferias y Mercados</router-link></li>
                            <li><router-link to="/musica" class="dropdown-item">Musica y Danza</router-link></li>
                            <li><router-link to="/artesanias" class="dropdown-item">Artesanías y artes</router-link></li>
                            <li><router-link to="/comida" class="dropdown-item">Comidas y Bebidas Tipicas</router-link></li>
                            <li><router-link to="/grupos" class="dropdown-item">Grupos Etnicos</router-link></li>
                            <li><router-link to="/arquitectura" class="dropdown-item">Arquitectura</router-link></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Realizaciones técnicas
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><router-link to="/mineria" class="dropdown-item">Explotaciones Mineras</router-link></li>
                            <li><router-link to="/agropecuario" class="dropdown-item">Exploatciones Agropecuarias</router-link></li>
                            <li><router-link to="/industria" class="dropdown-item">Explotaciones Industriales</router-link></li>
                            <li><router-link to="/artetec" class="dropdown-item">Obras de Arte y Tecnica</router-link></li>
                            <li><router-link to="/centros" class="dropdown-item">Centros Cientificos y Tecnologicos</router-link></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Acontecimientos programados
                        </a>
                        <ul class="dropdown-menu navColorFondo">
                            <li><router-link to="/artisticos" class="dropdown-item">Artisticos</router-link></li>
                            <li><router-link to="/deportivos" class="dropdown-item">Deportivos</router-link></li>
                            <li><router-link to="/mas" class="dropdown-item">Otros</router-link></li>
                            <li><router-link to="/image" class="dropdown-item">360 Image</router-link></li>
                            <li><router-link to="/museoobj" class="dropdown-item">Museo OBJ</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
