import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function RegistrationScreen() {
  return (
    <View style={styles.registrationForm}>
      <Text style={styles.registrationForm__title}>Регістрація</Text>
      <TextInput
        style={styles.registrationForm__input}
        // value={login}
        placeholder="Логін"
        textContentType="name"
      />
      <TextInput
        style={styles.registrationForm__input}
        // value={email}
        placeholder="Адреса електронної пошти"
        textContentType="emailAddress"
      />
      <TextInput
        style={styles.registrationForm__input}
        // value={password}
        placeholder="Пароль"
        secureTextEntry={true}
        textContentType="password"
      />
      {/* <View style={{ marginTop: "43" }}></View> */}
      <Button title="Зареєструватись" color="#FF6C00" />

      {/* <Button title="Вже маєте аккаунт? Увійти" color="#FFFFFF" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  registrationForm: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 16,
  },
  registrationForm__title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    marginTop: 92,
    marginBottom: 32,
  },
  registrationForm__input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
});
