async function get_sheets_info(link) {
	
	let sheets_dict = {};
	
	let patt = new RegExp(/[-\w]{25,}/);
	worksheet_id = patt.exec(link);
		
	let find_sheets = await fetch('https://spreadsheets.google.com/feeds/worksheets/' + worksheet_id + '/public/full?alt=json');

    	let find_sheets_response = await find_sheets.json();			
				
	for (let index in find_sheets_response.feed.entry) {
		
		let sheet_name  = find_sheets_response.feed.entry[index].title.$t;
		let sheet_link  = hagdarot_sheet_name  = find_sheets_response.feed.entry[index].link[0].href+'?alt=json';
		
		sheets_dict[sheet_name]= sheet_link;

	}
	
	return sheets_dict;
}

			
(async () => { 
	let result = await get_sheets_info('https://docs.google.com/spreadsheets/d/1FuoOKw6F3lW3NO62k_9vlzEv7COvz9CB-XmeF1BsKeE/edit#gid=2017037451');
	console.log(result)
})();
