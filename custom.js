


var app=new Vue({

    el: '#app',
    data() {
        return {
            langu: [],
            username: 'sozenismail',
            lengh:0 
            
            
        }
    },
    methods: {
        search() {
            fetch(`https://api.github.com/users/${this.username}/repos`)
            .then((res) => {return res.json() })
            .then((res) => { 
                
              

                 for (let sayi = 0; sayi < res.length; sayi++) {
                    

                   
                    this.langu.push(res[sayi].language);
            
            
                }

                  
                 this.lengh=res.length;
                }
            )

            this.langu.splice(0); 
        }
    },
     
     
     
    
 
})