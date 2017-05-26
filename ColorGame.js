	var numSquares= 6;
	var color=getRandomColors(numSquares);
	var h=document.querySelectorAll(".square");
	var pickedColor=random(); 
	var rgb= document.querySelector(".colordisplay");
	var tryagain= document.querySelector("#try");
	rgb.textContent= pickedColor;
	var num;
	var h1=document.querySelector("h1");
	var again= document.querySelector("#but");
	var easy= document.querySelector("#easy");
	var hard=document.querySelector("#hard");

	easy.addEventListener("click", function()
	{   

		easy.classList.add("selected");
		hard.classList.remove("selected");
		numSquares=3;
		color=getRandomColors(numSquares);
		pickedColor=random();
		rgb.textContent=pickedColor;
        for(var i=0; i<h.length; i++)
        {
        	if(color[i]){
        		h[i].style.background= color[i];
        	}
        	else{
        		h[i].style.background="none";
        	}
        }


	});
	hard.addEventListener("click", function()
	{
		hard.classList.add("selected");
		easy.classList.remove("selected");
		numSquares=6;
        color=getRandomColors(numSquares);
		pickedColor=random();
		rgb.textContent=pickedColor;
        for(var i=0; i<h.length; i++)
        {
        	if(color[i]){
        		h[i].style.background= color[i];
        	}
        	else{
        		h[i].style.background="none";
        	}
        }


	});


	


	again.addEventListener("click",function(){
		again.textContent="New Colors";
		color=getRandomColors(numSquares);
		pickedColor=random();
		rgb.textContent= pickedColor;
		tryagain.textContent="";
		h1.style.background="steelblue";
		doit1();		
	})
	
	doit1();

	function doit1()
	{
		for(var i=0; i<color.length; i++)
		{
			h[i].style.background=color[i];


			h[i].addEventListener("click", function()
			{

				var clickedColor= this.style.background;


				if(clickedColor === pickedColor)
				{
					tryagain.textContent="Correct!";
					again.textContent="Play Again?"

					for(var j=0;j<color.length;j++)
					{
						h[j].style.background= clickedColor;
						h1.style.background= clickedColor;
					}


				}

				else
				{
					this.style.background= "#232323";
					tryagain.textContent="Try Again";
				}


			});


		}}


		function random()
		{
			var p=Math.floor(Math.random() * color.length);

			return color[p];
		}
		function getRandomColors(num)
		{
			var arr=[];
			for(var q=0;q<num;q++)
			{
				arr.push(randomColor());

			}
			return arr;
		}

		function randomColor()
		{
			var r=Math.floor(Math.random() * 256);
			var b=Math.floor(Math.random() * 256);
			var g=Math.floor(Math.random() * 256);
			return "rgb("+r+", "+g+", "+b+")";
		}