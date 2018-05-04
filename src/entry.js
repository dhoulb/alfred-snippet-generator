// Requirements.
const FileSaver = require('file-saver');
const JSZip = require('jszip');
const uuidv4 = require('uuid/v4');
const { Parser } = require('tsv');

// Events.
const el = document.getElementById('tsv');
el.addEventListener('paste', () => { setTimeout(createSnippets, 500); }); // Slight delay.

// Create snippets now.
function createSnippets()
{
	// Get lines from TSV content.
	const parser = new Parser("\t", { header: false });
	const lines = parser.parse(el.value);
	if (!lines || !lines.length) return;

	// Create archive.
	const zip = new JSZip();

	// Add a file to archive per line.
	for (const i in lines)
	{
		// Vars.
		const line = lines[i];

		// Checks.
		if (line.length < 2) return alert('Row ' + (i+1) + ': Must have at least two columns (keyword and snippet)');
		if (typeof line[0] === "number") line[0] = line[0].toString();
		if (typeof line[0] !== "string" || line[0].length < 1) return alert('Row ' + (i+1) + ': Column 1 (keyword) cannot be empty');
		if (typeof line[1] === "number") line[1] = line[1].toString();
		if (typeof line[1] !== "string" || line[1].length < 1) return alert('Row ' + (i+1) + ': Column 2 (snippet) cannot be empty');

		// Vars.
		const keywords = line[0].split(/,/);
		const snippet = line[1];
		const name = line.length > 2 && line[2].length ? line[2] : '';

		// Loop through keywords.
		for (let j = 0; j < keywords.length; j++) 
		{
			// Vars.
			const keyword = keywords[j];
			const uid = uuidv4();

			// Checks.
			if (keyword.length < 1) return alert('Row ' + (i+1) + ': Keyword ' + (j+1) + ' cannot be empty');

			// Create the snippet.
			const entry = {
				alfredsnippet: {
					uid: uid,
					keyword: keyword,
					snippet: snippet,
					name: name.length ? name : keyword,
				}
			};

			// Add a (uniquely named) file to the zip.
			zip.file(uid + '.json', JSON.stringify(entry));
		}
	}

	// Generate.
	zip.generateAsync({ type: 'blob' }).then(function(content) {

		// Download.
		FileSaver.saveAs(content, 'Snippets.alfredsnippets');

	});
}