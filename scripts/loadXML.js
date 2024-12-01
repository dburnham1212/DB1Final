fetch("./scripts/example.xml")
.then((response) => response.text())
.then((xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.
        parseFromString(xmlString, "text/xml");

    console.log(xmlDoc);
});
