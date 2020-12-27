import { makeObservable , observable, action, toJS , configure } from "mobx";
import axios from 'axios'
import { TouchableNativeFeedbackBase } from "react-native";

configure({
    useProxies:'never'
})

class Store {
    // observable to save search query
    products = []
    id=''
    constructor(id){
        makeObservable(this, {
            products:observable ,
            id:observable ,
            getProducts:action ,
            updateData:action ,
            setData:action
        })
        this.id = id
    }
  
    // action to update text
    updateData =  (data) => {
      this.products.replace(data) 
    }
  
    // observable to save image response from api
  
    // action to call API and search images
    getProducts = async () => {
      try {
        const response = await axios.get("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
        let  serverResponse = response
        console.log(serverResponse.data , 'data');
        this.updateData(serverResponse.data)
      } catch (error) {
          console.log(error , 'error');
      }
    };
  
    // observables can be modifies by an action only
    setData = (data) => {
      this.data = data;
    };
  }
  
  // another way to decorate variables with observable
  
  
  // export class
  export default   Store