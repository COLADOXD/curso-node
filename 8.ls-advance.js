const fs = require("node:fs/promises");
const path = require("node:path");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(`No se puede leer el directorio ${folder}`);
    process.exit(1);
  }
  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file);
    let stats;
    try {
      stats = await fs.stat(filePath); // stats - Informacion del archivo
    } catch {
      console.error(`No se puede leer el archivo ${folder}`);
      process.exit(1);
    }
    const isDirectory = stats.isDirectory();
    const fileType = isDirectory ? "d" : "-";
    const fileSize = stats.size;
    const fileModife = stats.mtime.toString();

    return `${fileType} ${file.padEnd(20)} ${fileSize
      .toString()
      .padStart(10)} ${fileModife.padStart(10)})`;
  });

  const fileInfo = await Promise.all(filePromises);

  fileInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
