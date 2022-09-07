
const output = document.getElementById('output-container')
const transbutton = document.getElementById('translate')
const delbutton = document.getElementById('delete-text')

const options = {
	method: 'GET',
	headers: {
	
        //insert you rapid api key here
        'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
		'X-RapidAPI-Host': 'translef-translator.p.rapidapi.com'
	}
};

fetch('https://translef-translator.p.rapidapi.com/language/list', options)
	.then(response => response.json())
	.then((response) =>{
        console.log(response[2].name )
        const select = document.getElementById('languages')
        for(var i = 0 ; i < 88;i++){
            const listoflanguages = document.createElement('option')
            listoflanguages.innerHTML = response[i].code  +"--- " + response[i].name
           // console.log( response.data.languages[i].code +" + response.data.languages[i].name )
            select.append(listoflanguages)
        }
     
    })
  
    function translating(){

        const input = document.getElementById('input').value
        const inputcode = document.getElementById('input-code').value
        let translation = document.createElement('p')
        translation.style.color = "red"
        translation.style.lineheight =  10
        const select = document.getElementById('languages')
        
        const encodedParams = new URLSearchParams();
         encodedParams.append("language_code", "es");
        encodedParams.append("text", "hola");
        encodedParams.set('text',input)
        encodedParams.set('language.code',inputcode)

    
        console.log(encodedParams)
        const option4= {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                //
                 //insert you rapid api key here
                 'X-RapidAPI-Key': '68ca2b29famsh3659961ddfd0bc6p13afa2jsn2558945f180c',
                //
                'X-RapidAPI-Host': 'translef-translator.p.rapidapi.com'
            },
            body: encodedParams
        };
        
        //traslef
        fetch('https://translef-translator.p.rapidapi.com/translate/text', option4)
            .then(response => response.json())
            .then((response) =>{
                console.log(response)
                translation.innerHTML = response.translated_text
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