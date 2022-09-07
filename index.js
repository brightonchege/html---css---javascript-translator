
const output = document.getElementById('output-container')
const transbutton = document.getElementById('translate')
const delbutton = document.getElementById('delete-text')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	}
};
fetch('https://text-translator2.p.rapidapi.com/getLanguages', options)
	.then(response => response.json())
	.then((response) =>{
        console.log(response.data.languages[6])
      const select = document.getElementById('languages')
       for(var i = 0 ; i < 112;i++){
         const listoflanguages = document.createElement('option')
       // console.log( response.data.languages[i].code)
        listoflanguages.innerHTML =  response.data.languages[i].code + ' ' + response.data.languages[i].name 
          select.append(listoflanguages)
       }
     
    })
  
    function translating(){

        const input = document.getElementById('input').value
        const inputcode = document.getElementById('input-code').value
        const  translation = document.createElement('p')
        translation.style.color = "red"
        translation.style.lineheight =  10
        const select = document.getElementById('languages')

        const encodedParams = new URLSearchParams();
            encodedParams.append("source_language", "en");
            encodedParams.append("target_language", "es");
            encodedParams.append("text", "What is your name?");

            encodedParams.set("target_language",inputcode)
            encodedParams.set("text",input)

           const options = {
	            method: 'POST',
	                   headers: {
	                         	'content-type': 'application/x-www-form-urlencoded',
		                        'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
		                        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
	                                           },
	                               body: encodedParams
                          };

        fetch('https://text-translator2.p.rapidapi.com/translate', options)
	                       .then(response => response.json())
            .then((response) =>{
                console.log(response.data)
               
              translation.innerHTML = response.data.translatedText
    } )
    .catch((err)=>{
        alert("you are offline please check you internet conection")
    });
    output.append(translation)
        
    delbutton.addEventListener('click',()=>{
        translation.remove()
    })
    

    }
    transbutton.addEventListener('click',translating)
    console.log("this is tiing")



