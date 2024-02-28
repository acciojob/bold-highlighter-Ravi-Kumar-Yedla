function highlight() {
    //Write your code here
   let strong = document.querySelectorAll('strong');
	for(let highlt of strong){
		highlt.style.color = 'green' 
	}

}


function return_normal() {
    //Write your code here
	let strong = document.querySelectorAll('strong');
	for(let highlt of strong){
		highlt.style.color = 'black';
	}

    
}
