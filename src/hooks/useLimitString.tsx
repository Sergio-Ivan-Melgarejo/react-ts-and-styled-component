interface Props {
    str:string;
    limit:number;
}

/**
 * 
 * @param str string  to limit
 * @param limit number for string limit
 * @returns string limited
 * 
 * function for limit string
 */

export const limitString = ({str,limit} : Props) => {
  if (str.length > limit) {
    return  str.slice(0, (limit - 3)).concat("...");
  }
  return str
}