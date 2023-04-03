import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";

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

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.registrationForm__registerBtn}
      >
        <Text style={styles.registrationForm__registerBtnText}>
          Зареєструватись
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.registrationForm__logInBtn}
      >
        <Text style={styles.registrationForm__logInBtnText}>
          Вже є аккаунт? Увійти
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  registrationForm: {
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 16,
  },
  registrationForm__title: {
    textAlign: "center",
    color: "#212121",
    fontSize: 30,
    fontWeight: 500,
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
  registrationForm__registerBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  registrationForm__registerBtnText: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 19,
  },
  registrationForm__logInBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 45,
  },
  registrationForm__logInBtnText: {
    color: "#1B4371",
  },
});
