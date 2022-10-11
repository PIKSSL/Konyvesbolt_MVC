import KModel from "../Model/KModel.js";
import KView from "../View/KView.js";


class KController{
    

    constructor(){
        
        const kmodel = new KModel();
        kmodel.pullData("../data.json",this.bookData);   
        new KView();
    }

    bookData(array){

        let kview = new KView(array, $(".konyvek"));
    }
}

export default KController;