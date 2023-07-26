import { createApi } from 'unsplash-js';


const ak: string = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || ""
// on your node server
export const unsplashAPi = createApi({
  accessKey:  ak
});

