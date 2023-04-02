import { StyleSheet, Text, TextInput, View } from "react-native";

export function RegistrationScreen() {
  return (
    <View style={styles.registrationForm}>
      <Text style={styles.registrationForm__title}>Регістрація</Text>
      <TextInput
        style={styles.registrationForm__input}
        // value={login}
        placeholder="Логін"
      />
      <TextInput
        style={styles.registrationForm__input}
        // value={email}
        placeholder="Адреса електронної пошти"
      />
      <TextInput
        style={styles.registrationForm__input}
        // value={password}
        placeholder="Пароль"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  registrationForm: {
    // flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
  registrationForm__title: {
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    marginTop: 92,
  },
  registrationForm__input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
});
