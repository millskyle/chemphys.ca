# chemphys.ca

# Publications

In `publications.js`, a publications entry looks like

```js
            {
                authors: ["First Last", "First Last"],
                title: "Title strings",
                date: "YYYY-MM-DD",
                journal: "Phys. Rev. A 96, 042113",
                DOI: "10.1103/PhysRevA.96.042113",
                arxiv: "1710.08053",
                pdf: "https://arxiv.org/pdf/1710.08053.pdf",
                abstract: "Optional, unused as of now",
            },
```

- `authors`: List of authors in the order they appear on the publication.
- `title`: The title of the publication
- `date`: string representation of publication date. Only year is displayed. Month and day are used for sorting.
- `journal`: OPTIONAL. Journal reference
- `DOI`: OPTIONAL. The Digital Object Identifier, without the "https://doi.org/"
- `arxiv`: OPTIONAL. The arXiv.org identifier.
- `pdf`: OPTIONAL. The link to a PDF version of the publication.  If `arxiv` is specified, `pdf` will be populated automatically. If both are specified, the `pdf` specified explicitly will take precedent.- `abstract`: UNUSED. A field for the publication abstract, but is currently unused.



