import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Alert } from 'react-native';
import CaixaTexto from '../components/CaixaTexto';
import React, { useState } from 'react'

export default function Calculo({navigation}) {


    const [quilometro, setQuilometro] = useState("")
    const [litro, setLitro] = useState("")
    

    const fazCalculo = () => {

        
        if (quilometro && litro){
            navigation.replace('Home',{
                quilometro:quilometro,
                litro:litro,
                
              })

              
        } else { 
            Alert.alert("Insira dados válidos")
        }


        
    }

    return (
        <View style={styles.container}>
            <View>
                <CaixaTexto
                    value={quilometro}
                    set={setQuilometro}
                    place="Informe os KM"

                />
                <CaixaTexto
                    value={litro}
                    set={setLitro}
                    place="Informe os Litros Consumidos"

                />
            </View>
            <View>
                <Button
                    color='#35663b'
                    title='Calcular'
                    onPress={fazCalculo}
                ></Button>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
    
});
