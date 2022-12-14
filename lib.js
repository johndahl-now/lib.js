/* New Array Method Template
if( !Array.prototype.newMethod ){
    Array.prototype.newMethod = function( param1 ){
        // Do something here.
        // Reference the array with `this`.
        // Return a new array to enable chaining.
    }
}
*/

if( !String.prototype.pad ){
    String.prototype.pad = function( result_length, pad_char ){
		/*
		Given a string, an integer length, and an optional character,
		pad the string to the requested length with the character.
		If the integer is negative, then pad-left the string.
		*/
		var pad_length, padding, result;
		
		pad_char = pad_char ? pad_char.toString() : '.';
		result_length = parseInt( result_length );
        	text = this.toString();

		if ( Math.abs( result_length ) <= text.length ){ return text; }

		pad_length = Math.abs( result_length ) - text.length;
		padding = pad_char.repeat( Math.abs( pad_length ) );

		if ( result_length > 0 ) {
			result = text + padding;
		}else{
			result = padding + text;
		}
		return result;
    }
}

if( !Array.prototype.sum ){
    Array.prototype.sum = function(){
        /* Given an array of numeric values,
         * add the elements together and
         * return the result.
         */
        return this.reduce( function( total, value ){
            return total += Number( value );
        }, 0 );
    }
}


if( !Array.prototype.product ){
    Array.prototype.product = function(){
        /* Given an array of numeric values,
         * multiple the values together and
         * return the result.
         */

        return this.reduce( function( total, value ){
            return total *= Number( value );
        }, 1 );
    }
}

if( !Array.prototype.parseInt ){
    Array.prototype.parseInt = function(){
        /* Given an array of values,
         * parse each value into an Integer.
         * return a new array.
         */
        return this.map( num => parseInt( num ) );
    }
}

if( !Array.prototype.parseNum ){
    Array.prototype.parseNum = function(){
        /* Given an array of values,
         * convert each value into a number.
         * return a new array.
         */
        return this.map( num => Number( num ) );
    }
}

if( !Array.prototype.numSort ){
    Array.prototype.numSort = function( order ){
        /* Given an array of values and optionally an order value,
         * perform a numeric sort of the values in the order provided or ascending.
         * return a new array.
         */
        ( order == 'desc' ) ? this.sort( ( a, b ) => b-a ) : this.sort( ( a, b ) => a-b );
        return this;
    }
}

if( !Array.prototype.intersection ){
    Array.prototype.intersection = function( arr ){
        /* Given an array of values and a second array as a parameter,
         * identify the values that appear in both arrays.
         * return a new array.
         */
        return this.filter( x => arr.indexOf( x ) > -1 );
    }
}

if( !Array.prototype.union ){
    Array.prototype.union = function( arr ){
        /* Given an array of values and a second array as a parameter,
         * identify all of the values that appear in either array.
         * Remove any duplicates and return a new array.
         */
        return this
        .concat( arr )
        .deduplicate();
    }
}

if( !Array.prototype.deduplicate ){
    Array.prototype.deduplicate = function(){
        /* Given an array of values,
         * identify the values that appear more than once.
         * Retain the first occurrence and remove the rest.
         * return a new array.
         */
        return this.filter( ( x, idx, arr ) => arr.indexOf( x ) == idx );
    }
}

if( !Array.prototype.transpose ){
    Array.prototype.transpose = function(){
        /* Given an array of arrays,
         * transpose the structure... 
         * swap the veritical and horizontal axis.
         * Return a new array.
         */
        return this.reduce( ( prev, next ) => next.map( ( item, i ) => ( prev[ i ] || [] ).concat( next[ i ] ) ), [] );
    }
}

if( !Array.prototype.sortByColumn ){
    Array.prototype.sortByColumn = function( column, descending ){
        /* Given a matrix (an array of arrays), a zero-based column number, and 
         * an optional boolean flag,
         * sort the matrix by the column provided in ascending order.
         * If the descending flag is set, sort the matrix in descending order.
         * NOTE: The original array is mutated in place.
         */

        return this.sort( ( a, b ) => {
            if( a[ column ] === b[ column ] ) return 0;
            if( descending ) return ( a[ column ] > b[ column ] ) ? -1 : 1;
            return ( a[ column ] < b[ column ] ) ? -1 : 1;
        }, 0, column, descending );
    }
}

if( !Array.prototype.max ){
    Array.prototype.max = function(){
        /* Given an array of numbers,
         * return the largest number.
         */
        return this.numSort( 'desc' )[0];
    }
}

if( !Array.prototype.min ){
    Array.prototype.min = function(){
        /* Given an array of numbers,
         * return the largest number.
         */
        return this.numSort()[0];
    }
}
