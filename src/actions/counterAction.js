

export default function counterAction(count){
    return (
      {
        type: "INCREMENT",
        payload:{
          count:1
        }
      },
      
    //   {
    //     type: "DECREMENT",
    //   }
    );
  };