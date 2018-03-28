window.addEventListener("load",()=>{
    setTimeout(() => {
        
    
        swal({
                    title: 'Get ready to play',
                   text: 'Here are the instructions',
                confirmButtonText: 'Go'
                }).then(()=>{
    
    
                    swal.setDefaults({
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3']
            })
    
            var steps = [
            {
            title:'Let the images pop up'
            },
            {
            title:'Click on the images to score before they vanish'
            },
            {
            title: 'Get the score of 11',
            }
            ]
    
            swal.queue(steps).then(() => {
            swal.resetDefaults()
    
            swal({
            title: 'You are all set to PLAY!',
            confirmButtonText: "Let's Play"
            })
            
            });
    
                });
    
    
    }, 800);
    
            });
    
           
    
    
    