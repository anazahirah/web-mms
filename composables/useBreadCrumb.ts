export default (route: string) => {
  return route
    .split("/")
    .filter((item) => item)
    .map((item) =>
      item
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    );
};
