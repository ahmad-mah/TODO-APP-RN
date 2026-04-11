import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to this screen.</Text>
      <Text>HI hola</Text>
      <Link href={'/about'}>Visit about screen</Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  content: {
    fontSize: 20,
  },
})
