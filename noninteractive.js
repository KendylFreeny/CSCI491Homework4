 function draw() {
        /* Accepting and seperating comma seperated values */
        var values = [100,105,110,115,120,125,130];
		var names=['Pokemon','Mario','Call of Duty', 'Pac-Man','Space Invaders','Wii','Street Fighter']
				
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');
 
        var width = 40; //bar width
        var X = 50; // first bar position 
        var base = 200;
         
        for (var i =0; i<values.length; i++) {
            ctx.fillStyle = '#9900ff'; 
            var h = values[i];
            ctx.fillRect(X,canvas.height - h,width,h);
             
            X +=  width+15;
            /* text to display Bar number */
            ctx.fillStyle = '#660066';
            ctx.fillText(names[i],X-50,canvas.height - h -10);
        }
		
		
    }