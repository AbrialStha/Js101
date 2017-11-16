 //A man has to complete two jobs, jbo1 and job2 
    //but however for job2 job1 must be completed first but job1 will only start after certain time(2s)
    var completed;
    let job2 = () => {
        if(completed == "Yes"){
            console.log("Next job started");
        }else {
            console.log("Job1 is still running");
        }
    }

    //With Promise
    let job1 = new Promise( (resolve, reject)=> {
        setTimeout( 
            () => { 
                completed = "Yes"; 
                console.log("job1 completed"); 
                resolve("Sucess");
            },
            2000
        );
    });

    job1.then(
        () =>{
            job2();  
        }
    );

    //Without Promise, To see the difference comment above code from with promise
    /*setTimeout( 
            () => { 
                completed = "Yes"; 
                console.log("job1 completed"); 
            },
            2000
        );
    job2();*/