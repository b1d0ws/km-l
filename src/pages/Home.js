import { StyleSheet, View, Text, Button } from 'react-native';
import React, { useState, useLayoutEffect } from 'react'

export default function Home(props) {

  const {quilometro, litro} = props.route.params  
  const [result, setResult] = useState("")
  const resultado = quilometro/litro  

  useLayoutEffect(() => {

    if(resultado <= 4){
        setResult("E")
    } else if(resultado <= 8) {
        setResult("D")
    } else if(resultado <= 10) {
        setResult("C")
    } else if(resultado <= 12) {
        setResult("B")
    } else {
        setResult("A")
    }

    console.log(resultado)
    props.navigation.setOptions({
      headerRight: () => (
        <Button color='#35663b' onPress={() => props.navigation.replace("Calculo")} title="Voltar" />
      ),
    })

  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Consumo Médio do Veículo</Text>
      <Text style={styles.resultado}>{resultado.toFixed(2)} Km/L</Text>
      <Text style={styles.texts}>Seu veículo está com a indicação</Text>
      <Text style={styles.resultado}>{result}</Text>
      <Text style={styles.texts}>Tabela de Consumo</Text>
      <Text style={styles.tabela}>A - Mais de 12 Km/l</Text>
      <Text style={styles.tabela}>B - Até 12 Km/l</Text>
      <Text style={styles.tabela}>C - Até 10 Km/l</Text>
      <Text style={styles.tabela}>D - Até 8 Km/l</Text>
      <Text style={styles.tabela}>E - Até 4 Km/l</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  }, texts: {
  fontSize: 27,
  alignSelf: "center"
}, tabela: {
    fontSize: 20,
    alignSelf: "center"
}, resultado: {
    marginBottom: 50,
    fontWeight: "bold",
    fontSize: 27,
    alignSelf: "center"
}
})
