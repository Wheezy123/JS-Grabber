
$(document).ready(function(){
    $.getJSON("json_data.json",
    function (data) {
        var tr;
        // This loop creates and appends table rows. Each line is creating
        // a new row according to whatever is called by data[i].xxx
        // See notes below for more
      for (var i = 0; i < data.length; i++) {
          tr = $('<tr/>');
          // *You will  have to change each </td> row for this to work
          // Change each method after data[i] to reflect your table headers
          // for example, if you had a th called 'names', use data[i].names
          tr.append("<td>" + data[i].carrierName + "</td>");
          tr.append("<td>" + data[i].planName + "</td>");
          tr.append("<td>" + "$" + data[i].copay + "</td>");
          tr.append("<td>" + "$" + data[i].premium + "</td>");
          tr.append("<td>" + "$" + data[i].annualLimit + "</td>");
          $('table').append(tr);
      }
  });

  function sortTable(table, col, reversed) {
    var tb = table.tBodies[0], // ignores thead
        tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
        i;
    reversed = -((+reversed) || -1);
    rows = convertRows(tr);

    if(typeof rows[0].data[col] === "string"){
    	rows.sort(function(rowA, rowB){
    		return rowA.data[col].localeCompare(rowB.data[col]);
    	})
    }else{
			rows.sort(function(rowA, rowB){
				if(rowA.data[col] < rowB.data[col]) return -1;
				if(rowA.data[col] > rowB.data[col]) return 1;
				return 0;
			})
    }

    if(reversed === -1){
    	rows = rows.reverse();
    }

    rows.forEach(function(row){
    	tb.appendChild(row.element);
    })
	}

	function sortByValue(rows, col){
		if(typeof rows[0].data[col] === "string"){
    	rows.sort(function(rowA, rowB){
    		return rowA.data[col].localeCompare(rowB.data[col]);
    	})
    }else{
			rows.sort(function(rowA, rowB){
				if(rowA.data[col] < rowB.data[col]) return -1;
				if(rowA.data[col] > rowB.data[col]) return 1;
				return 0;
			})
    }
	}

	function Row(tr){
		return {
			element: tr,
			data:    convertToValues(tr)
		}
	}

	// convert rows into arrays of strings
	function convertRows(rows){
		return rows.map(Row);
	}

	// convert row into array of strings
	function convertToValues(row){
		// [$(string), $(string), etc., etc.]
		// => [string, string, float, float]
		var array = [];
		for(var i = 0; i < row.cells.length; i++){
			array[i] = convertToValue(row.cells[i].textContent.trim());
		}
		return array;
	}

	function convertToValue(string){
		if(string.substr(0,1) === "$"){
			return parseInt(string.substr(1));
		}
		return string;
	}

	function sortAsString(rows, col){
		return rows.sort(function(a, b){
			return a.localeCompare(b);
		})
	}

	function makeSortable(table) {
	    var th = table.tHead, i;
	    th && (th = th.rows[0]) && (th = th.cells);
	    if (th) i = th.length;
	    else return; // if no `<thead>` then do nothing
	    while (--i >= 0) (function (i) {
	        var dir = 1;
	        th[i].addEventListener('click', function () {sortTable(table, i, (dir = 1 - dir))});
	    }(i));
	}

	
		function makeAllSortable(parent) {
		    parent = parent || document.body;
		    var t = parent.getElementsByTagName('table'), i = t.length;
		    while (--i >= 0) makeSortable(t[i]);
		}
		window.onload = function () {makeAllSortable();
		};
});