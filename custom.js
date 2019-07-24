


var app=new Vue({

    el: '#app',
    data() {
        return {
            langu: [],
            username: 'sozenismail',
            lengh:0,
             
            
        }
    },
    methods: {
        search() {
            fetch(`https://api.github.com/users/${this.username}/repos?page=1&per_page=100`)
            .then((res) => {return res.json() })
            .then((res) => { 
                
                

                 for (let sayi = 0; sayi < res.length; sayi++) {
                    

                   
                    this.langu.push(res[sayi].language);

                    

                    if(this.langu[sayi]==null)
                    {
                        this.langu[sayi]="NULL";
                        
                    }
                   

                 }

                   this.lengh=res.length;
                  
                }
            )

            this.langu.splice(0); 
        }
    },
     
     
     
    
 
})