//Define a variable called "axios" and assign it 'require('axios');


//Create a try-catch statement to hold your api request
    //Write request using axios library
    async function getCatsData()
    {
        try
        {
            //Define a variable to hold data from api request
        let cats = await axios.get('https://api.thecatapi.com/v1/breeds');
        // let data = cats.data;
        console.log(cats.data);
        }
        catch(error)
        {
            console.log(error);
        }  

    }

console.log(getCatsData());


    

        

        //Create a for loop to loop through variable holding data

            //Define a variable to hold each cat image

            //Add images inside each anchor tag using DOM


        //Create another loop to loop through variable holding data
        
            //Define a variable to hold each wiki link

            //Add links to each anchor tag 'href' attribute