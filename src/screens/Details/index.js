  import { View, Text, Image, StyleSheet } from "react-native";
  import { useRoute } from "@react-navigation/native";

  import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
  import { Ionicons } from "@expo/vector-icons";



  export default function Detalhes() {
      const routes   = useRoute()


    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>{routes.params.titulo}</Text>
        <Image style={styles.imagem} source={{ uri: routes.params.imagem }} />
        <View
          style={{
            alignItems: "center",
            display: "flex",
            gap: 5,
            flexDirection: "row",
          }}
        >
          <Icon name="star" style={styles.myStarStyle} />
          <Text style={styles.nota}>{routes.params.nota}/10</Text>
        </View>

        <Text style={styles.descricao}>{routes.params.descricao}</Text>

        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Ionicons name="film-outline" size={24} color="#FFD700" />
            <Text style={styles.infoText}>Filme</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={24} color="#FFD700" />
            <Text style={styles.infoText}>120min</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="calendar-outline" size={24} color="#FFD700" />
            <Text style={styles.infoText}>2024</Text>
          </View>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      paddingTop: 30,
      paddingStart: 14,
      paddingEnd: 14,
    },
    titulo: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#FFFFFF",
      marginBottom: 14,
    },
    imagem: {
      width: "100%",
      height: 400,
      borderRadius: 10,
      marginBottom: 14,
    },
    myStarStyle: {
      fontSize: 22,
      color: "#E7A74e",
    },
    nota: {
      fontSize: 20,
      color: "#FFFFFF",
      fontWeight: "bold",
    },
    descricao: {
      fontSize: 18,
      color: "#FFFFFF",
      marginTop: 14,
      lineHeight: 22,
      textAlign: "justify",
      marginHorizontal: 20,
      marginBottom: 20,
    },

    infoSection: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginHorizontal: 20,
      marginBottom: 30,
      padding: 20,
      backgroundColor: "rgba(255,255,255,0.05)",
      borderRadius: 16,
      borderWidth: 1,
      borderColor: "rgba(255, 255, 255, 0.1)",
    },
    infoItem: {
      alignItems: "center",
      gap: 8,
    },
    infoText: {
      color: "rgba(255,255,255,0.8)",
      fontSize: 12,
      fontWeight: "500",
    },
  });
