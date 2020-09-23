export interface IStateApp {
  name: String,
  title: String,

  loading: Boolean,
  loadingErrorText: String|null,

  isMobile: Boolean,
};

export default IStateApp;
