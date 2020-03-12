interface ICast {
  name: string;
  character_name: string;
  url_small_image: string;
}
interface IMovieDetail {
  id: number;
  title: string;
  title_english: string;
  title_long: string;
  cast: Array<ICast>;
  description_full: string;
  description_intro: string;
  genres: Array<string>;
  large_cover_image: string;
  large_screenshot_image1: string;
  large_screenshot_image2: string;
  large_screenshot_image3: string;
  like_count: number;
  rating: number;
  runtime: number;
  year: number;
}
