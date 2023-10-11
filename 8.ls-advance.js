const fs = require("node:fs/promises");
const path = require("node:path");
const pc = require("picocolors");

const folder = process.argv[2] ?? ".";

async function ls(folder) {
  let files;
  try {
    files = await fs.readdir(folder);
  } catch {
    console.error(pc.red(`No se puede leer el directorio ${folder}`));
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
    const fileModife = stats.mtime.toLocaleString();

    return `${fileType} ${pc.blue(file.padEnd(20))} ${pc.green(
      fileSize.toString().padStart(10)
    )} ${pc.yellow(fileModife)}`;
  });

  const fileInfo = await Promise.all(filePromises);

  fileInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);
