mapboxgl.accessToken = 'pk.eyJ1IjoiamVyZW0zMzMyMCIsImEiOiJjam9oMWY3ZHAwZGp1M3FzNmQ4d2N2bzFvIn0.aS1oWKzAQx9j5H2Ldxcmtw';
        
    var bounds = [
        [-0.7833, 44.8167],
        [-0.4833, 44.9167]
    ];

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [-0.6667, 44.9],
        zoom: 13,
        maxBounds: bounds
    });
            
    var size = 100; //taille du point sur la map
            
    var pulsingDot = {

        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),
            
        onAdd: function() {
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
        },
            
        render: function() {
            var duration = 1000;
            var t = (performance.now() % duration) / duration;
            
            var radius = size / 2 * 0.3;
            var outerRadius = size / 2 * 0.7 * t + radius;
            var context = this.context;
            
            // draw outer circle
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
            context.fill();
            
            // draw inner circle
            context.beginPath();
            context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
            context.fillStyle = 'rgba(255, 100, 100, 1)';
            context.strokeStyle = 'white';
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();
            
            // update this image's data with data from the canvas
            this.data = context.getImageData(0, 0, this.width, this.height).data;
            
            // keep the map repainting
            map.triggerRepaint();
            
            // return `true` to let the map know that the image was updated
            return true;
        }
    };
            
    map.on('load', function () {
        
    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
        
    map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-0.6667, 44.9] //renseigner latitude longitude
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "pulsing-dot"
        }
    });
});
            