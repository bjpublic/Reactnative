interface IUserProfile {
  name: string;
  photo: string;
}

interface IFeed extends IUserProfile {
  images: Array<string>;
  description: string;
}
