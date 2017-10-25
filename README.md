# chemphys.ca

# Publications

In `publications.js`, a publications entry looks like

```python
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





# People

In `people.js`, a people entry looks like

```python
            {
                name: "First Last",
                photo: "https://chemphys.ca/pages/people_photos/cat14.jpeg",
                email: "email@email.com",
                status: "Summer Student, 2017",
                website: "http://example.com",
                affiliations: ["Affiliation 1", "Affiliation 2"],
                order: 700,
                former: true,
            },
```


- `name` : Name of the person.  Entries are sorted by the letters after the first space.
- `photo`: An image to use. If the image is not square, the right-most pixels will be cropped. The image must be at least 150x150 pixels.  256x256 is recommended.
- `email`: OPTIONAL. Email address.
- `status`: OPTIONAL.  Position/role in the group
- `website`: OPTIONAL. A 🌐 icon will link to this website.
- `affiliations`: OPTIONAL. A list of institutional affiliations. 
- `order`: Order parameter used for grouping (e.g. RO=100, PhD student=500, etc.) 
- `former`: OPTIONAL. If true, person will be placed in the Alumni section. Omit or false for current members.


Notes: People are sorted first by `order`, then by last name.  Photos must be hosted from the chemphys.ca domain.  Externally linked photos will break the website.






