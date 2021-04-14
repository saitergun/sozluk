export const getAutocomplete = async () => {
  return new Promise((resolve, reject) => {
    fetch('/autocomplete.json')
      .then((response) => response.json())
      .then(resolve)
      .catch(() => reject(new Error('Sözler yüklenirken beklenmeyen bir hata oluştu.')));
  });
};

export const getWord = async ({ word, signal }) => {
  return new Promise((resolve, reject) => {
    fetch(`https://sozluk.gov.tr/gts?ara=${word}`, { signal })
      .then((response) => response.json())
      .then((response) => {
        if (response?.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      })
      .catch(() => reject(new Error('Söz yüklenirken beklenmeyen bir hata oluştu.')));
  });
};

export const getSuggestions = async (query) => {
  return new Promise((resolve, reject) => {
    fetch(`https://sozluk.gov.tr/oneri?soz=${query}`)
      .then((response) => response.json())
      .then((response) => resolve(Array.from(new Set(response.map(({ madde }) => madde)))))
      .catch(() => reject(new Error('Öneriler yüklenirken beklenmeyen bir hata oluştu.')));
  });
};

export default {
  getAutocomplete,
  getWord,
  getSuggestions,
};
