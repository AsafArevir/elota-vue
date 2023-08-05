<template>
	<a-scene>
		<a-assets>
			<img id="sky" src="../assets/img/imagenTD.jpg">
			<img id="homeThumbnail" src="../assets/img/return.png">
		</a-assets>
		<a-sky src="#sky"></a-sky>
		<a-entity link=" <router-link to='/'></router-link>; title: My Homepage; image: #homeThumbnail"></a-entity>
	</a-scene>
</template>
