export const theme = {
  color: {
    white: "#FFFFFF",
    black: "#000000",
    background: "#242424",
    red: "#C52525",
    greyWhite: "#F6F3F3",
    blue: "#0056b3",
  },
  fonts: ["Oswald", "Open Sans"],
  grid: {
    breakpoints: {
      xs: "320px",
      s: "570px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    mobile: {
      primary: {
        rows: "1fr 9fr 1fr",
        columns: "1fr",
        areas: `
                "header header"
                "main main"
                "footer footer"
            `,
      },
    },
    tablet: {
      primary: {
        rows: "1fr 1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header header user user user"
                "navbar navbar navbar navbar navbar navbar"
                "main main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
    desktop: {
      primary: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6,1fr)",
        areas: `
                "header header navbar navbar navbar user"
                "main main main main main main"
                "footer footer footer footer footer footer"
            `,
      },
    },
  },
};
export default theme;
