# chemphys.ca



## To update People

0. Contact @millskyle for contributor access if you don't already have it.
1. Edit `people.js`.
2. Commit your changes.


## People

In `people.js`, a people entry looks like

```python
            {
                name: "First Last",
                photo: "https://chemphys.ca/pages/people_photos/cat14.jpeg",
                email: "email@email.com",
                status: "Summer Student, 2017",
                rank: "Research Officer",
                website: "http://example.com",
                affiliations: ["Affiliation 1", "Affiliation 2"],
                order: 700,
                former: true,
            },
```


- `name` : Name of the person.  Entries are sorted by the letters after the first space.
- `photo`: An image to use. If the image is not square, the right-most pixels will be cropped. The image must be at least 150x150 pixels.  256x256 is recommended.
- `rank`: Rank in the group (used for categories).  Must be one of the rank strings specified at the top of `people.js`
- `email`: OPTIONAL. Email address.
- `status`: OPTIONAL.  Position/role in the group (will be displayed)
- `website`: OPTIONAL. A 🌐 icon will link to this website.
- `affiliations`: OPTIONAL. A list of institutional affiliations. 
- `order`: Order parameter used for overriding alphabetical sorting.
- `former`: OPTIONAL. If true, person will be placed in the Alumni section. Omit or false for current members. If the Alumni section is hidden on the website, this will effectively hide the person.


Notes: Within a rank, people are sorted first by `order`, then by last name.
Photos must be hosted from the chemphys.ca domain.  Externally linked photos will break the website.






