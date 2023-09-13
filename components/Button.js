import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Button({label, theme, onPress}){   
        if (theme === "primary") {
    return (
      <View
      style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#DBC4F0", borderRadius: 18 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#DBC4F0" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
    </View>
    );
  }
    return (
    <View style={styles.buttonContainer}>
      <Pressable style={[styles.button, {backgroundColor: '#A1CCD1'}]}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
    }
  const styles = StyleSheet.create({
    buttonContainer: {
    width: 320,
    height: 60,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
    },
    button: {
       width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    },
    buttonLabel: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonIcon: {
    paddingRight: 8,
  },
  })
