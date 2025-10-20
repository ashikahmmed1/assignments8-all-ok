export const getStoredBook = () => {
  const stored = localStorage.getItem("installedBooks");
  return stored ? JSON.parse(stored) : [];
};

export const saveToDB = (id) => {
  const stored = getStoredBook();
  if (!stored.includes(id.toString())) {
    stored.push(id.toString());
    localStorage.setItem("installedBooks", JSON.stringify(stored));
  }
};