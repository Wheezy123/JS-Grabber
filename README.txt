JS-Grabber
==========

all your table sorts belong to us...

This is a neat little script that allows you to read data from a JSON file and use it to populate an HTML
table, which is sortable in both ascending and descending order.  

To use, make sure to grab the sort_table.js file and include it into your HTML page.  Next, you will need to
create the beginnings of a table.  Create an opening table tag, and place your headings within <thead> tags.
You'll also need to open a <tbody> tag.  Here is an example of what you need to get started with your table:

<table id="YourTable">
	<thead>
	<tr>
		<th>First Header</th>
		<th>Second Header</th>
		<th>Third Header</th>
	</thead>
	<tbody>
	
You'll also have to make sure to change the values of the tr.append method in the first loop of the sort_table.js,
and make sure each <th> has a corresponding tr.append (This loop is commented in the code with further directions).


Thats it! Let JS-Grabber do the rest, it will import your JSON data and populate the rest of the HTML table.
