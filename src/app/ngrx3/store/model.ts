export interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: ReadonlyArray<string>;
  };
}
