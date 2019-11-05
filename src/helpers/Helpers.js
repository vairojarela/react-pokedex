class Helpers {
  capitalize = s => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
}

const helpers = new Helpers();

export default helpers;
