

class KModel{
    #books = [];


    constructor(){
        
    }

    pullData(path, myCallback){
        fetch(path, {
            method: 'GET', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then((response) => response.json())
            .then((data) =>{
                this.#books = data.konyv;
                myCallback(this.#books);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    }


}

export default KModel;