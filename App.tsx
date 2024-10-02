import { View, Text, Button } from "react-native";
import { useState, useEffect, useCallback } from "react";


const App = ()=>{

  const [state, setState] = useState<any[]>([]);

  const handleGetData = useCallback(async ()=>{
    await fetch("http://localhost:2000/api/v1/users")
    .then((res)=> res.json())
    .then(res=> console.log(res))
    .catch((err)=> console.log(err))
  }, []);

  useEffect(()=>{
    handleGetData();
  },[handleGetData])





  return(
    <View style={{backgroundColor:'red', flex:1, justifyContent:'center', alignItems:'center'}}>
      {

      }
    </View>
  )
}


export default App;