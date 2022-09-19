const taskOne = (passengers:number, shuffle:number)=>{
    //complete your work here
        let passengerArray: Array<object>=[];
        let boardedArray: Array<object> = [];
        let reservationList: Array<object>= []
        let counter: number = 0;
        let locations: Array<string>= ['Abuja','Benue','Lagos','Kastina','Sambisa']
        
        for(let i =1, j = 0; i <= passengers; i++, j++){
          let newObj: {name: string, location: string} = {
            name:`passenger${i}`,
            location:`${locations[j]}`
          }
          if(j == locations.length-1){
          j=-1; 
          }
          passengerArray.push(newObj);
        }
        //console.log(passengerArray.length)
        //using modulos operator, get the remainder of num of elem in passengerArray
        if(passengerArray.length % 5 !== 0){
          reservationList = passengerArray.splice(-(passengerArray.length % 5))
          
        } 
          //while the passengerArray is not zero, and the passengerArray is less than 50, splice the entire length into boarded.
        while(passengerArray.length !== 0){
            if(passengerArray.length < 50){
              boardedArray = passengerArray.splice(0);
            }else{
              boardedArray = passengerArray.splice(0, 50)
            }
      
            if(shuffle === 0 && passengerArray.length !== 0){
              reservationList = (passengerArray.splice(0));
            //   reservationList = reservationList.flat()
      
            }
      
            counter++;
            shuffle--;
            //console.log(shuffle)
      
          }
          return {
              boarded: boardedArray,
              reservation: reservationList,
              count: counter
          } 
        }
      // console.log(boardedArray);
        
        //complete your work here
      
//console.log(taskOne(63, 2))
export default taskOne;