//https://nominatim.openstreetmap.org/search?q=${ville}&format=json

new Vue({
    el: "#formulaire",
    data:{
        maVariablePHP: ''
    },
    methods:{
        ajaxRequestMap: function(ville){
           fetch(`https://nominatim.openstreetmap.org/search?q=${ville}&format=json`)
           .then(response => response.json())
           .then((dataCity) => {
                var mymap = L.map('mapid').setView([dataCity[0].lat, dataCity[0].lon], 13);

                L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox.streets',
                    scrollWheelZoom: false,
                    zoomControl: false,
                    accessToken: 'pk.eyJ1IjoiYWNhcmRuaWNvbGFzOTEiLCJhIjoiY2swcnloczN0MGJneDNjbzB1am9ob3cycCJ9.5JXyVWCo9csiDd-U5bvejw'
                }).addTo(mymap);

                var marker = L.marker([dataCity[0].lat, dataCity[0].lon]).addTo(mymap);
           }) 
        }
    },
    mounted(){
        //récupérer l'information de la base de donnée
        this.ajaxRequestMap('paris')
    }
})









