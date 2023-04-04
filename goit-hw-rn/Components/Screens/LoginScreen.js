import { useState } from "react";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export function LoginScreen() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <View style={styles.loginForm}>
      <Text style={styles.loginForm__title}>Увійти</Text>
      <TextInput
        style={styles.loginForm__input}
        placeholder="Адреса електронної пошти"
        textContentType="emailAddress"
        onFocus={() => {
          setIsInputFocused(true);
        }}
      />
      <TextInput
        style={styles.loginForm__input}
        placeholder="Пароль"
        secureTextEntry={true}
        textContentType="password"
        onFocus={() => {
          setIsInputFocused(true);
        }}
      />

      <TouchableOpacity activeOpacity={0.7} style={styles.loginForm__loginBtn}>
        <Text style={styles.loginForm__loginBtnText}>Увійти</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          ...styles.loginForm__registerBtn,
          marginBottom: isInputFocused ? 32 : 145,
        }}
      >
        <Text style={styles.loginForm__registerBtnText}>
          Нема аккаунта? Зареєструйся
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginForm: {
    backgroundColor: "#FFFFFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    paddingHorizontal: 16,
  },
  loginForm__title: {
    color: "#212121",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35,

    marginVertical: 32,
  },
  loginForm__input: {
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    padding: 16,
    color: "#BDBDBD",
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  loginForm__loginBtn: {
    backgroundColor: "#FF6C00",
    height: 50,
    borderRadius: 100,
    marginTop: 43,
    justifyContent: "center",
    alignItems: "center",
  },
  loginForm__loginBtnText: { color: "#FFFFFF", fontSize: 16, lineHeight: 19 },
  loginForm__registerBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  loginForm__registerBtnText: { color: "#1B4371" },
});
