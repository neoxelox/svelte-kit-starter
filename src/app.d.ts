declare global {
  namespace App {
    interface MetaData {
      title: string;
      description: string;
      image?: string;
    }
    interface PageData {
      meta: MetaData;
    }
  }
}

export {};
