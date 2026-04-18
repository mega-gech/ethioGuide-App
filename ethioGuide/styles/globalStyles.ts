// styles/globalStyles.ts

import { StyleSheet } from "react-native";

export const Colors = {
  // 🌍 Primary Brand Colors (Based on your UI)
  primary: "#0A3D62",       // deep blue (buttons, headers)
  secondary: "#1E8449",     // green (accent, header gradient)
  accent: "#F4D03F",        // yellow (highlight)

  // 🇪🇹 Ethiopian Theme
  ethiopia: {
    green: "#078930",
    yellow: "#FCDD09",
    red: "#DA121A",
  },

  // 🧱 Backgrounds
  background: "#F5F7FA",    // main app background
  card: "#FFFFFF",          // card background
  input: "#EEF1F4",         // input fields

  // 📝 Text Colors
  text: {
    primary: "#1C1C1E",
    secondary: "#6B7280",
    light: "#9CA3AF",
    white: "#FFFFFF",
  },

  // 🔘 Buttons
  button: {
    primary: "#0A3D62",
    secondary: "#1E8449",
    disabled: "#BDC3C7",
  },

  // ❤️ Status Colors
  success: "#2ECC71",
  error: "#E74C3C",
  warning: "#F39C12",
  info: "#3498DB",

  // 💔 Favorites / Icons
  heart: "#E74C3C",
  icon: "#6B7280",

  // 🧊 Borders & Divider
  border: "#E5E7EB",
  divider: "#D1D5DB",

  // 🌑 Shadows
  shadow: "#000000",
};




export const globalStyles = StyleSheet.create({
  // 📦 Layout
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // 🧾 Cards
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,

    shadowColor: Colors.shadow,
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    elevation: 3,
  },

  // 🔘 Buttons
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonSecondary: {
    backgroundColor: Colors.secondary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: Colors.text.white,
    fontSize: 16,
    fontWeight: "600",
  },

  // 🔍 Input
  input: {
    backgroundColor: Colors.input,
    padding: 12,
    borderRadius: 12,
    marginTop: 10,
  },

  // 📝 Text
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.text.primary,
  },

  subtitle: {
    fontSize: 16,
    color: Colors.text.secondary,
  },

  smallText: {
    fontSize: 14,
    color: Colors.text.light,
  },

  // ❤️ Favorite icon container
  favoriteIcon: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 50,
    position: "absolute",
    top: 10,
    right: 10,

    shadowColor: Colors.shadow,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },

  // 💬 Chat bubbles
  chatUser: {
    backgroundColor: Colors.primary,
    alignSelf: "flex-end",
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
    maxWidth: "75%",
  },

  chatBot: {
    backgroundColor: Colors.card,
    alignSelf: "flex-start",
    padding: 12,
    borderRadius: 12,
    marginVertical: 5,
    maxWidth: "75%",
  },

  // 📌 Divider
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: 10,
  },
});