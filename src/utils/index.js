import queryString from 'query-string';

export const BaseUrl = 'https://api.spotify.com/v1/me';
const parsed = queryString.parse(window.location.search);
export let AccessToken = parsed.access_token;
