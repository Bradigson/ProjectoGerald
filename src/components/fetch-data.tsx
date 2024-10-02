import { 
        View, 
        Text, 
        ActivityIndicator, 
        StyleSheet, 
        FlatList} from "react-native";
import { useState, useEffect } from "react";


const HeavyData = ()=>{

    const [state, setState] = useState<any>([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=> res.json())
        .then(res=> setState(res))
        .catch(err=> console.log(err))
    },[])
    return(
        <View style={{backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
            <FlatList
                contentContainerStyle={{marginTop:100}}
                data={state}
                renderItem={({item, index})=> (
                    <View style={{backgroundColor:'green', marginTop:10, width:400}}>
                        <Text style={{marginTop:10}}>{item.name}</Text>
                        <Text style={{marginTop:10}}>{item.username}</Text>
                        <Text style={{marginTop:10}}>{item.email}</Text>
                    </View>
                )}
            />

        </View>
    )
}


export default HeavyData;