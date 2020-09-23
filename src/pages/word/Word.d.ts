declare type Word = {
  madde_id: String, // number?
  kac: String, // number?
  kelime_no: String, // number?
  cesit: String, // number?
  anlam_gor: String, // number?
  on_taki: any, // null
  madde: String,
  cesit_say: String, // number?
  anlam_say: String, // number?
  taki: String,
  cogul_mu: String, // number?
  ozel_mi: String, // number?
  lisan_kodu: String, // number?
  lisan: String,
  telaffuz: String|null, // null
  birlesikler: String,
  font: any, // null
  madde_duz: String,
  gosterim_tarihi: any, // null
  anlamlarListe: Anlam[],
  atasozu: Atasozu[]
};

declare type Anlam = {
  anlam_id: String, // number?
  madde_id: String, // number?
  anlam_sira: String, // number?
  fiil: String, // number?
  tipkes: String, // number?
  anlam: String,
  gos: String, // number?
  orneklerListe: Ornek[],
  ozelliklerListe?: Ozellik[]
};

declare type Ornek = {
  ornek_id: String, // number?
  anlam_id: String, // number?
  ornek_sira: String, // number?
  ornek: String,
  kac: String, // number?
  yazar_id: String, // number?
  yazar: Yazar[],
};

declare type Ozellik = {
  ozellik_id: String, // number?
  tur: String, // number?
  tam_adi: String,
  kisa_adi: String,
  ekno: String, // number?
};

declare type Yazar = {
  yazar_id: String, // number?
  tam_adi: String,
  kisa_adi: String,
  ekno: String, // number?
};

declare type Atasozu = {
  madde_id: String, // number
  madde: String,
  on_taki: any, // null
};
