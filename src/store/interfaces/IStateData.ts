export interface IStateData {
  origins: Array<IOriginItem>;

  home: IHome|null;

  autocomplete: Array<String>;

  history: Array<String>;
  historyLimit: number;

  bookmarks: Array<String>;
};

export interface IOriginItem {
  id: Number;
  nameLocale: String;
  tdk: {
    lisan_kodu: Number;
    lisan: String;
  };
};

export interface IHome {
  sayac: Array<IHomeSayacItem>,
  karistirma: Array<IHomeKaristirmaItem>,
  atasoz: Array<IHomeAtasozItem>,
  syyd: Array<IHomeSyddItem>,
  kural: Array<IHomeKuralItem>,

  yabanci: {
    karsid: Number, // String
    kkelime: String,
    kkoken: String,
    kkarsilik: String,
    anlam:String,
  },

  kelime: Array<IHomeKelimeItem>
};

export interface IHomeSayacItem {
  deger: String;
};

export interface IHomeKaristirmaItem {
  id: Number; // String
  yanlis: String;
  dogru: String;
};

export interface IHomeAtasozItem {
  madde: String;
  anlam: String;
};

export interface IHomeSyddItem {
  id: Number; // String
  yanliskelime: String;
  dogrukelime: String;
};

export interface IHomeKuralItem {
  adi: String;
  url: String;
};

export interface IHomeKelimeItem {
  madde: String;
  anlam: String;
};

export default IStateData;
