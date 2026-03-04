export function StringDemo() {

    const original = "  React String Methods  ";
    const text = original.trim();

    const sections = [
        {
            title: "STRING PROPERTIES",
            items: [
                {
                    method: "length",
                    output: text.length,
                    desc: "Counts total characters in the trimmed string."
                }
            ]
        },

        {
            title: "STRING CHARACTER ACCESS METHODS",
            items: [
                { method: "charAt(1)", output: text.charAt(1), desc: "Gets the character at index 1." },
                { method: "charCodeAt(1)", output: text.charCodeAt(1), desc: "Returns Unicode value of character at index 1." },
                { method: "codePointAt(1)", output: text.codePointAt(1), desc: "Returns Unicode code point at index 1." },
                { method: "at(1)", output: text.at(1), desc: "Modern way to get character at index 1." },
                { method: "at(-1)", output: text.at(-1), desc: "Gets the last character of the string." }
            ]
        },

        {
            title: "STRING SEARCH AND REGEX METHODS",
            items: [
                { method: 'includes("String")', output: String(text.includes("String")), desc: 'Checks if "String" exists in the text.' },
                { method: 'startsWith("React")', output: String(text.startsWith("React")), desc: 'Checks if text starts with React.' },
                { method: 'endsWith("Methods")', output: String(text.endsWith("Methods")), desc: 'Checks if text ends with Methods.' },
                { method: 'indexOf("String")', output: text.indexOf("String"), desc: 'Returns index of first occurrence.' },
                { method: 'lastIndexOf(" ")', output: text.lastIndexOf(" "), desc: 'Finds the last space position.' },
                { method: 'search(/String/)', output: text.search(/String/), desc: 'Searches using a regular expression.' },
                { method: 'match(/String/)', output: JSON.stringify(text.match(/String/)), desc: 'Returns regex match result.' },
                { method: 'matchAll(/t/g)', output: JSON.stringify([...text.matchAll(/t/g)]), desc: 'Finds all matches of letter t.' }
            ]
        },

        {
            title: "STRING EXTRACTION METHODS",
            items: [
                { method: "slice(2, 10)", output: text.slice(2, 10), desc: "Extracts characters from index 2 to 9." },
                { method: "substring(2, 10)", output: text.substring(2, 10), desc: "Extracts characters between two indexes." },
                { method: 'split(" ")', output: JSON.stringify(text.split(" ")), desc: "Splits string into words." }
            ]
        },

        {
            title: "STRING REPLACEMENT METHODS",
            items: [
                { method: 'replace("React", "JS")', output: text.replace("React", "JS"), desc: "Replaces the first matching word." },
                { method: 'replaceAll(" ", "-")', output: text.replaceAll(" ", "-"), desc: "Replaces all spaces with hyphens." }
            ]
        },

        {
            title: "STRING FORMATTING METHODS",
            items: [
                { method: "repeat(2)", output: text.repeat(2), desc: "Repeats the string twice." },
                { method: 'padStart(25, "*")', output: text.padStart(25, "*"), desc: "Pads characters at the start." },
                { method: 'padEnd(25, "*")', output: text.padEnd(25, "*"), desc: "Pads characters at the end." }
            ]
        },

        {
            title: "WHITESPACE HANDLING METHODS",
            items: [
                { method: "trim()", output: original.trim(), desc: "Removes spaces from both ends." },
                { method: "trimStart()", output: original.trimStart(), desc: "Removes spaces from the start." },
                { method: "trimEnd()", output: original.trimEnd(), desc: "Removes spaces from the end." },
                { method: "trimLeft()", output: original.trimLeft(), desc: "Alias of trimStart." },
                { method: "trimRight()", output: original.trimRight(), desc: "Alias of trimEnd." }
            ]
        },

        {
            title: "CASE CONVERSION METHODS",
            items: [
                { method: "toUpperCase()", output: text.toUpperCase(), desc: "Converts text to uppercase." },
                { method: "toLowerCase()", output: text.toLowerCase(), desc: "Converts text to lowercase." },
                { method: "toLocaleUpperCase()", output: text.toLocaleUpperCase(), desc: "Uppercase using locale rules." },
                { method: "toLocaleLowerCase()", output: text.toLocaleLowerCase(), desc: "Lowercase using locale rules." }
            ]
        },

        {
            title: "STRING COMPARISON METHODS",
            items: [
                { method: 'localeCompare("React")', output: text.localeCompare("React"), desc: "Compares two strings lexically." }
            ]
        },

        {
            title: "UNICODE AND ENCODING METHODS",
            items: [
                { method: "normalize()", output: text.normalize(), desc: "Normalizes Unicode characters." }
            ]
        },

        {
            title: "PRIMITIVE CONVERSION METHODS",
            items: [
                { method: "toString()", output: text.toString(), desc: "Returns string representation." },
                { method: "valueOf()", output: text.valueOf(), desc: "Returns primitive string value." },
                { method: 'concat(" Example")', output: text.concat(" Example"), desc: "Joins two strings together." }
            ]
        },

        {
            title: "STATIC STRING METHODS",
            items: [
                { method: "String.fromCharCode(82)", output: String.fromCharCode(82), desc: "Creates string from character code." },
                { method: "String.fromCodePoint(128512)", output: String.fromCodePoint(128512), desc: "Creates string from Unicode code point." },
                { method: "String.raw", output: String.raw`Line1\nLine2`, desc: "Creates raw string without escape characters." }
            ]
        },

        {
            title: "OBSOLETE STRING METHODS (LEGACY ONLY)",
            items: [
                { method: "anchor()", output: text.anchor("link"), desc: "Creates HTML anchor tag." },
                { method: "big()", output: text.big(), desc: "Wraps text in big tag." },
                { method: "blink()", output: text.blink(), desc: "Creates blinking text." },
                { method: "bold()", output: text.bold(), desc: "Wraps text in bold tag." },
                { method: "fixed()", output: text.fixed(), desc: "Displays fixed width text." },
                { method: "fontcolor()", output: text.fontcolor("red"), desc: "Changes font color." },
                { method: "fontsize()", output: text.fontsize("5"), desc: "Changes font size." },
                { method: "italics()", output: text.italics(), desc: "Wraps text in italics tag." },
                { method: "link()", output: text.link("https://example.com"), desc: "Creates clickable link." },
                { method: "small()", output: text.small(), desc: "Wraps text in small tag." },
                { method: "strike()", output: text.strike(), desc: "Strikes through text." },
                { method: "sub()", output: text.sub(), desc: "Subscript text." },
                { method: "sup()", output: text.sup(), desc: "Superscript text." }
            ]
        }
    ];

    return (
            <div className="container py-4 text-center" style={{ maxWidth: "1100px" }}>
            <h2>JavaScript String Methods</h2>

            <p>
                <strong>Example Input:</strong> "{original}"
            </p>

            {sections.map((section, idx) => (
                <div key={idx}>
                    <hr />
                    <h4>{section.title}</h4>

                    {section.items.map((item, i) => (
                        <p key={i}>
                            <strong>{item.method}</strong> :
                            <strong> {String(item.output)}</strong>
                            <br />
                            <span className="text-muted">{item.desc}</span>
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
}
