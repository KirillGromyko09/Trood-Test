export const styles = {
  container: {
    backgroundColor: "#F3F4F6",
    height: "900px",
    width: "1160px",
    borderRadius: '16px',
  },
  mainBox: {
    padding: "66px 61px",
  },
  title: {
    marginBottom: "24px",
    fontSize: '32px',
  },
  button: {
    borderRadius: '24px',
    backgroundColor: "#D1D2D6",
    color: '#000000',
    padding: '10px 24px',
    fontSize: "20px",
    textTransform: "none",
    width: '186px',
    height: '47px',

  },
  projectGrid: {
    width: "500px",
    height: '325px'
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: "24px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    position: "relative",
    height: '300px'
  },
  cardTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "18px",
    width: '382px',
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordWrap: "break-word",
    cursor: "pointer",
  },
  cardText: {
    width: '382px',
    fontSize: "16px",
    fontWeight: "500",
    color: "#1F2937",
    marginBottom: "16px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
    wordWrap: "break-word",
  },
  cardButton: {
    fontSize: "14px",
    fontWeight: "500",
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#4338CA",
    },
  },
  imageWithText: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    img: {
      width: "16px",
      height: "16px",
    },
  },
  cardIcons: {
    position: "absolute",
    bottom: "16px",
    right: "16px",
    display: "flex",
    gap: "17px",
    paddingBottom: "17px",
    img: {
      width: "24px",
      height: "24px",
      cursor: "pointer",
    },
  },
};
