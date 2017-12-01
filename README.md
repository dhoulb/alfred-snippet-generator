# Alfred Snippet Generator

Alfred Snippet Generator lets you transform a spreadsheet (e.g. Google Sheets or Excel) into an **.alfredsnippets** file, which you can then be imported into [Alfred 3](https://www.alfredapp.com/). 

Entirely cross-platformly browser-based (new browsers). Provides a textarea that triggers a conversion/download when you paste TSV content (just select all your cells and copy from your sheet): **[Try Alfred Snippet Generator!](https://rawgit.com/dhoulb/alfred-snippet-generator/master/index.html)**

_[Here is an example spreadsheet](https://docs.google.com/spreadsheets/d/1WsOrbmMU9pmJUmADv-GgPuTMXD2iTioeT-ATIKFg38k/) if you want something to try it out with._

## Spreadsheet format

We use tab-separated format because it's easy to copy it directly from Google Sheets or Excel! Make a sheet with the following columns and add as many rows as you like! Great for _long_ lists of snippets like emoji or HTML entities. 

1.️ **Keyword(s):** e.g. `fox` or `fox,foxface,fox face` (required)
2. **Snippet:** e.g. `🦊` (required)
3. **Name:** e.g. `Fox Face` (optional)

Recommend not to hard-code prefixes or suffixes in keywords, as Alfred now includes the ability to customise these per  snippet group. Locking them in means other users of your snippets can't edit them :(

Include multiple keywords for the same snippet by separating the words with commas. Don't add spaces around the commas or the spaces will be included in the keywords!

[This demo spreadsheet for HTML character entities](https://docs.google.com/spreadsheets/d/1WsOrbmMU9pmJUmADv-GgPuTMXD2iTioeT-ATIKFg38k/) shows an example of what you  need. To try it out, just copy all cells and [paste it into Alfred Snippet Generator](https://rawgit.com/dhoulb/alfred-snippet-generator/master/index.html).