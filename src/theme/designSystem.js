const colors = {
    primary: "#51cb20",
    secondary: "#DDD0E3",
    accent: "#00b4d8",
    white: "white",
    black: "black",
  };
  
  const typography = {
    slicedThrough: {
      fontWeight: 100,
      textDecorationLine: "line-through",
      fontStyle: "italic",
      fontSize: 40,
    },
    heading400: {
      fontWeight: "bold",
      fontSize: 30,
      color: "blue",
    },
  };
  
  const genericStyles = {
    inputBase: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: colors.accent,
      padding: 10,
    },
    input:{
      height: 60,
  margin:5,
  borderWidth: 1,
  borderRadius:15,
  padding: 10,
  borderColor:'black',
  },
  };
  
  export { colors, typography, genericStyles };