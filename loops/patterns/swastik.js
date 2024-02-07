/*
 
*     * * * *
*     *
*     *
* * * * * * *
	  *     *
	  *     *
* * * *     *
  
*/
const n = 9;
const center = Math.ceil(n/2);
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        if( 
            (i === 1 && j >= center) ||
            (i <= center && j == 1) ||
            (j === center && i <= center) ||
            (i === center) ||
            (j === center) ||
            (i === n && j <= center) ||
            (j === n && i >= center)
        ) {
            document.write('* ');
        } else {
            document.write('<span class="gray-star">* </span>');
        }
    }
    document.write('<br />')
}