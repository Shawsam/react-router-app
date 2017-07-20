import fetchJsonp from 'fetch-jsonp'
import * as config from '../config/index'
require('es6-promise').polyfill();

export function fetch_film(opt){
  if (!opt) {
    return false;
  }
  let REQUEST_PATH = `${config.SERVER_PATH}movie/${opt.type}`;
  if (opt.type !== 'us_box') {
    REQUEST_PATH += `?start=${opt.start}&count=${opt.count}`
  }
  const result = fetchJsonp(REQUEST_PATH, {
    timeout: 3000,
  });

  return result.then(response=> {
    return response.json();
  }).catch(err=>
    console.log('parsing failed', err)
  );
}