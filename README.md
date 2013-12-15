JS-Grabber
==========

all your table sorts belong to us...

This is a neat little script that allows you to read data from a JSON file and use it to populate an HTML
table, which is sortable in both ascending and descending order.  

To use, make sure to grab the sort_table.js file and include it into your HTML page.  Next, you will need to
create the beginnings of a table.  Create an opening table tag, and place your headings within <thead> tags.
Here is an example of what you need to get started with your table:

  <table id="YourTable">
	<thead>
		<tr>
			<th>First Header</th>
			<th>Second Header</th>
			<th>Third Header</th>
	</thead>
	<tbody>


Thats it! Let JS-Grabber do the rest, it will import your JSON data and populate the rest of the HTML table.
