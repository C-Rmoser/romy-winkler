const path = require("path")
const fs = require("fs")


const getServicesFusspflege = (relativePath, outputFilename) => {
  let files = []
  let jsonList = [];
  const absolutePath = path.join(__dirname, relativePath);

  // Read filenames from directory
  try {
    files = fs.readdirSync(absolutePath, "utf8")
  } catch (err) {
    console.error(err)
    return;
  }

  // Get json data from each file
  files.forEach(file => {
    try {
      const data = fs.readFileSync(absolutePath + file, "utf-8");
      jsonList.push(JSON.parse(data));
    } catch (err) {
      console.error(err);
    }
  });

  // Write new file
  try {
    const outputPath = path.join(__dirname, `../src/data/${outputFilename}.json`);
    fs.writeFileSync(outputPath, JSON.stringify(jsonList));
  } catch (err) {
    console.error(err);
  }
}

const copySectionsToSrc = () => {
  let files = []

  // Read filenames from directory
  const absolutePath = path.join(__dirname, "../cms/sections/");
  try {
    files = fs.readdirSync(absolutePath, "utf8")
  } catch (err) {
    console.error(err)
    return;
  }

  files.forEach(file => {
    // File destination.txt will be created or overwritten by default.
    const outputPath = path.join(__dirname, `../src/data/${file}`);

    try {
        fs.copyFileSync(`${absolutePath}${file}`, outputPath);
      } catch (err) {
        console.error(err);
      }
    });

  console.log('Section files copied successfully!');
}

getServicesFusspflege("../cms/services/fusspflege/", "fusspflegeServices");
getServicesFusspflege("../cms/services/piercing/", "piercingServices");
getServicesFusspflege("../cms/services/augen/", "augenServices");
getServicesFusspflege("../cms/services/gesicht/", "gesichtServices");
getServicesFusspflege("../cms/services/manikuere/", "manikureServices");
getServicesFusspflege("../cms/services/koerper/", "koerperServices");
getServicesFusspflege("../cms/bio/", "bio");
copySectionsToSrc();

